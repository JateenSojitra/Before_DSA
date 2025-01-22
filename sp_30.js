// Staircase detail

const Staircase = (rows) => {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';

        // Add spaces
        for (let j = 1; j <= rows - i; j++) {
            pattern += ' ';
        }

        // Add hashes
        for (let k = 1; k <= i; k++) {
            pattern += '#';
        }

        console.log(pattern);
    }
}
Staircase(4)