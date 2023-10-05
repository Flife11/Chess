import * as check from "./check.js"

export function handleDragStart(e) {
    var id = this.parentNode.id
    e.dataTransfer.setData("text", id);
    check.chessType(this.src, parseInt(id[0]), parseInt(id[1]));
}   

export function handleDragOver(e) {
    e.preventDefault();
}

function switchTurn() {
    const items = document.querySelectorAll(".chessman");
    items.forEach(item => {
        if (item.draggable) item.draggable = false;
        else item.draggable = true;
    });
}

function deleteMovableEffect() {
    const items = document.querySelectorAll(".moveable");
    items.forEach(item => {
        item.classList.remove("moveable");
        item.removeEventListener("drop", handleDrop);
    });
}

export function handleDrop(e) {
    e.preventDefault();

    // Delete movable effect
    deleteMovableEffect();

    // Move the chessman
    const id = e.dataTransfer.getData("text");
    const parent = document.getElementById(`${id}`);
    parent.firstChild.isMove = true;
    if (this.firstChild) this.firstChild.replaceWith(parent.firstChild)
    else e.target.appendChild(parent.firstChild);
    // Switch turn
    switchTurn();
}
