import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard {

  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getRol() == "administrador") {
      return true;
    } else {
      this.router.navigate(['/inicio']);
      return false;
    }
  }

}
