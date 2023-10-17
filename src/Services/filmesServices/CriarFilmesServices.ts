import prismaClient from "../../prisma";

interface CriarFilmes{
    nome:string
    descricao:string
    lancamento:string
    categoriaId:string
}

class CriarFilmesServices{
    async execute ({nome,descricao,lancamento,categoriaId}:CriarFilmes){
        if (!nome|| !descricao||!lancamento ||!categoriaId) {
           throw new Error("preencha os campos vasios") 
        }

        const criarFilmes = await prismaClient.filme.create({
            data:{
                nome:nome,
                descricao:descricao,
                lancamento:lancamento,
                categoriaId:categoriaId
            },
            select:{
                nome:true,
                descricao:true,
                lancamento:true,
               
            }
        })
        return {dados:"Filmes criado com sucesso"}
    }


}
export{CriarFilmesServices}