function solution(p) {
  var answer = '';
  answer = solve(p);


  function solve(bracket) {
    if (collectBracket(bracket)) return bracket;
    else {
      let { u, v } = divideBracket(bracket);
      if (collectBracket(u)) return u + solve(v);
      else return '(' + solve(v) + ')' + reverseBracket(u);
    }
  }

  function reverseBracket(str) {
    let result = '';
    for (let i = 1; i < str.length - 1; i++) {
      if (str.charAt(i) == '(') result += ')';
      else result += '(';
    }
    return result;
  }

  function collectBracket(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      const ch = str.charAt(i);
      if (ch === '(') stack.push(ch);
      else if (ch === ')') {
        if (stack.length === 0) return false; //스택 비어있으면 올바르지 않음
        if (stack[stack.length - 1] != '(') return false;
        stack.pop();
      }
    }
    return true;
  }

  function divideBracket(str) {
    let u = '';
    let v = '';
    let cnt = 0;

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == '(') cnt++;
      else cnt--;
      u += str.charAt(i);
      if (cnt == 0) {
        v = str.substring(i + 1, str.length);
        break;
      }
    }
    return {
      u,
      v
    }
  }
  return answer;
}