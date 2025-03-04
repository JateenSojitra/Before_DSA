// 8. String to Integer (atoi)
var myAtoi = function(s) {
    s = s.trim(); 
    if (s.length === 0) return 0; 

    let sign = 1, i = 0;
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    let numStr = "", maxInt = 2 ** 31 - 1, minInt = -(2 ** 31);
    while (i < s.length && s[i] >= '0' && s[i] <= '9') { 
        numStr += s[i];
        i++;
    }

    if (numStr.length === 0) return 0; 
    let num = sign * parseInt(numStr, 10);

    if (num > maxInt) return maxInt;
    if (num < minInt) return minInt;
    
    return num;
};