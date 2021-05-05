

### [프로그래머스 2019 KAKAO BLIND RECRUITMENT] 실패율 -JavaScript

 

### 코드

```javascript
function solution(N, stages) {
    var answer = [];
    let failPercent = {};
    let stageOfPeople=Array(N+2).fill(0);
    
    for(let i=0; i<stages.length; i++){
        let index=stages[i]
        if(stageOfPeople[index]==0) stageOfPeople[index]=1;
        else stageOfPeople[index]++;
    }
    
    failPercent[(N+1)]=stageOfPeople[(N+1)];
    for(let i=N; i>=1; i--){
        failPercent[i]=failPercent[i+1]+stageOfPeople[i];
    }
    
    for(let i=1; i<=N; i++){
        failPercent[i]=stageOfPeople[i]/failPercent[i]
    }
    
    let sortobj = [];
    for (let number in failPercent) {
      sortobj.push([number, failPercent[number]]);
    }
    sortobj.sort((o1, o2) => (o2[1] - o1[1]));
    
    for(let i=0; i<sortobj.length; i++){
        if(sortobj[i][0]==N+1) continue;
        else answer.push(parseInt(sortobj[i][0]));
    }
    
    return answer;
}
```



### 풀이방법

소요시간 : 25분

 

 

**우선 각 스테이지에 도달했으나 아직 클리어하지 못한 수를 구하기 위해 배열 stageOfPeople을 만듭니다.**

- stages를 돌면서 각 스테이지에 사람이 몇명이 있는지 체크해줍니다.
- stages[2, 1, 2, 6, 2, 4, 3, 3] => stageOfPeople[1, 3, 2, 1, 0, 1] (1번배열부터 시작)
- 이런식으로 각 스테이지에 몇명의 사람이 멈춰있는지 확인을 해줍니다.

 

**스테이지에 도달한 플레이어 수를 구해주기 위해 하나의 배열을 만들어 줍니다.**

-  stageOfPeople을 뒤에서부터 앞으로 오면서 누적합을 더해줍니다.
- 여기서 **누적합의 의미는 현재 스테이지에 도달한 인원**입니다.
-  **Arr[8, 7, 4, 2, 1, 1 ] => 각 스테이지에 도달했거나, 이미 지나간 인원**

 

실패율은 구하는 방법은 **스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수** 입니다.

 

 

이 두개를 통해 실패율을 구하고 정렬을 해주면 문제는 풀립니다.

 

끝~