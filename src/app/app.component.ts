import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElzuFront';
  user: any = {}; 
  constructor(
    private  authService: AuthService) { }
  
  async submitForm() {
    (await this.authService.signIn(this.user))
    .subscribe(
      (res) => {
        localStorage.setItem('token', res.token)
        console.log('Logeado con exito:', res);
      },
      (err) => {
        console.error('Error al logearse:', err);
      }
    );
  }
}
