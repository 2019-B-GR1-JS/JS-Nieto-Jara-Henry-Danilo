import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {LibroRestService} from "./services/rest/libro-rest.service";
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {MatInputModule} from "@angular/material/input";
import { ModalEditarUsuarioComponent } from './modales/modal-editar-usuario/modal-editar-usuario.component'
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RutainicioComponent } from './rutas/rutainicio/rutainicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionLibrosComponent } from './rutas/ruta-gestion-libros/ruta-gestion-libros.component';
import { RutaBuscarLibroComponent } from './ruta-buscar-libro/ruta-buscar-libro.component';
import { RutaCrearLibroComponent } from './rutas/ruta-crear-libro/ruta-crear-libro.component';
import { RutaEditarLibroComponent } from './rutas/ruta-editar-libro/ruta-editar-libro.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ModalEditarUsuarioComponent,
    RutainicioComponent,
    RutaLoginComponent,
    RutaGestionUsuariosComponent,
    RutaGestionLibrosComponent,
    RutaBuscarLibroComponent,
    RutaCrearLibroComponent,
    RutaEditarLibroComponent
  ],
  entryComponents:[
    ModalEditarUsuarioComponent
  ],
  imports: [
    BrowserModule, // -> Directivas
    // ngFor ngIf
    AppRoutingModule,
    FormsModule, // -> Formularios
    HttpClientModule, // -> HTTP
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    UsuarioRestService,
    LibroRestService
  ], // Servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
