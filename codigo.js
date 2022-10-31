
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

function editandoHtml(){
    for (const juego of juegosPc){
        juegosDivPc.innerHTML += `
        <div class="juegos">
            <img src="${juego.imagen}">
            <div class="juegos_texto">
                <h3>${juego.nombreTapa}</h3>
                <p>${juego.precio} $</p>
                <a id="btn${juego.id}">Comprar</a>
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
                <a id="btn${juego.id}">Comprar</a>
            </div>
        </div>
        `;
    }


    //EVENTOS

    juegosPc.forEach(juego => {
        document.getElementById(`btn${juego.id}`).addEventListener("click", function(){
            agregarAlCarrito(juego);
        })
    })
    juegosPs.forEach(juego => {
        document.getElementById(`btn${juego.id}`).addEventListener("click", function(){
            agregarAlCarrito(juego);
        })
    })
    
}
editandoHtml();

function agregarAlCarrito(juegoComprado){
    carrito.push(juegoComprado);
    Swal.fire({
        position: 'top-end',
        color: 'aqua',
        background: 'rgb(48, 48, 48)',
        imageAlt: juegoComprado.nombre,
        title: juegoComprado.nombre,
        imageUrl: juegoComprado.imagen,
        imageWidth: 150,
        imageHeight: 100,
        text: 'Agregado al carrito!',
        showConfirmButton: false,
        timer: 850
        })
    console.table(carrito);
    let tableBody = document.getElementById("tableBody")
    tableBody.innerHTML += `
    <tr>
        <td>${juegoComprado.nombre}</td>
        <td>${juegoComprado.id}</td>
        <td>${juegoComprado.precio} $</td>
    </tr>
    `;
    let sumaTotal = document.getElementById("sumaTotal");
    const total = carrito.reduce((acc, juego)=> acc + juego.precio,0 );
    sumaTotal.innerHTML = `Total a pagar :  <span class="spanTotal">${total} $</span>`;
    vaciarDevolucion();
}

let botonFinal = document.getElementById("botonFinalizar");
let pDevolucion = document.getElementById("parrafoDevolucion");

botonFinal.addEventListener("click", function(){
    laDevolucion();
})




function laDevolucion(){
    let carritoJuegos = carrito.map((juego) => juego.nombre);
    const total = carrito.reduce((acc, juego)=> acc + juego.precio,0 );
    pDevolucion.innerHTML = `COMPRA FiNALIZADA! <br> <br>
    Juegos comprados: <br> <span class="juegosComprados">${carritoJuegos.join(" , ")}</span><br> <br>
    Total a pagar: <span class="spanTotal2">${total} $</span> <br> <br>
    Gracias por su compra!`;
    tableBody.innerHTML = `
    `;
    sumaTotal.innerHTML = `Total a pagar : `;
    carrito.length = 0

}

function vaciarDevolucion(){
    pDevolucion.innerHTML = ` `;
}



















