const express = require('express')//esta linea dice que necesita express, fremework que utilizamos para node!
const cors = require('cors'); // Importa el paquete cors
const app = express();//inicializa la aplicacion
const port = 3000//en el puerto la cual se inicializa
app.use(cors());
const productos = [
    //Relojes Hombre:    
    {
        id: "reloj-1",
        titulo: "Lacoste Black",
        imagen: "img/RelojesH/01.jpeg",
        descripcion: "Malla de silicona",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 19999
    },
    {
        id: "reloj-2",
        titulo: "Lacoste White",
        imagen: "img/RelojesH/02.jpeg",
        descripcion: "Malla de silicona",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 19999
    },
    {
        id: "reloj-5",
        titulo: "Adidas Black",
        imagen: "img/RelojesH/05.jpeg",
        descripcion: "Malla de silicona",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 19999
    },
    {
        id: "reloj-6",
        titulo: "Quartz Blanco",
        imagen: "img/RelojesH/06.jpeg",
        descripcion: "Malla metalica",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 22999
    },
    {
        id: "reloj-7",
        titulo: "Tommy Hilfiger",       
        descripcion: "Malla metalica, fondo negro",
        imagen: "img/RelojesH/07.jpeg",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 22999
    },
    {
        id: "reloj-8",
        titulo: "Tommy Hilfiger",
        imagen: "img/RelojesH/08.jpeg",
        descripcion: "Blanco, malla de silicona",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 19999
    },
    {
        id: "reloj-9",
        titulo: "Romano",
        imagen: "img/RelojesH/09.jpeg",
        descripcion: "Malla de Acero",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 23999
    },
    {
        id: "reloj-10",
        titulo: "Fila 1",
        imagen: "img/RelojesH/11.jpeg",
        descripcion: "Malla de silicona",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 19999
    },
    {
        id: "reloj-11",
        titulo: "Fila 2",
        imagen: "img/RelojesH/12.jpeg",
        descripcion: "Malla de silicona",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 19999
    },
    {
        id: "reloj-15",
        titulo: "Lacoste",
        imagen: "img/RelojesH/15.jpeg",
        descripcion: "Malla de Acero",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 23999
    },
    {
        id: "reloj-16",
        titulo: "Yageer",
        imagen: "img/RelojesH/16.jpeg",
        descripcion: "Negro, Malla de Acero",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 23999
    },
    {
        id: "reloj-17",
        titulo: "Magnus",
        imagen: "img/RelojesH/17.jpeg",
        descripcion: "Malla de Cuero",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 19999
    },
    {
        id: "reloj-18",
        titulo: "Reloj LLanta",
        imagen: "img/RelojesH/18.jpeg",
        descripcion: "Disco Rojo, Malla de Acero",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 27999
    },
    {
        id: "reloj-19",
        titulo: "Valix",
        imagen: "img/RelojesH/19.jpeg",
        descripcion: "Malla de Cuero",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 19999
    },
    {
        id: "reloj-20",
        titulo: "Yageer",
        imagen: "img/RelojesH/20.jpeg",
        descripcion: "Negro F.Blanco, Malla de Cuero",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 21999
    },
    {
        id: "reloj-21",
        titulo: "Romano",
        imagen: "img/RelojesH/21.jpeg",
        descripcion: "Malla de Cuero",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 19999
    },
    {
        id: "reloj-22",
        titulo: "Omega",
        imagen: "img/RelojesH/22.jpeg",
        descripcion: "Celeste, Malla de silicona",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 27999
    },
    {
        id: "reloj-23",
        titulo: "Yageer",
        imagen: "img/RelojesH/23.jpeg",
        descripcion: "Negro Completo, Malla de cuero",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 27999
    },
    {
        id: "reloj-24",
        titulo: "Omega",
        imagen: "img/RelojesH/24.jpeg",
        descripcion: "Azul, Malla de cuero y cierre de abrojo",
        categoria: {
            nombre: "Relojes",
            id: "relojesH"
        },
        precio: 27999
    },
    
    //Relojes Mujer:-------------------------------------------------------
    {
        id: "reloj-3",
        titulo: "Katty",
        imagen: "./img/RelojesD/03.jpeg",
        descripcion: "Rosa, Malla de Cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-4",
        titulo: "Flower black",
        imagen: "./img/RelojesD/04.jpeg",
        descripcion: "Negro F.blanco, Malla de Cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-5",
        titulo: "Reini",
        imagen: "./img/RelojesD/05.jpeg",
        descripcion: "Rosa claro, Malla de Cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-6",
        titulo: "Gyda",
        imagen: "./img/RelojesD/06.jpeg",
        descripcion: "Blanco, F.Floreado, Malla de Cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },    
    {
        id: "reloj-8",
        titulo: "Carol",
        imagen: "./img/RelojesD/08.jpeg",
        descripcion: "Rojo F.Blanco, Malla de Cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-9",
        titulo: "Cat",
        imagen: "./img/RelojesD/09.jpeg",
        descripcion: "Beige, F.gatito, Malla de cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-10",
        titulo: "Flower",
        imagen: "./img/RelojesD/10.jpeg",
        descripcion: "Celeste Claro, F.Flor, Malla Cuero Reforzada",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-11",
        titulo: "Fancy",
        imagen: "./img/RelojesD/11.jpeg",
        descripcion: "Negro, Malla cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-12",
        titulo: "Jazz",
        imagen: "./img/RelojesD/12.jpeg",
        descripcion: "Marron Claro, F.Estrella, Malla de Cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-13",
        titulo: "Marge",
        imagen: "./img/RelojesD/13.jpeg",
        descripcion: "F.Blanco, Malla Metalica",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 19999
    },
    {
        id: "reloj-14",
        titulo: "Paris",
        imagen: "./img/RelojesD/14.jpeg",
        descripcion: "Blanco, Malla de Cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-15",
        titulo: "Paris",
        imagen: "./img/RelojesD/15.jpeg",
        descripcion: "Negro, Malla de cuero",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 16999
    },
    {
        id: "reloj-16",
        titulo: "Animal Print",
        imagen: "./img/RelojesD/16.jpeg",
        descripcion: "Animal print, Malla de silicona",
        categoria: {
            nombre: "RelojesD",
            id: "relojesD"
        },
        precio: 14999
    },
    //Estuches:---------------------------------------------------------
    
    {
        id: "estuche-1",
        titulo: "Estuche Unitario",
        imagen: "./img/estuches/01.jpeg",
        descripcion: "Caja Estuche Unitario",
        categoria: {
            nombre: "Estuches",
            id: "estuches"
        },
        precio: 2499
    },
    {
        id: "estuche-2",
        titulo: "Estuche Organizador",
        imagen: "./img/estuches/02.jpeg",
        descripcion: "",
        categoria: {
            nombre: "Estuches",
            id: "estuches"
        },
        precio: 42999
    },
    //Pulseras:---------------------------------------------------------
    
    {
        id: "pulsera-1",
        titulo: "León",
        imagen: "./img/pulseras/01.jpeg",
        descripcion: "Pulsera Perlas blancas, dije de León",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 3499
    },
    {
        id: "pulsera-2",
        titulo: "Gladiador",
        imagen: "./img/pulseras/02.jpeg",
        descripcion: "Pulsera Perlas blancas, dije de Gladiador",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 3499
    },
    {
        id: "pulsera-3",
        titulo: "King",
        imagen: "./img/pulseras/03.jpeg",
        descripcion: "Pulsera Perlas Negras, dije de Corona",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 3499
    },
    {
        id: "pulsera-4",
        titulo: "Ancla",
        imagen: "./img/pulseras/04.jpeg",
        descripcion: "Pulsera Perlas Negras, dije de Ancla",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 3499
    },
    //Perfumes Hombre:--------------------------------------------------
    {
        id: "perfume-1",
        titulo: "Eros Versacce",
        imagen: "./img/perfumesH/01.jpeg",
        descripcion: "100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 18999
    },
    {
        id: "perfume-2",
        titulo: "Bad Boy",
        imagen: "./img/perfumesH/02.jpeg",
        descripcion: "100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 21999
    },
    {
        id: "perfume-3",
        titulo: "One Million Prive",
        imagen: "./img/perfumesH/03.jpeg",
        descripcion: "100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 21999
    },
    {
        id: "perfume-4",
        titulo: "Lata Eros Versacce",
        imagen: "./img/perfumesH/04.jpeg",
        descripcion:"Perfume Eros Versacce + Reloj a eleccion",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 32999
    },
    {
        id: "perfume-5",
        titulo: "Invictus Legend",
        imagen: "./img/perfumesH/05.jpeg",
        descripcion: "100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 16999
    },
    {
        id: "perfume-6",
        titulo: "Invictus Victory",
        imagen: "./img/perfumesH/06.jpeg",
        descripcion: "100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 16999
    },
    {
        id: "perfume-7",
        titulo: "Phantom Black",
        imagen: "./img/perfumesH/07.jpeg",
        descripcion: "100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 16999
    },
    {
        id: "perfume-8",
        titulo: "Polo Blue",
        imagen: "./img/perfumesH/08.jpeg",
        descripcion:"90ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 16999
    },
    {
        id: "perfume-9",
        titulo: "invictus",
        imagen: "./img/perfumesH/09.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 16999
    },
    {
        id: "perfume-10",
        titulo: "Aqcua Di Gio",
        imagen: "./img/perfumesH/10.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 16999
    },
    {
        id: "perfume-11",
        titulo: "Sauvage",
        imagen: "./img/perfumesH/11.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 16999
    },
    {
        id: "perfume-12",
        titulo: "Le Male Blue",
        imagen: "./img/perfumesH/12.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 16999
    },
    {
        id: "perfume-13",
        titulo: "Phantom",
        imagen: "./img/perfumesH/13.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 16999
    },
    {
        id: "perfume-14",
        titulo: "Bad Boy Superstars",
        imagen: "./img/perfumesH/14.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 21999
    },
    {
        id: "perfume-15",
        titulo: "One Million",
        imagen: "./img/perfumesH/15.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 21999
    },
    {
        id: "perfume-16",
        titulo: "invictus Elixir 35ml",
        imagen: "./img/perfumesH/16.jpeg",
        descripcion:"35ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 7999
    },
    {
        id: "perfume-17",
        titulo: "Invictus Legend",
        imagen: "./img/perfumesH/17.jpeg",
        descripcion:"35ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 7999
    },
    {
        id: "perfume-18",
        titulo: "Bad Boy Cobalt",
        imagen: "./img/perfumesH/18.jpeg",
        descripcion:"35ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 7999
    },
    {
        id: "perfume-19",
        titulo: "Armani Code",
        imagen: "./img/perfumesH/19.jpeg",
        descripcion:"35ml",
        categoria: {
            nombre: "PerfumesH",
            id: "perfumesH"
        },
        precio: 7999
    },
    //Perfumes Damas:------------------------------------------------
    {
        id: "perfume-1",
        titulo: "Good Girl Black",
        imagen: "./img/perfumesD/01.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 21999
    },
    {
        id: "perfume-2",
        titulo: "La Vie Est Belle",
        imagen: "./img/perfumesD/02.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 16999
    },
    {
        id: "perfume-3",
        titulo: "Lata Olympea",
        imagen: "./img/perfumesD/03.jpeg",
        descripcion:"Perfume de 100ml, + Reloj",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 32999
    },
    {
        id: "perfume-4",
        titulo: "Mom paris",
        imagen: "./img/perfumesD/04.jpeg",
        descripcion:"30ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 10999
    },
    {
        id: "perfume-5",
        titulo: "Scandal",
        imagen: "./img/perfumesD/05.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 16999
    },
    {
        id: "perfume-6",
        titulo: "Amor amor Sunrise",
        imagen: "./img/perfumesD/06.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 16999
    },
    {
        id: "perfume-7",
        titulo: "212 Heroes Vip",
        imagen: "./img/perfumesD/07.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 24999
    },
    {
        id: "perfume-8",
        titulo: "Good Girl White",
        imagen: "./img/perfumesD/08.jpeg",
        descripcion:"100ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 21999
    },
    {
        id: "perfume-9",
        titulo: "Jadore",
        imagen: "./img/perfumesD/09.jpeg",
        descripcion:"35ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 7999
    },
    {
        id: "perfume-10",
        titulo: "Mom Paris",
        imagen: "./img/perfumesD/10.jpeg",
        descripcion:"35ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 7999
    },
    {
        id: "perfume-11",
        titulo: "Amor Amor Sunrise",
        imagen: "./img/perfumesD/11.jpeg",
        descripcion:"35ml",
        categoria: {
            nombre: "PerfumesD",
            id: "perfumesD"
        },
        precio: 7999
    },
    //Billeteras Hombre:------------------------------------------------
    {
        id: "billetera-3",
        titulo: "Lacoste",
        imagen: "./img/billeterasH/03.jpeg",
        descripcion:"Billetera Lacoste Negra",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 12499
    },
    {
        id: "billetera-4",
        titulo: "Tommy Hilfiger",
        imagen: "./img/billeterasH/04.jpeg",
        descripcion:"Billetera Tommy Hilfiger Negra",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 12499
    },
    {
        id: "billetera-5",
        titulo: "Adidas",
        imagen: "./img/billeterasH/05.jpeg",
        descripcion:"Billetera Adidas Marron",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 12499
    },
    {
        id: "billetera-6",
        titulo: "Puma",
        imagen: "./img/billeterasH/06.jpeg",
        descripcion:"Billetera Puma Marron",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 12499
    },
    {
        id: "billetera-7",
        titulo: "Daiqisi",
        imagen: "./img/billeterasH/07.jpeg",
        descripcion:"Billetera Daiqisi Negra",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 12499
    },
    {
        id: "billetera-8",
        titulo: "Fashion",
        imagen: "./img/billeterasH/08.jpeg",
        descripcion:"Billetera Fashion Marron",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 9999
    },
    {
        id: "billetera-9",
        titulo: "Fashion",
        imagen: "./img/billeterasH/09.jpeg",
        descripcion:"Billetera Fashion Negra",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 9999
    },
    {
        id: "billetera-10",
        titulo: "Calvin Klein",
        imagen: "./img/billeterasH/10.jpeg",
        descripcion:"",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 12499
    },
    {
        id: "billetera-11",
        titulo: "River Plate",
        imagen: "./img/billeterasH/01.jpeg",
        descripcion:"Billetera Clubes (River)",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 9999
    },
    {
        id: "billetera-12",
        titulo: "Boca Juniors",
        imagen: "./img/billeterasH/02.jpeg",
        descripcion:"Billetera Clubes (Boca)",
        categoria: {
            nombre: "BilleterasH",
            id: "billeterasH"
        },
        precio: 9999
    },
    
    //Billeteras Damas:
    {
        id: "billetera-1",
        titulo: "Fashion",
        imagen: "./img/billeterasD/01.jpeg",
        descripcion: "Billetera dama, Blanca",
        categoria: {
            nombre: "BilleterasD",
            id: "billeterasD"
        },
        precio: 12499
    },
    {
        id: "billetera-2",
        titulo: "Fashion",
        imagen: "./img/billeterasD/02.jpeg",
        descripcion: "Billetera dama, Negra",
        categoria: {
            nombre: "BilleterasD",
            id: "billeterasD"
        },
        precio: 12499
    },
    //Gorras:
    {
        id: "gorra-1",
        titulo: "New York NY",
        imagen: "./img/gorras/01.jpeg",
        descripcion: "Color Gris",
        categoria: {
            nombre: "Gorras",
            id: "gorras"
        },
        precio: 9999
    },
    {
        id: "gorra-2",
        titulo: "Scorpion",
        imagen: "./img/gorras/02.jpeg",
        descripcion: "Color negra",
        categoria: {
            nombre: "Gorras",
            id: "gorras"
        },
        precio: 9999
    },
    {
        id: "gorra-3",
        titulo: "Vintage",
        imagen: "./img/gorras/03.jpeg",
        descripcion: "Color negra",
        categoria: {
            nombre: "Gorras",
            id: "gorras"
        },
        precio: 9999
    },
    {
        id: "gorra-4",
        titulo: "New York NY",
        imagen: "./img/gorras/04.jpeg",
        descripcion: "Color negra",
        categoria: {
            nombre: "Gorras",
            id: "gorras"
        },
        precio: 9999
    },
    {
        id: "gorra-5",
        titulo: "Blessed",
        imagen: "./img/gorras/05.jpeg",
        descripcion: "Color negra",
        categoria: {
            nombre: "Gorras",
            id: "gorras"
        },
        precio: 9999
    },
    {
        id: "gorra-6",
        titulo: "Yin y Yang",
        imagen: "./img/gorras/06.jpeg",
        descripcion: "Color negra",
        categoria: {
            nombre: "Gorras",
            id: "gorras"
        },
        precio: 9999
    },

    //Electronica:
    {
        id: "smart-band-7",
        titulo: "Smart Band M7",
        imagen: "./img/electronica/02.jpeg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 12499
    },
]



app.get('/api/productos', (req, res) => {
    res.send(productos);
});

// Luego configura la ruta para archivos estáticos
app.use("/", express.static("fe"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})