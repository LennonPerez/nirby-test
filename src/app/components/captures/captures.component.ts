import { Component, OnInit } from '@angular/core';
import { PokemonCapture } from '../../interfaces/PokemonCapture.interface';
import { PokemonCaptureService } from '../../services/pokemonCaptureService/pokemon-capture.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { getCapitalizedText } from '../../utils/getCapitalizedText';

@Component({
  selector: 'app-captures',
  templateUrl: './captures.component.html',
  styleUrls: ['./captures.component.scss'],
  providers: [MessageService],
})
export class CapturesComponent implements OnInit {
  captures: PokemonCapture[] | undefined;

  constructor(
    private pokemonCaptureService: PokemonCaptureService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onGetCaptures();
  }

  onGetCaptures() {
    this.pokemonCaptureService.getCaptures()?.subscribe((captures) => {
      this.captures = captures;
    });
  }

  async onReleaseCapture(pokemon: PokemonCapture) {
    try {
      await this.pokemonCaptureService.releaseCapture(pokemon);
      this.showToast(`You have released your ${pokemon.pokemonName}!`);
    } catch (error) {
      this.showToast('Han error has ocurred!', 'error');
    }
  }

  goToCapturePage() {
    this.router.navigate(['grass']);
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
