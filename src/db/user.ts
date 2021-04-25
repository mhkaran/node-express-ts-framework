import {user} from "./entity";
import {IUser} from "../interface";

class User{
    constructor(){
    }
    public async create(userDetails:IUser){
        await user.create(userDetails);
    }
}

const user_db = new User();

export default user_db;