// 2696. Minimum String Length After Removing Substrings leet code problems

var minLength = function(s) {
    while (s.includes("AB") || s.includes("CD")) {
        s = s.replace(/AB|CD/g, "");
    }
    return s.length;
};