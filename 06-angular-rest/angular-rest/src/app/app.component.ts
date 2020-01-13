import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FILAS } from './constantes/numero-filas-por-tabla';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];

  FILAS = FILAS;
  // INYECCION DE DEPENDENCIAS
  // DEPENDENCIAS -> Servicios!


  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';
  constructor(
    private readonly _httpClient: HttpClient
  ) {
    // CASI NUNCA HACER CONFIGURACIONES
  }

  ngOnInit(): void {
    // http://localhost:1337 + /usuario

    // CORS
    // http://localhost:4200 -> http://localhost:1337
    // http://gmail.com -> http://facebook.com
    const urlUsuarios = this.url + '/usuario';
    // $ -> Observable
    const usuarios$ = this._httpClient.get(
      urlUsuarios
    );
    usuarios$
      .subscribe(
        (usuarios: any[]) => { // TRY
          console.log('Usuarios: ', usuarios);
          this.usuarios = usuarios;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando usuarios'
          })
        }
      );
  }

  editar(usuario){
    console.log('Editando usuario', usuario);
  }

  eliminar(usuario){
    console.log('Eliminando usuario', usuario);
  }

  usuariosFiltrados(){
    return this.usuarios
      .filter(
      (usuario) => {
        usuario.nombre.includes(this.nombreFiltrado).apellido.includes(this.apellidoFiltrado).correo.includes(this.correoFiltrado).password.includes(this.passwordFiltrado);
      }
    )
      .filter(
      (usuario) => {
        usuario.nombre.includes(this.nombreFiltrado).apellido.includes(this.apellidoFiltrado).correo.includes(this.correoFiltrado).password.includes(this.passwordFiltrado);
      }
    )
      .filter(
        (usuario) => {
          usuario.nombre.includes(this.nombreFiltrado).apellido.includes(this.apellidoFiltrado).correo.includes(this.correoFiltrado).password.includes(this.passwordFiltrado);
        }
      )
      .filter(
        (usuario) => {
          usuario.nombre.includes(this.nombreFiltrado).apellido.includes(this.apellidoFiltrado).correo.includes(this.correoFiltrado).password.includes(this.passwordFiltrado);
        }
      );
  }

}
