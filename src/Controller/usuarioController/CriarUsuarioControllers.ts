import {Request, Response } from "express";
import { CriarUsuarioServices } from "../../Services/usuarioServices/CriarUsuarioServices";



class CriarUsuarioControllers{
async handle(req:Request,res:Response){
    const {nome,email,password}= req.body

    const criarUsuarioControllers = new CriarUsuarioServices()
     const criarUsuario = await criarUsuarioControllers.execute({
        nome,email,password
     })
     return res.json(criarUsuario)

}

}
export{CriarUsuarioControllers}