import express from 'express';
import controller from '../controller/user-controller.js'


const router = express.Router();

router
    .route('/')
        .get(controller.getMany)
        .post(controller.addUse)
        
router
    .route('/:id')
        .get(controller.getOne)
        .delete(controller.deleteUser)
        .patch(controller.editUser)



export default router