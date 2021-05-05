import java.io.IOException;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Main {
	class Stage {
		int stage;
		double failRate;

		public Stage(int stage, double failRate) {
			super();
			this.stage = stage;
			this.failRate = failRate;
		}
	}

	public static void main(String[] args) throws IOException {
		int[] answer = new Main().solution(5, new int[] { 2, 1, 2, 6, 2, 4, 3, 3 });
		System.out.println(Arrays.toString(answer));
	}

	private int[] solution(int N, int[] stages) {
		int[] count = new int[N + 2];
		PriorityQueue<Stage> answer = new PriorityQueue<Stage>(new Comparator<Stage>() {
			@Override
			public int compare(Stage o1, Stage o2) {
				if (o1.failRate == o2.failRate) {
					return o1.stage - o2.stage;
				} else if (o1.failRate > o2.failRate)
					return -1;
				return 1;
			}
		});
		for (int stage : stages) {
			++count[stage];
		}
		int stageN = stages.length;
		for (int i = 1; i <= N; i++) {
			if (count[i] == 0 || stageN == 0) {
				answer.add(new Stage(i, 0));
			} else {
				answer.add(new Stage(i, (double) count[i] / (double) stageN));
				stageN -= count[i];
			}
		}
		

		int[] result = new int[N];
		for (int i = 0; i < N; i++) {
			result[i] = answer.poll().stage;
		}

		return result;
	}
}
