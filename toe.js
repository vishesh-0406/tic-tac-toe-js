let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn = true; // true for X's turn, false for O's turn

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turn) {
            box.innerText = "X";
            turn = false;
        }
        else {
            box.innerText = "O";
            turn = true;
        }

        box.disabled = true;

        checkWinner();
    });

});

const checkWinner = () => {

    let winner = false;

    for (let pattern of win) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" &&
            pos1val === pos2val &&
            pos2val === pos3val) {

            winner = true;
            alert(`${pos1val} wins!`);
            boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
});

turn = true;
        }
    }

    if (!winner) {

        let filled = true;

        boxes.forEach((box) => {
            if (box.innerText === "") {
                filled = false;
            }
        });

        if (filled) {
            alert("Match Draw!");

            boxes.forEach((box) => {
                box.innerText = "";
                box.disabled = false;
            });

            turn = true;
        }
    }
};

resetBtn.addEventListener("click", () => {

    turn = true;

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

});