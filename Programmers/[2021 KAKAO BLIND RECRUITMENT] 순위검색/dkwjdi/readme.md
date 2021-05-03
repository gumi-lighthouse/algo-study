

##  [2021 KAKAO BLIND RECRUITMENT]  합승 택시 요금

 

### 코드

```javascript
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
    return answer;
}
```



### 풀이방법

일단 모든 꼭지점 사이의 최단거리를 구해야합니다.

하지만 n의 제한이 300이기 때문에 O(300^3)의 시간복잡도를 가지는 플로이드 와샬을 이용합니다. 

 로직을 살펴보면

1. 모든 꼭지점 사이의 최단거리를 구한다.

2. S-> 각 꼭지점에 내렸을 때, 꼭지점에서 a, b 까지 가는 거리를 계산해서 최소값을 answer에 저장합니다.



끝!