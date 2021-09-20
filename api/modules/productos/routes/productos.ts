import * as express from "express";
import * as productosSchema from "../schemas/productos";

const router = express.Router();

router.post("/producto", async (req, res) => {
  try {
    const newProduct = req.body;
    const productos = new productosSchema.productos(newProduct);
    const productoNuevo = await productos.save();
    console.log("Producto agregado", productoNuevo);
    return res.status(200).send({ status: "success", data: productoNuevo });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});


router.get("/productos", async (req, res) => {
  try {
    let productos = await productosSchema.productos.find();
    console.log("Productos registrados!!!", productos);
    return res.status(200).send({ status: "success", data: productos });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});


router.put("/producto/:id", async (req, res) => {
  try {
    const productUpdate = req.body;
    const idProduct = req.params.id;
    const productUpdated = await productosSchema.productos.findByIdAndUpdate(
      idProduct,
      productUpdate,
      { new: true }
    );
    console.log("Producto modificado", productUpdated);
    return res.status(200).send({ status: "success", data: productUpdated });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});
router.delete("/producto/:id", async (req, res) => {
  try {
    const productDelete = req.body;
    const idProduct = req.params.id;
    const productDeleted = await productosSchema.productos.findByIdAndDelete(
      idProduct,
      productDelete
    );
    console.log("Producto Borrado", productDeleted);
    return res.status(200).send({ status: "success", data: productDeleted });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});

export = router;
