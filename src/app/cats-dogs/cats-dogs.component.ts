import { Component, OnInit } from '@angular/core';

import { CatsDogs } from '../modelos/catsDogs.modelo';
import { CatsDogsService } from '../servicios/cats-dogs.service';

@Component({
  selector: 'app-cats-dogs',
  templateUrl: './cats-dogs.component.html',
  styleUrls: ['./cats-dogs.component.css']
})
export class CatsDogsComponent implements OnInit{

  listaCatsDogs: CatsDogs[]=[]

  constructor (private catsDogsService:CatsDogsService){}

  ngOnInit(): void {
    this.catsDogsService.obtenerCat_and_Dog()
    .subscribe(data=>{
      console.log(data);
      this.listaCatsDogs=data;
    });
  }

}
