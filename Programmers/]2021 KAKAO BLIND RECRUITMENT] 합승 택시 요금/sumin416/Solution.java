import java.util.ArrayList;
import java.util.Arrays;

public class Main {
	final int INF = Integer.MAX_VALUE;
	public static void main(String[] args) {
		int answer = new Main().solution(6, 4, 6, 2, new int[][] { { 4, 1, 10 }, { 3, 5, 24 }, { 5, 6, 2 },
				{ 3, 1, 41 }, { 5, 1, 24 }, { 4, 6, 50 }, { 2, 4, 66 }, { 2, 3, 22 }, { 1, 6, 25 } });

		System.out.println(answer);
	}

	public int solution(int n, int s, int a, int b, int[][] fares) {
		int answer = 0;

		ArrayList<ArrayList<int[]>> graph = new ArrayList<>();

		for (int i = 0; i <= n; i++) {
			graph.add(new ArrayList<int[]>());
		}

		for (int[] fare : fares) {
			graph.get(fare[0]).add(new int[] { fare[1], fare[2] });
			graph.get(fare[1]).add(new int[] { fare[0], fare[2] });
		}

		int[][] distance = floid(n,s,graph);
		answer = distance[s][a]+distance[s][b];		
		int tmp;
		for (int i = 1; i <= n; i++) {
			tmp = distance[s][i]+distance[i][a]+distance[i][b];
			if(answer>tmp)	answer = tmp;
		}
		
		return answer;
	}

	private int[][] floid(int V, int E, ArrayList<ArrayList<int[]>> graph) {
		int[][] distance = new int[V + 1][V + 1];
		for (int i = 1; i <= V; i++) {
			for (int j = 1; j <= V; j++) {
				distance[i][j] = INF;
			}
		}
		for (int i = 1; i <= V; i++) {
			for (int[] node : graph.get(i)) {
				distance[i][node[0]] = node[1];
			}
		}
		for (int i = 1; i <= V; i++) {
			for (int j = 1; j <= V; j++) {
				for (int k = 1; k <= V; k++) {
					if (distance[j][i] != INF && distance[i][k] != INF)
						distance[j][k] = Integer.min(distance[j][k], distance[j][i] + distance[i][k]);
				}
			}
		}
		
		for (int i = 0; i < distance.length; i++) {
			distance[i][i] = 0;
		}
		return distance;
	}

}
