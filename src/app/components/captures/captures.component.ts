import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonCaptureToShow } from '../../interfaces/PokemonCapture.interface';
import { PokemonCaptureService } from '../../services/pokemonCaptureService/pokemon-capture.service';
import { MessageService } from 'primeng/api';
import { getCapitalizedText } from '../../utils/getCapitalizedText';
import formatDate from '../../utils/formatDate';
@Component({
  selector: 'app-captures',
  templateUrl: './captures.component.html',
  styleUrls: ['./captures.component.scss'],
  providers: [MessageService],
})
export class CapturesComponent implements OnInit {
  captures: PokemonCaptureToShow[] | undefined;

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
      // We have to parse the captured time from Date to string
      this.captures = captures.map((c) => {
        const parsedDate = formatDate(c.captureTime) ?? 'Undefined';
        return { ...c, captureTime: parsedDate };
      });
    });
  }

  async onReleaseCapture(pokemon: PokemonCaptureToShow) {
    try {
      await this.pokemonCaptureService.releaseCapture(pokemon.id);
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
