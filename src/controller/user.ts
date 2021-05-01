import {IUser,IResponse, IError} from "../interface"
import {user_db} from "../db";
import {validate} from "../util";
class User{

    constructor(){
    }

    public async create(userDetails:IUser){
        let res:IResponse<string|IError>;
        let validationResult = await validate.user(userDetails);
        if (validationResult!=="") {
            res!.statusCode=400;
            res!.data={code:1, message:validationResult}; 
        }
        try{
            user_db.create(userDetails);
            res!.statusCode=201
            res!.data= "user created!"
        }
        catch(ex){
            res!.statusCode=500;
            res!.data= {code:1,message:"somthing went wrong!"}; 
        }
        return res!;
    }
}

const user = new User();

export default user;