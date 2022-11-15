
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


//CARRITO

let carrito = []


let juegosDivPc = document.getElementById("losJuegosPc");
let juegosDivPs = document.getElementById("losJuegosPs");



//FUNCION CREANDO LAS TARGETAS DE MIS JUEGOS Y AGREGANDO EVENTO AL BOTON DE COMPRA.

function editandoHtml(){
    for (const juego of juegosPc){
        juegosDivPc.innerHTML += `
        <div class="juegos">
            <img src="${juego.imagen}">
            <div class="juegos_texto">
                <h3>${juego.nombreTapa}</h3>
                <p>${juego.precio} $</p>
                <a  id="btn${juego.id}">Comprar</a>
            </div>
        </div>
        `;
    }
    for (const juego of juegosPs){
        juegosDivPs.innerHTML += `
        <div class="juegos">
            <img src="${juego.imagen}">
            <div class="juegos_texto">
                <h3>${juego.nombreTapa}</h3>
                <p>${juego.precio} $</p>
                <a  id="btn${juego.id}">Comprar</a>
            </div>
        </div>
        `;
    }


    //EVENTOS PARA AGREGAR EL JUEGO AL CARRITO

        juegosPc.forEach(juego => {
            document.getElementById(`btn${juego.id}`).addEventListener("click", function(){
                agregarAlCarrito(juego.id);
            })
        })
        juegosPs.forEach(juego => {
            document.getElementById(`btn${juego.id}`).addEventListener("click", function(){
                agregarAlCarrito(juego.id);
            })
        })
    
}

editandoHtml();



//FUNCION PARA AGREGAR LOS JUEGOS AL CARRITO.


function agregarAlCarrito(id){

    const juegoExiste = carrito.some(juego => juego.id === id)
    if (juegoExiste){
        carrito.map(juego => {
            if (juego.id === id){
                juego.cantidad++
            }
        })
        
    }
    else {
        const item  = juegosPc.find((juego) => juego.id === id)
        const item2 = juegosPs.find((juego) => juego.id === id)
        carrito.push(item || item2);
    }



    const juegoNombreId = carrito.find((juego) => juego.id === id)

            Swal.fire({
                position: 'top-end',
                color: 'aqua',
                background: 'rgb(48, 48, 48)',
                imageAlt: juegoNombreId.nombre,
                title: juegoNombreId.nombre,
                icon: 'success',
                imageWidth: 150,
                imageHeight: 100,
                text: '¡ Agregado al carrito !',
                showConfirmButton: false,
                timer: 750
            })
    console.table(carrito);
    
    dibujarCarrito();
    
    vaciarDevolucion();
    
    guardarStorage();

}

//VACIANDO EL CARRITO
let vaciarTodo = document.getElementById("vaciarTodo");

vaciarTodo.addEventListener("click", () => {
    if(carrito.length === 0){
        Swal.fire({
            icon: 'error',
            color: 'rgb(252, 110, 110)',
            background: 'rgb(48, 48, 48)',
            title: `¡ Su carrito esta vacio !`,
            showConfirmButton: false,
            timer: 750
        })
    }
    else{
        carrito.length = 0;
        dibujarCarrito();
        guardarStorage();
    }
})


//FUNCION PARA PINTAR LOS JUEGOS COMPRADOS EN LA TABLA(CARRITO).

const dibujarCarrito = () => {
    let tableBody = document.getElementById("tableBody")
    tableBody.innerHTML = ` `;
    carrito.forEach((juego) => {
        tableBody.innerHTML += `
            <tr>
                <td><span class="tablaNombre">${juego.nombre}</span></td>
                <td>${juego.cantidad}</td>
                <td>${juego.id}</td>
                <td><span class="tablaPrecio">${juego.precio} $</span></td>
                <td><button class="eliminarCarrito" onclick="eliminarDelCarrito(${juego.id})"><img class="eliminarCarritoImg" src="./assets/iconos/contenedor-de-basura.png" alt="contenedorBasura" width="15px"></button></td>
            </tr>
            `;
    })
    
    
    let sumaTotal = document.getElementById("sumaTotal");
        const total = carrito.reduce((acc, juego)=> acc + juego.cantidad * juego.precio,0 );
        sumaTotal.innerHTML = `Total a pagar :  <span class="spanTotal">${total} $</span>`;
        
        if(carrito.length === 0){
            sumaTotal.innerHTML = `Total a pagar : `;
        }

}


