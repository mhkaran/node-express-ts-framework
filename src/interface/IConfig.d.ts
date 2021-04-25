export interface IConfig
{
  server:IserverConfig;
  service:IServiceConfig;
}

export interface IserverConfig{
    port:number;
}

export interface IDBConfig{
  uri:string;
}

export interface IServiceConfig{
 retryCount:number; 
}