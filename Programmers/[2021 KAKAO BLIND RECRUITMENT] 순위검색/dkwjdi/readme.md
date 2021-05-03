

<<<<<<< HEAD
##  [2021 KAKAO BLIND RECRUITMENT]  합승 택시 요금
=======
##  [2021 KAKAO BLIND RECRUITMENT]  순위검색
>>>>>>> 9300556009cf29584e0d50f233d389cf7d87e2d8

 

### 코드

```javascript
<<<<<<< HEAD
function solution(n, s, a, b, fares) {
    var answer = Number.MAX_VALUE;
    
    let map = Array.from(Array(n+1), ()=>new Array(n+1));
    
    for(let i=0; i<=n; i++){
        for(let j=0; j<=n; j++){
            map[i][j]=0;
        }
    }
     
    for(let i=0; i<fares.length; i++){
        map[fares[i][0]][fares[i][1]]=fares[i][2];
        map[fares[i][1]][fares[i][0]]=fares[i][2];
    }
    
   for(let k=1; k<=n; k++){
       for(let i=1; i<=n; i++){
           for(let j=1; j<=n; j++){
               if(i==j || map[i][k]==0 || map[k][j]==0) continue;
               if(map[i][j]==0) map[i][j]=map[i][k]+map[k][j];
               else map[i][j]=Math.min(map[i][j], map[i][k]+map[k][j]);  
            }    
        }  
   }

    for(let i=1; i<=n; i++){ 
        if( map[s][i]+map[i][a]+map[i][b]==0) continue;
        answer=Math.min(answer, map[s][i]+map[i][a]+map[i][b])  
    }
=======
function solution(info, query) {
    var answer = [];
    let map = {};
    
    function combination(infos, score, map, start){
        let key = infos.join(""); //키 값으로 쓸거 합쳐주기 
        let value = map[key]; //값 있는지 없는지 확인해주기
        
        if(value){ //값이 있으면 push
            map[key].push(score);
        }
        else { //값이 없으면 프로퍼티 만들어줘야 됨
            map[key]=[score];
        }
        //여기서는 - 를 이용해 조합 만들어주기
        for(let i=start; i<infos.length; i++){
            let combiArr = [...infos]; //전개 연산자
            combiArr[i]='-';
            combination(combiArr, score, map, i+1);
        }
    }
    
    function binarySearch(map, key, score){
        let scoreArr = map[key];
      
          if (scoreArr) {
            let start = 0;
            let end = scoreArr.length;
            while (start < end) {
                let mid = Math.floor((start + end) / 2);
                
                if (scoreArr[mid] >= score) { //현재 가르키는 값보다 내가 찾는 값이 
                    end = mid;
                } else if (scoreArr[mid] < score) {
                    start = mid + 1;
                }
            }
            return scoreArr.length - start;
        } 
        else return 0
        
    }
    
    for(let i =0; i<info.length; i++){
        let infos=info[i].split(" ");
        let score=infos.pop();
        combination(infos, score, map, 0);
    }
    
    for(let key in map){
        map[key].sort((o1, o2) => o1 - o2);
    }
    
    for(let i=0; i<query.length ;i++){
        let querys = query[i].replace(/ and /g,"").split(" ");
        let score = Number(querys.pop());
        answer.push(binarySearch(map, querys.join(""), score));
    }
    
>>>>>>> 9300556009cf29584e0d50f233d389cf7d87e2d8
    return answer;
}
```

<<<<<<< HEAD


### 풀이방법

일단 모든 꼭지점 사이의 최단거리를 구해야합니다.

하지만 n의 제한이 300이기 때문에 O(300^3)의 시간복잡도를 가지는 플로이드 와샬을 이용합니다. 

 로직을 살펴보면

1. 모든 꼭지점 사이의 최단거리를 구한다.

2. S-> 각 꼭지점에 내렸을 때, 꼭지점에서 a, b 까지 가는 거리를 계산해서 최소값을 answer에 저장합니다.



끝!
=======
소요시간 : 1시간 30분

 

진짜 레벨 2는 거짓말

와 진짜 저번에 자바로 풀었을 때 효율성 통과못한 문제인데

요번에 자바스크립트로다시 푸는데 진짜 너무 힘들었습니다. + IDE없이 풀기

 

우선 로직을 말씀드리면 조합 + 이분탐색입니다.

 

우선 조합을 통해서 - 를 다 넣어줍니다.

 

예를 들어 

java backend junior pizza 150 이 입력으로 들어왔다고 칩시다. 

 

\- backend junior pizza 150

java  - junior pizza 150

java backend - pizza 150

java backend junior - 150

.

.

.

\- - - - 150 

이런식으로 -를 넣을 수 있는 곳을 조합으로 찾아 모두다 150을 넣어줍니다.

 

이렇게 점수넣는 부분을 배열이나 리스트를 통해 관리하면 어떤 쿼리문이 들어와도 이분탐색을 통해 nlong의 시간복잡도로 점수를 찾을 수 있습니다.

 

끝
>>>>>>> 9300556009cf29584e0d50f233d389cf7d87e2d8
