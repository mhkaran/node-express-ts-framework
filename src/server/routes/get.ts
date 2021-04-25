import express from "express";

class Get{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.get('/health-check',async(_req:express.Request,_res:express.Response,next:express.NextFunction)=>{
            console.log('micro-service is healthy !');
            next();
        });

        this.routes.get('/',async(_req:express.Request,_res:express.Response,next:express.NextFunction)=>{
            console.log('Hello from get request!');
            next();
        });
    }
}

export const get = new Get()