import {IDBConfig} from "../interface";

class ENV {
    public dbConfig={} as IDBConfig;
    constructor(){
        this.dbConfig.uri=process.env.MONGO_URI!;
    }
}

const env = new ENV();

export default env;
