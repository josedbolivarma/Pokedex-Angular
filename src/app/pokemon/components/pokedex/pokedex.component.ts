import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public error:Boolean = false;
  public loading:Boolean = true;
  public pokemon: object | null = null;
  public pokemonID: string = Math.floor(Math.random() * 806 + 1).toString();

  constructor(
    private _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.searchPokemon();
    console.log( this.pokemon );
  }

  searchPokemon(): void {
    this._pokemonService.getPokemon( this.pokemonID )
      .subscribe({
        next: ( data ) => {
          console.log('Data', data );
          this.pokemon = data;
          this.loading = false;
          this.error = false;
        },
        error: ( error ) => {
          this.pokemon = null;
          this.loading = false;
          this.error = true;
        }
      })
  }

  handleSubmit( pokemonId: any ) {
    console.log('Pokemon ID', pokemonId );
    if(pokemonId !== ''){
      this.error = false
      this.loading = true
      this.pokemonID = window.isNaN(parseInt(pokemonId)) ? pokemonId.toLowerCase() : pokemonId
      this.searchPokemon()
      return
    }
    this.error = true
  }

}