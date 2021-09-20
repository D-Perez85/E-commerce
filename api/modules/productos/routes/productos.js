"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const productosSchema = require("../schemas/productos");
const router = express.Router();
router.post("/producto", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = req.body;
        const productos = new productosSchema.productos(newProduct);
        const productoNuevo = yield productos.save();
        console.log("Producto agregado", productoNuevo);
        return res.status(200).send({ status: "success", data: productoNuevo });
    }
    catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "error", data: err });
    }
}));
router.get("/productos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let productos = yield productosSchema.productos.find();
        console.log("Productos registrados!!!", productos);
        return res.status(200).send({ status: "success", data: productos });
    }
    catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "error", data: err });
    }
}));
router.put("/producto/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productUpdate = req.body;
        const idProduct = req.params.id;
        const productUpdated = yield productosSchema.productos.findByIdAndUpdate(idProduct, productUpdate, { new: true });
        console.log("Producto modificado", productUpdated);
        return res.status(200).send({ status: "success", data: productUpdated });
    }
    catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "error", data: err });
    }
}));
router.delete("/producto/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productDelete = req.body;
        const idProduct = req.params.id;
        const productDeleted = yield productosSchema.productos.findByIdAndDelete(idProduct, productDelete);
        console.log("Producto Borrado", productDeleted);
        return res.status(200).send({ status: "success", data: productDeleted });
    }
    catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "error", data: err });
    }
}));
module.exports = router;
//# sourceMappingURL=productos.js.map