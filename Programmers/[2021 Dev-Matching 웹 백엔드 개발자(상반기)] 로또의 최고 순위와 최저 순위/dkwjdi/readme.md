##  [2021 Dev-Matching: 웹 백엔드 개발자] 로또의 최고 순위와 최저 순위 -JavaScript

 

### 코드

```javascript
function solution(lottos, win_nums) {
    var answer = [];
    
    let zeroCnt=0;
    let visited=[];
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
```



### 풀이방법

우선 로직을 살펴보면

1. 로또당첨 번호를 Set에 넣는다.

2. 민우가 구매한 로또 번호를 순회하면서 Set에 포함되어있는지 확인한다.

3. 포함되어 있다면 collectCnt를 증가시키고 , 민우의 로또 번호가 0 이라면 zeroCnt를 증가시켜줍니다.



자 여기서 최고등수, 최저등수를 구하는 방법은 쉽습니다.

우선 최저등수를 구해봅시다.

현재 일치하는 번호의 갯수를 collectCnt를 통해 구해놨습니다. 그렇다면 0인 자리가 모두 틀렸다고 가정해보면 collectCnt의 갯수만 맞은거라고 할 수 있습니다. 즉, collectCnt의 개수만큼 맞혔을 때 등수를 출력하면 됩니다.

 

다음으로 최고등수를 구해봅시다.

현재 일치하는 번호의 갯수 + 0인 자리가 모두 맞쳤을 때 -> 최고 등수입니다.

 

끝~

