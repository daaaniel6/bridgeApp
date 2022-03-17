import { Component, OnInit } from '@angular/core';
import { Bridge } from 'src/app/models/bridge/bridge';
import { Channel } from 'src/app/models/bridge/channel/channel';
import { GeneralData } from 'src/app/models/bridge/general-data';
import { NonStructuralElements } from 'src/app/models/bridge/nonStructuralElements/non-structural-elements';
import { Other } from 'src/app/models/bridge/other/other';
import { Pile } from 'src/app/models/bridge/pile';
import { RowWidth } from 'src/app/models/bridge/row-width';
import { Stapes } from 'src/app/models/bridge/stapes';
import { Stretch } from 'src/app/models/bridge/stretch';
import { Superstructure } from 'src/app/models/bridge/superstructure';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-view-register',
  templateUrl: './view-register.component.html',
  styleUrls: ['./view-register.component.scss'],
})
export class ViewRegisterComponent implements OnInit {
  bridge: Bridge = {};
  general: GeneralData = {};
  stretchList: Stretch[] = [];
  //rowWidthList: RowWidth[] = [];
  entryStape: Stapes = {};
  outputStape: Stapes = {};
  pile: Pile = {};
  superstructure: Superstructure = {};
  nonStructuralElements: NonStructuralElements = {};
  channel: Channel = {};
  other: Other = {};

  constructor(private bridgeComunicationService: BridgeComunicationService) {}

  ngOnInit(): void {
    this.bridge = this.bridgeComunicationService.getBridge();
    this.general = this.bridge.generalDataGeneralDataId || {};
    this.stretchList = this.bridge.stretchList || [];

    this.bridge.stapesList?.forEach((stapes: Stapes) => {
      if (stapes.nameStapes === 'Entrada') {
        //this.rowWidthList = stapes.rowWidthList || [];
        this.entryStape = stapes;
      }
      if (stapes.nameStapes === 'Salida') {
        this.outputStape = stapes;
      }
    });

    this.pile = this.bridge.pilePileId || {};
    this.superstructure = this.bridge.superstructureSuperstructureId || {};
    this.nonStructuralElements =
      this.bridge.nonStructuralElementsNonStructuralElementsId || {};
    this.channel = this.bridge.channelChannelId || {};
    this.other = this.bridge.otherOtherId || {};
  }
}
