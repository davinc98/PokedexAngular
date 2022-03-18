import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeAPIResponse } from '../interfaces/pokeapi.response.interface';
import { PokeAPIResponsePokemon } from '../interfaces/pokeapi.responsepokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {



  //Arreglo de pokemons
  public resultados: any[] = [];
  private offset: number = 0;

  public pokemons: PokeAPIResponsePokemon[] = [];

  constructor(private http: HttpClient) { //Observable
    this.buscarPorOffset();
  }

  buscarPorOffset() {
    this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=20`)
      .subscribe((resp) => {
        this.resultados = [];
        this.pokemons = [];
        
        this.resultados = resp.results;

        // console.log(this.resultados);

        for (let pokemon of this.resultados) {
          let pokeurl = pokemon.url;
          // console.log(pokeurl);
          this.buscarPokemon(pokeurl);
        }

      });


  }

  buscarPokemon(url: string) {
    if (url.length > 0) {
      this.http.get<PokeAPIResponsePokemon>(url)
        .subscribe((resp: any) => {
          console.log(resp);

          this.resultados = [];
          this.pokemons.push(resp);
        });

    }
  }

  buscarPokemonNombre(nombre: string) {
    if (nombre.length > 0) {
      try{
      this.http.get<PokeAPIResponsePokemon>(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .subscribe((resp: any) => {
          console.log(resp);

          //Revisar si hay respuesta válida
          this.pokemons = [];

          this.pokemons.unshift(resp);

        });
      }catch(e){
        this.pokemons = [];
      }


    } else {
      this.pokemons.pop();
      this.incrementarOffset();
    }
  }


  incrementarOffset() {
    this.offset = this.offset + 20;
    this.buscarPorOffset();
  }


}
