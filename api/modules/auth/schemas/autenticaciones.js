"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios = exports.AutenticacionSchema = void 0;
const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
exports.AutenticacionSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    nombreUsuario: { type: String, required: true, lowercase: true },
    apellidoUsuario: { type: String, required: true, lowercase: true },
    dni: Number,
    password: { type: String, required: true }
});
exports.usuarios = mongoose.model("Autenticacion", exports.AutenticacionSchema, "usuarios");
//# sourceMappingURL=autenticaciones.js.map