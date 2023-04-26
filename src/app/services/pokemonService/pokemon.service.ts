import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PokemonData, { PokemonsInfo } from '../../interfaces/Pokemon.interface';

const { pokemonApiBaseUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  onGetPokemonsCount(): Observable<PokemonsInfo> | null {
    try {
      const url = `${pokemonApiBaseUrl}/pokemon-species/?limit=0`;
      const res = this.http.get(url);
      return res as Observable<PokemonsInfo>;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  onGetPokemonById(id: string): Observable<PokemonData> | null {
    try {
      const url = `${pokemonApiBaseUrl}/pokemon/${id}`;
      const res = this.http.get(url);
      return res as Observable<PokemonData>;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
