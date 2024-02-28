//M
let randomNumber1 = 0;
let randomNumber2 = 0;
let result = '';
//V
updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="container">
            <div>${randomNumber1}</div>
            <div>${randomNumber2}</div>
            <div id="results">${result}</div>
            <button id="gameButton">Throw Dice</button>
        </div>
    `;
    document.getElementById('gameButton').addEventListener('click', throwDice);
}
//C
function throwDice() {
    console.log('jeg trykket min knapp');
    randomNumber1 = Math.floor(Math.random() * 100) +1;
    randomNumber2 = Math.floor(Math.random() * 100) +1;
    
    while(randomNumber1 !== randomNumber2) {
        randomNumber1 = Math.floor(Math.random() * 100) +1;
        randomNumber2 = Math.floor(Math.random() * 100) +1;
        console.log(randomNumber1, randomNumber2)
    }
    result = `Like tall funnet! Begge var ${randomNumber1}.`
    updateView()
}