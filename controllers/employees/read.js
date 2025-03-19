import { response } from "express";
import Employee from '../../models/Employee.js';



let allEmployee = async (req,res,next) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

let employeeByName = async (req,res,next) => {
    try {
        let name = req.params.nameParams
        let all = await Employee.find({name: name})
        return res.status(200).json({
            response: all
        })
       
    } catch (error) {
      next(error)
    }
}

let employeeById = async (req,res,next) => {
    try {
        let idQuery = req.params.id
        let all = await Employee.findById(idQuery)
        return res.status(200).json({
            response: all
        })
       
    } catch (error) {
        next(error)
        }
}
 
export  {allEmployee, employeeByName, employeeById}