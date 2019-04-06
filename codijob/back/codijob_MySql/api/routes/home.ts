import { Router } from 'express';
import { controller_home } from '../controllers/home';
var express = require('express');
//Hacemos el enrutador exportable, para que el index.ts pueda importarlo
export var router_home = Router();

//GET es el verbo HTTP que va a escuchar nuestro server
//request => los datos que el servidor recibe de quien lo invoca
//response => objeto de respuesta a quien invoca la ruta
router_home.get('/', controller_home.home);

router_home.get('/otraruta', controller_home.otraruta);

//otra forma de exportar variables en node
//module.exports = router;