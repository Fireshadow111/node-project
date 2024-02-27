import express from 'express';
import controller from '../controller/products-controller.js';

const router = express.Router();

router
    .route('/')
        .get(controller.getMany)
        .post(controller.addProd)
        
router
    .route('/:id')
        .get(controller.getMan)
        .delete(controller.deleteProd)
        .patch(controller.editProd)



export default router