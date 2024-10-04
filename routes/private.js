import express from 'express'
import controllers from '../controllers/private.controllers.js';
const router = express.Router();

router.get('/listar-usuarios', controllers.listarUsuarios)

export default router