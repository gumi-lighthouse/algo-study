import java.util.Stack;
class Solution {
    public String solution(String p) {
		
		return (checkIsRight(p))?p:change(p);
	}

	public String change(String p) {
		String ans = "";
		
		if(p.length() == 0)	return ans;
		
		//u, v 분리
		String u="",v="";
		
		char[] ps = p.toCharArray();
		int cntL=0,cntR=0;
		for (int i = 0; i < ps.length; i++) {
			if(ps[i] == '(')	++cntL;
			else	++cntR;
			
			if(cntL == cntR) {
				u = p.substring(0, i+1);
				v = p.substring(i+1);
				break;
			}
		}
		
		if(checkIsRight(u)) {
			ans+=u;
			ans+=change(v);
		}
		else {
			StringBuilder sb = new StringBuilder();
			sb.append("(");
			sb.append(change(v));
			sb.append(")");
			
			for (char c : u.substring(1, u.length()-1).toCharArray()) {
				if(c=='(')	sb.append(")");
				else	sb.append("(");
			}
			return sb.toString();
		}
		
		return ans;
	}

	public boolean checkIsRight(String u) {
		Stack<Character> stack = new Stack<>();
		for(char c : u.toCharArray()) {
			if(c=='(')	stack.push(c);
			else {
				if(stack.isEmpty())	return false;
				stack.pop();
			}
		}
		return true;
	}
}
