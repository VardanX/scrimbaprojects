let leadingTeam = document.getElementById("opponent-name");
let opponentOneScore = document.getElementById("opponent1-score");
let opponentTwoScore = document.getElementById("opponent2-score");
console.log(opponentOneScore, opponentTwoScore);

let homePointOne = document.getElementById("opponent1-point-1");
let homePointTwo = document.getElementById("opponent1-point-2");
let homePointThree = document.getElementById("opponent1-point-3");

let awayPointOne = document.getElementById("opponent2-point-1");
let awayPointTwo = document.getElementById("opponent2-point-2");
let awayPointThree = document.getElementById("opponent2-point-3");

let resetGame = document.getElementById("restartgame");


homePointOne.addEventListener("click", function() {
    let oldScore = parseInt(opponentOneScore.textContent);
    opponentOneScore.textContent = oldScore + 1;
    leadTeam();
})

homePointTwo.addEventListener("click", function() {
    let oldScore = parseInt(opponentOneScore.textContent);
    opponentOneScore.textContent = oldScore + 2;
    leadTeam();
})

homePointThree.addEventListener("click", function() {
    let oldScore = parseInt(opponentOneScore.textContent);
    opponentOneScore.textContent = oldScore + 3;
    leadTeam();
})

awayPointOne.addEventListener("click", function() {
    let oldScore = parseInt(opponentTwoScore.textContent);
    opponentTwoScore.textContent = oldScore + 1;
    leadTeam();
})

awayPointTwo.addEventListener("click", function() {
    let oldScore = parseInt(opponentTwoScore.textContent);
    opponentTwoScore.textContent = oldScore + 2;
    leadTeam();
})

awayPointThree.addEventListener("click", function() {
    let oldScore = parseInt(opponentTwoScore.textContent);
    opponentTwoScore.textContent = oldScore + 3;
    leadTeam();
})

function leadTeam() {

    if(parseInt(opponentOneScore.textContent) > parseInt(opponentTwoScore.textContent)) {
        leadingTeam.textContent = "Leading Team: Home";
    }else if(parseInt(opponentOneScore.textContent) < parseInt(opponentTwoScore.textContent)) {
        leadingTeam.textContent = "Leading Team: Guest";
    }else if(parseInt(opponentOneScore.textContent) === parseInt(opponentTwoScore.textContent)) {
        leadingTeam.textContent = "Leading Team:  Draw";
    }
}

resetGame.addEventListener("click", function() {
    opponentOneScore.textContent = 0;
    opponentTwoScore.textContent = 0;
    leadTeam();
})


