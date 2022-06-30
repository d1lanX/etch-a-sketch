let tamanoActual = 16;
let colorActual = "black";

const contenedor = document.querySelector('.container');
const slider = document.querySelector(".slider");
const valorSlider = document.getElementById("texto");
const btnArcoiris = document.getElementById("arcoiris");
const btnNegro = document.getElementById("negro");

const btnLimpiar = document.getElementById("clear");

btnNegro.addEventListener('click', function(){
    colorActual = "black";
    cambiarColor
})

btnArcoiris.addEventListener('click', function(){
    colorActual = "red";
    cambiarColor
})
btnLimpiar.onclick = () => recargarGrilla();

// El contexto es el que proporciona 'e'
slider.addEventListener('mousemove', function(e){   
    updateSizeValue(e.target.value);
})

slider.addEventListener('change', function(e){
    cambiarTamano(e.target.value);
})

// La caja de texto se actualiza
function updateSizeValue(value){
    valorSlider.textContent = `${value} x ${value}`;
}

function cambiarTamano(value){
    colocarNuevoTamano(value);
    updateSizeValue(value);
    recargarGrilla();
}

function colocarNuevoTamano(tamanoNuevo){
    tamanoActual = tamanoNuevo;     
}

function recargarGrilla(){
    limpiarGrilla();
    crearGrilla(tamanoActual);
}

function limpiarGrilla(){
    contenedor.innerHTML = '';
}



function crearGrilla(numero){
    
    contenedor.style.gridTemplateColumns = `repeat(${numero}, 1fr)`;
    contenedor.style.gridTemplateColumns = `repeat(${numero}, 1fr)`;
    
    for(let i = 0; i < numero * numero; i++){
        const cuadrito = document.createElement("div");
        cuadrito.classList.add("cuadro");
        cuadrito.addEventListener('mouseover', cambiarColor);
        contenedor.appendChild(cuadrito);
    }
};

function cambiarColor(event){
    console.log(colorActual);
    if(colorActual == "black"){
        event.target.style.backgroundColor = "black";
    } 
    if(colorActual == "red"){
        event.target.style.backgroundColor = "red";
    }
}

window.onload = () => {
    crearGrilla(16);
}