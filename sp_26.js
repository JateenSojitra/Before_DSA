// Alice and Bob each created one problem for HackerRank. compareTriplets

function compareTriplets(a, b) {
    let pointsarry = [] ;
    let aspoints = 0
    let bspoints = 0
    for(let i = 0 ; i < a.length; i++){
        if(a[i] > b[i]){
            aspoints += 1 
        }
        else if(a[i] < b[i]) {
            bspoints += 1  
        }
    }
    pointsarry = [aspoints , bspoints]
    return pointsarry
}
let a  = [17 ,28, 30]
let b  = [99 ,16 , 8]
let value = compareTriplets(a,b)
console.log("🐒 ~ file: sp_26.js:21 ~ value:", value)
