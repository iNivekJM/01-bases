import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz-interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

//  personajes:Personaje[]=[];
  nuevo: Personaje = {
    nombre: 'Gok',
    poder: 0
  };


  constructor() {
    // this.personajes = this.dbzServices.personajes;
  }

}
