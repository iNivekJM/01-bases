import { Component } from '@angular/core';
import { dbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent {


  // @Input() personajes:Personaje[]=[];

  get personajes() {
    return this.dbzServices.personajes;
  }

  constructor(private dbzServices: dbzServices){
    this.dbzServices.personajes;
  }


}
