import { Component, OnInit } from '@angular/core';
import { PokemonCapture } from '../../interfaces/PokemonCapture.interface';
import { PokemonCaptureService } from '../../services/pokemonCaptureService/pokemon-capture.service';

@Component({
  selector: 'app-captures',
  templateUrl: './captures.component.html',
  styleUrls: ['./captures.component.scss'],
})
export class CapturesComponent implements OnInit {
  captures: PokemonCapture[] | undefined;

  constructor(private pokemonCaptureService: PokemonCaptureService) {}

  ngOnInit(): void {
    this.onGetCaptures();
  }

  onGetCaptures() {
    this.pokemonCaptureService.getCaptures()?.subscribe((captures) => {
      this.captures = captures;
    });
  }
}
