import { Request,Response } from "express";
import { ListarUsuarioServices } from "../../Services/usuarioServices/ListarUsuarioServices";

class ListarUsuarioControllers{
    async handle(req:Request,res:Response){

        const{id,nome,email,senha}= req.body
     const listarUsuarioControllers = new ListarUsuarioServices()
     const listarUsuario = await listarUsuarioControllers.execute()
      
     return res.json(listarUsuario)

    }

}
export{ListarUsuarioControllers}