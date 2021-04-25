import {IUser} from "../interface"
import {user_db} from "../db";

class User{
    
    constructor(){

    }

    public async create(userDetails:IUser){
        user_db.create(userDetails);
    }
}

const user = new User();

export default user;