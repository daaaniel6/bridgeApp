import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bridge } from 'src/app/models/bridge/bridge';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { ToastService } from 'src/app/services/notifications/toast.service';

@Component({
  selector: 'app-bridge-selected',
  templateUrl: './bridge-selected.component.html',
  styleUrls: ['./bridge-selected.component.scss'],
})
export class BridgeSelectedComponent implements OnInit {
  cols = [
    { field: 'name', header: 'nombre' },
    { field: 'mileage', header: 'kilometraje' },
    { field: 'departamentDepartamentId.name', header: 'Departamento' },
    { field: 'status', header: 'estado' },
  ];
  bridges: Bridge[] = [];

  selectedBridge: Bridge = this.bridges[0];

  constructor(
    private route: Router,
    private bridgeService: BridgeService,
    private toastService: ToastService,
    private bridgeComunicationService: BridgeComunicationService
  ) {}

  ngOnInit(): void {
    this.getAllBridges();
  }

  clickContinue() {
    if (this.selectedBridge === null || this.selectedBridge === undefined) {
      this.toastService.showError(
        'Error',
        'Tiene que seleccionar uno de los puentes'
      );
    } else {
      this.bridgeComunicationService.setBridge(this.selectedBridge);
      this.redirectToPage('/newRegister');
    }
  }

  redirectToPage(page: string) {
    this.route.navigate([page]);
  }

  getAllBridges(): void {
    this.bridgeService.getAll().subscribe((data) => {
      this.bridges = data;
    });
  }
}
