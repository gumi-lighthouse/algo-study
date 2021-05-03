

##  [2021 KAKAO BLIND RECRUITMENT]  순위검색

 

### 코드

```javascript
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
```

정리
진짜 레벨 2가 맞나 싶을 정도의 난이도였다.

일단 이 문제는 조합과, 이분 탐색을 사용해야 정확성과 효율성 둘 다 통과할 수 있다.

- 우선 info을 순회하면서 "-"가 들어갈 수 있는 조합을 모두 구하고 map객체에 저장해주었다.
- 그다음 map에 있는 property의 value는 배열 형태로 저장해주었다. 만약 java backend junior pizza가 50,000개가 존재하고 query배열에도 java backend junior pizza를 원하는 값이 100,000개 이면 시간 초과가 난다.
- 따라서 value를 정렬해주고 이분 탐색을 해주어야 한다.
- 만약 map[key]에 값이 배열이 없다면 즉 검색에 맞는 조건의 사람이 없다는 뜻이기 때문에 0을 넣어주면 된다.
