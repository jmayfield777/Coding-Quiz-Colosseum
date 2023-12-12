// stores high score button in variable
let scoresBtn = document.querySelector("#view-high-scores");

// get highscores
function printHighScores() {
    
    // retrieves scores from local storage or empty if there are no scores
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // sorts scores and returns them
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    // for each score it creates a list element and appends it to an ordered list to display in the highscores section
    highscores.forEach(function (
        score
    ) {
        let liTag = document.createElement("li");
        liTag.textContent = score.name + " - " + score.score;
        let olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}

// clears previous scores when button is clicked
function clearHighScores() {

    // removes scores from local storage
    window.localStorage.removeItem("highscores");

    // reloads the current document
    window.location.reload();
}

// grabs clear button a makes it a click event assigning it to the clearHighScores function
document.getElementById("clear").onclick = clearHighScores

// runs printHighScores function
printHighScores();