import { Request, Response } from "express";
import { AlterarUsuarioServices } from "../../Services/usuarioServices/AlterarUsuarioServices";



class AlterarUsuarioController{
    async handle(req:Request, res:Response){
        const {id,nome,email}= req.body


        const AlterarUsuarioController = new AlterarUsuarioServices()

        const AlterarUsuario = await AlterarUsuarioController.execute({
        id,nome,email
        })
        return res.json(AlterarUsuario)
    }
}

export {AlterarUsuarioController}