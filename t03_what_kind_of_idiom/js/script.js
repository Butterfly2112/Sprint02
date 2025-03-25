function getNumberInput() {
    let number;
    while (true) {
        let input = prompt("Enter a number from 1 to 10:");
        number = Number(input);

        switch (true) {
            case (input === null || input === ""):
            case (number < 1 || number > 10 || number % 1 !== 0):
                continue;
        }

        break;
    }
    return number;
}

function showIdiom() {
    let number = getNumberInput();
    let idiom;

    switch (number) {
        case 1:
            idiom = "Back to square 1";
            break;
        case 2:
            idiom = "Goody 2-shoes";
            break;
        case 3:
        case 6:
            idiom = "Two's company, three's a crowd";
            break;
        case 4:
        case 9:
            idiom = "Counting sheep";
            break;
        case 5:
            idiom = "Take five";
            break;
        case 7:
            idiom = "Seventh heaven";
            break;
        case 8:
            idiom = "Behind the eight-ball";
            break;
        case 10:
            idiom = "Cheaper by the dozen";
            break;
        default:
            idiom = "Unknown idiom";
    }

    alert(idiom);
}

showIdiom();