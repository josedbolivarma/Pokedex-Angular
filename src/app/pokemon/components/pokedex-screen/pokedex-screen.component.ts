import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon.interface';

@Component({
  selector: 'app-pokedex-screen',
  templateUrl: './pokedex-screen.component.html',
  styleUrls: ['./pokedex-screen.component.css']
})
export class PokedexScreenComponent implements OnInit {

  @Input() error!: Boolean;
  @Input() loading!: Boolean;
  @Input() pokemon!: Pokemon | any;

  constructor() { }

  ngOnInit(): void {
  }

}
