import { Skill } from '../models/skill';
import { connection } from '../../index';
import { resolve } from 'path';
import { rejects } from 'assert';

export class SkillDTO{
    static getAll():Promise<any>{
        let query = "SELECT * FROM t_skill";
        return new Promise((resolve,reject)=>{
            connection.query(query,(err:any,result:any)=>{
                if(err){
                    reject(err);
                }
                let skills:Array<Skill>=[];
                if(result.length===0){
                    resolve(skills);
                }
                result.forEach((skillDB:any) => {
                    let skill:Skill = new Skill();
                    skill.skill_Id=skillDB.skill_id;
                    skill.skill_Desc=skillDB.skill_descripcion;
                    skill.skill_Nom=skillDB.skill_nombre;
                    skill.skill_Img=skillDB.skill_img;
                    skills.push(skill);
                });
                resolve(skills);
            });
        });
    }
    
    static create(skill:Skill):Promise<any>{
        let query="call codijob.t_skill_crud_ps(0,'"+skill.skill_Nom+"','"+skill.skill_Desc+"','"+skill.skill_Img+"','create')";
        return new Promise((resolve:any,reject:any)=>{
            connection.query(query,(error:any,result:any)=>{
                if(error){
                    reject(error);
                }
                //result.insertId => tiene el id del obj creado
                skill.skill_Id=result[0][0].skill_id;
                resolve(skill);
            });
        });
    }
    static updateById(skill:Skill):Promise<any>{
        let query="UPDATE `codijob`.`t_skill` SET `skill_nombre` = '"+skill.skill_Nom+"', `skill_descripcion` = '"+skill.skill_Desc+"', `skill_img` = '"+skill.skill_Img+"' WHERE (`skill_id` = '"+skill.skill_Id+"');"
        return new Promise((resolve:any,reject:any)=>{
            connection.query(query,(error:any,result:any)=>{
                if(error){
                    reject(error);
                }
                //result.insertId => tiene el id del obj creado
                //skill.skill_Id=result.insertId;
                resolve(skill);
            });
        });
    }
}

