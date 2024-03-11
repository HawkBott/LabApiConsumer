import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { CatsDogs } from '../modelos/catsDogs.modelo';

@Injectable({
  providedIn: 'root'
})
export class CatsDogsService {

  constructor(private http:HttpClient) { }

  obtenerCat_and_Dog(){
    return this.http.get<CatsDogs[]>('https://api.thecatapi.com/v1/images/search')
  }

}
