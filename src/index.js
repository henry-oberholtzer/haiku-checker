import { getRandomInt, badHaikuGenerator } from "./js/haiku-generator,js";
import { haikuChecker, lineSplit } from "./js/haiku";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/styles.css';
document.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#input").value;
    haikuAnalysis(input);
});

const haikuAnalysis = (input) => {
    const haikuDiv = document.createElement("div");
    const syllableP = document.createElement("p");
    const mainDiv = document.createElement("div");
    const haikus = document.getElementById("haikus");
    const line1 = document.createElement("p");
    const line2 = document.createElement("p");
    const line3 = document.createElement("p");
    haikus.innerHTML = "";
    if (input === "") {
        line1.append("Do you hear it the");
        line2.append("Silence in the text box here");
        line3.append("For there is nothing");
        haikuDiv.append(line1, line2, line3);
        mainDiv.append(haikuDiv);
        haikus.append(mainDiv);
    } else {
        const syllables = haikuChecker(input);
        const syllableString = `Syllables: ${syllables}`;
        if (syllables !== 17) {
            line1.append("Haiku it is not");
            line2.append("For your syllables were off");
            line3.append("Try again my friend");
            haikuDiv.append(line1, line2, line3);
            syllableP.append(`You wrote ${syllables} syllables`);
            mainDiv.append(haikuDiv, syllableP);
            haikus.append(mainDiv);
        } else {
            const lineArray = lineSplit(input);
            line1.append(lineArray[0]);
            line2.append(lineArray[1]);
            line3.append(lineArray[2]);
            haikuDiv.append(line1, line2, line3);
            syllableP.append(syllableString);
            mainDiv.append(haikuDiv, syllableP);
            haikus.append(mainDiv);
        }
    }
};

document.getElementById("generate").addEventListener("click", () => {
    const comSylVowels = parseInt(document.getElementById("comSylVowels").value) - 1;
    const comSylCons = parseInt(document.getElementById("comSylCons").value) - 1;
    const sylLength = parseInt(document.getElementById("sylLength").value) - 1;
    const wordLength = parseInt(document.getElementById("wordLength").value) - 1;
    const complexSyllableVowels = getRandomInt(comSylVowels);
    const complexSyllableConsonants = getRandomInt(comSylCons);
    const complexSyllablePreference = getRandomInt(sylLength);
    const wordLengthPreference = getRandomInt(wordLength);
    const haiku = badHaikuGenerator(complexSyllableVowels)(complexSyllableConsonants)(complexSyllablePreference)(wordLengthPreference);
    const haikuDiv = document.createElement("div");
    const syllableP = document.createElement("p");
    const mainDiv = document.createElement("div");
    const haikus = document.getElementById("haikus");
    const line1 = document.createElement("p");
    const line2 = document.createElement("p");
    const line3 = document.createElement("p");
    haikus.innerHTML = "";
    line1.append(haiku[0]);
    line2.append(haiku[1]);
    line3.append(haiku[2]);
    haikuDiv.append(line1, line2, line3);
    mainDiv.append(haikuDiv, syllableP);
    haikus.append(mainDiv);
});