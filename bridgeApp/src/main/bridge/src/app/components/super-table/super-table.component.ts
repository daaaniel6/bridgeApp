import { Component, OnInit } from '@angular/core';
import { BearingSlab } from 'src/app/models/bridge/bearing-slab';
import { ConcreteRow } from 'src/app/models/bridge/concrete-row';
import { SewerSystem } from 'src/app/models/bridge/sewer-system';
import { SteelRow } from 'src/app/models/bridge/steel-row';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-super-table',
  templateUrl: './super-table.component.html',
  styleUrls: ['./super-table.component.scss'],
})
export class SuperTableComponent implements OnInit {
  bearingSlab: BearingSlab = {};
  sewerSystem: SewerSystem = {};
  concreteRowList: ConcreteRow[] = [];
  steelRowList: SteelRow[] = [];

  constructor(private bridgeComunicationService: BridgeComunicationService) {}

  ngOnInit(): void {
    this.bearingSlab =
      this.bridgeComunicationService.getBridge().superstructureSuperstructureId!
        .bearingSlabBearingSlabId || {};

    this.sewerSystem =
      this.bridgeComunicationService.getBridge().superstructureSuperstructureId!
        .sewerSystemSewerSystemId || {};

    this.concreteRowList =
      this.bridgeComunicationService.getBridge().superstructureSuperstructureId!
        .concreteRowList || [];

    this.steelRowList =
      this.bridgeComunicationService.getBridge().superstructureSuperstructureId!
        .steelRowList || [];
  }
}
