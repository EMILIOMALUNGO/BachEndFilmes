import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface CriarLogin{
    email:string
    password:string
}

class CriarLoginServices{
async execute({email,password}:CriarLogin){
 
     const usuario = await prismaClient.user.findFirst({
        where:{
            email:email,
         
        }
     })
     if (!usuario) {
        throw new Error("preencher o seu email")
        
     }
     const autenticado= await compare(password, usuario.senha)
     if (!autenticado) {
        throw new Error("campos vazio")
     }
     
     //return{dados:"acesso aceite"}
     const token = sign(
      {
         id:usuario.id,
         email: usuario.email,
      },
         
           process.env.JWT_SEGREDO,
         
         {
           subject:usuario.id,
           expiresIn:"1h"
         } 
     )
       return {
         id: usuario.id,
         email:usuario.email,
         token:token
       }
}

}
export{CriarLoginServices}
