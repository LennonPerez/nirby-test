import { Component, Input, OnInit } from '@angular/core';
import PokemonData from '../../interfaces/Pokemon.interface';

@Component({
  selector: 'app-pokemon-view-component',
  templateUrl: './pokemon-view-component.component.html',
  styleUrls: ['./pokemon-view-component.component.scss'],
})
export class PokemonViewComponentComponent implements OnInit {
  @Input() pokemon?: PokemonData;

  constructor() {}

  ngOnInit(): void {}
}
