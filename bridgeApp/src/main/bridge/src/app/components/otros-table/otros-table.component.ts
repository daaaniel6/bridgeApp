import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Other } from 'src/app/models/bridge/other/other';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-otros-table',
  templateUrl: './otros-table.component.html',
  styleUrls: ['./otros-table.component.scss'],
})
export class OtrosTableComponent implements OnInit {
  signalingOptions = [
    { label: 'Hay', value: 'Hay' },
    { label: 'No hay', value: 'No hay' },
  ];

  booleanOptions = [
    { label: 'Si', value: 'Si' },
    { label: 'No', value: 'No' },
  ];

  statusOptions = [
    { label: 'Bueno', value: 'Bueno' },
    { label: 'Malo', value: 'Malo' },
  ];

  other: Other = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.other = this.bridgeComunicationService.getBridge().otherOtherId || {};

    this.form = this.formBuilder.group({
      otherId: [],
      informativeSignage: [],
      preventiveSignage: [],
      regulatorySignage: [],
      horizontalSignage: [],
      artificialLighting: [],
      sewerSystem: [],
      drainageStatus: [],
      observation: [],
      extra: [],
      imageOtherList: [],
      maintenance: [],
      repair: [],
    });

    this.form.setValue(this.other);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService.getBridge().otherOtherId = this.form.value;

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('other', data);
        });
    });
  }
}
