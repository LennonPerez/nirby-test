import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { GrassComponent } from './components/grass/grass.component';
import { CapturesComponent } from './components/captures/captures.component';
import { MainComponent } from './components/main/main.component';
import { PokemonViewComponentComponent } from './components/pokemon-view-component/pokemon-view-component.component';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PokeballSelectorComponentComponent } from './components/pokeball-selector-component/pokeball-selector-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GrassComponent,
    CapturesComponent,
    MainComponent,
    PokemonViewComponentComponent,
    PokeballSelectorComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenuModule,
    ToastModule,
    NoopAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
