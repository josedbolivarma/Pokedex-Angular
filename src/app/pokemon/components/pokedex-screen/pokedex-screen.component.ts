import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-screen',
  templateUrl: './pokedex-screen.component.html',
  styleUrls: ['./pokedex-screen.component.css']
})
export class PokedexScreenComponent implements OnInit {

  @Input() error!: Boolean;
  @Input() loading!: Boolean;
  @Input() pokemon!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
