function generateButtons() {
    let buttonsNr = document.getElementById('buttonsNr').value;

    if (isNaN(buttonsNr) || buttonsNr < 3 || buttonsNr > 100) {
        alert('Please insert a number greater than 2 and lower than 101');
        return;
    }

    let buttonList = document.getElementById('buttonList');

    buttonList.innerHTML = '';

    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let winnerButtonIndex = generateRandomIntegerInRange(1, buttonsNr);

    for (let i = 1; i <= buttonsNr; ++i) {
        let button = document.createElement('button');
        button.innerHTML = 'Button ' + i;

        if (i === winnerButtonIndex) {
            button.setAttribute('data-winner', 'true');
        }

        button.addEventListener('click', displayText);
        buttonList.appendChild(button);
    }

    function displayText(event) {
        let isWinner = event.target.getAttribute('data-winner') === 'true';

        if (isWinner) {
            let winnerText = document.getElementById("winnerMessage");
            winnerText.style.display = "block";
            setTimeout(function () {
                winnerText.style.display = "none";
            }, 1000);
        } else {
            let regularText = document.getElementById("message");
            regularText.style.display = "block";
            setTimeout(function () {
                regularText.style.display = "none";
            }, 1000);
        }
    }
}