  <script>
        const grid = document.getElementById('grid');
        function makeGrid() {      
            for (g = 0; g < 256; g++) { 
            let test = document.createElement('grid');
            grid.appendChild(test).className = "grid";
     };
    };  

        makeGrid(16,16);

        function draw() {
            let draw = "black"
    }

        function reSet() {
            document.querySelectorAll(".grid").forEach((e) => e.parentNode.removeChild(e));
        }

        function erase() {
            location.reload();
        }

        function reSize() {
            reSet();
        
            let newGrid = parseInt(prompt("Enter Value", "0"));
            if (newGrid = 1) newGrid < 64; newGrid++; {
                return grid.appendChild(newGrid).className = "grid";
            };
        };
       
          makeGrid(newGrid);
        
        console.log(newGrid);

    document.getElementById("grid").addEventListener("mouseover", draw)

    </script>
