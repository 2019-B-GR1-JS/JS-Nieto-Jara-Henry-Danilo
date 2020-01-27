import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-editar-libro',
  templateUrl: './ruta-editar-libro.component.html',
  styleUrls: ['./ruta-editar-libro.component.scss']
})
export class RutaEditarLibroComponent implements OnInit {

  parametrosEditar = [];
  parametrosPapa = [];

  constructor() { }

  ngOnInit() {
    this.escucharParametrosEdicion();
    this.escucharParametrosPapa()
  }

  escucharParametrosEdicion(){
    const parametros$ = this._activateRoute.params
    parametros$
      .subscribe(
        (parametros) => {
          this.parametrosEditar = parametros.idUsuario;
        }
      )
  }

  escucharParametrosPapa(){
    const parametros$ = this._activateRoute.parent.params
    parametros$
      .subscribe(
        (parametros) => {
          this.parametrosPapa = parametros.idUsuario;
          this.escucharParametrosEdicion()
          console.log('Parametros papa: ', parametros)
        }
      )
  }
  cargarUsuarioYLibro(){
    //Llamar al servidor con los parametros del papa y del hijo
    console.log(this.parametrosPapa);
    console.log(this.parametrosEditar);
  }
}
