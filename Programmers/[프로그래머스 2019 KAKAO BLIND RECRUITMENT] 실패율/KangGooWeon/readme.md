

##  [2019 KAKAO BLIND RECRUITMENT] 실패율

 

### 코드

```javascript
function solution(N, stages) {
  var answer = [];

  const clearStage = [];
  clearStage[N+1] = 0;
  clearStage.fill(0, 1);
  
  // 클리어 한 사람 구하기
  for(let i=0; i<stages.length; i++){
    clearStage[stages[i]]++;
  }
  
  // 실패율 구하기
  let goalStage = clearStage[N+1];
  const result = [];
  result[N] = {};
  for(let i= N; i>0; i--){
      goalStage += clearStage[i];
      result[i] = { index: i , value: clearStage[i] / goalStage };
  }
  
  // 조건에 맞게 정렬
  result.sort((a,b) => {
    if(a.value === b.value) return a.index - b.index // 오름차순
    return b.value - a.value // 내림차순 
  })

  for(let i=0; i<result.length-1; i++){
    answer.push(result[i].index);
  }
    
  return answer;
}


```

정리

- 먼저 클리어 한 사람을 구한다.
- 꼭 처음부터 차례대로 할 구할 필요 없이 스테이지를 도달 다 한 사람부터 하면 편하다. 위에서 구한 클리어 한 사람과 스테이지 도달한 사람을 나누면서 차례대로 실패율을 구하면 된다.
- 조건에 맞게 내림차순으로 하되 index가 작은 순으로 정렬한다.