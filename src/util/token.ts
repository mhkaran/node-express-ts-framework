import jwt from "jsonwebtoken";
import crypto from "./crypto";
import {IJWTPlayload} from "../interface";

class Token{
    private secret:jwt.Secret|undefined;
    private expires:number|number;
    constructor(){
        this.secret = "E96A93DF96EC3761DF669B05D368D45067F608290E263AC4D3B09A598A2CAD16"
        this.expires = 90
    }

    public async create(playload:IJWTPlayload):Promise<String>{
        let encryptedStr = await crypto.encrypt(JSON.stringify(playload));
        return jwt.sign({data:encryptedStr},this.secret!,{expiresIn:this.expires});
    }

    public async validate(accessToken:string):Promise<IJWTPlayload>{
        let encryptedStr = jwt.verify(accessToken,this.secret!);
        let playload = await crypto.decrypt(encryptedStr as string);
        return JSON.parse(playload);
    }
}

const token = new Token();

export default token;