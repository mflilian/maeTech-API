const express = require('express');
const router = express.Router();
const controller = require("../controller/candidatasController")
 

router.get("/buscar/:id", controller.candidataById)
router.get("/buscar", controller.allEmpresas) 
router.get ("/vagas", controller.allVagas)
router.post("/", controller.registerNewCandidata)
router.post("/login", controller.login)
router.patch("/alterar/:id", controller.alterarCandidatas)
router.delete ("/deletar/:id", controller.deletarCandidata)

module.exports = router

