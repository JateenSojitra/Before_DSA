function timeConversion(time12h) {
    // Split the time into hours, minutes, seconds, and the AM/PM part
    const [time, modifier] = time12h.split(/(AM|PM)/);
    console.log("🐒 ~ file: sp_33.js:4 ~ timeConversion ~ time, modifier:", time, modifier)

    // Further split the time into hours, minutes, and seconds
    let [hours, minutes, seconds] = time.trim().split(':').map(Number);

    // If the time is PM and not 12 PM, add 12 to the hours
    if (modifier === "PM" && hours !== 12) {
        hours += 12;
    }

    // If the time is AM and 12 AM, set the hour to 0 (midnight)
    if (modifier === "AM" && hours === 12) {
        hours = 0;
    }

    // Return the time in 24-hour format
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

}

console.log("timeConversion" , timeConversion("07:05:45PM"))