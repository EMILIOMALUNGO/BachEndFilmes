import { Request, Response } from "express";
import { CriarLoginServices } from "../../Services/LoginServices/CriarLoginServices";


class CriarLoginController{
async handle(req:Request, res: Response){
    const{email,password}=req.body
    
    const criarLoginController = new CriarLoginServices()
     const criarLogin = await criarLoginController.execute({
        email,password
     })
   return res.json(criarLogin) 
    
}

}
export{CriarLoginController}