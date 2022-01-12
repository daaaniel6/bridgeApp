import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogComponent } from './auth/log.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BridgeSelectedComponent } from './pages/bridge-selected/bridge-selected.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NewRegisterComponent } from './pages/new-register/new-register.component';
import { Page404Component } from './pages/page404/page404.component';

import { ProdGuardService as guard } from './guards/prod-guard.service';
import { RegisterComponent } from './auth/register.component';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin', 'user'] },
  },
  { path: 'login', component: LoginComponent },
  { path: 'log', component: LogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'selectBridge', component: BridgeSelectedComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
