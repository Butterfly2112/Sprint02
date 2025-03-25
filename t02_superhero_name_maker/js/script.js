function getSuperheroName() {
    let enteredAnimal = prompt("What animal is the superhero most similar to?");
    if (!/^[A-Za-z]{1,20}$/.test(enteredAnimal)) {
        alert("error");
        return;
    }

    let enteredGender = prompt("Is the superhero male or female? Leave blank if unknown or other");
    if (!/^(male|female)?$/i.test(enteredGender)) {
        alert("error");
        return;
    }

    let enteredAge = prompt("How old is the superhero?");
    if (!/^(?!0)\d{1,5}$/.test(enteredAge)) {
        alert("error");
        return;
    }

    let description = "";
    if (/^male$/i.test(enteredGender)) {
        description = enteredAge < 18 ? "boy" : "man";
    } else if (/^female$/i.test(enteredGender)) {
        description = enteredAge < 18 ? "girl" : "woman";
    } else {
        description = enteredAge < 18 ? "kid" : "hero";
    }

    alert(`The superhero name is: ${enteredAnimal}-${description}!`);
}

getSuperheroName();