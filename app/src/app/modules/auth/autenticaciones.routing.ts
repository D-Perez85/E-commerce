import { Routes } from '@angular/router';

import {RegistrarUsuarioComponent} from "./registro-usuario/registro-usuario.component"
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
export const AutenticacionesRoutes: Routes = [
  {
    path: 'autenticacion',
    children: [{
      path: 'registrarUsuario',
      component: RegistrarUsuarioComponent,
      data: { title: '', breadcrumb: 'REGISTRO' }
    }]
  }, 
  {
    path: 'autenticacion',
    children: [{
      path: 'loguearUsuario',
      component: LoginUsuarioComponent,
      data: { title: '', breadcrumb: 'Login' }
    }]
  }
];