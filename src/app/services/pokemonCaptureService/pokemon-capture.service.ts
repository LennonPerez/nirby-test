import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';
import { PokemonCaptureToSave } from '../../interfaces/PokemonCapture.interface';
import { map } from 'rxjs/operators';
import { Timestamp } from '@angular/fire/firestore';
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

    // Here we must parse the data due to firebase returns a timestamp instead of a Date
    return data.pipe(
      map((captures) =>
        captures.map((capture) => {
          const captureTime = (capture['captureTime'] as Timestamp).toDate();
          return { ...capture, captureTime } as PokemonCapture;
        })
      )
    );
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

  releaseCapture(pokemonId: string) {
    const captureRef = doc(this.firestore, `captures/${pokemonId}`);
    return deleteDoc(captureRef);
  }
}
