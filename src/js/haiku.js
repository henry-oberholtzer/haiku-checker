export { Haiku };

class Haiku {
    constructor(haikuString) {
        this.haikuString = haikuString;
    }

    syllables() {
        const noPlurals = (word) => {
            if (word.charAt(word.length - 1).match(/[s]/i)) {
                return word.slice(0, word.length - 1);
            }
            return word;
        };
        const silentTrim = word => {
            let trimmed = word;
            const vowelLength = word.match(/[aeiouy]/gi);
            if (vowelLength.length === 1) {
                return word.replace(/[aeiouy]/gi, "a");
            } else if (word.charAt(word.length - 2).match(/[t]/i) && word.charAt(word.length - 1).match(/[e]/i)) {
                trimmed = word.slice(0, word.length - 1);
            } else if (word.charAt(word.length - 2).match(/[tl]/i) && word.charAt(word.length - 1).match(/[aeiouy]/i)) {
                trimmed = word.slice(0, word.length - 1) + "a";
            } else if (word.charAt(word.length - 1).match(/[aeiou]/i)) {
                trimmed = word.slice(0, word.length - 1);
            }
            return trimmed.replace(/(eau)/gi, "a").replace(/[aeiou]{2}/gi, "a");
        };
        const syllableCount = (word) => {
            let count = 0;
            const letterArray = silentTrim(noPlurals(word)).split("");
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
            if (haiku.match(/[aeiouy]/gi)) {
                let totalSyllables = 0;
                haikuSplit(haiku).forEach(word => {
                    totalSyllables = totalSyllables + syllableCount(word);
                });
                return totalSyllables;
            } return 0;
        };
        return haikuSyllableCount(this.haikuString);
    }

    lineSplit() {
        const lineArray = this.haikuString.split(/\r?\n/);
        return lineArray;
    }

    lineSyllable() {
        const lineArray = this.lineSplit(this.haikuString);
        let syllablesPerLine = [];
        lineArray.forEach((line) =>
            syllablesPerLine.push(this.syllables(line)));
        return syllablesPerLine;
    }
}