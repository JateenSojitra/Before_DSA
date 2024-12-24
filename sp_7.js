// 7. **Crafting Star Patterns**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Patterns  
//    **Description**: Write a program to create different star patterns (e.g., pyramid, diamond).  
//    **Example**:  
//    Input: `patternType = "pyramid", height = 5`  
//    Output:  
//    ```
//        *
//       ***
//      *****
//     *******
//    *********
//    ```  
//    Explanation: A pyramid pattern with a height of 5 is generated.
function pyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = "";
        let stars = "";

        // Generate spaces
        for (let j = 0; j < rows - i; j++) {
            spaces += " ";
        }

        // Generate stars
        for (let k = 0; k < 2 * i - 1; k++) {
            stars += "*";
        }

        console.log(spaces + stars + spaces);
    }
}

console.log(pyramid(5))
console.log(pyramid(10))
console.log(pyramid(15))