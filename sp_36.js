function gradingStudents1(grades) {
    let finalGrades = []; // Create an empty array to store the final grades

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];

        // Check if the grade is 38 or more and if rounding is applicable
        if (grade >= 38 && grade % 5 >= 3) {
            grade = grade - (grade % 5) + 5; // Round up to the next multiple of 5
        }

        finalGrades.push(grade); // Add the grade to the final grades array
    }

    return finalGrades; // Return the final grades array
}

console.log(gradingStudents1([45,34, 68, 78]))
