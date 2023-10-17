import { Request, Response } from "express";
import { CriarFilmesServices } from "../../Services/filmesServices/CriarFilmesServices";


class CriarFilmesCdontroller{
    async handle(req:Request, res:Response){
        const {nome,descricao,lancamento,categoriaId}= req.body
        const criarFilmesCdontroller = new CriarFilmesServices()
        const criarFilmes = await criarFilmesCdontroller.execute({
            nome,descricao,lancamento,categoriaId
        })
        return res.json(criarFilmes)

    }


}
export{CriarFilmesCdontroller}