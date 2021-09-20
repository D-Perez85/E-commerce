import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioService } from "../services/usuarios.service";

@Component({
  selector: "app-usuario",
  templateUrl: "crear-usuario.component.html",
  styleUrls: ["crear-usuario.component.css"],
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private UsuarioService: UsuarioService, private Router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nombreUsuario: ["", Validators.required],
      apellidoUsuario: ["", Validators.required],
      dni: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submit() {
    console.log(this.usuarioForm.value);

    alert("Envio de Datos exitoso!") //TEST CONFIRMACION DE ENVIO DE DATOS
    location.reload(); //REFRESH DE PANTALLA
  }

}
