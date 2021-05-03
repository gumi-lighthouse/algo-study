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