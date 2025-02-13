// 884. Uncommon Words from Two Sentences
var uncommonFromSentences = function(s1, s2) {
    let s1array = s1.split(" ")
    let s2array = s2.split(" ")
    let mergearray = s1array.concat(s2array);
    let countMap = {};
    for (let word of mergearray) {
        countMap[word] = (countMap[word] || 0) + 1;
    }
    return Object.keys(countMap).filter(word => countMap[word] === 1);
};


// let s1= "this apple is sweet"; 
// let s2 = "this apple is sour";
let s1=  "apple apple"; 
let s2 = "banana";

let value  = uncommonFromSentences(s1,s2)
console.log("🐒 ~ value:", value)
