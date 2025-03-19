import { response } from "express";
import Product from "../../models/Product.js";



let allProduct = async (req, res, next) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

let productByName = async (req, res, next) => {
    try {
        let name = req.params.nameParams
        let all = await Product.find({ name: name })
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

let productById = async (req, res, next) => {
    try {
        let idQuery = req.params.id
        let all = await Product.findById(idQuery)
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

export { allProduct, productByName, productById }