import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz-interface";

@Injectable()
export class dbzServices {


    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegetta',
            poder: 25000
        },
        {
            nombre: 'Gogeta',
            poder: 35000
        }
    ];


    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje(x: Personaje) {
        this._personajes.push(x);
        // console.log(x);
    }


}