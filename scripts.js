const mainContainer = document.querySelector('#mainContainer');
for(i=0; i<256; i++) {
const div = document.createElement('div');
div.style = "flex: 1 1 6%";
div.style.height = "70px";
div.style.border = "1px solid black";
mainContainer.appendChild(div);
}