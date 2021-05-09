import {IUser,IResponse, IError} from "../interface"
import {user_db} from "../db";
import {validate} from "../util";
class User{

    constructor(){
    }

    public async create(userDetails:IUser){
        let res:IResponse<string|IError>={} as IResponse<any>;
        let validationResult = await validate.user(userDetails);
        if (validationResult!="") {
            res!.statusCode=400;
            res!.data={code:1, message:validationResult}; 
            return res!;
        }
        try{
            console.log('1');
            await user_db.create(userDetails);
            console.log('2');
            res!.statusCode=201
            res!.data= "user created!"
            return res!;
        }
        catch(ex){
            res!.statusCode=500;
            res!.data= {code:1,message:"somthing went wrong!"}; 
            return res!;
        }        
    }
}

const user_controller = new User();

export default user_controller;