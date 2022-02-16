import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
})
export class GeneralTableComponent implements OnInit {
  puenteSobre = [
    { label: 'Rio', value: 'Rio' },
    { label: 'Quebrada', value: 'Quebrada' },
    { label: 'Carretera', value: 'Carretera' },
    { label: 'Linea ferrea', value: 'Linea ferrea' },
  ];

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      generalDataId: [],
      length: [],
      numberSections: [],
      treadWidth: [],
      curbWidthRight: [],
      curbWidthLeft: [],
      bridgeTypology: [],
      topHeadroom: [],
      freeHeightAboveRiver: [],
      bridgeOver: [],
      numberRoads: [],
      superstructureMaterial: [],
      designLoad: [],
      yearOfConstruction: [],
      substructureMaterial: [],
      traffic: [],
      percentageTrucksBuses: [],
      lastEvaluationDate: [],
    });
    this.form.setValue(
      this.bridgeComunicationService.getBridge().generalDataGeneralDataId || {}
    );

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService.getBridge().generalDataGeneralDataId =
        values;
      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('General Guardado', data);
        });
    });
  }
}
