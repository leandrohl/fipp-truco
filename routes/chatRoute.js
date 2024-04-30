import express from 'express';
import ChatContoller from '../controllers/chatController.js';
        
let router = express.Router();

let ctrl = new ChatContoller();

router.post('/adicionar', ctrl.adicionar);
router.post('/validar', ctrl.validarSala);


export default router