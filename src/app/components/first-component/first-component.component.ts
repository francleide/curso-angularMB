import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  name : string ='Fran'; //typescript variavel : tipo (opcional) = valor
  age : number = 31;
  job = 'programador';
  hobbies = ['crochê', 'ler'];
  car ={
    name : "Polo",
    year: 2019,
  }
}
