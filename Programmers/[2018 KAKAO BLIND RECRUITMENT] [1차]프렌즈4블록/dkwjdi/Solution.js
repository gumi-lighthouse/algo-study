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