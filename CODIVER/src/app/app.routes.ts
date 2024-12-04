import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlanificationComponent } from './planification/planification.component';  // Importar PlanificationComponent
import { BinnacleComponent } from './binnacle/binnacle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: PlanificationComponent },  // Ruta predeterminada dentro de home
    { path: 'planification', component: PlanificationComponent },  // Ruta específica para Planification
    { path: 'binnacle', component: BinnacleComponent },  // Ruta específica para Planification
  ]},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
