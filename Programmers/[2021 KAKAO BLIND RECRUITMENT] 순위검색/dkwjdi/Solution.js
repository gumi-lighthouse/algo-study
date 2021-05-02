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