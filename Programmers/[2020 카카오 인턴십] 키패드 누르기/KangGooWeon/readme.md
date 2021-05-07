

##  [2020 카카오 인턴쉽] 키패드 누르기
 

### 코드

```javascript
function solution(numbers, hand) {
    var answer = '';

    const leftPos = {x : 3, y : 0};
    const rightPos = {x : 3, y : 2};
    
    for(let num of numbers){
        if(num%3 === 1) {
            answer += 'L';
            leftPos.y = 0;   
            leftPos.x = Math.floor(num / 3);
        } 
        
        else if(num%3 === 0 && num !=0){
            answer += 'R';
            rightPos.y = 2;
            rightPos.x = (num/3)-1;
        }
        else{
            let numPos = {x : 0, y : 1}
            if(num == 5) numPos.x = 1;
            if(num == 8) numPos.x = 2;
            if(num == 0) numPos.x = 3;
            
            let le = Math.abs(leftPos.x - numPos.x) + Math.abs(leftPos.y - numPos.y);
            let right = Math.abs(rightPos.x - numPos.x) + Math.abs(rightPos.y - numPos.y);
            
            // 무슨 손가락을 누를지
            if(le < right || (le == right && hand ==='left')) {
                leftPos.x = numPos.x;
                leftPos.y = numPos.y;
                answer += 'L';
            }
            else if(right < le || (le == right && hand ==='right')) {
                rightPos.x = numPos.x;
                rightPos.y = numPos.y;
                answer += 'R';
            }
        }
    }
    
    return answer;
}
```
## 정리

- 왼손과 오른손 엄지의 시작 좌표를 저장한다.
- 조건문으로 왼손과 오른손을 처리한다.
- 2,5,8,0 인 경우 해당 숫자에서 거리를 구하여 가장 가까운 손가락이 누르도록 하는데 여기서 거리가 같을 경우 왼손잡이인지 오른손잡이인지 체크한다.
- 손가락이 눌러질때마다 해당 손가락의 좌표를 최신화해준다.
