function makeGrid() {
    for(g = 0; g < 16; g++) {
        document.createElement('div');
        grid.className = "test";

        document.getElementById('grid').appendChild('grid');
        /*const ele = document.getElementById('grid');
        const node = document.createTextNode('One');
        ele.appendChild(node);*/
    }
}

function makeGrid2() {
    const div = document.createElement('div');
    div.classList.add('box');
    return div;
}




/*const container = document.getElementById("container")

    function basicGrid() {
        makeRows(16);
        makeColumns(16);
    }*/

    /*function gridMake() {
        let s = "";
        for(g = 0; g <= 16; g++) { 
            s += '<div id="container">'

        }
    }
    container.innerHTML= s;*/

    
    
    /*function makeGrid() {
    const div = document.createElement("div");
    document.getElementById("grid").appendChild("div");
    
    
    /*if (div < 16, div++); {
         16 * div;
         return div;
        } /*else if ( g = 16){
            return g;
    }

    console.log(div);*/





/*
function create(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid";

    }

}

create(16, 16);*/



 