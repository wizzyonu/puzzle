const puzzleGrid = document.getElementById('puzzle-grid');
const checkButton = document.getElementById('check-button');
const feedback = document.getElementById('feedback');

const solution = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let puzzle = generatePuzzle();

function generatePuzzle() {
    let newPuzzle = [...solution];
    // Mask some numbers (replace with empty strings)
    let indicesToMask = [0, 2, 4, 6, 8];
    indicesToMask.forEach(index => newPuzzle[index] = '');
    return newPuzzle;
}

function displayPuzzle() {
    puzzleGrid.innerHTML = '';
    for (let i = 0; i < puzzle.length; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.value = puzzle[i];
        input.disabled = puzzle[i] !== ''; // Disable input if it's part of the initial puzzle
        puzzleGrid.appendChild(input);
    }
}

function checkSolution() {
    let inputs = puzzleGrid.querySelectorAll('input');
    let userSolution = Array.from(inputs).map(input => parseInt(input.value));

    if (arraysEqual(userSolution, solution)) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'FUCK OFF. Try again!';
        feedback.style.color = 'red';
    }
}

function arraysEqual(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

checkButton.addEventListener('click', checkSolution);
displayPuzzle();
