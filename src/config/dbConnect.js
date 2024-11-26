import mongoose, { mongo } from "mongoose";

async function conectaDataBase() {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.ifgnj.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}

export default conectaDataBase;


// mongodb+srv://admin:admin@cluster0.ifgnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0