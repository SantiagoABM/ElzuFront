import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {}; 
  constructor(
    private authService: AuthService,
    private router: Router) { }
  
  async submitForm() {

    (await this.authService.signIn(this.user))
    .subscribe(
      (res) => {
        localStorage.setItem('token', res.token)
        if(localStorage.getItem('token')) {
          this.router.navigate(['/'])
        }
      },
      (err) => {
        console.error('Error al logearse:', err);
      }
    );
  }
}
