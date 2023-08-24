const express = require('express');
const app = express();
const path = require('path'); // el modulo path es de node y permite concatenar directorios para que sea multiplataforma
const morgan = require('morgan'); //morgan es un modulo que se utiliza parqa actualizar el server automaticamente luego de cambios
const { url } = require('inspector');




//settings
app.set('port',5000)
app.set('views',path.join(__dirname,'views' ) ) //__dirname es una funcion de node para concatenar, entonces con en metodo join de path se realiza esta accion
app.set('view engine', 'ejs'); //ejs es un motor de plantillas que express usa por defecto, no hay que importarlo pero si instalarlo con 'npm i ejs'
//middlewares
app.use(morgan('dev'))//usart el metodo dev de morgan
app.use(express.urlencoded({extended:false})); //se utiliza el metodo url encode, se utiliza para convertir los datos recividos de los formularios y almacenarlos en json

//routes
app.use(require('./routes/index'))




//static
app.use(express.static(path.join(__dirname,'public'))) //le doy la ruta de los archivos estaticos



//404 handler
app.use((req,res,next)=>{  //manejador de peticion
    res.status(404).send('404 Not Found')  //esto se usa para manejar lo errores cuando no se encuentra un archivo o ruta, envia el mensaje (y tambien catchea el error con status(404)) 
})






module.exports = app; 





