import * as express from "express";
import { initAPI } from "./iniciar";

const app = express();
initAPI(app);

const port = 3002;
const server = app.listen(port, () => console.log("Escuchando en puerto 3002!!!!"));

// Configuring Passport
var passport = require('passport'); //importando paquete de passport
// var expressSession = require('express-session');
// app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());