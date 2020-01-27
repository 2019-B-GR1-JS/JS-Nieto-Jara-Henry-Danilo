import { Component, OnInit } from '@angular/core';
import {subscribeTo} from "rxjs/internal-compatibility";
import {error} from "util";

@Component({
  selector: 'app-ruta-buscar-libro',
  templateUrl: './ruta-buscar-libro.component.html',
  styleUrls: ['./ruta-buscar-libro.component.scss']
})
export class RutaBuscarLibroComponent implements OnInit {

  libros = [];
  idUsuario: number;

  constructor() { }

  ngOnInit() {
  }

  escucharParametros(){
    const parametros$ = this._activateRoute.params
    parametros$
      .subscribe(
        (parametros) => {
          console.log(parametros);
          this.idUsuario = +parametros.idUsuario;
          this.buscarLibrosPorSuIdUsuario(+parametros.idUsuario);
        }
      )
  }
  buscarLibrosPorSuIdUsuario(idUsuarui: number){
    const consulta = `idUsuario=${idUSuario}`;
    const libros$ = this._libroRestService
      .buscar(consulta);
    libros$
      .subscribe(
        (libros) => {//ok
          console.log(libros)
        },
        (error) => { //error
          console.log(error);
        }
    )
  }
}
