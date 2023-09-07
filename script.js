// model
let app = document.getElementById('app')
let pokemonChosen = false;
let elementChoice = [];
let elementChoiceEnemy = [];
let randomPokemonIndex;
let yourPokemonIndex;
let yourPokemonChoice;
let enemyPokemonChoice;
let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;

// view
updateView();
function updateView() {
    if (pokemonChosen != true) {
        updateViewChoice();
    } else {
        updateViewBattle();
    }
}

function updateViewChoice() {
    app.innerHTML = /*HTML*/`
    <div id="choiceField">
    <div>${winCounter} Wins</div>
    <div>${lossCounter} Losses</div>
    <div>${drawCounter} Draws</div>
        <h2>Pick a pokemon</h2>
        <div id="yourPokemonChoices">
            <div id="charmander" onclick="choosePokemon('./img/charmander.png')"><img src="./img/charmander.png" alt="" /></div>
            <div id="squirtle" onclick="choosePokemon('./img/squirtle.png')"><img src="./img/squirtle.png" alt="" /></div>
            <div id="bulbasaur" onclick="choosePokemon('./img/bulbasaur.png')"><img src="./img/bulbasaur.png" alt="" /></div>
        </div>
    </div>
    `;
}

function updateViewBattle() {
    app.innerHTML = /*HTML*/`
    <div id="battlefield">
        <div id="enemyPokemon"><img src="${enemyPokemonChoice}" alt="" /></div>
        <div id="yourPokemon"><img src="${yourPokemonChoice}" alt="" /></div>
        <button id="resetButton" onclick="resetBattle()">Try again</button>
    </div>
    `;
}

// controller
function choosePokemon(element) {
    pokemonChosen = true;
    elementChoice.splice(0, 1, element);
    yourPokemonChoice = elementChoice[0];
    if (yourPokemonChoice == './img/charmander.png') {
        yourPokemonIndex = 1;
    } else if (yourPokemonChoice == './img/squirtle.png') {
        yourPokemonIndex = 2;
    } else if (yourPokemonChoice == './img/bulbasaur.png') {
        yourPokemonIndex = 3;
    }
    randomPokemon();
    updateView();
    delayAnswer();
}

function randomPokemon() {
    randomPokemonIndex = Math.floor((Math.random() * 3) + 1);
    if (randomPokemonIndex == 1) {
        elementChoiceEnemy.splice(0, 1, './img/cyndaquil.png');
    } else if (randomPokemonIndex == 2) {
        elementChoiceEnemy.splice(0, 1, './img/totodile.png');
    } else if (randomPokemonIndex == 3) {
        elementChoiceEnemy.splice(0, 1, './img/chikorita.png');
    }
    enemyPokemonChoice = elementChoiceEnemy[0];
}

function result() {
    if (randomPokemonIndex == yourPokemonIndex) {
        enemyPokemonChoice = '';
        yourPokemonChoice = '';
        drawCounter++;
        alert('Draw!');
    } else if (
        (randomPokemonIndex == 1 && yourPokemonIndex == 2)
        || (randomPokemonIndex == 2 && yourPokemonIndex == 3)
        || (randomPokemonIndex == 3 && yourPokemonIndex == 1)) {
            enemyPokemonChoice = '';
            winCounter++;
            alert('You win!');
    } else if ((randomPokemonIndex == 1 && yourPokemonIndex == 3)
        || (randomPokemonIndex == 2 && yourPokemonIndex == 1)
        || (randomPokemonIndex == 3 && yourPokemonIndex == 2)) {
            yourPokemonChoice = '';
            lossCounter++;
            alert('You lose!');
    }
    updateView();
}

function delayAnswer(){
    setTimeout(result, 2000)
}

function resetBattle() {
    pokemonChosen = false;
    updateView();
}