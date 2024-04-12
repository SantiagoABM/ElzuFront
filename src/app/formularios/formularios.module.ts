import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletarComponent } from './pages/completar/completar.component';
import { FormularioRoutingModule } from './formulario-routing.module';



@NgModule({
  declarations: [
    CompletarComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule
  ]
})
export class FormulariosModule { }
