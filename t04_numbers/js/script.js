function checkDivision(beginRange = 1, endRange = 100) {
    for (let num = beginRange; num <= endRange; num++) {
        let output = `${num}`;

        if (num % 2 === 0) {
            output += " is even";
        }
        
        if (num % 3 === 0) {
            output += " is a multiple of 3";
        }

        if (num % 10 === 0) {
            output += " is a multiple of 10";
        }

        console.log(output);
    }
}

let beginRange = prompt("Enter the beginning of the range:", "1");
let endRange = prompt("Enter the end of the range:", "100");

beginRange = +beginRange;
endRange = +endRange;

if (String(beginRange) === 'NaN' || String(endRange) === 'NaN' || beginRange === '' || endRange === '') {
    console.log("Invalid input. Using default range 1-100.");
    checkDivision();
} else if (beginRange > endRange) {
    console.log("Invalid range: beginning is greater than end.");
} else {
    checkDivision(beginRange, endRange);
}