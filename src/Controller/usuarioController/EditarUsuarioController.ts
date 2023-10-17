import { Request, Response } from "express";
import { EditarUsuarioService } from "../../Services/usuarioServices/EditarUsuarioServices";


class EditarUsuarioController{
    async handle(req:Request, res: Response){
        const {id}=req.params
console.log(id)
        const editarUsuarioController = new EditarUsuarioService()
        const EditarUsuarios = await editarUsuarioController.execute({
            id
        })
        return res.json(EditarUsuarios)
    }
}

export{EditarUsuarioController}