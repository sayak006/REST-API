require("dotenv").config()
const connectDB=require("./db/connect");
const product=require("./models/products");
const productsJson=require("./products.json");

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await product.deleteMany()
        await product.create(productsJson);
        console.log("Success");
    }catch(error){
        console.log(error);
    }
}
start()