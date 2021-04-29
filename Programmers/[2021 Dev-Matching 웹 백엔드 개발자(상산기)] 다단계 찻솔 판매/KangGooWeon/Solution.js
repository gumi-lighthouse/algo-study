function solution(enroll, referral, seller, amount) {
    var answer = [];
    
    let map = new Map();
    
    for(let i=0; i<enroll.length; i++){
        map.set(enroll[i], {parents : referral[i], sales: 0 });
    }
    
    for(let i=0; i<seller.length; i++){
        let price = amount[i] * 100;
        let sell = seller[i];
        
        while(true){
            let data = map.get(sell);
            
            let share = parseInt(price / 10);
            
            map.set(sell, {parents : data.parents, sales : data.sales + price-share});        
            
            if(data.parents === '-') break;
            if( share === 0) break;
            sell = data.parents;
            price = share;
        }
    }
    
    for (let [key, value] of map) {
        answer.push(value.sales);
    }

    return answer;
}
