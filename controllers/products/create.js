import Product from "../../models/Product.js";

let create = async (req, res, next) => {
    try {
        let productInfo = req.body
        let createProduct = await Product.create(productInfo)
        return res.status(201).json({
            response: createProduct
        })
    } catch (error) {
        next(error)
    }
}
export default create;
