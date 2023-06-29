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

function toggle(btnElem) {//make sure only one of color buttons is active at a time
    if (!btnElem.classList.contains('active')) {
      document.querySelectorAll('.active').forEach(button => button.classList.remove('active'));
      btnElem.classList.add('active');
      return;
    }  
}

var colorType = "black"; //to make color black by default
document.querySelector('#black').classList.add('active');

//for selecting color type by active button
var color_buttons = document.querySelectorAll('.color_button');
color_buttons.forEach(button => button.addEventListener('click', (e) => {
    colorType = e.target.id;
}));

//for filling the boxes
const divs = document.querySelectorAll('.square');
divs.forEach(div => div.addEventListener('mouseover', (div)=>{ 
    if(colorType !== "black"){
        colorType = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    div.target.style.backgroundColor = colorType;
}));

//for resetting the canvas
const reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
    divs.forEach(div => div.style.backgroundColor = "white");
});