import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private URL: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPokemon( pokemonId: string ) {
    console.log('ID', pokemonId );
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
  }

}
