var order = 16;
var canvas = document.querySelector('.canvas');
const generateGrid = function(order) {

    while(canvas.firstChild){ //This removes previously existing grid
        canvas.removeChild(canvas.lastChild);
    }

    for(var i=1;i<=order;i++){ //This actually generates the grid
        var row = document.createElement('div');
        row.classList.add('row');
        for(var j=1;j<=order;j++){
            var cell = document.createElement('div');
            cell.classList.add('square');
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
}

generateGrid(order); //Generates grid with default value when page is launched
