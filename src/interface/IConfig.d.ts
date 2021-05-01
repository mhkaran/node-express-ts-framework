export interface IServerConfig{
    port:number;
}

export interface IDBConfig{
  uri:string;
}

export interface IServiceConfig{
 retryCount:number;
}

export interface IConfig
{
  server:IserverConfig;
  service:IServiceConfig;
}