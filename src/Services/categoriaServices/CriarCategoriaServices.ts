import prismaClient from "../../prisma";

interface CriarCategoria{
    nome:string
}


class CriarCategoriaServices{
async execute({nome}:CriarCategoria){
    if (!nome) {
        throw new Error("campo vasio")
    }
     const criarCategoria = await prismaClient.categorias.create({
        data:{
            nome:nome
            }
            
        
     })
     return{dados:"categoria criada"}

}

}
export{CriarCategoriaServices}