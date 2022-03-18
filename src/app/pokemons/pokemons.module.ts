import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    PokemonsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    PokemonsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonsModule { }
