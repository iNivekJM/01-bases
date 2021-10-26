import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz-interface';
// import { MainPageComponent } from "../main-page/main-page.component";
import { dbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzServices:dbzServices){
  }

  agregar(): void {
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzServices.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
