import express from 'express';
import controller from '../controller/user-controller.js'


const router = express.Router();

router
    .route('/')
        .get(controller.getUsers)
        .post(controller.addUser)
        
router
    .route('/:id')
        .get(controller.getUser)
        .delete(controller.deleteUser)
        .patch(controller.editUser)



export default router