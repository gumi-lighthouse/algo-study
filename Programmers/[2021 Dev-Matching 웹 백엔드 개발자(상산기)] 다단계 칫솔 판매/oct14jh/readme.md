

##  [2021 Dev-Matching: 웹 백엔드 개발자] 다단계 칫솔 판매

 

### 코드

```java
class Solution {
    public int[] solution(String[] enroll, String[] referral, String[] seller, int[] amount) {
        int[] answer = new int[enroll.length];
        
        // 순서돌면서 해당 판매자와 판매금액을 고려해서 처리
        for(int order = 0; order < seller.length; order++) {
            String person = seller[order];
            int originProfit = amount[order] * 100;
            
            process(person, originProfit, enroll, referral, answer);
        }
        return answer;
    }
    
    // 처리 과정
    private void process(String person, int profit, String[] enroll, String[] referral, int[] answer) {
        int myIndex = findMyIndex(person, enroll);
        
        if(referral[myIndex].equals("-")) {  // 부모가 더이상 없을 때
            if(profit < 10) {
                answer[myIndex] += profit;
                
            } else {
                answer[myIndex] += profit - (int)(profit*0.1);
            }
            return;
        } else {    // 부모가 존재할 때
            if(profit < 10) {   
                answer[myIndex] += profit;
            } else {
                int tempParentProfit = (int)(profit * 0.1);
                if(tempParentProfit < 1) {
                    answer[myIndex] += profit;
                    return;
                } else {
                    answer[myIndex] += profit - (int)(profit*0.1);
                    process(referral[myIndex], tempParentProfit, enroll, referral, answer);
                }
            }
        }
    }

    // 본인의 인덱스 찾기
    private int findMyIndex(String name, String[] enroll) {
        for(int i = 0; i < enroll.length; i++) {
            if(name.equals(enroll[i])){
                return i;
            }
        }
        return 0;
    }
}
```



### 풀이방법

자신의 인덱스를 파악하고 인덱스 기준으로 서칭하는것이다.

자신에게 부모가 존재하는가?

존재시에는 상사에게 1할, 자신에게 9할

없으면, 자신이 10할 다먹기

참고로, 상사에게 줄 1할이 1원 미만이면 그냥 10할 다 자기가 가져가는 것이다.



난 알고리즘은 잘 했따고 생각하는데 에러뜬 문제가뭐냐면,,,

0.9를 곱햇을 때 소수점으로 10.8이 나와 11이 안더해지는 경우였다... 그래서..

그냥 profit - 1할 하니 답이 잘 도출되었다.



