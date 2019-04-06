//importando la ruta de home
import { router_home } from './api/routes/home';
//importando las rutas de empresa
import { router_empresa } from './api/routes/empresa';
//importando las rutas de skill
import { router_skill } from './api/routes/skill';
//Importamos la librería desde node_modules
const Sequelize = require('sequelize');
const sequelize = new Sequelize('codijob','root','',{
    host:'localhost',
    dialect:'mysql',
    operatorAliases:false,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});

sequelize.authenticate().then(()=>{
    console.log("Conexion con SEQUELIZE exitosa...");
}).catch(()=>{
    console.log("Error .......");
});

var express = require('express');
var app = express();

var bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());
//npm de la libreria mysql
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
app.use('/api',router_skill);

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