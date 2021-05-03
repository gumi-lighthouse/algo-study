

##  [2021 KAKAO BLIND RECRUITMENT]  순위검색

 

### 코드

```javascript
function solution(s) {
    let answer = s.length;

    for(let i=1; i<=s.length/2; i++){
        let result = 0;
        let strIndex = i;
        let index = 0;
        let strArray = [s.substring(0, strIndex)];
        let strNumArray = [1];
        let str = '';

        while(true){
            if(strIndex > s.length) break;

            if(strIndex+i <= s.length) str = s.substring(strIndex, strIndex+i);
            else str = s.substring(strIndex, s.length);
            
            
            if(strArray[index] === str) {
              strNumArray[index]++;
            }
            else{
                strArray.push(str);
                strNumArray.push(1);
                index++;
            }
            
            strIndex += i;
        }

        result += strArray.join('').length;

        for(let j=0; j<strNumArray.length; j++){
            if(strNumArray[j] == 1) continue;
            
            result += String(strNumArray[j]).length;
        }
        answer = Math.min(answer, result);
    }
    
    return answer;
}


```

정리

- 우선 가장 바깥 포문은 s의 길이 /2 만큼 돌린다. 그 이상으로는 압출을 할 수 없기 때문이다.
- 문자열을 저장하는 배열 strArray과 그 문자열이 몇 개가 존재하는지 strNumArray 배열을 선언해준다.
- 현재 문자열과 다음문자열이 같다면 문자열 개수를 증가시켜준다.
- 다르다면 새로운 문자열을 strArray에 저장한다.
- while문이 끝나면 strArray에 들어 있는 것들이 문자열이기 때문에 join으로 문자열을 다 합치고 길이를 더한다.
- strNumArray에 2이상인 값들은 압축을 했기 때문에 result에 더해준다.

주의사항으로 'a' 같이 한 글자만 들어올 때를 처리해줘야 하므로 answer = s.length로 해주었다.
