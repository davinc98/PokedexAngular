import { Component } from '@angular/core';
import { PokemonsService } from '../../pokemons/services/pokemons.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor (private pokemonService: PokemonsService){}//Observable

  buscar(){
    this.pokemonService.incrementarOffset();
  }

}
