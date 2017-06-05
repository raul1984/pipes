import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  nombre = "Raúl";
  nombre2 = " raúL roDRigo orTega";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    dirección:{
      calle: "Primera",
      casa: "19"
    }
  };

  valorDePromesa = new Promise( (resolve, reject )=>{

    setTimeout( ()=>resolve('Llegó la hora!'),3000  );

  });

  fecha = new Date();

  video = "WWQZCDegWHg";

  activar:boolean = true;





}
