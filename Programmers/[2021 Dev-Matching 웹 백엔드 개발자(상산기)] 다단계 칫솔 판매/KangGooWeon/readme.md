
  
##  [2021 Dev-Matching: 웹 백엔드 개발자] 다단계 칫솔 판매

 

### 코드

```javascript
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

  
```



### 풀이방법


1.  map을 이용해서 key는 판매자, value는 객체로 추천인과 자신의 이익금 0으로 초기화시킨다.
2. 판매 집계 데이터만큼 for문을 돌린다.
3. while문으로 자신의 이익금과 조직 구성원의 이익금을 나눠주는 작업을 해주는데 map에 판매원이 판매한 돈에 10퍼센트를 빼준 만큼 기존 map에 있는 이익금과 더해서 map에 다시 담아준다.
4. 자기 자신의 추천인이 '-' 이거나 10퍼센트의 배분금이 0이면 더 이상 진행할 수 없으므로 break 한다.
5. 이제 트리 구조이기 때문에 판매원을 추천인으로 바꾸고 판매 가격 또한 배분금으로 바꾼다.
6. 2번을 seller.length만큼 반복
