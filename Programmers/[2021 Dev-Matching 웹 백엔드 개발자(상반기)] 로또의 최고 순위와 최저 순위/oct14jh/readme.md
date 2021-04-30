##  [2021 Dev-Matching: 웹 백엔드 개발자] 로또의 최고 순위와 최저 순위 -oct14jh

 

### 코드

```java
import java.util.*;

class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = new int[2];
        int zeroCount = 0;
        int rightCount = 0;
        
        for(int i = 0; i < 6; i++) {
            if(lottos[i] == 0)
                zeroCount++;
            for(int j = 0; j < 6; j++) {
                if(lottos[i] == win_nums[j])
                    rightCount++;
            }
        }
        answer[0] = rank(rightCount + zeroCount);
        answer[1] = rank(rightCount);
        
        return answer; // 최고등수, 최저등수
    }
    
    private int rank(int rightNumCount) {
        int result = 7 - rightNumCount;
        if(result >= 6)
            return 6;
        else 
            return result; 
    }

    
}
```



### 풀이방법


1. 초기맞춘개수, 낙서된 개수 다체크해두기
2. 최저등수는 초기맞춘개수가 다인것
3. 최고등수는 초기맞춘개수에 낙서된 개수가 다 맞는 숫자인 경우
4. rank라는 메소드를 활용해 등수 값
