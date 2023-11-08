export { silentTrim, Haiku}


class Haiku {
    constructor(haikuString) {
        this.haiku = haikuString;
    }

    
}
const silentTrim = word => {
    let trimmed = word;
    if(word.charAt(word.length - 1).match(/[aeiou]/i)) {
        trimmed = word.slice(0, word.length - 1);
    }
    return trimmed.replace(/[aeiou]{2}/gi, "a");
};

// const syllableCount, () => {

// }

// const haikuSplit, () => {

// }

