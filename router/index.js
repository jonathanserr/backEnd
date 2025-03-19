import { Router } from "express";
import routerStores from "./storesR.js";

let routerIndex = Router()
routerIndex.use('/stores',routerStores);


export default routerIndex