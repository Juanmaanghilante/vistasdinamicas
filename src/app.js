// requiero path
const path = require('path');
// requiero express
const express =require('express');

// invoco express
const app =express();

// Esto permite acceder y utilizar las funcionalidades y rutas definidas en el archivo mainRouter.js en el resto del código de tu aplicación.

const mainRouter =require('./routes/mainRouter')

app.use(express.static('public'));


// estas dos líneas de código configuran el directorio de vistas y el motor de plantillas de una aplicación Express, 
// lo cual es esencial para poder renderizar vistas dinámicas y enviar respuestas HTML al cliente.

app.set('views',path.join(__dirname,'../views'));
app.set('view engine','ejs')


// levanto servidor
app.listen(3000,() => {
    console.log('servidor corriendo en el puerto 3000')
    
});




app.use(mainRouter);    



// 