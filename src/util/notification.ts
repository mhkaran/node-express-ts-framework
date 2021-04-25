import {ILogs} from "../interface"
import retry from "./retry";

class Notification{
    constructor(){

    }
    public async send(logs:ILogs){
     try{}
     catch(ex){
        // retry code 
     }   
    }
}

const notification = new Notification();

export default notification;