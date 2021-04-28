function solution(lottos, win_nums) {
    var answer = [];
    
    let zeroCnt=0;
    let collectCnt=0;
    let rank=[6,6,5,4,3,2,1];
    
    let mySet = new Set();
    for(let i=0; i<win_nums.length; i++){
        mySet.add(win_nums[i]);
    }
    
    for(let i=0; i<lottos.length; i++){
        if(mySet.has(lottos[i])){ //만약 이미 들어있는 수라면 ?
            collectCnt++;
        }
        else if(lottos[i]==0){
            zeroCnt++;
        }
    }
    answer[0]=rank[collectCnt+zeroCnt]; //최고
    answer[1]=rank[collectCnt]; //최저 
    return answer;
}