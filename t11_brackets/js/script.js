function checkBrackets(str) {
    if (typeof str !== "string") {
        return -1;
    }

    let balance = 0;
    let missingBrackets = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === '(') {
            balance++;
        } else if (char === ')') {
            if (balance > 0) {
                balance--;
            } else {
                missingBrackets++;
            }
        }
    }

    return missingBrackets + balance;
}
