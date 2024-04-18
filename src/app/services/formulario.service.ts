import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  formularios = [
    {
      _id: 1, nombre: 'Tractor', imagen: 'https://vanacco.com/wp-content/uploads/2020/06/Form-1.jpg'
    }
  ]

  private URL = "http://localhost:3000/api/v1/formularios"

  constructor(private http: HttpClient, private router: Router) { }

  getFormularios(){
    // console.log(this.http.get<any>(this.URL + '/'))
    return this.formularios;
  }

}
