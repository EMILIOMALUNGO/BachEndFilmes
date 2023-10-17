import prismaClient from "../../prisma";


interface AlterarUsuario{
    id:string
    nome:string
    email:string
}

class AlterarUsuarioServices{
    async execute({id,nome,email}:AlterarUsuario){

        await prismaClient.user.update({
            where:{
                id:id
            },
            data:{
                nome:nome,
                email:email
            }
        })
        return {dados:"dados alterados"}
    }
}
export {AlterarUsuarioServices}