//importando la ruta de home
import { router_home } from './api/routes/home';
//Importamos la librería desde node_modules
var express = require('express');
var app = express();

const PUERTO = 3700;

//use => setea configuraciones de rutas, middlewares, cors, etc
app.use('/api',router_home);


//listen => lanza o ejecuta el servidor web
app.listen(PUERTO,()=>{
    console.log("Servidor corriendo perfectamente => localhost:3700");
});