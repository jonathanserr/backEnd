import { response } from "express";
import Product from "../../models/Product.js";


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

export default allStore;