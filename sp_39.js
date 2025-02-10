 function clearDigits(s) {
    let arr = s.split(""); // Convert string into array for easy manipulation

    while (arr.some(char => char >= '0' && char <= '9')) { // Loop while there's a digit
        let digitIndex = arr.findIndex(char => char >= '0' && char <= '9'); // Find first digit

        if (digitIndex === -1) break; // No digits left, exit loop

        // Remove the first digit
        arr.splice(digitIndex, 1);

        // Find the closest non-digit character to the left
        for (let i = digitIndex - 1; i >= 0; i--) {
            if (!(arr[i] >= '0' && arr[i] <= '9')) {
                arr.splice(i, 1); // Remove the closest non-digit character
                break;
            }
        }
    }

    return arr.join(""); // Convert array back to string
}

console.log(clearDigits("cb34"))