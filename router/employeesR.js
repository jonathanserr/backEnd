import { Router } from 'express';
import {allEmployee,employeeByName,employeeById} from '../controllers/employees/read.js';
import create from '../controllers/employees/create.js';


const routerEmployees = Router();

routerEmployees.get('/allEmployees',allEmployee);
routerEmployees.get('/name/:nameParams',employeeByName);
routerEmployees.get('/id/:id',employeeById);
routerEmployees.post('/employeeCreate',create);   

export default routerEmployees;