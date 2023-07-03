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


document.querySelector('.regenerate').addEventListener('click', ()=>{
    generateGrid(slider.value);
});

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
document.body.addEventListener('mouseover', (e)=>{
    if(e.target.classList.contains('square')){
        if(colorType !== "black"){
            colorType = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    e.target.style.backgroundColor = colorType;
}});

//for resetting the canvas
const reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
    divs.forEach(div => div.style.backgroundColor = "white");
});

//for slider
var sliderOutput = document.querySelector('.slider_value');
var slider = document.querySelector('.slider');
slider.value = 16;
sliderOutput.innerHTML = slider.value;
slider.oninput = function () {
    sliderOutput.innerHTML = this.value;
}