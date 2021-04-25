import mongoose from "mongoose";

class DB{

    constructor(){
        mongoose.Promise = Promise;

        mongoose.connection.on('connectd',async()=>{
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
        const connection:string = "";
    }
}

const db = new DB();

export default db;