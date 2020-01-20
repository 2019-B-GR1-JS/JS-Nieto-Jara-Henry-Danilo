import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutainicioComponent} from "./rutas/rutainicio/rutainicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionLibrosComponent} from "./rutas/ruta-gestion-libros/ruta-gestion-libros.component";


const routes: Routes = [
  {
    path: 'inicio',
    component: RutainicioComponent
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'gestion-usuarios',
    component: RutaGestionUsuariosComponent
  },
  {
    path: 'gestion-libros',
    component: RutaGestionLibrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {

  }
  ngOnInit
}
