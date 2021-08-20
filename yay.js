/*REWORK ADD EVENTTARGET.EVENTLISTNERS*/
const grid = document.getElementById('grid');
function makeGrid() {      
    for (g = 0; g < 256; g++) { 
    let test = document.createElement('grid');
    grid.appendChild(test).className = "grid";
};
};  

makeGrid(16,16);

function draw() {
    let draw = "black";
}

function reSet() {
    document.querySelectorAll(".grid").forEach((e) => e.parentNode.removeChild(e));
}

function erase() {
    location.reload();
}

function reSize() {
    reSet()
    let nGrid = document.getElementById('grid');
    let newGrid = parseInt(prompt("Enter Value", "0"));
    for(n = 0; n < newGrid; n++) {
        let yes = document.createElement('grid');
        return grid.appendChild(yes).className = "grid";
    }
}

document.getElementById("grid").addEventListener("mouseover", draw);



/*function reSize() {
reSet()
let nGrid = document.getElementById('grid');
let newGrid = parseInt(prompt("Enter Value", "0"));
for(n = newGrid; n < 256; newGrid++) {
let yes = document.createElement('grid');
return grid.appendChild(yes).className = "grid";
}
}
makeGrid(newGrid);

console.log(newGrid);*/ 


/*function reSize(newGrid) {
    reSet();

    let newGrid = parseInt(prompt("Enter Value", "0"));
    if(i = 1; i < 64; i++); {
        return grid.appendChild(newGrid).className = "grid";
    };
};
    /*while(isNaN(newGrid) || newGrid < 0 || newGrid > 64) {
    newGrid = parseInt(prompt('Input Value, max is 64'));
    
}*/