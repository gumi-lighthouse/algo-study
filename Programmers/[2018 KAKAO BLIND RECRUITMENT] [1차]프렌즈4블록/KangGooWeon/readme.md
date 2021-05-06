### [프로그래머스 2018 KAKAO BLIND RECRUITMENT] 프렌즈4블록 -JavaScript

 

### 코드

```javascript
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
    for (let j= n-1; j>=0; j--) {
      for (let i = m-1; i >=0; i--) {
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
```



### 풀이방법
 

로직을 살펴보면

 

1. board를 순회하면서 4개짜리 블록을 찾는다.  (찾으면 해당 자리 visited[][] = true)

2. 저장한 배열을 순회하면 board에 0으로 표시를 해주고 answer를 증가시켜준다.

3. 배열을 아래로 내려준다.

4. 1번을 반복

 

를 반복하다 보면 답이 나옵니다.