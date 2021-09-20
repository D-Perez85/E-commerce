"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UsuarioSchema = new mongoose.Schema({
    nombreUsuario: { type: String, required: true, lowercase: true },
    apellidoUsuario: { type: String, required: true, lowercase: true },
    dni: Number,
    password: { type: String, required: true }
});
exports.usuarios = mongoose.model("Usuario", exports.UsuarioSchema, "usuarios");
//# sourceMappingURL=usuarios.js.map