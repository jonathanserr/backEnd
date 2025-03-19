import Employee from "../../models/Employee.js";
let create = async (req,res,next) => {
    try {
        let employeeInfo = req.body
        let createEmployee = await Employee.create(employeeInfo)
        return res.status(201).json({
            response: createEmployee
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}
export default create;
