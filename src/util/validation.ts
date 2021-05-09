import _validate from "validate.js";
import {IUser} from "../interface";

class Validation {

    constructor(){}

    public async user(user:IUser):Promise<string>{
        if (_validate.isEmpty(user.email)) {
            return "email is mandatory!";
        }
        if (_validate.isEmpty(user.firstName)) {
            return "first name is mandatory!";
        }
        if (_validate.isEmpty(user.lastName)) {
            return "last name is mandatory!";
        }
        return "";
    }
}

const validate = new Validation();

export default validate;