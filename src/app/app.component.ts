import { Component } from '@angular/core';
import { PokemonCaptureService } from './services/pokemonCaptureService/pokemon-capture.service';
import { PokemonCapture } from '../app/interfaces/PokemonCapture.interface';
import { PokemonService } from './services/pokemonService/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  captures: PokemonCapture[];

  constructor(
    private pokemonCaptureService: PokemonCaptureService,
    private pokemonService: PokemonService
  ) {
    this.captures = [];
  }

  ngOnInit(): void {}

  async onGetCaptures() {
    this.pokemonCaptureService.getCaptures()?.subscribe((captures) => {
      this.captures = captures;
    });
  }

  async onCreateCapture() {
    const res = await this.pokemonCaptureService.addNewCapture({
      userId: 'test',
      pokemonId: 'Pikachu',
      pokemonImageUrl: 'Pikachu',
      pokemonName: 'Pikachu',
      pokemonType: 'Lighting',
      captureTime: new Date(),
    });
    console.log(res);
  }

  async onReleaseCapture(capture: PokemonCapture) {
    const res = await this.pokemonCaptureService.releaseCapture(capture);
    console.log(res);
  }
}
