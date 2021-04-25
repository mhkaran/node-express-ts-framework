import express from "express";
import {user} from "../../controller";
  
class Post{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.post('/*',async(_req:express.Request,_res:express.Response,next:express.NextFunction)=>{
            //res.send(res.send()+"!") //= res.statusMessage+ " !";
            next();
        });

        this.routes.post('/user/create',async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
             await user.create(req.body);
             res.status(201).end('user created');
        });
    }
}

export const post = new Post()