import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletarComponent } from './pages/completar/completar.component';
import { FormularioRoutingModule } from './formulario-routing.module';
import { HistorialesComponent } from './pages/historiales/historiales.component';



@NgModule({
  declarations: [
    CompletarComponent,
    HistorialesComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule
  ]
})
export class FormulariosModule { }
