import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexFormComponent } from './components/pokedex-form/pokedex-form.component';
import { PokedexScreenComponent } from './components/pokedex-screen/pokedex-screen.component';
import { StatComponent } from './components/stat/stat.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PokedexComponent,
    PokedexFormComponent,
    PokedexScreenComponent,
    StatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    PokedexComponent,
    PokedexFormComponent,
    PokedexScreenComponent,
    StatComponent
  ]
})
export class PokemonModule { }
