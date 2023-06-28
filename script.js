var order = 16;
var canvas = document.querySelector('.canvas');
const generateGrid = function(order) {
    for(var i=1;i<=order;i++){
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