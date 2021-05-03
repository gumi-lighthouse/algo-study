class Solution {
    public int solution(String s) {
		int answer = s.length();
		String prev = "";
		int cnt = 0;
		
		for (int i = 1; i <= s.length()/2; i++) {
			prev = "";
			int cur=0;
			
			for (int j = 0; j <s.length() ; j+=i) {
				
				String subStr = s.substring(j, (j+i>=s.length())?s.length():j+i);
				
				if(subStr.equals(prev))	++cnt;
				else {
					//System.out.println("달라서 출력 - "+prev+"   "+cnt);
					cur+=prev.length();
					if(cnt>1) {	
						while(cnt>0) {
							cnt/=10;
							++cur;
						}
					}
					//System.out.println("현재까지 cur:"+cur);
					prev = subStr;
					cnt=1;
				}
			}
			
			//System.out.println("마지막 출력 - "+prev+"   "+cnt);
			cur+=prev.length();
			if(cnt>1) {	
				while(cnt>0) {
					cnt/=10;
					++cur;
				}
			}
			
			//System.out.println(i+"개씩 자를때 "+cur);
			answer = Math.min(answer, cur);
		}
		
		return answer;
	}
}
