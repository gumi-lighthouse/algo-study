class Solution {
    public String solution(int[] numbers, String hand) {
        StringBuilder answer = new StringBuilder();
		
		//0은 11처럼 생각
		int left = 10, right= 12;
		
		for(int num : numbers) {
			if(num==1 || num==4 || num==7) {
				left=num;
				answer.append("L");
				continue;
			}
			if(num==3 || num==6 || num==9) {
				right=num;
				answer.append("R");
				continue;
			}
			
            if(num==0)	num=11;
            
			//왼손과의 거리 구하기
			int leftDistance = 0;
			leftDistance += Math.abs((num-1)/3-(left-1)/3);
			leftDistance += Math.abs((num-1)%3-(left-1)%3);
			
			//오른손과의 거리 구하기
			int rightDistance = 0;
			rightDistance += Math.abs((num-1)/3-(right-1)/3);
			rightDistance += Math.abs((num-1)%3-(right-1)%3);
			
			String ans = null;
			if(leftDistance==rightDistance)	ans = (hand.equals("right")?"R":"L");
			else {
				ans = (leftDistance>rightDistance)?"R":"L";
			}
			
			answer.append(ans);
			if(ans.equals("R"))	right = num;
			else	left=num;
		}
		
		return answer.toString();
    }
}
