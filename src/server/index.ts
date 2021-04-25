import express from "express";
import {IServerConfig} from "../interface";
import {middleware} from "./middleware";
const config:IServerConfig = require("../../config.json");
import {Provider} from "./provider";
import {get,post,put} from "./routes";

const provider = new Provider();
const app:express.Express = provider.app;

app.use(middleware);

app.use(get.routes);
app.use(post.routes);
app.use(put.routes);

app.listen(config.server.port,()=> console.log(`server is running on port ${config.server.port}!`));

