import express from 'express'
import controllers from '../controllers/public.controllers.js'
const router = express.Router()

router.post('/cadastro', controllers.cadastrarUsuario)

router.post('/login', controllers.logarUsuario)

export default router