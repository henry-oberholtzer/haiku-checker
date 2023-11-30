import { Haiku } from "./js/haiku";
import { getRandomInt, badHaikuGenerator } from "./js/haiku-generator,js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/styles.css';
document.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = new Haiku(document.querySelector("#input").value.trim());
    printHaikuAnalysis(input);
});

const printHaikuAnalysis = (input) => {
    const haikuDiv = document.createElement("div");
    const syllableP = document.createElement("p");
    const mainDiv = document.createElement("div");
    const haikus = document.getElementById("haikus");
    const line1 = document.createElement("p");
    const line2 = document.createElement("p");
    const line3 = document.createElement("p");
    haikus.innerHTML = "";
    if (input.haikuString === "") {
        line1.append("Do you hear it the");
        line2.append("Silence in the text box here");
        line3.append("For there is nothing");
        haikuDiv.append(line1, line2, line3);
        mainDiv.append(haikuDiv);
        haikus.append(mainDiv);
    } else {
        const syllables = input.syllables();
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
            const lineArray = input.lineSplit();
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
    const complexSyllableVowels = getRandomInt(2);
    const complexSyllableConsonants = getRandomInt(2);
    const wordLengthPreference = getRandomInt(4);
    const haiku = badHaikuGenerator(complexSyllableVowels)(complexSyllableConsonants)(wordLengthPreference);
    const input = new Haiku(haiku);
    printHaikuAnalysis(input);
});