// 3. **Validating Leap Years**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Date Handling  
//    **Description**: Write a program to check if a given year is a leap year.  
//    **Example**:  
//    Input: `year = 2020`  
//    Output: `Leap Year`  
//    Explanation: 2020 is divisible by 4 but not by 100, or it is divisible by 400, so it is a leap year.  

function isLeapYear(year) {
    if (year % 4 === 0) { // Check if divisible by 4
      if (year % 100 === 0) { // Check if divisible by 100
        if (year % 400 === 0) { // Check if divisible by 400
          return year + " is a leap year.";
        } else {
          return year + " is not a leap year.";
        }
      } 
      else {
        return year + " is a leap year.";
      }
    } else {
      return year + " is not a leap year.";
    }
  }
  
  // Example Test
  console.log(isLeapYear(2000)); // Leap Year
  console.log(isLeapYear(1900)); // Not a Leap Year
  console.log(isLeapYear(2024)); // Leap Year
  console.log(isLeapYear(2023)); // Not a Leap Year