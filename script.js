var letra = 'a';
var divs = '';
var barco = '';


//funcion que te da la letra siguiente
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
// var a = 'a';
// a = nextChar(a);


function tablero() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            divs = divs + "<div onmouseover='checkPositionBarcu(this)' id='" + letra + j + "' class='divTablero' "
                    +"ondrop='drop(event)' ondragover='allowDrop(event)'><!-- -" +
                    letra + (j + 1) + "- --><img src='imagenes/mar.png' width='50px' height='50px'></div>";
        }
        letra = nextChar(letra);
        divs = divs + "<br />";
    }
    // Se mostrara el tablero de juego
    document.getElementById("tablero").innerHTML = divs;
}

function checkPositionBarcu(elem){
    elem.id;
}
//ondrop='drop(event)' ondragover='allowDrop(event)'
function barcos() {
    barco = barco + "<table border='1'>";
    barco = barco + "<tr>";
    barco = barco + "<td><div id='qwe' aling='center' draggable='true' ondragstart='drag(event)' > <img src='imagenes/barco1.png' width='50px' height='50px'> </div></td>";
    barco = barco + "<td><div id='qwe1' long='2' ori='h' draggable='true' ondragstart='drag(event)' onclick='orientacion(this);'> <img src='imagenes/barcobarcoh.png' id='ass' width='100px' height='50px'> </div></td>";
    barco = barco + "<td><div id='papelera'><img src='imagenes/papelera.png' width='100px' heigth='50px'></td>";
    barco = barco + '<td><div id="papelera" ondrop="return eliminar(event)" ondragleave="return leave(event)" ondragover="return over(event)" ondragenter="return enter(event)">Papelera</div>';
    barco = barco + "</tr>";
    barco = barco + "</table>";
    document.getElementById("barcos").innerHTML = barco;
}

//cambiar orientacion de la imagen
function orientacion(asd){
    
    //var asd= document.getElementById('qwe1');
    var v = "<img src='imagenes/barcobarcov.png' width='50px' height='100px'>";
    var h = "<img src='imagenes/barcobarcoh.png' width='100px' height='50px'>";
    if(asd.getAttribute('ori')==='h'){
        document.getElementById('qwe1').innerHTML = v;
        asd.setAttribute('ori','v');
    }else{
        document.getElementById('qwe1').innerHTML = h;
        asd.setAttribute('ori','h');
    }
    
 }

//funciones para drag

function allowDrop(ev) {
    ev.preventDefault();
}
var idBarcos = 0;
var orientacionBarco;
var longitudBarco;
function drag(ev) {
    var imagen = ev.target.src;
    ev.dataTransfer.setData("text", imagen);
    
}

function drop(ev) {
    ev.preventDefault();
    
    var elementoArrastrado = document.getElementById(ev.dataTransfer.getData("Data")); // Elemento arrastrado
            elementoArrastrado.parentNode.removeChild(elementoArrastrado); // Elimina el elemento
    
    
    /*
    var elementoArrastrado = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(elementoArrastrado));*/
    
    if(elementoArrastrado=='pepito'){
        //situar dos imatges en les posicions indicades
        
    }

    ev.target.src = imagen;
    ev.target.id = "barquito" + idBarcos;
    idBarcos++;
}
/*
function eliminar(ev){
            var elementoArrastrado = document.getElementById(ev.dataTransfer.getData("Data")); // Elemento arrastrado
            elementoArrastrado.parentNode.removeChild(elementoArrastrado); // Elimina el elemento
            //   http://programandoointentandolo.com/2013/02/arrastrar-y-soltar-en-html5-drag-drop-html5.html
 }*/

function inici() {
//Funcion para refrescar la lista de usuarios
    refrescar();
}
function refrescar() {
        window.setInterval(
                function () {
                    lista();
                }
        , 3000);

    }

// consulta 
function lista() {
   //crear consulta ajax a php que retorne una estructura json con los usuarios conectados
    //indicar la funcion encargada de recibir la respuesta
}



/*
 while($registro=mysql_fetch_array($consulta)){
 if($registro['estado'] == 1){
 
 }
 } 
 
 */