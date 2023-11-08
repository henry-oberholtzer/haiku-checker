export { silentTrim, Haiku}


class Haiku {
    constructor(haikuString) {
        this.haiku = haikuString;
    }

    
}
const silentTrim = word => {
    if(word.match(/[$aeiou]/i)) {
        const trimmed = word.slice(0, word.length - 1);
        return trimmed;
    }
};