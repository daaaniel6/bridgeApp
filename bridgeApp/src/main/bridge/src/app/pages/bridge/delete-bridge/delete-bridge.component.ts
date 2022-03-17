import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Bridge } from 'src/app/models/bridge/bridge';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { ToastService } from 'src/app/services/notifications/toast.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-delete-bridge',
  templateUrl: './delete-bridge.component.html',
  styleUrls: ['./delete-bridge.component.scss'],
})
export class DeleteBridgeComponent implements OnInit {
  cols = [
    { field: 'name', header: 'nombre' },
    { field: 'mileage', header: 'kilometraje' },
    { field: 'departamentDepartamentId.name', header: 'Departamento' },
    { field: 'status', header: 'estado' },
  ];
  bridges: Bridge[] = [];
  allBridges: Bridge[] = [];
  selectedBridge: Bridge = {};

  constructor(
    private route: Router,
    private bridgeService: BridgeService,
    private toastService: ToastService,
    private bridgeComunicationService: BridgeComunicationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getAllBridges();
  }

  onClick(selectedBridge: Bridge) {
    this.selectedBridge = selectedBridge;
    this.toastService.showConfirm(
      '¿Seguro quieres eliminar el puente?',
      'Eliminara los resgistros de este puente'
    );
  }
  onReject() {
    this.selectedBridge = {};
    this.messageService.clear();
    this.toastService.showInfo('Cancelado', 'Se cancelo la operacion');
  }

  onConfirm() {
    this.messageService.clear();
    for (let bridge of this.allBridges) {
      if (bridge.name === this.selectedBridge.name) {
        this.bridgeService.delete(bridge.bridgeId || 0).subscribe((data) => {});
      }
    }
    this.toastService.showSuccess(
      'Puente eliminado',
      'Se eliminaron los REGISTROS de este puente'
    );
    this.route.navigate(['/']);
  }

  getAllBridges(): void {
    this.bridgeService.getAll().subscribe((data) => {
      let allBridges = data;
      this.allBridges = allBridges;
      const key = 'name';
      let arrayUniqueByKey: Bridge[] = [
        ...new Map(allBridges.map((item) => [item[key], item])).values(),
      ];

      this.bridges = arrayUniqueByKey;
    });
  }
}
