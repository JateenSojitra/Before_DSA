// calculate and print the sum of the elements in an array

function aVeryBigSum(ar) {
    // Write your code here
    let bigintSum = 0 ;
    for(let i = 0 ; i<ar.length ; i++){
        let bigintnumber = BigInt(ar[i])
        bigintSum += ar[i]
    }
    return bigintSum

}
let ar = [1000000001 , 1000000002  , 1000000003 , 1000000004  , 1000000005]
let value  = aVeryBigSum(ar)