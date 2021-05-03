function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= s.length / 2; i++) {
    let result = 0;
    let strIndex = i;
    let index = 0;
    let strArray = [s.substring(0, strIndex)];
    let strNumArray = [1];
    let str = "";

    while (true) {
      if (strIndex > s.length) break;

      if (strIndex + i <= s.length) str = s.substring(strIndex, strIndex + i);
      else str = s.substring(strIndex, s.length);

      if (strArray[index] === str) {
        strNumArray[index]++;
      } else {
        strArray.push(str);
        strNumArray.push(1);
        index++;
      }

      strIndex += i;
    }

    result += strArray.join("").length;

    for (let j = 0; j < strNumArray.length; j++) {
      if (strNumArray[j] == 1) continue;

      result += String(strNumArray[j]).length;
    }
    answer = Math.min(answer, result);
  }

  return answer;
}
