// Starts the division of the squares
const container = document.querySelector('#container');

let squares;

function createGrid(num) {
    if (num > 100) {
        alert ("Its too much! Reverting to 16");
        num = 16;
    }
    for (let i = 0; i < num; i++) {
        const squareRow = document.createElement('div');
        squareRow.classList.add('squareRow');
        squareRow.setAttribute('id', `row${i}`);
        for (let j = 0; j < num; j++) {
            const square = document.createElement('div')
            square.classList.add('square');
            square.setAttribute('id', `square${i}${j}`);
            squareRow.appendChild(square);
        }
        container.appendChild(squareRow);
    }

    squares = document.querySelectorAll('[id^="square"]');
    squares.forEach(square => console.log(square));
    squares.forEach(square => square.addEventListener('mouseenter', changeColor));
}



function deleteGrid() {
    squares.forEach(square => document.getElementById(square.id).remove());
    const rows = document.querySelectorAll('[id^="row"]');
    rows.forEach(row => document.getElementById(row.id).remove());
}

function changeColor(e) {
    e.target.classList.add('covered');
}

const btn = document.querySelector('#changeSize');
console.log(btn);
btn.addEventListener('click', changeGrid);

function changeGrid() {
    let ans = prompt("How many pixels do you want per row?")
    deleteGrid();
    createGrid(parseInt(ans));
}

createGrid(16);
