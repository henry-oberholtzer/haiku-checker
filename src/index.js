import { haikuSyllableCount } from "./js/haiku";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/styles.css';
document.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#input").value;
    const haikuP = document.createElement("p");
    const syllableP = document.createElement("p");
    const mainDiv = document.createElement("div");
    const haikus = document.getElementById("haikus");
    haikus.innerHTML = "";
    if (input.trim() === "") {
        haikuP.append(`Do you hear it the\n Silence in the text box here\n For there is nothing`);
        mainDiv.append(haikuP);
        haikus.append(mainDiv);
    } else {
        const syllables = haikuSyllableCount(input);
        const syllableString = `Syllables: ${syllables}`;
        if (syllables !== 17) {
            haikuP.append(`Haiku it is not\n
        For your syllables were off\n
        Try again my friend`);
            syllableP.append(`You wrote ${syllables} syllables`);
            mainDiv.append(haikuP, syllableP);
            haikus.append(mainDiv);
        } else {
            haikuP.append(input);
            syllableP.append(syllableString);
            mainDiv.append(haikuP, syllableP);
            haikus.append(mainDiv);
        }
    }
});
