import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador/contador.component';
import { heroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent
  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
