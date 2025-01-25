function migratoryBirds(arr) {
    // // Write your code here

    // let newArr = {}
    // const uniqueVal = [... new Set(arr)]
    // console.log("🐒 ~ file: sp_37.js:6 ~ migratoryBirds ~ uniqueVal:", uniqueVal)
    // uniqueVal.forEach(elem => {
    //     const filterVal = arr.filter(val => val == elem)       
    //     const totalVal = filterVal.length
    //     newArr[elem] = totalVal
    // })

    // console.log("uniqueVal" , uniqueVal , newArr)

    // let result = Object.entries(newArr).sort(([,a], [,b]) => b-a)
    // console.log("🐒 ~ file: sp_37.js:14 ~ migratoryBirds ~ result:", result)
    // let final = result[0][0]
    // return final
    const frequency = {}; // To store the count of each bird type
    let maxCount = 0; // To store the highest frequency
    let result = Number.MAX_SAFE_INTEGER; // To store the smallest bird type ID with max frequency

    // Count the frequency of each bird type
    for (let i = 0; i < arr.length; i++) {
        let bird = arr[i]; // arry element 
        // frequency ma nai hoy to add karse 
        if (!frequency[bird]) {
            frequency[bird] = 0;
        }
        frequency[bird]++;

        // Update maxCount and result if this bird has a higher frequency
        if (frequency[bird] > maxCount) {
            maxCount = frequency[bird];
            result = bird;
        } else if (frequency[bird] === maxCount && bird < result) {
            // If the frequency is the same, choose the smaller bird ID
            result = bird;
        }
        console.log("🐒 ~ file: sp_37.js:39 ~ migratoryBirds ~ result:", result)
    }
    console.log("frequency" , frequency , result)

    return result;
}


console.log(migratoryBirds([1 ,2 ,3,4, 5, 4, 3, 2, 1, 3, 4]))