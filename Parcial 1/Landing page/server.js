//SOLID

//const http = require('http');          Incompatible hoy en día

import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, 'ok', {"content-type": "text/html"});
        // ` <- template string
        res.end(`<!DOCTYPE html>
<html lang="en">
<head> <!-- ESTO ES PARA DEFINIR COSAS Y ASÍ ;) METADATOS para la forma de ver la ventana -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- manda a un archivo de estilos, o mejor no -->
    <style>body{
    margin: 0;
    color: rgb(25, 25, 25);
    background-color: rgb(218, 216, 244);
    font-family: Arial, Helvetica, sans-serif;
}

.header-navigation{
    /*
        margin-inline: 20px;
    */
    padding: 5px 20px;
    color: white;
    font-size: large;   /*Tamaño*/
    font-weight: 600;   /*Grosor*/

    display: flex;  /*divide un elemento en dos ejes*/
    justify-content: space-between;     /*Mueve el eje X para que se acomoden*/
    align-items: center;  /*Mueve el eje Y así bien chidísimo*/

    background-color: blueviolet;
    color: white;

    /*
        Modifica los ejes X e Y, intercambio(?
        flex-direction: column;
    */

    ul{
        color: white;
        display: flex;
        gap: 22px;
        list-style: none;
    }
    
    a{
        text-decoration: none;
        color: #fff;
    }
}

/*--- Sección: acerca de ---*/
.about-section{
    display: flex;
    justify-content: center;
}

.about-information {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 89vw;
    margin: 12px;
    padding: 15px;
    padding-inline: 30px;
    
    background-color: white;
    border-radius: 5px;
}

/*Texto*/
.about-text-information {
    width: 45%;

    button {
        border-radius: 5px;
        border: 0px solid white;

        color: white;
        background-color: blueviolet;

        padding: 10px;

        font-weight: bold;
    }
}

/*Imagen*/
.about-photo-information {
    width: 45%;

    /*
    border-radius: 5px;
    border: 1px solid gainsboro;
    background-color: gainsboro;
    */

    img {
        max-width: 100%;
        display: block;

        border-radius: 8px;
    }
}

/*--- Sección: Nuestros servicios ---*/
.services-section {
    text-align: center;
    color: blueviolet;
}

.services-alignment {
    display: flex;
    justify-content: center;
}

.services-container {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-between;

    margin: 5px 10px;
    padding: 15px 20px;

    border-radius: 5px;
    border: 1px solid gainsboro;
    background-color: white;
}

.service-card {
    text-align: center;
    
    border: 1px solid gainsboro;
    border-radius: 5px;
    background-color: rgb(225, 240, 245);

    padding: 20px, 5px;
    margin: 5px 0px;

    height: 90%;
    width: 22%;

    p{
        font-size: 16px;
        font-weight: bold;

        margin: auto;
        color: black;
    }

    img{
        width: 90%;
        height: 70%;

        margin: 5px;

        border: 1px solid gainsboro;
        border-radius: 3px;

        object-fit: cover;  /*Se redimensiona al copntenedor*/
        object-position: center;
    }
}

/*--- Sección: pié de página (Casi que una copia del header) ---*/
.footer-navigation{
    /*
        margin-inline: 20px;
    */
    padding: 5px 20px;
    color: white;
    font-size: large;   /*Tamaño*/
    font-weight: 600;   /*Grosor*/

    display: flex;  /*divide un elemento en dos ejes*/
    justify-content: space-between;     /*Mueve el eje X para que se acomoden*/
    align-items: center;  /*Mueve el eje Y así bien chidísimo*/

    background-color: blueviolet;
    color: white;

    /*
        Modifica los ejes X e Y, intercambio(?
        flex-direction: column;
    */

    ul{
        color: white;
        display: flex;
        gap: 22px;
        list-style: none;
    }
    
    a{
        text-decoration: none;
        color: #fff;
    }
}
    </style>
</head>
<body> <!-- CONSTRUCCIÓN DE LA PÁGINA, DUH -->
    <header>
        <!--Lista de cosas-->
        <nav class="header-navigation">
            <p>
                HANNAH MONTANA MOTORS
            </p>
            <!--Lista desordenada UL-->
            <ul>
                <li><a href="../POS/frontend/pos.html">Conócenos</a></li>
                <li><a href="../SESION/frontend/sesion.html">Contacto</a></li>
                <li><a href="../SOPORTE/frontend/soporte.html">Login</a></li>
            </ul>
        </nav>
    </header>
    <section class="about-section">
        <div class="about-information">
            <div class="about-text-information">
                <h2>
                    El Mejor Portal de Carros de Segunda.
                </h2>
                <p>
                    Simplifica tu búsqueda en vehículos gracias a HANNAH MONTANA MOTORS. El mejor portal para encontrar todo tipo de vehículos que usted necesite, con precios accesibles y así.
                </p>
                <button>
                    Empezar la Búsqueda ->
                </button>
            </div>
            <aside class="about-photo-information">
                <img src="https://i.ytimg.com/vi/QEbVTuWRoYA/maxresdefault.jpg" alt="">
            </aside>
        </div>
    </section>
    <section class="services-section">
        <h2>Nuestros Servicios</h2>
        <div class="services-alignment">
            <div class="services-container">
                <div class="service-card">
                    <img src="https://i.ytimg.com/vi/QEbVTuWRoYA/maxresdefault.jpg" alt="">
                    <p>Venta de semi-nuevos</p>
                </div>
                <div class="service-card">
                    <img src="" alt="">
                    <p>Servicios</p>
                </div>
                <div class="service-card">
                    <img src="" alt="">
                    <p>Refacciones</p>
                </div>
                <div class="service-card">
                    <img src="" alt="">
                    <p>Venta de burritos</p>
                </div>
            </div>
        </div>
    </section>
    <footer class="contacts-section">
        <nav class="footer-navigation">
            <p>
                HANNAH MONTANA MOTORS
            </p>

            <ul>
                <li><a href="../POS/frontend/pos.html">Compartir</a></li>
                <li><a href="../SESION/frontend/sesion.html">Correo</a></li>
            </ul>
        </nav>
    </footer>
</body>
</html>
        `);
        //SSR - Server-Side Render
    }
    else {
        res.statusCode = 404;
        res.end('not found: ts is really garbage *rose emoji* *skull emoji* *crying emoji*');
    }
    res.end(req.url);
});

server.listen(3000, () =>{
    console.log('server running on port 3000');
});