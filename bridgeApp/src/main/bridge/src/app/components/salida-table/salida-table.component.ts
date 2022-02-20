import { Component, OnInit } from '@angular/core';
import { RowWidth } from 'src/app/models/bridge/row-width';
import { Scour } from 'src/app/models/bridge/scour';
import { Support } from 'src/app/models/bridge/support';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-salida-table',
  templateUrl: './salida-table.component.html',
  styleUrls: ['./salida-table.component.scss'],
})
export class SalidaTableComponent implements OnInit {
  rowWidthList: RowWidth[] = [];
  support: Support = {};
  scour: Scour = {};

  constructor(private bridgeComunicationService: BridgeComunicationService) {}

  ngOnInit(): void {
    this.bridgeComunicationService.getBridge().stapesList?.find((stapes) => {
      if (stapes.nameStapes === 'Salida') {
        this.rowWidthList = stapes.rowWidthList;
        this.support = stapes.supportSupportId;
        this.scour = stapes.scourScourId;
      }
    });
  }
}
