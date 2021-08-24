import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss'],
})
export class NewRegisterComponent implements OnInit {
  puenteForm: boolean = false;
  generalForm: boolean = false;
  tramosForm: boolean = false;
  entradaForm: boolean = false;
  salidaForm: boolean = false;
  pilasForm: boolean = false;
  superForm: boolean = false;
  elementosForm: boolean = false;
  cauceForm: boolean = false;
  otrosForm: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  showPuenteDialog() {
    this.puenteForm = true;
  }
  showGeneralDialog() {
    this.generalForm = true;
  }
}
