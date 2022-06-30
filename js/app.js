const contenedor = document.querySelector('.container');
const numFilasColumnas = 10;

window.onload = () => {
    crearGrilla(numFilasColumnas);
};

function crearGrilla(numero){
    
    contenedor.style.gridTemplateColumns = `repeat(${numero}, 1fr)`;
    contenedor.style.gridTemplateColumns = `repeat(${numero}, 1fr)`;

    for(let i = 0; i < numero * numero; i++){
        const cuadrito = document.createElement("div");
        cuadrito.classList.add("cuadro");
        cuadrito.style.border = "1px solid red";
        contenedor.appendChild(cuadrito);
    }
}