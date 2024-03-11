import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsDogsComponent } from './cats-dogs/cats-dogs.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsDogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Añade HttpClientModule a la lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
