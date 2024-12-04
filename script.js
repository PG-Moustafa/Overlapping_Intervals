

let merge_intervals = function(intervals) {

  new_intervals = []
  for (let i = 0; i < intervals.length-1; i+=2) {

    if (intervals[i][1] > intervals[i+1][0]) {
      new_intervals.push([intervals[i][0], intervals[i+1][1]])
    }
    else new_intervals.push(intervals[i])
  }
  return new_intervals
}

intervals = [ [1,4], [3,6], [7,9], [8,10] ]

// result and display new intervals
result = merge_intervals(intervals)
for (let interval of result) {
  console.log(interval)
}




