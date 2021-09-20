import * as express from "express";
import * as autenticacionesSchema from "../schemas/autenticaciones";

const router = express.Router();

router.post("/usuario", async (req, res) => {
  try {
    const newUser = req.body;
    const usuarios = new autenticacionesSchema.usuarios(newUser);
    const usuarioNuevo = await usuarios.save();
    console.log("User agregado", usuarioNuevo);
    return res.status(200).send({ status: "success", data: usuarioNuevo });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});

export = router;
