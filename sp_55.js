var maximumSwap = function(num) {
    let digits = num.toString().split('');  // Convert number to string array
    let lastIndex = new Array(10).fill(-1); // Track last occurrence of each digit

    // Store the last occurrence index of each digit (0-9)
    for (let i = 0; i < digits.length; i++) {
        lastIndex[digits[i] - '0'] = i;
    }

    // Try to find a swap opportunity
    for (let i = 0; i < digits.length; i++) {
        // Check if there is a larger digit appearing later
        for (let d = 9; d > digits[i] - '0'; d--) {
            if (lastIndex[d] > i) {
                // Swap the two digits
                [digits[i], digits[lastIndex[d]]] = [digits[lastIndex[d]], digits[i]];
                return parseInt(digits.join(''), 10); // Convert back to number
            }
        }
    }

    return num;

};

console.log(maximumSwap(2736))