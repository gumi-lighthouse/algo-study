

##  [2021 KAKAO BLIND RECRUITMENT]  순위검색

 

### 코드

```javascript
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
    
    return answer;
}
```

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