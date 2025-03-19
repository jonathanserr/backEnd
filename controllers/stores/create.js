import Store from "../../models/Store.js";

let create = async (req, res, next) => {
    try {
        let storeInfo = req.body
        let createStore = await Store.create(storeInfo)
        return res.status(201).json({
            response: createStore
        })
    } catch (error) {
        next(error)
    }
}
export default create;
