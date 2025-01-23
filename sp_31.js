// Given five positive let egers, find the minimum and maximum values that can be calculated by summing exactly four of the five let egers. Then prlet  the respective minimum and maximum values as a single line of two space-separated long let egers.

const minimumAndMaximum = (arr) => {
    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + ' ' + (sum - minVal));
}
minimumAndMaximum([1, 2, 3, 4, 5])
