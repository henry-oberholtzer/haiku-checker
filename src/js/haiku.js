export { silentTrim, Haiku, syllableCount, haikuSplit, haikuSyllableCount };


class Haiku {
    constructor(haikuString) {
        this.haiku = haikuString;
    }


}

const silentTrim = word => {
    let trimmed = word;
    const vowelLength = word.match(/[aeiou]/gi);
    if (vowelLength.length === 1) {
        return word;
    } else if (word.charAt(word.length - 2).match(/[l]/i) && word.charAt(word.length - 1).match(/[aeiouy]/i)) {
        trimmed = word.slice(0, word.length - 1) + "a";
    } else if (word.charAt(word.length - 1).match(/[aeiou]/i)) {
        trimmed = word.slice(0, word.length - 1);
    }
    return trimmed.replace(/[aeiou]{2}/gi, "a");
};

const syllableCount = (word) => {
    let count = 0;
    const letterArray = silentTrim(word).split("");
    letterArray.forEach((letter, i) => {
        if (letter.match(/[aeiou]/i)) {
            count++;
        } else if (letter === "y" && i !== 0 && i !== letterArray.length - 1) {
            count++;
        }
    });
    return count;
};

const haikuSplit = (haiku) => {
    let haikuArray = haiku.split(" ");
    return haikuArray;
};

const haikuSyllableCount = (haiku) => {
    let totalSyllables = 0;
    haikuSplit(haiku).forEach(word => {
        totalSyllables = totalSyllables + syllableCount(word);
        console.log(word);
        console.log(syllableCount(word));
    });
    return totalSyllables;
};
