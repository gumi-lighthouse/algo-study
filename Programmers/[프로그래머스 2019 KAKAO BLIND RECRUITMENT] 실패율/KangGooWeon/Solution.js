function solution(N, stages) {
  var answer = [];

  const clearStage = [];
  clearStage[N + 1] = 0;
  clearStage.fill(0, 1);

  // 클리어 한 사람 구하기
  for (let i = 0; i < stages.length; i++) {
    clearStage[stages[i]]++;
  }

  // 실패율 구하기
  let goalStage = clearStage[N + 1];
  const result = [];
  result[N] = {};
  for (let i = N; i > 0; i--) {
    goalStage += clearStage[i];
    result[i] = { index: i, value: clearStage[i] / goalStage };
  }

  // 조건에 맞게 정렬
  result.sort((a, b) => {
    if (a.value === b.value) return a.index - b.index; // 오름차순
    return b.value - a.value; // 내림차순
  });

  for (let i = 0; i < result.length - 1; i++) {
    answer.push(result[i].index);
  }

  return answer;
}
