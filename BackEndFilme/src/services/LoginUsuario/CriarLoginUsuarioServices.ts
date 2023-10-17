import prismaClient from "../../prisma";

interface criarLogin{
    email:string
    password:string
}

class CriarLoginUsuarioServices{
    async execute({email,password}:criarLogin){
        const usuario = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        if(!usuario){
            throw new Error('Usuário/Senha Incorretos')
        }
        const autenticado = await compare(password, usuario.senha)
        if(!autenticado){
            throw new Error('Usuário/Senha Incorretos')
        }
         const token = sign({
            id:usuario.id,
            email:usuario.email
         },
         process.env.JWT_SEGREDO,
         {subject:usuario.id,
            expiresIn:"1h"
    
         }
         )
        
        return {
            id:usuario.id,
            email:usuario.email,
            token:token
        }

    }
    

}
export {CriarLoginUsuarioServices}