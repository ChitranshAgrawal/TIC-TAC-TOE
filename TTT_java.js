let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let drawContainer = document.querySelector(".draw-container");
let DrawnewGameBtn = document.querySelector("#draw-btn");
let darkPage = document.querySelector(".dark_mode");
let body = document.querySelector("body");

let count = 0;
let turnO = true;

darkPage.addEventListener("click", function() {
    body.classList.toggle("dark-page");
    resetBtn.classList.toggle("dark-reset");
    newGameBtn.classList.toggle("dark-new");
    boxes.forEach((box) => {
        box.classList.toggle("dark-box");
    });
});

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
    drawContainer.classList.add("draw-hide");

    count = 0;
}

boxes.forEach((box) => {
    box.addEventListener("click", function() {
        if (turnO) {
            this.innerText = "O";
            turnO = false;
        } else {
            this.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        count++;
        if (count == 9) {
            drawContainer.classList.remove("draw-hide");
        }

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                for (box of boxes) {
                    box.disabled = true;
                }
            }
        }
    }
}

DrawnewGameBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


















// let pos = 0;

// for (box of boxes) {
//     box.addEventListener ("click", function() {
//         if (pos % 2 == 0) {
//             this.innerText = "X";
//         } else {
//             this.innerText = "O";
//         }
//         pos++;
//     });
// }
