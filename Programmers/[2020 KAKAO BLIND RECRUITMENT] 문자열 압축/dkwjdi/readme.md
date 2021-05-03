##  [2021 Dev-Matching: 웹 백엔드 개발자] 로또의 최고 순위와 최저 순위 -JavaScript

 

### 코드

```javascript
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
```



### 풀이방법

소요시간 : 20분

 

우선 가장 바깥은 포문은 s의 길이/2 만큼만 돌아주면 됩니다.

s의 길이/2 보다 커지면 절대로 압축을 할 수 없기 때문입니다.

 

로직을 살펴보면

 

1. 현재 문자열과 다음 문자열(현재 문자열 기준 + 사이즈만큼 자른 문자열)이 같으면 cnt++을 해줍니다.

2. 현재 문자열과 다음문자열이 다르다면 

  \- cnt가 1일 때 : 숫자를 붙여줄 필요가 없기 때문에 바로 문자를 더해줍니다.

  \- cnt가 1이상일 때 : 압축이 되었다는 뜻이기 때문에 숫자 + 문자를 해줍니다.

 

아 그리고 주의사항으로는 "a" 같이 한 글자만 들어왔을 때 예외 처리를 해주어야 합니다.

저는 맨처음 answer에 s의 길이를 주는 것으로 예외사항을 처리했습니다.

 

끝~ 