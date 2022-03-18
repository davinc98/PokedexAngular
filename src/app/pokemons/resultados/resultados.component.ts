import { Component } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  constructor(private pokemonsService: PokemonsService) { }

  get pokemons(){
    return this.pokemonsService.pokemons;
  }

  get resultados(){
    return this.pokemonsService.resultados;
  }

}
