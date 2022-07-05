const main_container = document.createElement('div'); // Creacion del main-container
main_container.classList.add('main-container');
document.body.append(main_container);

const container = document.createElement('div');
container.classList.add('container');   // Creacion del container de la cuadricula
main_container.append(container);

const opciones = document.createElement('div');
opciones.classList.add('opciones');    // Creacion del container de las opciones
main_container.append(opciones);

const titulo = document.createElement('h1');   // Creacion del titulo
titulo.style.fontFamily = "monospace";
titulo.style.textAlign = "center";
titulo.textContent = "Trata de dibujar algo :)";
opciones.append(titulo);

const range = document.createElement('input');
range.setAttribute('id', 'slider');
range.setAttribute('type', 'range');   
range.setAttribute('min', 2);
range.setAttribute('max', 100);   // Creacion del range slider
range.setAttribute('step', 1);
range.setAttribute('value', 16);
range.style.accentColor = "black";
opciones.append(range);

const valorRange = document.createElement('p');  // Creacion del parrafo con valor de la cuadricula
valorRange.style.fontFamily = "monospace";
valorRange.textContent = `${range.value} x ${range.value}`;
opciones.append(valorRange);

const btnBorrar = document.createElement('button');
btnBorrar.style.fontFamily = "monospace";
btnBorrar.textContent = "Borrar";    // Creacion del boton para borrar
opciones.append(btnBorrar);

const btnRainbow = document.createElement('button');  // Creacion del boton de colores
btnRainbow.style.background = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)";
btnRainbow.style.height = "50px";
btnRainbow.style.borderRadius = "10px";
opciones.append(btnRainbow);

const btnBlack = document.createElement('button');
btnBlack.style.backgroundColor = "black";    // Creacion del boton negro
btnBlack.style.height = "50px";
btnBlack.style.borderRadius = "10px";
opciones.append(btnBlack);

const btnWhite = document.createElement('button');
btnWhite.style.backgroundColor = "white";   // Creacion del boton blanco
btnWhite.style.height = "50px";
btnWhite.style.boxShadow = "var(--sombra)";
btnWhite.style.borderRadius = "10px";
opciones.append(btnWhite);

const btnDownload = document.createElement('button');
btnDownload.style.fontFamily = "monospace"; 
btnDownload.style.background = "linear-gradient(white, beige)";
btnDownload.style.boxShadow = "var(--sombra)";
btnDownload.style.height = "50px";       // Creacion del boton de descargar
btnDownload.style.borderRadius = "10px";
btnDownload.textContent = "Descargar";
opciones.append(btnDownload);

// -=--=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- \\

let numeroCuadricula = 16;
let colorActual = "black";
let contador = 0;

range.oninput = (e) => actualizarTexto(e);
range.onchange = (e) => cambiarNumero(e.target.value);
btnBorrar.onclick = () => borrarCuadricula();
btnRainbow.onclick = () => nuevoColor("rainbow");
btnBlack.onclick = () => nuevoColor("black");
btnWhite.onclick = () => nuevoColor("white");

function nuevoColor(color) {
    colorActual = color;
}

function cambiarNumero(num){
    numeroCuadricula = num;
    borrarCuadricula();
}

function borrarCuadricula(){
    container.innerHTML = '';
    crearCuadricula(numeroCuadricula);
}

function actualizarTexto(e){
    valorRange.textContent = `${e.target.value} x ${e.target.value}`;
}

function crearCuadricula(num){
    const cuadrosTotales = num * num; // El total de cuadros que va a tener toda la cuadricula
    
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    for(let i = 0; i < cuadrosTotales; i++){
        const cuadro = document.createElement('div'); // Se crea(n) los cuadritos
        cuadro.style.border = "1px solid gray";
        cuadro.addEventListener('mouseover', cambiarColor); // Cuando el mouse este encima, -> cambiarColor
        container.append(cuadro);
    }
}

function cambiarColor(e){

    if(contador < 6){
        contador++;
    } else{
        contador = 0;
    }

    if(colorActual == "black"){
        e.target.style.backgroundColor = "black";
    } 
    else if(colorActual == "rainbow"){

        let colores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        e.target.style.backgroundColor = `${colores[contador]}`;
        
    }
    else if(colorActual == "white"){
        e.target.style.backgroundColor = "white";
    }
    
}

crearCuadricula(numeroCuadricula);