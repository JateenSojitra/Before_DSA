// 386. Lexicographical Numbers
var lexicalOrder = function(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    arr.sort((a, b) => a.toString().localeCompare(b.toString()));

    return arr;
};


console.log(lexicalOrder(13))