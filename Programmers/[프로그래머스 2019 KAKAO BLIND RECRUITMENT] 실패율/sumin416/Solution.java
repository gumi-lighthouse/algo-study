import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
class Solution {
    class Fail{
		int n;
		int rate;
		public Fail(int n, int rate) {
			this.n = n;
			this.rate = rate;
		}
		@Override
		public String toString() {
			return "Fail [n=" + n + ", rate=" + rate + "]";
		}
		public int getRate() {
			return rate;
		}
	}
    public int[] solution(int N, int[] stages) {
        int[] answer = new int[N];
		int[] countArr = new int[N+2];
		List<Fail> failRate = new ArrayList<>();
		int totalCnt = stages.length;
		
		for(int stage : stages) {
			countArr[stage]++;
		}
		
		for (int i = 1; i <= N; i++) {
			failRate.add(new Fail(i,(countArr[i]*totalCnt==0)?0:countArr[i]*10000/totalCnt));
			totalCnt-=countArr[i];
			if(totalCnt<0)	totalCnt = 0;
		}
		
        
		Comparator<Fail> comparator = new Comparator<Fail>() {
		    @Override
		    public int compare(Fail a, Fail b) {
		        return b.getRate() - a.getRate();
		    }
		};
		
		//failRate : rate 기준으로 정렬
		Collections.sort(failRate, comparator);
		
		
		
		for (int i = 0; i < answer.length; i++) {
			answer[i] = failRate.get(i).n;
		}
		return answer;
    }
}
