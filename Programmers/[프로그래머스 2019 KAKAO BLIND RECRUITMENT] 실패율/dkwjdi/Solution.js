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