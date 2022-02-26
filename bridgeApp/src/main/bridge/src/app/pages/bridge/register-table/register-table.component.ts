import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bridge } from 'src/app/models/bridge/bridge';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { ToastService } from 'src/app/services/notifications/toast.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register-table',
  templateUrl: './register-table.component.html',
  styleUrls: ['./register-table.component.scss'],
})
export class RegisterTableComponent implements OnInit {
  cols = [
    { field: 'name', header: 'nombre' },
    { field: 'mileage', header: 'kilometraje' },
    { field: 'departamentDepartamentId.name', header: 'Departamento' },
    { field: 'status', header: 'estado' },
  ];
  bridges: Bridge[] = [];

  constructor(
    private route: Router,
    private bridgeService: BridgeService,
    private toastService: ToastService,
    private bridgeComunicationService: BridgeComunicationService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getAllBridges();
  }

  onClick(selectedBridge: Bridge) {
    this.bridges.find((bridge) => {
      if (bridge.bridgeId === selectedBridge.bridgeId) {
        selectedBridge = bridge;
        console.log('selected Foro', selectedBridge);
      }
    });
    this.bridgeComunicationService.setBridge(selectedBridge);
    this.redirectToPage('/forum');
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
