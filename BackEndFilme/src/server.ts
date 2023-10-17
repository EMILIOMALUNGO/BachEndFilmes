import express, {Response, Request, NextFunction} from 'express'

import 'express-async-errors'
import cors from 'cors'
//import { router } from './router'
import path from "path"


const app = express()
app.use(express.json())
app.use(cors())
//app.use(router)

//essa arte é para pegar as imagem porque as imagem nao estão no banco de dado entao  precisa fazer issa parte pra criar o andpointe das imagem

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res:Response, next: NextFunction) =>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })

    }
    return res.status(500).json({
        status: 'Erro',
        message:'Erro Interno Servidor'
    })
})
app.listen(3333, ()=> console.log("servidor rodando na porta 3333")
)
