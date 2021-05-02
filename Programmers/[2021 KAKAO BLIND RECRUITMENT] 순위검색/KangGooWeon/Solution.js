function solution(info, query) {
  var answer = [];
  const map = {};

  function combination(cnt, key, arr, score) {
    if (cnt === 4) {
      if (!map[key]) map[key] = [score];
      else map[key].push(score);
      return;
    }

    combination(cnt + 1, key + arr[cnt], arr, score);

    combination(cnt + 1, key + "-", arr, score);
  }

  for (let i = 0; i < info.length; i++) {
    const arr = info[i].split(" ");
    const score = Number(arr.pop());
    combination(0, "", arr, score);
  }

  for (let key in map) {
    map[key] = map[key].sort((a, b) => a - b);
  }

  console.log(map);

  for (let i = 0; i < query.length; i++) {
    const arr = query[i].replace(/ and /g, " ").split(" ");
    const score = Number(arr.pop());
    const key = arr.join("");
    const scoreArray = map[key];

    if (scoreArray) {
      let left = 0;
      let right = scoreArray.length;

      while (left < right) {
        const mid = parseInt((left + right) / 2);

        if (scoreArray[mid] >= score) {
          right = mid;
        } else if (scoreArray[mid] < score) {
          left = mid + 1;
        }
      }
      answer.push(scoreArray.length - left);
    } else {
      answer.push(0);
    }
  }

  return answer;
}
