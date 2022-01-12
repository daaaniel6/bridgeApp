import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';

// primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

// sirve para el ng-tamplate
import { SharedModule } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
// sirve para el meni del usuario
import { RippleModule } from 'primeng/ripple';
//mensaejes
import { ToastModule } from 'primeng/toast';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Page404Component } from './pages/page404/page404.component';
import { CarouselComponent } from './components/carousel/carousel.component';
//carousel
import { CarouselModule } from 'primeng/carousel';

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
import { BridgeSelectedComponent } from './pages/bridge-selected/bridge-selected.component';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { InformationTableComponent } from './components/information-table/information-table.component';

// inputtext
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

import { DropdownModule } from 'primeng/dropdown';
import { GeneralTableComponent } from './components/general-table/general-table.component';

//calendar
import { CalendarModule } from 'primeng/calendar';
import { TramoTableComponent } from './components/tramo-table/tramo-table.component';
import { EntradaTableComponent } from './components/entrada-table/entrada-table.component';
import { SalidaTableComponent } from './components/salida-table/salida-table.component';
import { PilasTableComponent } from './components/pilas-table/pilas-table.component';
import { SuperTableComponent } from './components/super-table/super-table.component';
import { ElementosTableComponent } from './components/elementos-table/elementos-table.component';
import { CauceTableComponent } from './components/cauce-table/cauce-table.component';
import { OtrosTableComponent } from './components/otros-table/otros-table.component';

//imagenes
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { InfoBoxesComponent } from './components/info-boxes/info-boxes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './auth/register.component';

//Login
import { LogComponent } from './auth/log.component';
import { LoginComponent } from './auth/login.component';

//not external
import { interceptorProvider } from './interceptors/prod-interceptor.service';

//Services
import { LoadScriptsService } from './services/load-scripts.service';

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
    BarChartComponent,
    PieChartComponent,
    BridgesTableComponent,
    BridgeSelectedComponent,
    InformationTableComponent,
    GeneralTableComponent,
    TramoTableComponent,
    EntradaTableComponent,
    SalidaTableComponent,
    PilasTableComponent,
    SuperTableComponent,
    ElementosTableComponent,
    CauceTableComponent,
    OtrosTableComponent,
    SidebarComponent,
    NavbarComponent,
    PageHeaderComponent,
    InfoBoxesComponent,
    FooterComponent,
    HomeComponent,
    LogComponent,
    LoginComponent,
    RegisterComponent,
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
    DropdownModule,
    InputNumberModule,
    CalendarModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [NgxChartsModule],
  providers: [interceptorProvider, LoadScriptsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
