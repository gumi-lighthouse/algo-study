function solution(numbers, hand) {
  var answer = "";

  const leftPos = { x: 3, y: 0 };
  const rightPos = { x: 3, y: 2 };

  for (let num of numbers) {
    if (num % 3 === 1) {
      answer += "L";
      leftPos.y = 0;
      leftPos.x = Math.floor(num / 3);
    } else if (num % 3 === 0 && num != 0) {
      answer += "R";
      rightPos.y = 2;
      rightPos.x = num / 3 - 1;
    } else {
      let numPos = { x: 0, y: 1 };
      if (num == 5) numPos.x = 1;
      if (num == 8) numPos.x = 2;
      if (num == 0) numPos.x = 3;

      let le = Math.abs(leftPos.x - numPos.x) + Math.abs(leftPos.y - numPos.y);
      let right = Math.abs(rightPos.x - numPos.x) + Math.abs(rightPos.y - numPos.y);

      // 무슨 손가락을 누를지
      if (le < right || (le == right && hand === "left")) {
        leftPos.x = numPos.x;
        leftPos.y = numPos.y;
        answer += "L";
      } else if (right < le || (le == right && hand === "right")) {
        rightPos.x = numPos.x;
        rightPos.y = numPos.y;
        answer += "R";
      }
    }
  }

  return answer;
}
