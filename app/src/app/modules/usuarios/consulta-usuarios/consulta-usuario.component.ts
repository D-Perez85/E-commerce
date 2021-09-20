import { Component, OnInit, OnDestroy } from "@angular/core";
import { UsuarioService } from "../services/usuarios.service";
@Component({
  selector: "app-consulta-usuario",
  templateUrl: "consulta-usuario.component.html",
  styleUrls: ["consulta-usuario.component.scss"],
})

export class ConsultarUsuarioComponent implements OnInit, OnDestroy {
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.getUsuarios();
  }
  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      //debugger;
    })
  }

  ngOnDestroy() {}
  
}
