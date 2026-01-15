let boxes = document.querySelectorAll('.cell');
let btnReset = document.getElementById('reset-button');
let turnO = true;

const winningCombinations = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.textContent = turnO ? 'O' : 'X';
        box.style.color = turnO ? 'red' : 'blue';
        box.classList.add('disabled');

        turnO = !turnO;
        checkWinner();
    });
});

function checkWinner() {
    for (let [a, b, c] of winningCombinations) {
        if (
            boxes[a].textContent &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[a].textContent === boxes[c].textContent
        ) {
            alert(`Player ${boxes[a].textContent} wins!`);
            disableBoxes();
            return;
        }
    }

    if ([...boxes].every(box => box.textContent)) {
        alert("It's a draw!");
    }
}

function disableBoxes() {
    boxes.forEach(box => box.classList.add('disabled'));
}

function resetGame() {
    boxes.forEach(box => {
        box.textContent = '';
        box.classList.remove('disabled');
    });
    turnO = true;
}

btnReset.addEventListener('click', resetGame);
