import * as mongoose from "mongoose";

export const ProductoSchema = new mongoose.Schema({
    nombreProducto: { type: String, required: false, lowercase: true },
    precio: Number,
    detalle: { type: String, lowercase: true },
    imagen: { type: String, lowercase: true },
    disponible: { type: Boolean, required: true, lowercase: true }
});

export let productos = mongoose.model("Producto", ProductoSchema, "productos");
