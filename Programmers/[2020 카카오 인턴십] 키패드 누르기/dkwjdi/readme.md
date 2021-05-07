

##  [2020 카카오 인턴쉽] 키패드 누르기 -JavaScript


### 코드

```javascript
function solution(numbers, hand) {
  var answer = '';
  
  hand=hand.replace("right","R").replace("left","L");
  
  let left='*';
  let right='#';
  let point={};
  
  keyPadIndex(point); // 각 키의 위치 저장
  
  for (let i = 0; i < numbers.length; i++){
      if(numbers[i]!=0 &&numbers[i]%3==0) {
          answer+="R";
          right=numbers[i];
      }
      else if(numbers[i]!=0 &&(numbers[i]-1)%3==0) {
          answer+="L";
          left=numbers[i];
      }
      else{
          let leftDir=dir(numbers[i], left);
          let rightDir=dir(numbers[i], right)
          
          if(leftDir==rightDir){
              answer+=hand;
              if(hand=='R') right=numbers[i];
              else left=numbers[i];
          }
          else if(leftDir>rightDir){
              answer+='R';
              right=numbers[i];
          }
          else{
              answer+="L";
              left=numbers[i];
          }
      }
  }
  
  function dir( a,  b){
      return Math.abs(point[a][0]-point[b][0])+Math.abs(point[a][1]-point[b][1]);
  }
  
  function keyPadIndex(point){
      let num=1;
      for(let i=0; i<3; i++){
          for(let j=0; j<3; j++){
              point[num++]=[i,j];
          }
      }
      point[0] = [3, 1];
      point['*'] = [3, 0];
      point['#'] = [3, 2];
  }
  
  return answer;
}


```
## 정리

- 왼손과 오른손 엄지의 시작 좌표를 저장한다.
- 조건문으로 왼손과 오른손을 처리한다.
- 2,5,8,0 인 경우 해당 숫자에서 거리를 구하여 가장 가까운 손가락이 누르도록 하는데 여기서 거리가 같을 경우 왼손잡이인지 오른손잡이인지 체크한다.
- 손가락이 눌러질때마다 해당 손가락의 좌표를 최신화해준다.
