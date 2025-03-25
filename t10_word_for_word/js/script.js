function addWords(obj, wrds) {
    const existingWords = obj.words.split(' ');
    const newWords = wrds.split(' ');

    const allWords = [...new Set([...existingWords, ...newWords])];

    obj.words = allWords.join(' ');
}

function removeWords(obj, wrds) {
    const existingWords = obj.words.split(' ');
    const wordsToRemove = wrds.split(' ');

    const remainingWords = existingWords.filter(word => !wordsToRemove.includes(word));

    obj.words = remainingWords.join(' ');
}

function changeWords(obj, oldWrds, newWrds) {
    const existingWords = obj.words.split(' ');
    const oldWords = oldWrds.split(' ');
    const newWords = new Set(newWrds.split(' '));

    const updatedWords = existingWords.map(word => {
        if (oldWords.includes(word)) {
            return [...newWords][0];
        }
        return word;
    });

    obj.words = updatedWords.join(' ');
}
