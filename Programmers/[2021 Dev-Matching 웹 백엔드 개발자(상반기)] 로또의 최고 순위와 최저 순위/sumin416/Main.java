import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int[] answer = new Main().solution(new int[] {0, 0, 0, 0, 0, 0}, new int[] {38, 19, 20, 40, 15, 25});
		System.out.println(Arrays.toString(answer));
	}
	
	public int[] solution(int[] lottos, int[] win_nums) {
		int max=0,min=0;

		boolean[] checked = new boolean[46];
		
		for(int win : win_nums) {
			checked[win] = true;
		}
		
		for(int lotto:lottos) {
			if(checked[lotto])	++min;	//당첨된 개수
			else if(lotto == 0)	++max;	//지워진 개수
		}
        
		
		max +=min;	
		
        return new int[] {findRank(max),findRank(min)};
    }
	
	private int findRank(int cnt) {
		int tmp = 7-cnt;
		
		return tmp = tmp >6 ? 6 :tmp;
	}
}
