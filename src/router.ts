import { Router } from "express";
import { isAutenticado } from "./middleware/isAutenticado";


//const upload = multer(uploadConfig.upload('./tmp'))

import { CriarLoginController } from "./Controller/LoginController/CriarLoginController";
import { CriarCategoriaController } from "./Controller/categoriaController/CriarCategoriaController";


import { CriarUsuarioControllers } from "./Controller/usuarioController/CriarUsuarioControllers";
import { ListarUsuarioControllers } from "./Controller/usuarioController/ListarUsuarioControllers";
import { EditarUsuarioController } from "./Controller/usuarioController/EditarUsuarioController";
import { ApagarUsuarioController   } from "./Controller/usuarioController/ApagarUsuarioController";
import { AlterarUsuarioController } from "./Controller/usuarioController/AlteraUsuarioController";

import { CriarFilmesCdontroller } from "./Controller/filmesController/CriarFilmesCdontroller";



const router=Router();

router.post("/CriarLogin", new CriarLoginController().handle)
router.post("/CriarCategoria",isAutenticado,new CriarCategoriaController().handle)

router.post ("/CriarUsuario",new CriarUsuarioControllers().handle)
router.get("/ListarUsuario",isAutenticado, new ListarUsuarioControllers().handle)
router.delete("/ApagarUsuario",isAutenticado, new ApagarUsuarioController().handle)

router.get("/EditarUsuario/:id", isAutenticado,new EditarUsuarioController().handle)
router.put("/AlteraUsuario",isAutenticado, new AlterarUsuarioController().handle)

router.post("/CriarFilmes",isAutenticado, new CriarFilmesCdontroller().handle)


export {router}