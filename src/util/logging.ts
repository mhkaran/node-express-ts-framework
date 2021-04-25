import {ILogs} from "../interface"
import retry from "./retry";

class Logging{
    constructor(){

    }
    public async log(logs:ILogs){
     try{}
     catch(ex){
        // retry code 
     }   
    }
}

const logging = new Logging();

export default logging;