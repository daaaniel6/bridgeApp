import { Component, OnInit } from '@angular/core';
import { RowWidth } from 'src/app/models/bridge/row-width';
import { Scour } from 'src/app/models/bridge/scour';
import { Support } from 'src/app/models/bridge/support';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-entrada-table',
  templateUrl: './entrada-table.component.html',
  styleUrls: ['./entrada-table.component.scss'],
})
export class EntradaTableComponent implements OnInit {
  rowWidthList: RowWidth[] = [];
  support: Support = {};
  scour: Scour = {};

  constructor(private bridgeComunicationService: BridgeComunicationService) {}

  ngOnInit(): void {
    this.bridgeComunicationService.getBridge().stapesList?.find((stapes) => {
      if (stapes.nameStapes === 'Entrada') {
        this.rowWidthList = stapes.rowWidthList;
        this.support = stapes.supportSupportId;
        this.scour = stapes.scourScourId;
      }
    });
  }
}
