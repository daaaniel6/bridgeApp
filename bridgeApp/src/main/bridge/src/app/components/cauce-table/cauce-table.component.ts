import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Channel } from 'src/app/models/bridge/channel/channel';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-cauce-table',
  templateUrl: './cauce-table.component.html',
  styleUrls: ['./cauce-table.component.scss'],
})
export class CauceTableComponent implements OnInit {
  bodyTypeOptions = [
    { label: 'Rio', value: 'Rio' },
    { label: 'Quebrada', value: 'Quebrada' },
  ];

  channelStatusOptions = [
    { label: 'Limpio', value: 'Limpio' },
    { label: 'Asolvado/Sedimentado', value: 'Asolvado/Sedimentado' },
    { label: 'Erosionado', value: 'Erosionado' },
  ];

  channelingOptions = [
    { label: 'Recto', value: 'Recto' },
    { label: 'Curva', value: 'Curva' },
    { label: 'Indefinido', value: 'Indefinido' },
  ];

  overflowOptions = [
    { label: 'Si', value: 'Si' },
    { label: 'No', value: 'No' },
  ];

  channel: Channel = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.channel =
      this.bridgeComunicationService.getBridge().channelChannelId || {};

    this.form = this.formBuilder.group({
      channelId: [],
      riverName: [],
      bodyType: [],
      channelStatus: [],
      stateZoneAdjacentToAbutments: [],
      channeling: [],
      overflow: [],
      frequency: [],
      lastOverflowDate: [],
      observation: [],
      extra: [],
      image: [],
    });

    this.form.setValue(this.channel);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService.getBridge().channelChannelId =
        this.form.value;

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('channel', data);
        });
    });
  }
}
