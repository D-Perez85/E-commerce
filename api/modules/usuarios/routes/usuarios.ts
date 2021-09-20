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

router.put("/usuario/:id", async (req, res) => {
  try {
    console.log("Id Usuario", req.params);
    const userUpdate = req.body;
    const idUser = req.params.id;
    const userUpdated = await usuariosSchema.usuarios.findByIdAndUpdate(
      idUser,
      userUpdate,
      { new: true }
    );
    console.log("User modificado", userUpdated);
    return res.status(200).send({ status: "success", data: userUpdated });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});

router.delete("/usuario/:id", async (req, res) => {
  try {
    const userDelete = req.body;
    const idUser = req.params.id;
    const userDeleted = await usuariosSchema.usuarios.findByIdAndDelete(
      idUser,
      userDelete
    );
    console.log("User Borrado", userDeleted);
    return res.status(200).send({ status: "success", data: userDeleted });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});
export = router;
