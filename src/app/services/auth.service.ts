import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private URL = "http://localhost:3000/api/v1/auth"
  

  constructor(private http: HttpClient, private router: Router) { }

  async signIn(user: {}) : Promise<Observable<any>>{
    return await this.http.post<any>(this.URL + '/signin', user);
  }

  async signUp(user: {}): Promise<Observable<any>> {
    return  await this.http.post<any>(this.URL + '/signup', user);
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }
  getRol(): string | null{
      const tok: any = this.getToken();
      const decodedToken: any = jwtDecode(tok);
      const userRol = decodedToken.rol;
      console.log(decodedToken);
      return userRol
  }
  loggedIn() {
    return !!this.getToken()
  }
  getUsuario(): string {
    const token = this.getToken()

    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.name;
    }
    return '';
  }
  getUsuarioId(): string {
    const token = this.getToken()

    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.id;
    }
    return '';
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }

}
