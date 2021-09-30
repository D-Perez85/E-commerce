"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productos = exports.ProductoSchema = void 0;
const mongoose = require("mongoose");
exports.ProductoSchema = new mongoose.Schema({
    nombreProducto: { type: String, required: false, lowercase: true },
    precio: Number,
    detalle: { type: String, lowercase: true },
    imagen: { type: String, lowercase: true },
    disponible: { type: Boolean, required: true, lowercase: true }
});
exports.productos = mongoose.model("Producto", exports.ProductoSchema, "productos");
//# sourceMappingURL=productos.js.map