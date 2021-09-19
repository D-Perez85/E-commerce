"use strict";
exports.__esModule = true;
exports.Connections = void 0;
var mongoose = require("mongoose");
var configPrivate = require("./config.private");
function schemaDefaults(schema) {
    schema.set('toJSON', {
        virtuals: true,
        versionKey: false
    });
}
var Connections = /** @class */ (function () {
    function Connections() {
    }
    /**
     * Inicializa las conexiones a MongoDB
     *
     * @static
     *
     * @memberOf Connections
     */
    Connections.initialize = function () {
        // Configura Mongoose
        mongoose.Promise = global.Promise;
        mongoose.plugin(schemaDefaults);
        // Conecta y configura conexiones
        // 1. PRINCIPAL
        mongoose.connect(configPrivate.hosts.mongoDB_main.host);
        // configPrivate.hosts.mongoDB_main.options TERMINAR!
        this.main = mongoose.connection;
    };
    return Connections;
}());
exports.Connections = Connections;
