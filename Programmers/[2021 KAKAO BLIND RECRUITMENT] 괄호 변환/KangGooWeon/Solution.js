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

  return i + 1;
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
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "(") temp += ")";
    else temp += "(";
  }
  return temp;
}

function dfs(cnt, u, v) {
  if (u.length == 0) return "";

  let length = balanceBracket(u);
  v = u.substr(length, u.length);
  u = u.substr(0, length);

  if (isCheckBracket(u)) {
    return u + dfs(cnt + 1, v, "");
  } else {
    let s = "(";
    s += dfs(cnt + 1, v, "") + ")";
    u = u.substr(1);
    u = u.substr(0, u.length - 1);
    s += changeBracket(u);
    return s;
  }
}

function solution(p) {
  return dfs(0, p, "");
}

console.log(solution("()))((()"));
