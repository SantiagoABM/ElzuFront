import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  historiales = [
    { 
      _id: 1,equipo: 240032, operador: 'Santiago', supervisor: 'Manuel', gasolina: 4, fecha: '17-04-2024', horaInicio: '06:00 a.m.', items: []
    },
    { 
      _id: 2,equipo: 240032, operador: 'Santiago', supervisor: 'Manuel', gasolina: 4, fecha: '18-04-2024', horaInicio: '06:00 a.m.', items: []
    },
    { 
      _id: 2,equipo: 240032, operador: 'Santiago', supervisor: 'Manuel', gasolina: 4, fecha: '19-04-2024', horaInicio: '06:00 a.m.', items: []
    }
  ]
  constructor() { }
  getFormularios(){
    // console.log(this.http.get<any>(this.URL + '/'))
    return this.historiales;
  }
}
