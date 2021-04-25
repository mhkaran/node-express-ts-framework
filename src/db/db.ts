import mongoose from "mongoose";
import {env} from "../util";

class DB{

    constructor(){
        mongoose.Promise = Promise;

        mongoose.connection.on('connectd',()=>{
            console.log('connection established');
        });

        mongoose.connection.on('reconnectd',async()=>{
            console.log('connection reestablished');
        });

        mongoose.connection.on('disconnectd',async()=>{
            console.log('connection disconnectd');
        });

        mongoose.connection.on('close',async()=>{
            console.log('connection closed');
        });
    }

    public async connect(){
         const options:mongoose.ConnectionOptions ={
             poolSize:5,
             autoReconnect:true,
             useNewUrlParser:true,
             useCreateIndex:true,
             useUnifiedTopology:true,
             connectTimeoutMS:5000
         } 

        await mongoose.connect(env.dbConfig.uri,options).catch(err=>{
            console.log(`mongooes connection error, ${err}`);
        });
    }
}

const db = new DB();

export default db;