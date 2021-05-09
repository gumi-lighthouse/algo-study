function solution(rows, columns, queries) {
    var answer = [];
    
     
    const rotate = (matrix, query) =>{
        let min=Number.MAX_VALUE;
        let r1=query[0]-1; //1
        let c1=query[1]-1; //1
        let r2=query[2]-1; //4
        let c2=query[3]-1; //3
        
        
        let temp = matrix[r1][c1]; 
        min = temp;           
        //왼
        for(let i = r1; i < r2; i++){ 
            matrix[i][c1] =matrix[i+1][c1];
            if(min > matrix[i][c1]) min = matrix[i][c1];
        }
        //아래
        for(let i = c1; i < c2; i++){ 
            matrix[r2][i] = matrix[r2][i+1];
            if(min > matrix[r2][i]) min = matrix[r2][i];
        }
        //오른쪽
        for(let i = r2; i > r1; i--){
            matrix[i][c2] = matrix[i-1][c2];
            if(min > matrix[i][c2]) min = matrix[i][c2];
        }
        //위
        for(let i = c2; i > c1; i--){ 
            matrix[r1][i] = matrix[r1][i-1];
            if(min > matrix[r1][i]) min = matrix[r1][i];
        }
        matrix[r1][c1+1] = temp; 
        
        return min;
    }
    
 
    let arr = Array.from(Array(rows), ()=> new Array(columns));
    
    
    let number=1;
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            arr[i][j]=number++;
         }
    }
    
    for(let i=0; i<queries.length; i++){
        answer.push(rotate(arr, queries[i]));
    }
   
    return answer;
}