let optionRock = document.getElementById("optionRock");
let optionPaper = document.getElementById("optionPaper");
let optionScissor = document.getElementById("optionScissor");
let resultado = document.getElementById("result");
let wins = document.getElementById("wins");
let loses = document.getElementById("loses");
let draws = document.getElementById("draws");
let rock = 1;
let paper = 2;
let scissors = 3;
let selection;
let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;

function takeRival ()
{
    let rival = Math.floor(Math.random()*3+1);
    resultCheck(selection, rival);
}
function resultCheck (selection, rival)
{
    if(selection == rival)
    {
        resultado.innerHTML = "Draw!";
        drawCounter++;
        updateMarker()
    }
    else if (selection == 1 && rival == 3)
    {
        resultado.innerHTML = "You Win!";
        winCounter++;
        updateMarker()
    }
    else if (selection == 2 && rival == 1)
    {
        resultado.innerHTML = "You Win!"
        winCounter++;
        updateMarker()
    }
    else if (selection == 3 && rival == 2)
    {
        resultado.innerHTML = "You Win!"
        winCounter++;
        updateMarker()
    }
    else
    {
        resultado.innerHTML = "You Lose :("
        loseCounter++;
        updateMarker()
    }
}

function updateMarker ()
{
    wins.innerHTML = `${winCounter}`;
    loses.innerHTML = `${loseCounter}`;
    draws.innerHTML = `${drawCounter}`;
}

optionRock.addEventListener("click", () => {selection = rock; takeRival();});
optionPaper.addEventListener("click", () => {selection = paper; takeRival();});
optionScissor.addEventListener("click", () => {selection = scissors; takeRival();});