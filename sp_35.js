const reversString =(str) => {
    let reversed = ''; // Create an empty string to store the reversed string

    // Use a for loop to iterate over the string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Add each character to the reversed string
    }

    return reversed; // Return the reversed string
    
}
console.log(reversString("jatin"))