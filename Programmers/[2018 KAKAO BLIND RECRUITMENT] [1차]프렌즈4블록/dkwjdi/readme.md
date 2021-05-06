### [프로그래머스 2018 KAKAO BLIND RECRUITMENT] 프렌즈4블록 -JavaScript

 

### 코드

```javascript
function solution(m, n, board) {
    var answer = 0; //m높이, n넓이
    board = board.map(arr => arr.split(''));
    const dx=[0,1,1];
    const dy=[1,0,1];
    
    while(true){
        let removeBlockPoint=[];
        removeBlockMark(removeBlockPoint);
        if(removeBlockPoint.length==0) break;
        answer+=removeBlock(removeBlockPoint);
        moveBlock();
    }
    
    function moveBlock(){
        for(let j=0; j<n; j++){
            const stack = [];
            stackInput(stack, j);
            stackOutput(stack,j);
        }
    }
    
    function stackInput(stack, j){
          for(let i=0; i<m; i++){
                if(board[i][j]==='x') continue;
                stack.push(board[i][j]);
            }
    }
    
     function stackOutput(stack, j){
          for(let i=m-1; i>=0; i--){
                if(stack.length>=1) {
                    board[i][j]=stack.pop();
                    continue;
                }
                board[i][j]='x';
            }
    }
    
    function removeBlock(removeBlockPoint){
        let cnt=0;
        for(let i=0; i<removeBlockPoint.length; i++){
            const x=removeBlockPoint[i][0];
            const y=removeBlockPoint[i][1];
            if(board[x][y]==='x') continue;
            board[x][y]='x';
            cnt++;
        }
        return cnt;
    }
    
    
    function removeBlockMark(removeBlockPoint){
        for(let i=0; i<m; i++){
          loop:for(let j=0; j<n; j++){             
                for(let d=0; d<3; d++){
                    let nx=i+dx[d];
                    let ny=j+dy[d];
                    if(nx<0 || ny<0 || nx>=m || ny>=n|| board[nx][ny]!=board[i][j] || board[nx][ny]=='x') continue loop;   
                }
               removeBlockPoint.push([i,j]);
               removeBlockPoint.push([i,j+1]);
               removeBlockPoint.push([i+1,j]);
               removeBlockPoint.push([i+1,j+1]);
            }
        }
    
    }
    return answer;
}
```



### 풀이방법

소요시간 : 28분

 

로직을 살펴보면

 

1. board를 순회하면서 4개짜리 블록을 찾는다.  (찾으면 배열에 좌표를 저장)

2. 좌표를 저장한 배열을 순회하면 board에 x표시를 해주고 answer를 증가시켜준다.

3. 스택을 이용해 배열을 아래로 내려준다.

4. 1번으로

 

를 반복하다 보면 답이 나옵니다 ㅎㅎ

 

끝~