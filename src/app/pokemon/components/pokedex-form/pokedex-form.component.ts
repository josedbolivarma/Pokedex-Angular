import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokedex-form',
  templateUrl: './pokedex-form.component.html',
  styleUrls: ['./pokedex-form.component.css']
})
export class PokedexFormComponent implements OnInit {

  @Output() submitEvent = new EventEmitter<string>();
  pokemonId: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit( e: SubmitEvent ) {
    e.preventDefault()
    // Al mandar el formulario, emitimos el evento con el valor actual del formulario
    this.submitEvent.emit( this.pokemonId )
    this.pokemonId = ''
  }

}
