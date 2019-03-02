//importando la ruta de home
import { router_home } from './api/routes/home';
//importando las rutas de empresa
import { router_empresa } from './api/routes/empresa';
//Importamos la librería desde node_modules
var express = require('express');
var app = express();

//Realizando la conexión a mysql
var mysql = require('mysql');
export var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'codijob'
});

//inicialización del puerto
const PUERTO = 3700;

//use => setea configuraciones de rutas, middlewares, cors, etc
app.use('/api',router_home);
app.use('/api',router_empresa);

//listen => lanza o ejecuta el servidor web
app.listen(PUERTO,()=>{
    console.log("Conectado al localhost => 3700");
    connection.connect((error:any)=>{
        if(error){
            throw(error);
        }
        console.log("Conectado a la base de datos correctamente");
    });
});