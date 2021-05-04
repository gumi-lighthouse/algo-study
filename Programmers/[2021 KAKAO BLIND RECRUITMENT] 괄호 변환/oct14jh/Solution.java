import java.util.*;

class Solution {
    public String solution(String p) {
        String answer = "";
        answer = process(p);
        return answer;
    }
    
    // 처리 메소드
    private String process(String str) {
        // 빈문자열이면 빈문자열 그대로 반환
        if(str.equals(""))
            return "";
        
        // 분리 저장할 u,v 변수
        String u = "";
        String v = "";
        
        // 균형잡힌 괄호 문자열 체킹은 따로 안함(전제조건에서 '(',')' 개수 일치하다했기 때문에)
        //
        
        // 처리 해보려했는데, 처리하려는 문자열 자체가 올바른 괄호문자열이면 그대로 반환
        if(goodStr(str))
            return str;
        else {  // 올바른 문자열이 아니기에, 처리를 해주어야 한다면
            int cutIdx = separateUV(str); // separateUV메소드를 통해 u,v 구분 인덱스 위치 파악
            u = str.substring(0, cutIdx); // str문자열의 시작부터 컷팅되는 곳까지의 문자열로 u 분리
            v = str.substring(cutIdx);  // 컷팅되는 이후부터 끝까지 내용을 v에 분리 저장
            
            // 분리된 u가 올바른 문자열이면, 남은문자열 v만 마저 처리하기
            if(goodStr(u))
              return u+process(v);
            else { // 분리된 u가 올바르지 않다면 이제, 변환작업 시작
                // 생성된 빈 문자열에서 여러 작업을 거쳐 생성 문자열은 반환하기에 이렇게 한줄로 정리
                return "(" + process(v) + ")" + reverseStr(u);
            }
        }

    }
    
    // 올바른 문자열인지 확인 메소드
    // 스택을 활용해서, ()의 짝이 되는지 확인한다.
    // (를 만나면 stack에 넣어주고, )를 만나면 stack이 비지않는한 pop을 해주라는것이다
    // 만약 )를 만났을 때, stack이 비었다면 그건 올바르지않은 문자열이다.
    private boolean goodStr(String str) {
        Stack<String> stack = new Stack<>();
        
        for(int i = 0; i < str.length(); i++) {
            if(str.charAt(i) == '(')
                stack.push("(");
            else {
                if(stack.isEmpty()) // ) 만나서 스택확인하려는데 비었다면, 올바르지않음 결과도출
                    return false;
                else 
                    stack.pop();    // ) 만났기에 stack에 들어있는 (을 pop해준다.
            }
        }
        return true;    // 포문이 정상 작동 다 되었다면 올바르기에, true로 처리
    }
    
    // 어디서 u,v 끊어서 분리해야할지 처리하는 메소드
    private int separateUV(String str) {
        int count = 0;
        for(int i = 0; i < str.length(); i++) {
            if(str.charAt(i) == '(')
                count++;
            else
                count--;
            
            // (,) 나온 개수 하나씩 해주는데 (,) 각각의 개수가 동일해서 count가 0으로처리되면
            if(count == 0)
                return i + 1;   // 해당 인덱스까지가 더이상 분리될수없는 u문자열 커트 인덱스다.
        }
        return str.length();  // 여기까지 왔따면, 결국 끝까지 만나서 처리된것이기에 마지막인덱스반환
    }
    
    // 괄호뒤집기 메소드
    private String reverseStr(String str) {
        StringBuilder tempResult = new StringBuilder("");
        
        for(int i = 1; i < str.length() - 1; i++) {
            if(str.charAt(i) == '(')
                tempResult.append(")");
            else
                tempResult.append("(");
        }
        return tempResult.toString();
    }
}