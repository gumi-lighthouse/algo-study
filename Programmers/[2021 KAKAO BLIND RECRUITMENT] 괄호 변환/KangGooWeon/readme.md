

##  [2021 KAKAO BLIND RECRUITMENT]  합승 택시 요금

 

### 코드

```javascript
function balanceBracket(str) {
  let left = 0;
  let right = 0;
  let i = 0;

  for (; i < str.length; i++) {
    let bracket = str.charAt(i);

    if (bracket == "(") left++;
    else right++;

    if (left == right) break;
  }

  return i+1;
}

function isCheckBracket(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "(") stack.push("(");
    else {
      if (stack.length == 0) return false;
      stack.pop();
    }
  }
  return true;
}

function changeBracket(str) {
  let temp = "";
  for (let i = 0; i<str.length; i++) {
    if (str.charAt(i) == "(") temp += ")";
    else temp += "(";
  }
  return temp;
}

function dfs(cnt, u, v) {
  if (u.length == 0) return '';

  let length = balanceBracket(u);
  v = u.substr(length, u.length);
  u = u.substr(0, length);

  if (isCheckBracket(u)) {
    return u + dfs(cnt + 1, v, "");
  } else {
    let s = "(";
    s += dfs(cnt + 1, v, "") + ")";
    u = u.substr(1);
    u = u.substr(0, u.length-1);
    s += changeBracket(u);
    return s;
  }
}

function solution(p) {
  return dfs(0, p, "");
}

```

###정리

- 과정을 잘 읽고 따라 하면 문제없이 풀 수 있다!
- 하지만!!!!  "4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다." 이 문장에서 reverse 하는 게 아니라 '(' 괄호는 ')'으로 바꾸는 말이라는 걸 주의하자.
