function solution(enroll, referral, seller, amount) {
    var answer = [];
    
    let ref = new Map(); //추천인 x는  y에게 추천받았따
    let benefit = new Map(); //얻은 돈 

    for(let i=0; i<enroll.length; i++){
        ref.set(enroll[i], referral[i]);
        benefit.set(enroll[i], 0);
    }

    for(let i=0; i<seller.length; i++){
        let name = seller[i];
        let money = amount[i]*100;
        let remain = parseInt(money/10);
     
        benefit.set(seller[i], benefit.get(seller[i])+money-remain); //우선 맨 처음 사람 돈 넣어주기
        money=remain;
        
        while(true){ //추천인 돈 넣어주기 
            let refName = ref.get(name); //추천인 이름
            if((refName)=='-') break;
            remain=parseInt(money/10); //10%
            benefit.set(refName, benefit.get(refName)+money-remain);
            name=refName;
            money=remain;
        }
    }
   
     for(let i=0; i<enroll.length; i++){
        answer.push(benefit.get(enroll[i], 0));
    }
   
    return answer;
}