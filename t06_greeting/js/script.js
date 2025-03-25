function greetUser() {
    let firstName = prompt("Enter your first name:");
    let secondName = prompt("Enter your second name:");
        if (!firstName || !secondName) {
            alert("Wrong input!");
            console.log("Wrong input");
            return;
        }

        for (let i = 0; i < firstName.length; i++) {
            if(!isNaN(firstName[i])) {
                alert("Wrong input!");
                console.log("Wrong input");
                return;
            }
        }

        for (let i = 0; i < secondName.length; i++) {
            if(!isNaN(secondName[i])) {
                alert("Wrong input!");
                console.log("Wrong input");
                return;
            }
        }
  
        let formatedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        let formatedSecondName = secondName.charAt(0).toUpperCase() + secondName.slice(1).toLowerCase();
        alert(`Hello ${formatedFirstName} ${formatedSecondName}!`);
        console.log(`Hello ${formatedFirstName} ${formatedSecondName}!`);

}

greetUser();