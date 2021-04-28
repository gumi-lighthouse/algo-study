
##  [2021 Dev-Matching: 웹 백엔드 개발자] 로또의 최고 순위와 최저 순위 -JavaScript

 

### 코드

```javascript
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
  
```



### 풀이방법


-   0인 번호를 먼저 체크한다.
-   그다음 로또번호에 당첨번호가 있는지 체크한다.
-   zeroCnt와 최소 당첨의 개수를 더하면 최고 순위 번호가 된다.
-   rank배열에 등수를 저장해 두고 answer에 담아준다.
  
