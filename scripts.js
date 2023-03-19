const mainContainer = document.querySelector('#mainContainer');
const divContainer = document.querySelector('#divContainer');


divContainer.style.border = "none";
divContainer.setAttribute('style', 'margin-top: 10px');



const gridButton = document.createElement('button');
mainContainer.insertBefore(gridButton, divContainer);
gridButton.setAttribute('style', 'margin-top: 10px; margin-bottom: 10px; background-color: rgb(300, 200, 140); font-weight: bold');
gridButton.style.height = "30px";
gridButton.style.width = "150px";
gridButton.style.color = 'blue';
gridButton.textContent = 'ADJUST GRID';



//creates div boxes within divContainer
for(i=0; i<256; i++) {
const div = document.createElement('div');
div.style = "flex: 1 1 6%";
div.style.height = "60px";
div.style.border = "1px solid black";
div.setAttribute =('class', 'canvas');
divContainer.appendChild(div);
}


const canvas = document.querySelectorAll('.canvas');




canvas.forEach(div => {
    canvas.addEventListener("mousemove", draw)
})




function draw (e) {
    canvasLine.beginPath();
    canvasLine.lineWidth = '2';
    canvasLine.strokeStyle = 'black';
    canvasLine.stroke();
}



