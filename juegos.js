//ARRAYS DE JUEGOS 

//PC

const juegosPc = [
    {nombre: `Fifa23`, 
    nombreTapa: `Fifa 23`,
    precio: 150,
    id: 1, 
    imagen: "./assets/img/juegos/fifa23.jpg"},

    {nombre: `Gta5`, 
    nombreTapa: `Gta 5`, 
    precio: 150, 
    id: 2, 
    imagen: "./assets/img/juegos/gtav.jpg"},

    {nombre: `Call of duty 4`, 
    nombreTapa: `COD 4`,
    precio: 100, 
    id: 3, 
    imagen: "./assets/img/juegos/codbo4.jpg"},

    {nombre: `Resident evil 6`, 
    nombreTapa: `RE 6`,
    precio: 80, 
    id: 4,
    imagen: "./assets/img/juegos/residentevil6.jpg"},

    {nombre: `Counter strike go`,
    nombreTapa: `CS GO`,
    precio: 120, 
    id: 5,
    imagen: "./assets/img/juegos/csgo.jpg"}
];

//PLAY STATION

const juegosPs = [
    {nombre: `The last of us`,
    nombreTapa: `TLOU`,
    precio: 200, 
    id: 6,
    imagen: "./assets/img/juegos/thelastofus.jpg"},

    {nombre: `God of war`, 
    nombreTapa: `GOW`,
    precio: 120, 
    id: 7,
    imagen: "./assets/img/juegos/godofwar.jpg"},

    {nombre: `Ufc 4`, 
    nombreTapa: `UFC 4`,
    precio: 150, 
    id: 8,
    imagen: "./assets/img/juegos/ufc4.jpg"},

    {nombre: `Uncharted 4`, 
    nombreTapa: `Unch 4`,
    precio: 120, 
    id: 9,
    imagen: "./assets/img/juegos/uncharted4.png"},

    {nombre: `Spiderman`, 
    nombreTapa: `Spiderman`,
    precio: 100, id: 10,
    imagen: "./assets/img/juegos/spidermanps4.jpg"}
];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("arrayPc", JSON.stringify(juegosPc));
guardarLocal("arrayPs", JSON.stringify(juegosPs));
