import express from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controllers/UserController.js'
import { createDueno, deleteDueno, getDueno, updateDuenos } from '../controllers/DuenoController.js'
import { createExpert, deleteExpert, getExpert, updateExpert } from '../controllers/ExpertController.js'

const router = express.Router()

//Rutas de usuarios

router.get('/:id', getUser)
router.post('/create', createUser)
router.put('/update:id', updateUser)
router.delete('/deleteuser:id',deleteUser)

// Rutas de dueños
router.get('/dueno/:id', getDueno);
router.post('/createdueno', createDueno);
router.put('/updatedueno/:id', updateDuenos);
router.delete('/deletedueno/:id', deleteDueno);

//Rutas de experto

router.get('/experto/:id',getExpert);
router.post('/createexpert',createExpert);
router.put('/updateexpert:id',updateExpert);
router.delete('/deleteexpert:id',deleteExpert)


export default router;