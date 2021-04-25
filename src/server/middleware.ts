import express from "express";

export const middleware = (_req:express.Request,_res:express.Response,next:express.NextFunction)=>{
    next();
};