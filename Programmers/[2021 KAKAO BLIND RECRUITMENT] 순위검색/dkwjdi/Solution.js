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