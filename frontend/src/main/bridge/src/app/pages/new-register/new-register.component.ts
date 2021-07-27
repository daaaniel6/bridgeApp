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
