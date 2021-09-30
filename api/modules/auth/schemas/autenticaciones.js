"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios = exports.AutenticacionSchema = void 0;
const mongoose = require("mongoose");
exports.AutenticacionSchema = new mongoose.Schema({
    nombreUsuario: { type: String, required: true, lowercase: true },
    apellidoUsuario: { type: String, required: true, lowercase: true },
    dni: Number,
    password: { type: String, required: true }
});
exports.usuarios = mongoose.model("Autenticacion", exports.AutenticacionSchema, "autenticaciones");
//# sourceMappingURL=autenticaciones.js.map