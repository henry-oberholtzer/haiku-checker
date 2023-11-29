export { haikuChecker };

const singleCharacterMatch = (params) => {
    return (characterPosition) => {
        return (regexString) => {
            const regex = new RegExp(`${regexString}`, `${params}`)
            return (word) => {
                const character = word.charAt(word.length - characterPosition)
                return character.match(regex) ? true : false;
            }
        }
    }
}

const caseInsensitiveRegEx = singleCharacterMatch("i");
const secondFromEnd = caseInsensitiveRegEx(2);
const lastCharacter = caseInsensitiveRegEx(1);
const matchTSecond = secondFromEnd("[t]");
const matchEEnd = lastCharacter("[e]");
const matchSEnd = lastCharacter("[s]");
const matchTlSecond = secondFromEnd("[tl]");
const matchKSecond = secondFromEnd("[k]")
const matchESecond = secondFromEnd("[e]")
const matchAeiouEnd = lastCharacter("[aeiou]");
const matchAeiouyEnd = lastCharacter("[aeiouy]");
const matchNotAeiouEnd = lastCharacter("[qwrtypsdfghjklzxcvbnm]");

const sliceEndChar = (word) => word.slice(0, word.length - 1);

const multipleVowelReplace = (word) => word.replace(/(eau)/gi, "a").replace(/[aeiou]{2}/gi, "a");

const noPlurals = (word) => {
    if (matchSEnd(word)) {
        return sliceEndChar(word);
    }
    return word;
};

const silentTrim = (word) => {
    const vowelLength = word.match(/[aeiouy]/gi);
    const resultProcess = multipleVowelReplace;
    const sliceChar = sliceEndChar(word);
    if (vowelLength.length === 1) {
        return word.replace(/[aeiouy]/gi, "a");
    } else if (matchNotAeiouEnd(word) && matchESecond(word)) {
        console.log('poet should be here')
        return resultProcess(word.slice(0, word.length - 2)).concat(word.slice(word.length - 2));
    } else if (matchTSecond(word) && matchEEnd(word)) {
        return resultProcess(sliceChar);
    } else if ((matchTlSecond(word) || matchKSecond(word)) && matchAeiouyEnd(word)) {
        return resultProcess(sliceChar) + "a";
    } else if (matchAeiouEnd(word)) {
        return resultProcess(sliceChar);
    }
    return resultProcess(word);
};




const syllableCount = (word) => {
    let count = 0;
    console.log('im the syllable word', word)
    const letterArray = silentTrim(noPlurals(word)).split("");
    console.log(letterArray)
    letterArray.forEach((letter, i) => {
        if (letter.match(/[aeiou]/i)) {
            count++;
        } else if (letter === "y" && i !== 0 && i !== letterArray.length - 1) {
            count++;
        }
    });
    return count;
};

const wordSplit = (line) => {
    const wordArray = line.split(" ");
    return wordArray;
}


export const lineSplit = (haikuString) => haikuString.match(/[^\r\n]+/g);

const haikuChecker = (haikuString) => {
    const lineArray = lineSplit(haikuString);
    console.log(lineArray);
    const totalSyllableCount = lineArray.map((line) => {
            console.log(line)
            const lineWords = wordSplit(line);
            console.log(lineWords)
            let lineSyllables = 0;
            lineWords.forEach((word) => {
                lineSyllables = lineSyllables + syllableCount(word);
                console.log(lineSyllables)
                console.log(word)
            })
            console.log(lineSyllables)
            return lineSyllables;
        })
    return totalSyllableCount;
}