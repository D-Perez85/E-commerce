"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const iniciar_1 = require("./iniciar");
const app = express();
(0, iniciar_1.initAPI)(app);
const port = 3002;
const server = app.listen(port, () => console.log("Escuchando en puerto 3002!!!!"));
// Configuring Passport
var passport = require('passport'); //importando paquete de passport
// var expressSession = require('express-session');
// app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
//# sourceMappingURL=index.js.map