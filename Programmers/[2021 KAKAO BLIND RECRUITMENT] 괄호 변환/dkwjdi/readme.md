

##  [2020 KAKAO BLIND RECRUITMENT]  괄호 변환  -JavaScript

 

### 코드

```javascript
function solution(p) {
    var answer = '';
    answer = solve(p);
    
    
    function solve(bracket){
        if(collectBracket(bracket)) return bracket;
        else{
            let {u, v}=divideBracket(bracket);
            if(collectBracket(u))  return u+solve(v);
            else return '('+solve(v)+')'+reverseBracket(u);
        }
    }
    
    function reverseBracket(str){
        let result='';
        for(let i=1; i<str.length-1; i++){
            if(str.charAt(i)=='(') result+=')';
            else result+='(';
        }
        return result;
    }
    
    function collectBracket(str){
        const stack= [];

        for(let i=0; i<str.length; i++){
            const ch = str.charAt(i);
            if(ch === '(') stack.push(ch);
            else if(ch ===')'){
                if(stack.length===0) return false; //스택 비어있으면 올바르지 않음
                if(stack[stack.length-1] != '(') return false;
                stack.pop();
            }
        }
        return true;  
    }

    function divideBracket(str){
        let u='';
        let v='';
        let cnt=0;
        
        for(let i=0; i<str.length; i++){
            if(str.charAt(i)=='(') cnt++;
            else cnt--;
            u+=str.charAt(i);
            if(cnt==0) {
                v=str.substring(i+1, str.length);
                break;
            }
        } 
        return{
            u,
            v
        }
    }
    return answer;
} 

```

###정리

- 소요시간 : 20분

   

  우선 4개의 함수를 사용했습니다.

   

  1. divideBracket 을 통해서 u와 v를 분리해줍니다.

  2. collectBracket 을 통해서 올바른 괄호인지 확인해줍니다.

  3. reverseBracket을 통해서 u의 가장앞과 뒤의 문자를 자르고, 괄호를 반대로 돌려줍니다.

  4. solve 재귀함수를 통해서 answer을 구해주는 함수입니다.

   

   

  로직을 살펴보면

  1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.

  2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로

    더 이상 분리할 수 없어 야 하며, v는 빈 문자열이 될 수 있습니다.

  3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.

  ​      3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.

  4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.

  ​      4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.

  ​      4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.

  ​      4-3. ')'를 다시 붙입니다.

  ​      4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.

  ​      4-5. 생성된 문자열을 반환합니다.

   

  위의 함수를 통해서 로직을 그대로 따라가면 됩니다!

   

  끝~
