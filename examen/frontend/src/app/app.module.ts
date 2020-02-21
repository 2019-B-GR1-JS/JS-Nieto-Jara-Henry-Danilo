import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaPartidosComponent } from './rutas/ruta-partidos/ruta-partidos.component';
import { RutaBoletosComponent } from './rutas/ruta-boletos/ruta-boletos.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaPartidosComponent,
    RutaBoletosComponent,
    RutaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
