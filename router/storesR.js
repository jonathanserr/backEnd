import { Router } from 'express';
import {allStore,storeByName,storeById} from '../controllers/stores/read.js';
import create from '../controllers/stores/create.js';


const routerStores = Router();

routerStores.get('/allStores',allStore);
routerStores.get('/name/:nameParams',storeByName);
routerStores.get('/id/:id',storeById);
routerStores.post('/storeCreate',create);   

export default routerStores;