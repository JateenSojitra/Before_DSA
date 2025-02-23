// 7. Reverse Integer

var reverse = function(x) {
   
    let reversed = 0;
    let isNegative = x < 0;
    x = Math.abs(x);

    while (x > 0) {
        let lastDigit = x % 10;
        reversed = reversed * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    if (reversed > 2 ** 31 - 1) return 0; // Handle overflow case

    return isNegative ? -reversed : reversed;
};


console.log(reverse(123))
console.log(reverse(-123))