import * as events from "./events.js";
import * as check from "./check.js";

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const root = $("#root");

const cheessmans = [
    ["Xe", "Ma", "Tuong", "Hau", "Vua", "Tuong", "Ma", "Xe"],
    ["Tot", "Tot", "Tot", "Tot", "Tot", "Tot", "Tot", "Tot"]
]


function createChessBoard() {
    for (let i=0; i<8; ++i) {
        for (let j=0; j<8; ++j) {
            //-----Create chess square-----//

            // color
            var squareColor = (i+j)%2==0 ? "white" : "black";
            var chessmanColor = i<2 ? "Do" : "Den";

            // create element
            var div =  document.createElement("div");
            div.className = `item ${squareColor}`;
            div.id = `${i}${j}`;

            if (i<2 || i>5) {
                var chessman;
                if (i<2) chessman = cheessmans[i][j];
                else if (i==6) chessman = cheessmans[i-5][j];
                    else chessman = cheessmans[i-7][j];
                var src = `images/${chessman}_${chessmanColor}.png`
                div.innerHTML = `<image class="chessman" src="${src}"></image>`;
            }

            // append element
            root.appendChild(div);
            if (j==7) {
                var br = document.createElement("br");
                root.appendChild(br);
            }
        }
    }
}

function addEventForChessman() {
    const chessmans = $$(".chessman");
    chessmans.forEach(chessman => {
        if (parseInt(chessman.parentNode.id)<=17) chessman.draggable = false;
        chessman.addEventListener("dragstart", events.handleDragStart);
    });
}

function addEventForChessSquare() {
    const squares = $$(".item");
    squares.forEach(square => {
        square.addEventListener("drop", events.handleDrop);
        square.addEventListener("dragover", events.handleDragOver);
    });
}

createChessBoard();
addEventForChessman();
addEventForChessSquare();





