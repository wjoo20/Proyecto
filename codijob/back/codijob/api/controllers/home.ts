import { Request, Response } from 'express';
export var controller_home = {
    home: function(req:Request,res:Response){
        res.send('Hola soy el servidor');
    },
    otraruta: function(req:Request,res:Response){
        res.send('Esta es otra ruta');
    }
}
//Si usamos
//module.exports = controller_home;
//En otro archivo lo importamos como:
//var [variable] = require([ruta del archivo]);

//Si usamos
//export var controller_home = .....;
//En otro archivo lo importamos como:
//import { controller_home } from 'ruta del archivo';