##  [2021 Dev-Matching: 웹 백엔드 개발자] 로또의 최고 순위와 최저 순위 -sumin416

 

### 코드

```java
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

```



### 풀이방법


1. 당첨 번호를 true로 췌췌췌인지
2. 당첨된 개수 min
3. 지워진 개수 max
4. 등수가 제일 낮을때는 min개만큼 당첨됐을 때
5. 등수가 제일 높을때는 max개만큼 당첨됐을 때
6. 당첨 개수가 2개 미만일때는 낙첨, 즉 rank가 6이됨
7. 그때를 제외하고는 7-개수가 등수
