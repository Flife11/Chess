//----Check for collision and movable square ----//
//                                                //                                                 
//                                                //
//------------------------------------------------//  

function chessType(str, x, y) {
    if (str.includes("Xe")) rookCheck();
    if (str.includes("Ma")) knightCheck();
    if (str.includes("Tuong")) bishopCheck();
    if (str.includes("Vua")) kingCheck();
    if (str.includes("Hau")) rookCheck(), bishopCheck();
    if (str.includes("Tot")) pawnCheck();

}

function checkCollisionAndMovable(id) {
    var item = document.getElementById(id);
    if (item.childNodes.length!=0) {
        if (item.childNodes[0].draggable==false) {
            item.classList.add("moveable");
            return false;
        } else return true;
    }
    item.classList.add("moveable");
    return true;
}

function checkColor(id) {
    
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
            var id = `${x+i}${y}`;
            if (!checkCollisionAndMovable(id)) break;
        }
    }

    // move to the left
    for (let i=-1; i>=-7; --i) {
        if (y+i<8 && y+i>=0) {
            var id = `${x+i}${y}`;
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
    var item = document.getElementById(id);
    if (item.isMove==undefined) {
        var id1 = `${x+1}${y}`;
        var id2 = `${x+2}${y}`;
        if (x+1<8) {
            
        }
    }
}