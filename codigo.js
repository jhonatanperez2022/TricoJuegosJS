
//BIENVENIDO A MI JAVASCRIPT


//MINI COMPRA DE JUEGOS PC Y PLAY STATION PARA LA PRIMER ENTREGA DEL PROYECTO.


//tags de mis juegos para implementar a futuro
/*
elijaJuego == "fifa23" || elijaJuego == "fifa 23" || elijaJuego == "fifa" || elijaJuego == "Fifa 23" || elijaJuego == "Fifa23" || 
    elijaJuego == "gta5" || elijaJuego == "gta 5" || elijaJuego == "Gta5" || elijaJuego == "Gta 5" ||  
    elijaJuego == "call of duty 4" || elijaJuego == "call of duty" || elijaJuego == "Call of duty 4" || elijaJuego == "Call of Duty" ||
    elijaJuego == "resident evil 6" || elijaJuego == "resident evil" || elijaJuego == "Resident evil 6" || elijaJuego == "Residen evil" || 
    elijaJuego == "counter strike go" || elijaJuego == "Counter strike go" || elijaJuego == "Counter Strike GO" || elijaJuego == "counter strike GO" || elijaJuego == "Counter strike GO")
*/




//Declaro los arrays que utilizare


const juegosPc = [
    {nombre: `fifa23`, precio: 150},
    {nombre: `gta5`, precio: 150},
    {nombre: `call of duty 4`, precio: 100},
    {nombre: `resident evil 6`, precio: 80},
    {nombre: `counter strike go`, precio: 120}
];
const juegosPs = [
    {nombre: `the last of us`, precio: 200},
    {nombre: `god of war`, precio: 120},
    {nombre: `ufc 4`, precio: 150},
    {nombre: `uncharted 4`, precio: 120},
    {nombre: `spiderman`, precio: 100}
];
let carrito = []


//A continuacion las dos funciones que haran el trabajo de compra tanto para PC como para PlayStation


//Funcion PC

function compradorPc(){
    let elijaJuego = prompt(`Que juego desea comprar?`);
    let precio = 0;
    if (elijaJuego === "fifa 23" || elijaJuego === "gta 5" || elijaJuego === "call of duty 4" || elijaJuego === "resident evil 6" || elijaJuego === "counter strike go"){
        switch(elijaJuego) {
            case "fifa 23":
            precio = 150;
            break;
            case "gta 5":
            precio = 150;
            break;
            case "call of duty 4":
            precio = 100;
            break;
            case "resident evil 6":
            precio = 80;
            break;
            case "counter strike go":
            precio = 120;
            break;
            default:
            break;
        }
        alert(`Usted ha comprado: ${elijaJuego} - ${precio} $`);
        carrito.push({elijaJuego, precio});
        console.log(carrito);
        
        let deseaSeguir = parseInt(prompt(`Desea seguir comprando? presione:
1 = Si
Otra tecla = No`))
            if (deseaSeguir === 1){
                compradorPc();
            }
            else {
                alert(`Gracias por su compra, a continuacion le mostraremos su carrito!`);
                let elCarro = carrito.map((juegos) => juegos.elijaJuego + "-" + juegos.precio + "$");
                alert(`Carrito final : ${elCarro.join("  -  ")}`);
            }
    }
    
    else if(elijaJuego !== "fifa 23" || elijaJuego !== "gta 5" || elijaJuego !== "call of duty 4" || elijaJuego !== "resident evil 6" || elijaJuego !== "counter strike go") {
        alert(`No contamos con ese juego...`);
        compradorPc();
    }
    
    
}


//Funcion Play Station

function compradorPs(){
    let elijaJuego = prompt(`Que juego desea comprar?`);
    let precio = 0;
    if (elijaJuego === "the last of us" || elijaJuego === "god of war" || elijaJuego === "ufc 4" || elijaJuego === "uncharted 4" || elijaJuego === "spiderman"){
        switch(elijaJuego) {
            case "the last of us":
            precio = 200;
            break;
            case "god of war":
            precio = 120;
            break;
            case "ufc 4":
            precio = 150;
            break;
            case "uncharted 4":
            precio = 120;
            break;
            case "spiderman":
            precio = 100;
            break;
            default:
            break;
        }
        alert(`Usted ha comprado: ${elijaJuego} - ${precio} $`);
        carrito.push({elijaJuego, precio});
        console.log(carrito);
        
        let deseaSeguir = parseInt(prompt(`Desea seguir comprando? presione:
1 = Si
Otra tecla = No`))
            if (deseaSeguir === 1){
                compradorPs();
            }
            else {
                alert(`Gracias por su compra, a continuacion le mostraremos su carrito!`);
                let elCarro = carrito.map((juegos) => juegos.elijaJuego + "-" + juegos.precio + "$");
                alert(`Carrito final : ${elCarro.join("  -  ")}`);
            }
    }
    
    else if(elijaJuego !== "the last of us" || elijaJuego !== "god of war" || elijaJuego !== "ufc 4" || elijaJuego !== "uncharted 4" || elijaJuego !== "spiderman") {
        alert(`No contamos con ese juego...`);
        compradorPs();
    }
    
    
}


//Y finalmente la bienvenida a mi pagina.


alert(`Bienvenido a TricoJuegos: Encontra tu juego, rapido y al mejor precio!`);

let deseaComprar= parseInt(prompt(`Desea comprar? presione:
1-Si
2-No`));
while (deseaComprar !== 1 && deseaComprar !== 2){
    alert(`valor no encontrado, ingrese un valor correcto..`);
    deseaComprar= parseInt(prompt(`Desea comprar? presione:
    1-Si
    2-No`));
}

if (deseaComprar === 1){
    let bienvenida=parseInt(prompt(`Vendemos juegos para las plataformas mas usadas: PC y PlayStation, escoga su plataforma con el numero correspondiente:
    1-PC
    2-PlayStation`));

    while(bienvenida !== 1 && bienvenida !== 2){
        alert(`Ingrese un valor correcto`);

    bienvenida=parseInt(prompt(`Vendemos juegos para las plataformas mas usadas: PC y PlayStation, escoga su plataforma con el numero correspondiente:
1-PC
2-PlayStation`));
    }
    if (bienvenida === 1){
        alert(`A continuacion le mostraremos los juegos de PC disponibles`);
        let listaJuegosPc = juegosPc.map((juego) => juego.nombre + " " + juego.precio + "$");
        alert(`${listaJuegosPc.join(" - ")}`);
        compradorPc();
        const total = carrito.reduce((acc, el) => acc + el.precio, 0)
alert(`El total a pagar es de: ${total} $
Hasta pronto!`);
    }
    else if (bienvenida === 2){
        alert(`A continuacion le mostraremos los juegos de PlayStation disponibles`);
        let listaJuegosPs = juegosPs.map((juego) => juego.nombre + " " + juego.precio + "$");
        alert(`${listaJuegosPs.join(" - ")}`);
        compradorPs();
        const total = carrito.reduce((acc, el) => acc + el.precio, 0)
alert(`El total a pagar es de: ${total} $
Hasta pronto!`);
    }
}
else if(deseaComprar === 2){
    alert(`Gracias por su visita, hasta pronto!`);
}


















