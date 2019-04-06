import {Router} from 'express';

export var router_skill = Router();
var controller_skill = require('../controllers/skill');

router_skill.get('/skill/getall',controller_skill.getAll);
router_skill.post('/skill/update',controller_skill.updateById);
router_skill.get('/skill/delete',controller_skill.deleteById);
router_skill.post('/skill/create',controller_skill.create);