import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onLoginWithGoogle() {
    try {
      await this.auth.loginWithGoogle();
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }

  async onLoginWithGithub() {
    try {
      await this.auth.loginWithGithub();
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
}
