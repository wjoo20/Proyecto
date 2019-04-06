import {Router} from 'express';

export var router_empresa = Router();
//otro tipo de importacion
var controller_empresa = require('../controllers/empresa');

router_empresa.get('/empresa/getall',controller_empresa.getAll);
router_empresa.get('/empresa/update',controller_empresa.updateById);
router_empresa.get('/empresa/delete',controller_empresa.deleteById);
router_empresa.get('/empresa/create',controller_empresa.create);