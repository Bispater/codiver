import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PlanificationComponent } from '../planification/planification.component';  // Componente que necesitas cargar
import { BinnacleComponent } from '../binnacle/binnacle.component';

const routes: Routes = [
  { 
    path: '',  // Ya no es necesario /home, ya que esta ruta está dentro del "home"
    component: HomeComponent,  // Componente Home
    children: [
      { path: '', component: PlanificationComponent },  // Cargar "Planification" al entrar
      { path: 'planification', component: PlanificationComponent },
      { path: 'binnacle', component: BinnacleComponent } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
