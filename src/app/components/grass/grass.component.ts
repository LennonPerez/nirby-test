import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemonService/pokemon.service';
import getRamdomInt from '../../utils/getRamdomInt';
import PokemonData from '../../interfaces/Pokemon.interface';

@Component({
  selector: 'app-grass',
  templateUrl: './grass.component.html',
  styleUrls: ['./grass.component.scss'],
})
export class GrassComponent implements OnInit {
  ramdomPokemon: PokemonData | undefined;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.onGetPokemonsCount();
  }

  onGetPokemonsCount() {
    this.pokemonService.onGetPokemonsCount()?.subscribe(({ count }) => {
      const ramdomId: number = getRamdomInt(1, count);
      this.onGetPokemonById(ramdomId.toString());
    });
  }

  onGetPokemonById(id: string) {
    this.pokemonService.onGetPokemonById(id)?.subscribe((pokemon) => {
      this.ramdomPokemon = pokemon;
    });
  }
}
