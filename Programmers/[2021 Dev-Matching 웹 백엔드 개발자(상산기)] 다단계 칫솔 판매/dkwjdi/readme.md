

##  [2021 Dev-Matching: 웹 백엔드 개발자] 다단계 칫솔 판매

 

### 코드

```javascript
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
```



### 풀이방법

우선 문제를 사용할 때 map2개를 사용했습니다.

 

ref는 자신의 추천인을 담고 있는 map입니다.

benefit은 자신의 이익을 담고있는 map입니다.

 

로직을 살펴보면

 

1. 자신의 이익을 benefit에 담는다 ( 이때 이익 - 이익의 10%)를 넣어줍니다.

2. 자신의 추천인에게 (이익의10% - 이익의 10%의 10%)를 넣어줍니다.

3. 2번을 자신의 추천인이 "-"일떄까지 반복해줍니다.

 

끝~ 