import mongoose from "mongoose";


const productsSchema  = new mongoose.Schema(
    {
        name : {type : String , required  : true},
        image : {type : String, required : true},
        price : {type : Number, require : true},
        discountPrice : {type : Number, require : true},
        quantity : {type : String, require : true},
        category : {type : mongoose.Schema.Types.ObjectId, require : true,
            ref : "Category",
        }


    }
);

const Product = mongoose.model("Product",productsSchema)

export default Product;


