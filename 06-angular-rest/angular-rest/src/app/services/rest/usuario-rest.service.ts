// singletomon
// -> solo 1  instancia del servicio
import {Injectable} from "angular/core"
import {NgModule} from "@angular/core";
import {from} from "rxjs";
import {HttpClient} from "@angular/common/http"; from "@angular/core";

@inyectable({
  providedIn: 'root'
})

export class UsuarioRestService{
  //Inyeccion de deoendencias
  constructor(
    //public readonly http: HttpClient,// SErvicio -> http
    private readonly _http: HttpClient,// SErvicio -> http
  )
}
