function concat(string1, string2) {
    if (typeof string2 === "string") {
        return `${string1} ${string2}`;
    }
    
    function innerConcat() {
        let string2 = prompt("Enter the second string:");
        innerConcat.count++;
        return `${string1} ${string2}`;
    }
    
    innerConcat.count = 0;
    return innerConcat;
}