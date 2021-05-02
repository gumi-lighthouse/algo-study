class Solution {
    public int[] solution(String[] infos, String[] queries) {
        int[] answer = new int[infos.length];
        String[] OneInfo;
        int idx=0;
        for(String query : queries) {
        	int cnt=0;
        	String[] q = parseQuery(query);
        	infoLoop:
        	for(String info : infos) {
        		OneInfo = info.split(" ");
        		for (int i = 0; i < OneInfo.length-1; i++) {
        			if(q[i].equals("-"))	continue;
					if(!q[i].equals(OneInfo[i]))	continue infoLoop;
				}
        		
        		if(Integer.parseInt(q[4])<=Integer.parseInt(OneInfo[4]))	++cnt;
        	}
        	answer[idx] = cnt;
        	++idx;
        }
        
        return answer;
    }

	private String[] parseQuery(String query) {
		int numIdx=0;
		for (int i = query.length()-1 ; i >= 0; i--) {
			if(query.charAt(i)>='0' && query.charAt(i)<='9') {
				numIdx = i;
			}
			else	break;
		}
		query = query.substring(0, numIdx)+"and"+query.substring(numIdx);
		query = query.replaceAll(" ","");
		String[] answer =  query.split("and");
		
		//System.out.println(Arrays.toString(answer));
		return answer;
	}
}
