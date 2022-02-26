import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bridge } from 'src/app/models/bridge/bridge';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { ToastService } from 'src/app/services/notifications/toast.service';
import { TokenService } from 'src/app/services/token.service';

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
    private tokenService: TokenService,
    private bridgeComunicationService: BridgeComunicationService
  ) {}

  ngOnInit(): void {
    this.getAllBridges();
    this.selectedBridge = {};
  }

  clickContinue() {
    if (this.selectedBridge === null || this.selectedBridge === undefined) {
      this.toastService.showError(
        'Error',
        'Tiene que seleccionar uno de los puentes'
      );
    } else {
      // find selectedBridge in bridges
      this.bridges.find((bridge) => {
        if (bridge.bridgeId === this.selectedBridge.bridgeId) {
          this.selectedBridge = bridge;
          console.log('selectedBridge', this.selectedBridge);
        }
      });
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

      let bridgesInProgress: Bridge[] = [];
      this.bridges.filter((bridge) => {
        if (
          bridge.user?.userName === this.tokenService.getUserName() &&
          bridge.evaluationEndDate === null
        ) {
          bridgesInProgress.push(bridge);
        }
      });
      this.bridges = bridgesInProgress;
    });
  }
}
