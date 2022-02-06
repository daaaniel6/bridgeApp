import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BridgeSelectedComponent } from './pages/bridge-selected/bridge-selected.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProdGuardService } from './guards/prod-guard.service';
import { LoginComponent } from './auth/login.component';
import { LoginGuard } from './guards/login.guard';
import { SendEmailComponent } from './pages/changePassword/send-email/send-email.component';
import { ChangePasswordComponent } from './pages/changePassword/change-password/change-password.component';
import { NewBridgeComponent } from './pages/bridge/new-bridge/new-bridge.component';
import { NewRegisterComponent } from './pages/bridge/new-register/new-register.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'sendemail',
    component: SendEmailComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'change-password/:tokenPassword',
    component: ChangePasswordComponent,
    canActivate: [LoginGuard],
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'new-bridge',
    component: NewBridgeComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'selectBridge',
    component: BridgeSelectedComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'newRegister',
    component: NewRegisterComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
