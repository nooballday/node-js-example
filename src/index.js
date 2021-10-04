import Express from "express";
import Controller from "./controller/index.js";
import RequestId from "./lib/request-id-middleware.js";
import Logger from "./lib/logger.js";

const app = Express();
const APP_PORT = process.env.APP_PORT;

app.use(RequestId); // add a random UUID to request object
app.use(Logger.LogRequest); //log every request, it shouldnt be the responsible of your app, delegate it!
app.use(Controller);

app.listen(APP_PORT, function () {
    console.log(`Server is running on port ${APP_PORT}`)
})