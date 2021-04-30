function solution(n, s, a, b, fares) {
  let answer = Number.MAX_VALUE;

  const map = Array.from(Array(n), () => new Array(n));

  //간선 정보 연결
  for (let i = 0; i < fares.length; i++) {
    map[fares[i][0] - 1][fares[i][1] - 1] = fares[i][2];
    map[fares[i][1] - 1][fares[i][0] - 1] = fares[i][2];
  }

  //자기자신는 갈 수는 있지만 값은 0
  for (let i = 0; i < n; i++) {
    map[i][i] = 0;
  }

  //플로이드 와샬
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 자기자신인 경우
        if (i === j) continue;
        // 경유해서 못가는 경우
        if (map[i][k] === undefined || map[k][j] === undefined) continue;
        // 경유해서 갈 수 있더라도 최소가 되는 경우
        if (map[i][j] > map[i][k] + map[k][j] || map[i][j] === undefined) {
          map[i][j] = map[i][k] + map[k][j];
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (map[i][s - 1] === undefined || map[i][a - 1] === undefined || map[i][b - 1] === undefined)
      continue;
    answer = Math.min(answer, map[i][s - 1] + map[i][a - 1] + map[i][b - 1]);
  }

  return answer;
}
