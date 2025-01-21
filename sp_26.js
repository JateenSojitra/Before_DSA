function compareTriplets(a, b) {
    let pointsarry = [] ;
    let aspoints = []
    let bspoints = []
    for(let i = 0 ; i < a.length; i++){
        console.log("i" , i)
        for(let j = 0 ; j < b.length ; j++){
            console.log("j" , j)
            if(a[i] > b[j]){
             aspoints.push(1)   
            }
            else if(a[i] < b[j]) {
              bspoints.push(1)  
            }
        }
    }
    console.log(aspoints , bspoints)
}
let a  = [17 ,28, 30]
let b  = [99 ,16 , 8]
compareTriplets(a,b)