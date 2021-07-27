import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewRegisterComponent } from './pages/new-register/new-register.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: NewRegisterComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
