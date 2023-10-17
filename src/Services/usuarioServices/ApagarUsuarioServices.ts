import prismaClient from "../../prisma";

interface ApagarUsuario{
    apagar:string
}

class ApagarUsuarioServices{
    async execute({apagar}:ApagarUsuario){

    const apagarUsuario = await prismaClient.user.delete({
        where:{
            id:apagar
        }
    })
    
      return {dados:"usuario apagado com sucesso"}
         
    }


}
export{ApagarUsuarioServices}