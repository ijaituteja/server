import mongoose from "mongoose";
import { Category, Product } from "./src/model/index.js";
import { categories, products } from "./seedData.js";
import dotenv from 'dotenv';

dotenv.config(); 


const SeedData = async ()  => {

    try{
        
        await mongoose.connect(process.env.MONGO_URI)
        // await Product.deleteMany({});
        // await Category.deleteMany({});
        const categoryDoc = await Category.insertMany(categories);
        const categoriesMap = categoryDoc.reduce((map,category) => 
        {
            map[category.name] = category._id;
            return map;
        },{});
      
        const productWithCategoryId = products.map((products) => ({
            ...products,
            category : categoriesMap[products.category],
        }))

        await Product.insertMany(productWithCategoryId);

        console.log("Data base Seeded Successfully !!");
    }
    catch(e)
    {
        console.log("Error seeding data",e);
    }
    finally
    {
        mongoose.connection.close();
    }

}
SeedData();
