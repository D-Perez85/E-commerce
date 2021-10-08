import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AutenticacionService } from "../services/autenticaciones.service";

@Component({
  selector: "app-login-usuario",
  templateUrl: "login-usuario.component.html",
  styleUrls: ["login-usuario.component.css"],
})
export class LoginUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private AutenticacionService: AutenticacionService, private Router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submit() {
    console.log(this.usuarioForm.value);
    this.loguearUsuario();
    //alert("Login exitoso!") //CONFIRMACION DE LOGUIN
  }

  loguearUsuario() {
    this.AutenticacionService.loguearUsuario(this.usuarioForm.value).subscribe((data: any) => 
    {
      debugger
      if (data) {
        window.sessionStorage.setItem('jwt', data.token);
      }
    }
    // this.Router.navigate(["/"])
    );
}
}
