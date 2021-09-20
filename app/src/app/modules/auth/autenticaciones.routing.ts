import { Routes } from '@angular/router';

import {RegistrarUsuarioComponent} from "./registro-usuario/registro-usuario.component"

export const AutenticacionesRoutes: Routes = [
  {
    path: 'autenticacion',
    children: [{
      path: 'registrarUsuario',
      component: RegistrarUsuarioComponent,
      data: { title: '', breadcrumb: 'REGISTRO' }
    }]
  }
];