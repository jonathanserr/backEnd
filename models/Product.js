import {Schema,model} from "mongoose";

let collection = 'products'
let schema = Schema({
    name:{type:String,required:true},
    mark:{type:String,required:true},
    type:{type:String,required:true},
    price:{type:Number,required:true}
},{
    timestamps:true
})

let Product = model(collection,schema)

export default Product 

