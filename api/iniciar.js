"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const config = require("./config");
const connections_1 = require("./connections");
const requireDir = require("require-dir"); //Para poder levantar carpetas de la API-
function initAPI(app) {
    connections_1.Connections.initialize();
    app.use(bodyParser.json({ limit: "150mb" }));
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.all("*", (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS, HEAD");
        // Permitir que el método OPTIONS funcione sin autenticación
        if ("OPTIONS" === req.method) {
            res.header("Access-Control-Max-Age", "1728000");
            res.sendStatus(200);
        }
        else {
            next();
        }
    });
    // Carga los módulos y rutas
    for (const m in config.modules) {
        if (config.modules[m].active) {
            const routes = requireDir(config.modules[m].path);
            for (const route in routes) {
                if (config.modules[m].middleware) {
                    console.log("Rutasss: ", config.modules[m].route);
                    app.use("/api" + config.modules[m].route, config.modules[m].middleware, routes[route]);
                }
                else {
                    console.log("Rutasss: ", config.modules[m].route);
                    app.use("/api" + config.modules[m].route, routes[route]);
                }
            }
        }
    }
}
exports.initAPI = initAPI;
//# sourceMappingURL=iniciar.js.map