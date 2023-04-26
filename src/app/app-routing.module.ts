import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { GrassComponent } from './components/grass/grass.component';
import { CapturesComponent } from './components/captures/captures.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'grass',
    component: GrassComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
  {
    path: 'captures',
    component: CapturesComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
  {
    path: '',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
