import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';
import { PokemonCaptureToSave } from '../../interfaces/PokemonCapture.interface';
import {
  Firestore,
  doc,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  query,
  where,
} from '@angular/fire/firestore';
import {
  PokemonCapture,
  PokemonCaptureBase,
} from '../../interfaces/PokemonCapture.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonCaptureService {
  constructor(private firestore: Firestore, private auth: AuthService) {}

  getCaptures(): Observable<PokemonCapture[]> | null {
    const currentUserId: string | undefined = this.auth.getCurrentUser?.uid;
    if (!currentUserId) return null;

    const capturesRef = collection(this.firestore, 'captures');
    const queryByUserId = query(
      capturesRef,
      where('userId', '==', currentUserId)
    );
    const data = collectionData(queryByUserId, { idField: 'id' });
    return data as Observable<PokemonCapture[]>;
  }

  addNewCapture(pokemon: PokemonCaptureBase) {
    const currentUserId: string | undefined = this.auth.getCurrentUser?.uid;
    if (!currentUserId) return null;

    const pokemonToSave: PokemonCaptureToSave = {
      ...pokemon,
      userId: currentUserId,
    };

    const capturesRef = collection(this.firestore, 'captures');
    return addDoc(capturesRef, pokemonToSave);
  }

  releaseCapture(pokemon: PokemonCapture) {
    const captureRef = doc(this.firestore, `captures/${pokemon.id}`);
    return deleteDoc(captureRef);
  }
}
