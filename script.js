const main = document.querySelector('main');
const button = document.querySelector('button');
const reset = document.querySelector('button.reset-btn');
let childs;
gridinitialize();
button.addEventListener('click', buttonEvent);
function buttonEvent(e) {
    n = prompt("Enter the value(Less than 64)");
    while(n==null || n>64)
    n = prompt("Enter the value(Less than 64)");
    create(n,1);
}
reset.addEventListener('click',colorreset);
function gridinitialize(){
    create(16,0);
}
function create(n,f){
    const griddy = document.createElement('div');
    griddy.className = 'grid-container';
    if(f !== 0){
    main.removeChild(button.nextElementSibling);
    Array.prototype.forEach.call(document.getElementsByClassName('element'),(ele) => ele.remove())};
    main.appendChild(griddy);
    griddy.style.display = 'grid';
    griddy.style.gridTemplateColumns = 'repeat(' + n + ',' + 1 + 'fr)';
    griddy.style.gridTemplateRows = 'repeat(' + n + ',' + 1 + 'fr)';
    for(let i = 0;i<n;i++) {
        for(let j = 0;j<n;j++){
            let y = document.createElement('div');
            y.className = 'element';
            griddy.appendChild(y);
        }
    }
    childs = document.querySelectorAll('div.element');
    listener(childs);
}
function finale(e){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
}
function listener(list){
    list.forEach((el) => el.addEventListener('mouseover',finale));
}
function remove(element){
    Array.prototype.forEach.call(element,(ele) => ele.remove());
}
function colorreset(){
    childs.forEach((ele) => ele.style.backgroundColor = 'white');
}