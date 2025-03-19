import { Router } from "express";
import routerStores from "./storesR.js";
import routerEmployees from "./employeesR.js";
import routerProducts from "./productsR.js";

let routerIndex = Router()
routerIndex.use('/stores',routerStores);
routerIndex.use('/employees',routerEmployees);
routerIndex.use('/products',routerProducts);


export default routerIndex