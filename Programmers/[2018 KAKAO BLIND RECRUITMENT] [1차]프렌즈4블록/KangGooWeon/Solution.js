function solution(m, n, board) {
  let answer = 0;
  const visited = Array.from(Array(m), () => new Array(n));
  board = board.map((arr) => arr.split(""));
  let limit = m * n;

  function checkFriends() {
    let flag = false;

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let target = board[i][j];
        if (target == 0) continue;
        if (board[i + 1][j] != target || board[i][j + 1] != target || board[i + 1][j + 1] != target)
          continue;

        visited[i][j] = visited[i + 1][j] = visited[i][j + 1] = visited[i + 1][j + 1] = true;
        flag = true;
      }
    }

    return flag;
  }

  function removeFriends() {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (visited[i][j] === undefined) continue;
        board[i][j] = 0;
        visited[i][j] = undefined;
        answer++;
      }
    }
  }

  function moveFriends() {
    for (let j = n - 1; j >= 0; j--) {
      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] == 0) {
          let index = 0;
          while (i - index >= 0) {
            if (board[i - index][j] == 0) {
              index++;
              continue;
            }
            board[i][j] = board[i - index][j];
            board[i - index][j] = 0;
            break;
          }
        }
      }
    }
  }

  while (checkFriends()) {
    removeFriends();

    if (limit <= answer) break;

    moveFriends();
  }

  return answer;
}
