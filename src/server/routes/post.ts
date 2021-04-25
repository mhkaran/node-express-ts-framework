import express from "express";

class Post{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.post('/',async(_req:express.Request,_res:express.Response,next:express.NextFunction)=>{
            console.log('Hello from post request!');
            next();
        });
    }
}

export const post = new Post()