import * as express from "express";
import * as usuariosSchema from "../schemas/usuarios";

const router = express.Router();

router.post("/usuario", async (req, res) => {
  try {
    const newUser = req.body;
    const usuarios = new usuariosSchema.usuarios(newUser);
    const usuarioNuevo = await usuarios.save();
    console.log("User agregado", usuarioNuevo);
    return res.status(200).send({ status: "success", data: usuarioNuevo });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});


router.get("/usuarios", async (req, res) => {
  try {
    let usuarios = await usuariosSchema.usuarios.find();
    console.log("Usuarios registrados!!!", usuarios);
    return res.status(200).send({ status: "success", data: usuarios });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});

export = router;
