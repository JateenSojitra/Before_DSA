function birthdayCakeCandles(candles) {
    let max = candles[0];
    let count = 0;

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > max) {
            max = candles[i];
            count = 1;
        } else if (candles[i] === max) {
            count++;
        }
    }

    return count;
}

const array1 = [1, 3, 3,  2]
console.log(birthdayCakeCandles(array1))