const mainContainer = document.querySelector('#mainContainer');
for(i=0; i<16; i++) {
const div = document.createElement('div');
div.style = "flex: 1 1 21%";
div.style.height = "300px";
div.style.border = "1px solid black";
mainContainer.appendChild(div);
}