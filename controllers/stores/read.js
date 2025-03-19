import { response } from "express";
import Store from "../../models/Store.js";


let allStore = async (req,res,next) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}

let storeByName = async (req,res,next) => {
    try {
        let name = req.params.nameParams
        let all = await Store.find({name: name})
        return res.status(200).json({
            response: all
        })
       
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}

let storeById = async (req,res,next) => {
    try {
        let idQuery = req.params.id
        let all = await Store.findById(idQuery)
        return res.status(200).json({
            response: all
        })
       
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}
 
export  {allStore, storeByName, storeById}
