import * as check from "./check.js"

export function handleDragStart(e) {
    var id = this.parentNode.id
    e.dataTransfer.setData("text/plain", id);
    check.pawnCheck(parseInt(id[0]), parseInt(id[1]));
}   

export function handleDragOver(e) {
    e.preventDefault();
}

export function handleDrop(e) {
    e.preventDefault();
    const items = document.querySelectorAll(".moveable");
    items.forEach(item => {
        item.classList.remove("moveable");
    });

    const id = e.dataTransfer.getData("text/plain");
    const parent = document.getElementById(`${id}`);

    e.target.appendChild(parent.firstChild);
}
