function makeRed() {
    document.body.style.background='red'
}

//handle blue button click me
const blueButton = document.getElementById("blue-button");
//console.log('blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor='blue'
}

//handle event using anonymous function

const greenButton = document.getElementById("make-green-button");
greenButton.onclick = function() {
    document.body.style.background='green'
}

const blackButton = document.getElementById("black-button");
blackButton.addEventListener("click", makeBlack);
function makeBlack() {
     document.body.style.background='black'
}
 //addEventListener
const hotPink = document.getElementById("hot-pink");
hotPink.addEventListener('click', function makePink() {
    document.body.style.background="hotpink"
})
console.log(hotPink);

//direct shortcut
document.getElementById("lightBlue").addEventListener('click', function () {
    document.body.style.background='lightBlue'
});

document.getElementById("khaki").addEventListener("click", function () {
  document.body.style.background = "khaki";
});

document.getElementById('green').addEventListener('click', function () {
    document.body.style.background='navy'
})