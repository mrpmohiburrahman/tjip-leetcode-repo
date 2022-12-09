function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  //   console.log(intervals);
  let result: any = [intervals[0]];
  //   console.log(result);
  for (let index = 1, resultIndex = 0; index < intervals.length; index++) {
    if (result[resultIndex][1] >= intervals[index][0]) {
      if (result[resultIndex][1] >= intervals[index][1]) {
      } else {
        let temp = [result[resultIndex][0], intervals[index][1]];
        result.pop();
        //   console.log(result);
        //   console.log(temp);
        result.push(temp);

        //   console.log(result);
      }
    } else {
      result.push(intervals[index]);
      //   console.log(result);
      resultIndex++;
    }
  }
  return result;
}

// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
