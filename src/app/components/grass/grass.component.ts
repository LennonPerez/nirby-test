import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemonService/pokemon.service';
import getRamdomInt from '../../utils/getRamdomInt';
import PokemonData from '../../interfaces/Pokemon.interface';
import { PokemonCaptureService } from '../../services/pokemonCaptureService/pokemon-capture.service';
import { PokemonCaptureBase } from '../../interfaces/PokemonCapture.interface';
import { MessageService } from 'primeng/api';
import { getCapitalizedText } from '../../utils/getCapitalizedText';

@Component({
  selector: 'app-grass',
  templateUrl: './grass.component.html',
  styleUrls: ['./grass.component.scss'],
  providers: [MessageService],
})
export class GrassComponent implements OnInit {
  ramdomPokemon: PokemonData | undefined;

  constructor(
    private pokemonService: PokemonService,
    private pokemonCaptureService: PokemonCaptureService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.onGetPokemonsCount();
  }

  get isAPokemonLoaded() {
    return this.ramdomPokemon != null;
  }

  onGetPokemonsCount() {
    this.pokemonService.onGetPokemonsCount()?.subscribe(({ count }) => {
      const ramdom: number = getRamdomInt(1, count);
      this.onGetPokemonById(ramdom.toString());
    });
  }

  onGetPokemonById(id: string) {
    this.ramdomPokemon = undefined;
    this.pokemonService.onGetPokemonById(id)?.subscribe((pokemon) => {
      this.ramdomPokemon = pokemon;
    });
  }

  async onCapturePokemon() {
    if (!this.ramdomPokemon) throw Error('no pokemon selected');

    const capturedPokemon: PokemonCaptureBase = {
      pokemonId: this.ramdomPokemon.id,
      pokemonName: getCapitalizedText(this.ramdomPokemon.name),
      pokemonTypes: this.ramdomPokemon.types.map((t) => t.type),
      pokemonImageUrl: this.ramdomPokemon.sprites.front_default as string,
      captureTime: new Date(),
    };
    await this.pokemonCaptureService.addNewCapture(capturedPokemon);
  }

  async onTryCatchPokemon(prov: number) {
    try {
      const random = Math.random() * 100;
      const pokemonName = this.ramdomPokemon?.name;

      if (random <= prov) {
        await this.onCapturePokemon();
        this.showToast(`Congratulations! You've captured ${pokemonName}!`);
      } else {
        if (prov == 0) {
          this.showToast(`You let ${pokemonName} escape!`, 'info');
        } else {
          this.showToast(`Oh no! ${pokemonName} has escaped.`, 'error');
        }
      }
      this.onGetPokemonsCount();
    } catch (error) {
      console.log(error);
    }
  }

  showToast(message: string, type?: string) {
    this.messageService.add({
      severity: type ?? 'success',
      summary: getCapitalizedText(type ?? 'success'),
      detail: message,
      closable: true,
    });
  }
}
