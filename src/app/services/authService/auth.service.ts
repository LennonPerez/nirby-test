import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Auth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  isLoggedIn = (): boolean => this.auth.currentUser != null;

  getCurrentUser = (): User | null => this.auth.currentUser;

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}
