import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGuard } from "./shared/services/auth/auth.guard";

export const rootRouterConfig: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/productos/productos.module").then(
            m => m.ProductosModule
          ),
        data: { title: "Crear Producto" }
      }
    ]
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/usuarios/usuarios.module").then(
            m => m.UsuariosModule
          ),
        data: { title: "Crear Usuario" }
      }
    ]
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/auth/autenticaciones.module").then(
            m => m.AutenticacionesModule
          ),
        data: { title: "Autenticacion" }
      }
    ]
  },  
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            m => m.SessionsModule
          ),
        data: { title: "Session" }
      }
    ]
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "others",
        loadChildren: () =>
          import("./views/others/others.module").then(m => m.OthersModule),
        data: { title: "Others", breadcrumb: "OTHERS" }
      }
    ]
  },
  {
    path: "**",
    redirectTo: "sessions/404"
  }
];
