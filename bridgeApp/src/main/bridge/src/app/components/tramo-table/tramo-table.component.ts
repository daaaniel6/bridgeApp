import { Component, OnInit } from '@angular/core';
import { Stretch } from 'src/app/models/bridge/stretch';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-tramo-table',
  templateUrl: './tramo-table.component.html',
  styleUrls: ['./tramo-table.component.scss'],
})
export class TramoTableComponent implements OnInit {
  stretchListAux: Stretch[] = [{}, {}, {}, {}];

  constructor(private bridgeComunicationService: BridgeComunicationService) {}

  ngOnInit(): void {
    this.stretchListAux =
      this.bridgeComunicationService.getBridge().stretchList || [];
  }
}
