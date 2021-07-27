import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';

// primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
// sirve para el ng-tamplate
import { SharedModule } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
// sirve para el meni del usuario
import { RippleModule } from 'primeng/ripple';
//mensaejes
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Page404Component } from './pages/page404/page404.component';
import { CarouselComponent } from './components/carousel/carousel.component';
//carousel
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';

import { NewRegisterComponent } from './pages/new-register/new-register.component';
import { EditRegisterComponent } from './pages/edit-register/edit-register.component';
import { DeleteRegisterComponent } from './pages/delete-register/delete-register.component';

//charts
// import { ChartsModule } from 'ng2-charts';
// import { ChartModule } from 'primeng/chart';
// import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PieChartComponent } from './components/pie-chart/pie-chart.component';

// dialogos
import { DialogModule } from 'primeng/dialog';

//tablas
import { TableModule } from 'primeng/table';
import { BridgesTableComponent } from './components/bridges-table/bridges-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelMenuComponent,
    MenubarComponent,
    DashboardComponent,
    Page404Component,
    CarouselComponent,
    NewRegisterComponent,
    EditRegisterComponent,
    DeleteRegisterComponent,
    //BarChartComponent,
    PieChartComponent,
    BridgesTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
    RippleModule,
    MessagesModule,
    MessageModule,
    CarouselModule,
    ToastModule,
    //ChartsModule,
    //ChartModule,
    NgxChartsModule,
    DialogModule,
    TableModule,
  ],
  exports: [NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
