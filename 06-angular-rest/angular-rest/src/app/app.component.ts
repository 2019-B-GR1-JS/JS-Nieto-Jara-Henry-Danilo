import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppCompoent implements ngOninit{
  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];
  //Inyeccion de dependencias
  //Dependencias .> sercivios
  Constructor(
    private readonly _httpdClient: HttpClient
({
  //Casi nunca hacer config
})

ngOnInit(): void{
  //http://localhost:1337    / usuario
  const urlUsuarios = this.url + '/usuario';
  const usuarios$ = this._httpClient.get(
    urlUsuarios
  );
  usuarios$
    .subscribe(
      next:(usuarios: any[])=> { // try
        console.log('Usuarios: ',  usuarios);
        this.usuarios = usuarios;
      },
      error:(error)=>{ //catch
        console.error({
          error: error,
          mensaje: 'Error consultando usuarios'
        })
  }
}
    )
//this.httpClient.get
}
