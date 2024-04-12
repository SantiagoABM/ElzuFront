import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private URL = "http://localhost:3000/api/v1/formularios"

  constructor(private http: HttpClient, private router: Router) { }

  getFormularios(){
    console.log(this.http.get<any>(this.URL + '/'))
    return this.http.get<any>(this.URL + '/');
  }

}
