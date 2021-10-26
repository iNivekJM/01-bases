import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template:`
  <h1>{{title}}</h1>

<h3>La base es <b>{{base}}</b></h3>

<button (click)="acumular(base)"> +1</button>
<h1>{{numero}}</h1>
<button (click)="acumular(-base)"> -1</button>
`
})

export class ContadorComponent{
  title = 'Contador App';
  numero: number = 0;

  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
