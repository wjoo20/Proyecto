import { Request, Response } from 'express';
import { SkillDTO } from '../dto/skill';
import { Skill } from '../models/skill';
var controller_skill = {
    getAll: (req:Request,res:Response)=>{
        console.log(`Esta es la variable a => ${req.query.a}`);
        SkillDTO.getAll().then((skills)=>{
            console.log(skills);
            res.send(skills);
        }).catch((error)=>{
            console.log(error);
        });

    },
    updateById: (req:Request,res:Response)=>{
        let skill=new Skill();
        let params = req.body;
        skill.skill_Id=params.skill_id;
        skill.skill_Nom=params.skill_nom;
        skill.skill_Desc=params.skill_desc;
        skill.skill_Img=params.skill_img;
        SkillDTO.updateById(skill).then((skill:Skill)=>{
            let respuesta={
                mensaje:"Actualizado",
                content:skill
            }
            res.status(200).send(respuesta);
        }).catch((error)=>{
            let respuesta={
                mensaje:"error",
                content:skill
            }
            res.status(500).send(respuesta);
        });
    },
    deleteById: (req:Request,res:Response)=>{
        res.send("Eliminando una skill dado su ID");
    },
    create: (req:Request,res:Response)=>{
        //creamos un obj vacio para el skill
        let skill = new Skill();
        //obteniendo los parametros recibidos por post
        let params=req.body;
        //creando los campos del obj skill
        skill.skill_Nom=params.skill_nom;
        skill.skill_Desc=params.skill_desc;
        skill.skill_Img=params.skill_img;
        SkillDTO.create(skill).then((skill:Skill)=>{
            let respuesta={
                mensaje:"creado",
                content:skill
            }
            res.status(200).send(respuesta);
        }).catch((error)=>{
            let respuesta={
                mensaje:"error",
                content:skill
            }
            res.status(500).send(respuesta);
        });
    }
}

module.exports = controller_skill;