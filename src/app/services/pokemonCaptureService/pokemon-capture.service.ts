import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Firestore,
  doc,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import {
  PokemonCapture,
  PokemonCaptureBase,
} from '../../interfaces/PokemonCapture.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonCaptureService {
  constructor(private firestore: Firestore) {}

  getCaptures(): Observable<PokemonCapture[]> {
    const capturesRef = collection(this.firestore, 'captures');
    const data = collectionData(capturesRef, { idField: 'id' });
    return data as Observable<PokemonCapture[]>;
  }

  addNewCapture(pokemon: PokemonCaptureBase) {
    const capturesRef = collection(this.firestore, 'captures');
    return addDoc(capturesRef, pokemon);
  }

  releaseCapture(pokemon: PokemonCapture) {
    const captureRef = doc(this.firestore, `captures/${pokemon.id}`);
    return deleteDoc(captureRef);
  }
}
