"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const iniciar_1 = require("./iniciar");
const app = express();
iniciar_1.initAPI(app);
const port = 3002;
const server = app.listen(port, () => console.log("Escuchando en puerto 3002!!!!"));
//# sourceMappingURL=index.js.map