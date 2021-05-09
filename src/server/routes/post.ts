import express from "express";
import {user_controller} from "../../controller";

class Post{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.post('/*',async(_req:express.Request,_res:express.Response,next:express.NextFunction)=>{
            //res.send(res.send()+"!") //= res.statusMessage+ " !";
            next();
        });

        this.routes.post('/user/create',async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            let resData = await user_controller.create(req.body);
            res.status(resData.statusCode).json(resData.data);
        });
    }
}

export const post = new Post()