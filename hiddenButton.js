function generateButtons() {
    let buttonsNr = document.getElementById('buttonsNr').value;

    if (isNaN(buttonsNr) || buttonsNr < 3 || buttonsNr > 100) {
        alert('Please insert a number greater than 2 and lower than 101');
        return;
    }
    
    let buttonList = document.getElementById('buttonList');

    buttonList.innerHTML = '';

    let min = 1;
    let max = buttonsNr;

    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 1; i <= buttonsNr; ++i) {
        let button = document.createElement('button');
        button.innerHTML = 'Button ' + i;
        button.addEventListener('click', displayText);
        buttonList.appendChild(button);
    }
    function displayText() {
        let text = document.getElementById("message");
        text.style.display = "block";
      }

    function displayWinnerMessage() {
        let text = document.getElementById("winnerMessage");
        text.style.display = "block";
      }
    
}