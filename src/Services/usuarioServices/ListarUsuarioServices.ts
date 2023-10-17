import prismaClient from "../../prisma";
 

class ListarUsuarioServices{
 async execute(){
    const ListarUsuario = await prismaClient.user.findMany({})
    return (ListarUsuario)
 }
}
export{ListarUsuarioServices}