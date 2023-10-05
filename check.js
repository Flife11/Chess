//----Check for collision and movable square ----//
//                                                //                                                 
//                                                //
//------------------------------------------------//  
import { handleDrop } from "./events.js";

export function chessType(str, x, y) {
    if (str.includes("Xe")) rookCheck(x, y);
    if (str.includes("Ma")) knightCheck(x, y);
    if (str.includes("Tuong")) bishopCheck(x, y);
    if (str.includes("Vua")) kingCheck(x, y);
    if (str.includes("Hau")) rookCheck(x, y), bishopCheck(x, y);
    if (str.includes("Tot")) pawnCheck(x, y);
}

function addMovable(item) {
    item.classList.add("moveable");
    item.addEventListener("drop", handleDrop);
}

function checkCollisionAndMovable(id) {
    var item = document.getElementById(id);
    if (item.childNodes.length!=0) {
        if (item.childNodes[0].draggable==false) {
            addMovable(item);
        } 
        return false;
    }
    addMovable(item);
    return true;
}

export function rookCheck(x, y) {

    // move forward
    for (let i=1; i<8; ++i) {
        if (x+i<8 && x+i>=0) {
            var id = `${x+i}${y}`;
            if (!checkCollisionAndMovable(id)) break;
        }
    }

    // move backward
    for (let i=-1; i>=-7; --i) {
        if (x+i<8 && x+i>=0) {
            var id = `${x+i}${y}`;
            if (!checkCollisionAndMovable(id)) break;
        }
    }

    // move to the right
    for (let i=1; i<8; ++i) {
        if (y+i<8 && y+i>=0) {
            var id = `${x}${y+i}`;
            if (!checkCollisionAndMovable(id)) break;
        }
    }

    // move to the left
    for (let i=-1; i>=-7; --i) {
        if (y+i<8 && y+i>=0) {
            var id = `${x}${y+i}`;
            if (!checkCollisionAndMovable(id)) break;
        }
    }
}

export function knightCheck(x, y) {
    const arr = [[1,2], [-1,-2], [-1, 2], [1, -2], [2, 1], [-2, -1], [2, -1], [-2, 1]];
    for (let i=0; i<8; ++i) {
        var dx = arr[i][0];
        var dy = arr[i][1];

        if (y+dy<8 && y+dy>=0 && x+dx<8 && x+dx>=0) {
            var id = `${x+dx}${y+dy}`;    
            checkCollisionAndMovable(id);
        }
    }
}

export function bishopCheck(x, y) {
    // move forward
    for (let i=1; i<8; ++i) {
        if (x+i<8 && x+i>=0 && y+i<8 && y+i>=0) {
            var id = `${x+i}${y+i}`;
            if (!checkCollisionAndMovable(id)) break;
        }
    }

    // move backward
    for (let i=-1; i>=-7; --i) {
        if (x+i<8 && x+i>=0 && y+i<8 && y+i>=0) {
            var id = `${x+i}${y+i}`;
            if (!checkCollisionAndMovable(id)) break;
        }
    }

    // move to the right
    for (let i=1; i<8; ++i) {
        if (x+i<8 && x+i>=0 && y-i<8 && y-i>=0) {
            var id = `${x+i}${y-i}`;
            if (!checkCollisionAndMovable(id)) break;
        }
    }

    // move to the left
    for (let i=-1; i>=-7; --i) {
        if (x+i<8 && x+i>=0 && y-i<8 && y-i>=0) {
            var id = `${x+i}${y-i}`;
            if (!checkCollisionAndMovable(id)) break;
        }
    }
}

export function kingCheck(x, y) {
    const arr = [[1,0], [-1,0], [0,-1], [0,1], [1,1], [-1,1], [1,-1], [-1,-1]];
    for (let i=0; i<8; ++i) {
        var dx = arr[i][0];
        var dy = arr[i][1];

        if (y+dy<8 && y+dy>=0 && x+dx<8 && x+dx>=0) {
            var id = `${x+dx}${y+dy}`;    
            checkCollisionAndMovable(id);
        }
    }
}

export function pawnCheck(x, y) {
    var id = `${x}${y}`;
    var originItem = document.getElementById(id);
    var color = (originItem.childNodes[0].src.includes("Do")) ? "Do" : "Den";
    var x1 = color.includes("Do") ? x+1 : x-1;
    var x2 = color.includes("Do") ? x+2 : x-2;
    var id1 = `${x1}${y}`;
    // Move 1 step
    if (x1<8 && x1>=0) {
        var item = document.getElementById(id1);
        if (item.childNodes.length==0) {
            addMovable(item);
            // Move 2 step
            if (originItem.childNodes[0].isMove===undefined) {
                var id2 = `${x2}${y}`;
                if (x2<8 && x2>=0) {
                    var item = document.getElementById(id2);
                    if (item.childNodes.length==0) addMovable(item);
                }
            }
        }
    }

    // Move diagonally
    var x3 = color.includes("Do") ? x+1 : x-1;
    var y3 = color.includes("Do") ? y-1 : y+1;
    var y4 = color.includes("Do") ? y+1 : y-1;
    var id3 = `${x3}${y3}`;
    var id4 = `${x3}${y4}`;
    if (x3<8 && x3>=0 && y3<8 && y3>=0) {
        var item = document.getElementById(id3);
        if (item.childNodes.length!=0 && item.childNodes[0].src.includes(color)==false) addMovable(item);
    }
    
    if (x3<8 && x3>=0 && y4<8 && y4>=0) {
        var item = document.getElementById(id4);
        if (item.childNodes.length!=0 &&item.childNodes[0].src.includes(color)==false) addMovable(item);
    }
}