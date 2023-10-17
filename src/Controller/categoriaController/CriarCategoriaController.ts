import { Request, Response } from "express";
import { CriarCategoriaServices } from "../../Services/categoriaServices/CriarCategoriaServices";

class CriarCategoriaController{
    async handle(req:Request, res:Response){
        const{nome} =req.body
        const criarCategoriaController = new  CriarCategoriaServices()
        const  criarCategoria =await criarCategoriaController.execute({
            nome
        })
         return res.json(criarCategoria)
    }


}
export{CriarCategoriaController}