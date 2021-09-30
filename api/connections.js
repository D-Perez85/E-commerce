"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connections = void 0;
const mongoose = require("mongoose");
const configPrivate = require("./config.private");
function schemaDefaults(schema) {
    schema.set('toJSON', {
        virtuals: true,
        versionKey: false
    });
}
class Connections {
    /**
     * Inicializa las conexiones a MongoDB
     *
     * @static
     *
     * @memberOf Connections
     */
    static initialize() {
        // Configura Mongoose
        mongoose.Promise = global.Promise;
        mongoose.plugin(schemaDefaults);
        // Conecta y configura conexiones
        // 1. PRINCIPAL
        mongoose.connect(configPrivate.hosts.mongoDB_main.host);
        // configPrivate.hosts.mongoDB_main.options TERMINAR!
        this.main = mongoose.connection;
    }
}
exports.Connections = Connections;
//# sourceMappingURL=connections.js.map