//FUNCION PARA ELIMINAR LOS JUEGOS DEL CARRITO UNO POR UNO.

function eliminarDelCarrito(id){
    let juegoId = id;
    const juegoExistente = carrito.some(juego => juego.id === juegoId)
    if (juegoExistente){
        carrito.map(juego => {
            if (juego.id === id){
                if (juego.cantidad > 1){
                    juego.cantidad--
                    
                }
                else if(juego.cantidad === 1){
                    carrito = carrito.filter((juego) => juego.id !== juegoId);
                }
                
            }
            
            
        })
        
    }
    else {
        carrito = carrito.filter((juego) => juego.id !== juegoId);
        
    }

    guardarStorage();

    dibujarCarrito();
    
}



let botonFinal = document.getElementById("botonFinalizar");
let pDevolucion = document.getElementById("parrafoDevolucion");
let tablaHead = document.getElementById("tableHeadDev");
let tablaBody = document.getElementById("tableBodyDev");
let totalFinal = document.getElementById("totalFinal");


botonFinal.addEventListener("click", function(){
    laDevolucion();
})



//FUNCION PARA MOSTRAR LOS RESULTADOS DE LA COMPRA AL FINALIZARLA.

function laDevolucion(){

    
    if(carrito.length === 0){
        Swal.fire({
            icon: 'error',
            color: 'rgb(252, 110, 110)',
            background: 'rgb(48, 48, 48)',
            title: `¡ Su carrito esta vacio !`,
            showConfirmButton: false,
            timer: 750
        })
        vaciarDevolucion();
        guardarStorage();
    }
    else{
        let carritoJuegos = carrito.map((juego) => `${juego.nombre} (${juego.cantidad})`);
    const total = carrito.reduce((acc, juego)=> acc + juego.cantidad * juego.precio,0 );
    pDevolucion.innerHTML = `¡ COMPRA FiNALIZADA! <br> <br>
    Juegos comprados: 
    `;
    tablaHead.innerHTML = `
    <tr>
        <th>Nombre</th>
        <th>Unidades</th>
        <th>Suma</th>
    </tr>
    `;
    for(const juego of carrito){
        tablaBody.innerHTML += `
        <tr>
            <td>${juego.nombre}</td>
            <td>${juego.cantidad}</td>
            <td>${juego.precio * juego.cantidad} $</td>
        </tr>
    `;
    }
    totalFinal.innerHTML = `
    <p>TOTAL A PAGAR:  <span class="spanTotalFinal"> ${total} $</span></p>
    <p> ¡ Gracias por su compra ! </p>
    `;
    carrito.length = 0;
    dibujarCarrito();
    guardarStorage();
    const cantidadJuegos = juegosPc.map((juego) => juego.cantidad = 1) && juegosPs.map((juego) => juego.cantidad = 1);
    }
    
}

function vaciarDevolucion(){
    pDevolucion.innerHTML = ` `;
    tablaHead.innerHTML = ` `;
    tablaBody.innerHTML = ` `;
    totalFinal.innerHTML = ` `;
}


function guardarStorage(){
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    document.addEventListener('DOMContentLoaded', () => {
        carrito = JSON.parse(localStorage.getItem("carrito")) || []
        dibujarCarrito();
    })



// PONIENDO MODO DARK Y LIGHT

let botonDarkLight = document.getElementById(`darkLightBoton`)
modo = localStorage.getItem("modo");

if(modo !== null){
    document.body.className = modo
    if(modo === "darkMode"){
        botonDarkLight.innerText="Light-Mode"
    }
    else{
        botonDarkLight.innerText="Dark-Mode"
    }
}
else{
    modo= "darkMode";
}

botonDarkLight.addEventListener("click", () => {
    if(modo == "darkMode"){
        document.body.className="lightMode";
        botonDarkLight.innerText="Dark-Mode";
        modo="lightMode";
    }else{
        document.body.classList.remove("lightMode")
        botonDarkLight.innerText="Light-Mode"
        modo="darkMode";
    }
    localStorage.setItem("modo", modo)
})











