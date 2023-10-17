import { Request, Response } from "express";
 import { CriarLoginUsuarioServices } from "../../services/LoginUsuario/CriarLoginUsuarioServices";


class CriarLoginUsuarioControllers{
    async handle(req:Request, res:Response){
        const{email,password}= req.body
        const criarLoginUsuarioControllers = new CriarLoginUsuarioServices()
        const  criarLogin = await criarLoginUsuarioControllers.execute({
            email,password
        })
          return res.json(criarLogin )
    }

}
export {CriarLoginUsuarioControllers}