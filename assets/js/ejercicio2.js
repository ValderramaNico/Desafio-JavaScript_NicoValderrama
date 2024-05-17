const colorBox = document.getElementById("caja")
const colorRed = document.getElementById("btn-1")
const colorOrange = document.getElementById("btn-2")
const colorYellow = document.getElementById("btn-3")
const colorGreen = document.getElementById("btn-4")
const colorTurquoise = document.getElementById("btn-5")
const colorPink = document.getElementById("btn-6")

const botonera = document.getElementById("botonera")

botonera.addEventListener("click", changeColor)



function changeColor(event) {
    console.log(event.target)
    let colorButton = event.target.style.backgroundColor;
    colorBox.style.backgroundColor = colorButton;
}

// colorRed.addEventListener("click", changeColor);
// colorOrange.addEventListener("click", changeColor);
// colorYellow.addEventListener("click", changeColor);
// colorGreen.addEventListener("click", changeColor);
// colorTurquoise.addEventListener("click", changeColor);
// colorPink.addEventListener("click", changeColor);
