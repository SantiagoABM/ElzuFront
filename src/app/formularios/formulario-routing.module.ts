import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletarComponent } from './pages/completar/completar.component';
import { AuthGuard } from '../guards/auth.guard';
import { HistorialesComponent } from './pages/historiales/historiales.component';

const routes: Routes = [
  {
    path: 'completar/:id',
    component: CompletarComponent
  },
  {
    path: 'historiales/:id',
    component: HistorialesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
