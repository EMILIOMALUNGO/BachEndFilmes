import prismaClient from "../../prisma";


interface EditarUsuario{
    id: string                              
}


class EditarUsuarioService{
    async execute({id}:EditarUsuario){

        const EditarUsuario = await prismaClient.user.findMany({
            where:{
                id:id
            },
            select:{
                id:true,
                nome:true,
                email:true

    
            }
        })
        return {dados:"dados recebidos"}
    }
}
export {EditarUsuarioService}