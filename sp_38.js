// Number Line jump
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
 return v2 < v1 && (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
}