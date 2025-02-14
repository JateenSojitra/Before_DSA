// 241  Different Ways to Add Parentheses

let diffWaysToCompute = function(expression) {
    if (!expression.includes('+') && !expression.includes('-') && !expression.includes('*')) {
        return [parseInt(expression)];
    }

    let results = [];
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (char === '+' || char === '-' || char === '*') {
            let leftPart = diffWaysToCompute(expression.substring(0, i));
            let rightPart = diffWaysToCompute(expression.substring(i + 1));

            for (let left of leftPart) {
                for (let right of rightPart) {
                    if (char === '+') results.push(left + right);
                    else if (char === '-') results.push(left - right);
                    else if (char === '*') results.push(left * right);
                }
            }
        }
    }
    return results;
};


console.log(diffWaysToCompute("2-1-1"))
console.log(diffWaysToCompute("2*3-4*5"))