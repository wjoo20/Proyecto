import { Router, Request, Response } from 'express';
var express = require('express');
//Hacemos el enrutador exportable, para que el index.ts pueda importarlo
export var router_home = Router();

//GET es el verbo HTTP que va a escuchar nuestro server
//request => los datos que el servidor recibe de quien lo invoca
//response => objeto de respuesta a quien invoca la ruta
router_home.get('/', function(req:Request, res:Response){
    res.send('Hola soy el servidor');
});

router_home.get('/otraruta', function(req:Request, res:Response){
    res.send('Esta es otra ruta');
});

//otra forma de exportar variables en node
//module.exports = router;