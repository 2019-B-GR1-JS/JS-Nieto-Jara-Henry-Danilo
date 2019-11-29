import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent implements OnInit , OnDestroy{

  ancho = 200;
  alto = 200;
  @Input()
  public  titulo:string

  @Input()
  public imagen:string;

  @Input() //atributo o propiedad
  public textoImagen:string;

  @Input()
  public textoBoton:string;
  @Input()
  public num1:number;
  @Input()
  public num2:number;

  @Output() //evento del componente
  public cambioSueldo = new EventEmitter();
  @Output() //evento del componente
  public resul:number;
  @Output() //evento del componente
  public ress:number=0;
  @Output() //evento del componente
  public resr:number=0;
  @Output() //evento del componente
  public resm:number=0;
  @Output() //evento del componente
  public resd:number=0;

  constructor() {
    console.log('instanciando'); //no se debe meter logica de negocio en el constructor
  } //instancia la clase(ayuda ->angular)

  ngOnInit() { //la clase esta lista, hace algo al inicio
    console.log('esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
  }

  ngOnDestroy(): void { //la clase esta por destruirse, //el void regresa null no es necesario escribir

  }

  saludar()
  {
    alert('HOLAAAAAA');
  }

  aumentarSueldo()
  {
    this.textoBoton = (Number(this.textoBoton) +1).toString();
    //transformar a numero otr manera
    //this.textoBoton = (+(this.textoBoton) +1).toString();
    this.alto = this.alto +1;
    this.ancho = (this.ancho +1 );
    this.cambioSueldo.emit(this.textoBoton); //se emite el evento
  }

  onSubmit(event: KeyboardEvent) {
    console.log(event)
    const elemento = event.srcElement as any
    if (elemento.id == 1)
      this.num1 = elemento.value
    if (elemento.id == 2)
      this.num2 = elemento.value
    console.log('Num1: ' + this.num1)
    console.log('Num2: ' + this.num2)
    this.ress = Number(this.num1) + Number(this.num2)
    this.resr = Number(this.num1) - Number(this.num2)
    this.resm = Number(this.num1) * Number(this.num2)
    this.resd = Number(this.num1) / Number(this.num2)

  }

  calculadora(){
    let re = Number(this.num1) + Number(this.num2)
    this.resul = re

  }
//class (etiquta html)
//  instancia a la calse
//  clase esta lista
// clase se destruye
}
