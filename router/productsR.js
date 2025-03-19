import { Router } from 'express';
import {allProduct,productByName,productById} from '../controllers/products/read.js';
import create from '../controllers/products/create.js';


const routerProducts = Router();

routerProducts.get('/allProducts',allProduct);
routerProducts.get('/name/:nameParams',productByName);
routerProducts.get('/id/:id',productById);
routerProducts.post('/productCreate',create);   

export default routerProducts;