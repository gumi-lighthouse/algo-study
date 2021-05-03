function solution(s) {
    var answer = s.length;
    let len=s.length;
    
    for(let i =1; i<=len/2; i++){ //자르는 크기
        let j=i;
        let cnt=1;
        let compressionStr =""
        let str = s.substring(0, i);
       
        for(; j<=len; j+=i){
            if(str===s.substring(j,j+i)) cnt++;
            else {
                if(cnt===1) compressionStr+=str;
                else compressionStr+=cnt+str;
                str=s.substring(j,j+i);
                cnt=1;
            }
        }
        
        if(cnt===1) compressionStr+=str;
        else compressionStr+=cnt+str;
        answer=Math.min(answer, compressionStr.length)
    }
    return answer;
}