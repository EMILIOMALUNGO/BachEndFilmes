import { hash } from "bcryptjs";
import prismaClient from "../../prisma";



interface CriarUsuario{
    nome:string,
    email:string,
    password:string

}

class CriarUsuarioServices{
async execute({nome,email,password}:CriarUsuario){
      // console.log ("serv",nome,email,senha)

      if (!nome ||!email || !password) {
        throw new Error ("preencha os campos vasios ")
        
      }

    const usuario = await prismaClient.user.findFirst({
        where:{
             email:email
        }
    })
    if (usuario) {
        throw new Error("email ja cadastrado")
    }
   
    const senhaCrypt = await hash(password, 5)
    const Usuario = await prismaClient.user.create({
        data:{
            nome:nome,
            email:email,
            senha:senhaCrypt
        },
        select:{
            id:true,
            nome:true,
            email:true
        }
    })
    return {dados:Usuario}
}

}
export {CriarUsuarioServices}