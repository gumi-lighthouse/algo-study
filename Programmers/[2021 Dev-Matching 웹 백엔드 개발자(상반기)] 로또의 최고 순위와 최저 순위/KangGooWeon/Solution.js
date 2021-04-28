function solution(lottos, win_nums) {
    var answer = [];
    
    let zeroCnt = 0;
    let min =0;
    let max =0;
    let rank=[6,6,5,4,3,2,1];
    
    for(let i=0; i<lottos.length; i++){
        if(lottos[i] === 0) zeroCnt++;
        if(lottos.includes(win_nums[i])) min++;
    }

    max = zeroCnt + min;

    answer[0] = rank[max];
    answer[1] = rank[min];
    
    return answer;
}