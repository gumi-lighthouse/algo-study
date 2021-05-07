function solution(numbers, hand) {
  var answer = '';
  
  hand=hand.replace("right","R").replace("left","L");
  
  let left='*';
  let right='#';
  let point={};
  
  keyPadIndex(point); // 각 키의 위치 저장
  
  for (let i = 0; i < numbers.length; i++){
      if(numbers[i]!=0 &&numbers[i]%3==0) {
          answer+="R";
          right=numbers[i];
      }
      else if(numbers[i]!=0 &&(numbers[i]-1)%3==0) {
          answer+="L";
          left=numbers[i];
      }
      else{
          let leftDir=dir(numbers[i], left);
          let rightDir=dir(numbers[i], right)
          
          if(leftDir==rightDir){
              answer+=hand;
              if(hand=='R') right=numbers[i];
              else left=numbers[i];
          }
          else if(leftDir>rightDir){
              answer+='R';
              right=numbers[i];
          }
          else{
              answer+="L";
              left=numbers[i];
          }
      }
  }
  
  function dir( a,  b){
      return Math.abs(point[a][0]-point[b][0])+Math.abs(point[a][1]-point[b][1]);
  }
  
  function keyPadIndex(point){
      let num=1;
      for(let i=0; i<3; i++){
          for(let j=0; j<3; j++){
              point[num++]=[i,j];
          }
      }
      point[0] = [3, 1];
      point['*'] = [3, 0];
      point['#'] = [3, 2];
  }
  
  return answer;
}

