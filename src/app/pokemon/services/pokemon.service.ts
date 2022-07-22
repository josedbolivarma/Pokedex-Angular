import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Pokemon } from '../interfaces/Pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private URL: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPokemon( pokemonId: string ) {
    console.log('ID', pokemonId );
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
  }

}
