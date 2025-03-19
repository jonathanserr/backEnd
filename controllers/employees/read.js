import { response } from "express";
import Employee from '../../models/Employee.js';



let allemployee = async (req,res,next) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        return res.status(500).json({
            response: error
        });
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
        return res.status(500).json({
            response: error
        });
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
        return res.status(500).json({
            response: error
        });
    }
}
 
export  {allEmployee, employeeByName, employeeById}