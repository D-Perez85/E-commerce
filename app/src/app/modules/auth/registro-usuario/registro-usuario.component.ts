import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AutenticacionService } from "../services/autenticaciones.service";

@Component({
  selector: "app-registro-usuario",
  templateUrl: "registro-usuario.component.html",
  styleUrls: ["registro-usuario.component.css"],
})
export class RegistrarUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private AutenticacionService: AutenticacionService, private Router: Router, private fb: FormBuilder) {}

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
    this.registrarUsuario();
    alert("Envio de Datos exitoso!") //CONFIRMACION DE ENVIO DE DATOS
  }

  registrarUsuario(){this.AutenticacionService.registrarUsuario(this.usuarioForm.value).subscribe(
    data => this.Router.navigate(['/'])
  )}

}
