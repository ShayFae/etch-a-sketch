const grid = document.getElementById('grid');

function makeGrid() {      
for (g = 0; g < 256; g++) { 
  let test = document.createElement('grid');
  grid.appendChild(test).className = "grid";
    };
};  
makeGrid(16,16); 



 
