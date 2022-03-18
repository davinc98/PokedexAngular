import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor (private pokemonService: PokemonsService){}//Observable

  buscar(){

    //Obtener texto del cuadro de busqueda
    const pokemon = this.txtBuscar.nativeElement.value;

    //Validar si es una cadena vacia
    // if(pokemon.trim().length===0){
    //   return;
    // }

    this.pokemonService.buscarPokemonNombre(pokemon);
    
    // console.log(pokemon);

    //Limpiar cuadro de busqueda
    this.txtBuscar.nativeElement.value = "";
  }


}
