import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletarComponent } from './pages/completar/completar.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'completar/:id',
    component: CompletarComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
