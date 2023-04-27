import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss'],
})
export class NavbarComponentComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onGoToHome() {
    this.router.navigate(['']);
  }

  async onLogout() {
    try {
      await this.auth.logout();
      this.router.navigate(['login']);
    } catch (error) {
      console.log(error);
    }
  }
}
