import { Component, OnInit } from '@angular/core';
import { RowWidth } from 'src/app/models/bridge/row-width';
import { RowWidthPile } from 'src/app/models/bridge/row-width-pile';
import { Scour } from 'src/app/models/bridge/scour';
import { Support } from 'src/app/models/bridge/support';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-pilas-table',
  templateUrl: './pilas-table.component.html',
  styleUrls: ['./pilas-table.component.scss'],
})
export class PilasTableComponent implements OnInit {
  rowWidthList: RowWidth[] = [];
  support: Support = {};
  scour: Scour = {};

  constructor(private bridgeComunicationService: BridgeComunicationService) {}

  ngOnInit(): void {
    this.rowWidthList =
      this.bridgeComunicationService.getBridge().pilePileId?.rowWidthPileList ||
      [];

    console.log('lista filas pila', this.rowWidthList);

    this.scour =
      this.bridgeComunicationService.getBridge().pilePileId?.scourScourId || {};
    this.support =
      this.bridgeComunicationService.getBridge().pilePileId?.supportSupportId ||
      {};
  }
}
