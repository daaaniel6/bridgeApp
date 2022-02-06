import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departament } from 'src/app/models/departaments/departament';
import { Municipality } from 'src/app/models/departaments/municipality';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { DepartamentService } from 'src/app/services/bridges/departament.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.scss'],
})
export class InformationTableComponent implements OnInit {
  departaments: Departament[] = [];
  municipalities: Municipality[] = [];

  public form: FormGroup = this.formBuilder.group({});

  rutaPavimentada = [
    { name: 'Si', code: '1' },
    { name: 'No', code: '2' },
    { name: 'Parcial', code: '3' },
  ];

  status = [
    { name: 'Bueno', code: '1' },
    { name: 'Regular', code: '2' },
    { name: 'Malo', code: '3' },
  ];

  alineamientoHorizontal = [
    { label: 'Tangente', value: 'Tangente' },
    { label: 'Curva', value: 'Curva' },
  ];

  esviaje = [
    { label: 'Si', value: 'Si' },
    { label: 'No', value: 'No' },
  ];

  constructor(
    private departamentService: DepartamentService,
    private bridgeService: BridgeService,
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService
  ) {}

  ngOnInit(): void {
    this.getAllDepartaments();
    this.form = this.formBuilder.group({
      bridgeId: [],
      name: ['', [Validators.required]],
      code: [],
      route: [],
      mileage: [],
      departamentDepartamentId: [],
      municipalityMunicipalityId: [],
      pavedRoute: [],
      horizontalAlignment: [],
      skew: [],
      northUtmCoordinates: [],
      eastUtmCoordinates: [],
      populationBefore: [],
      populationAfter: [],
      status: [],
      trafficLight: [],
      evaluationStartDate: [],
      evaluationEndDate: [],
      long1: [],
      lat: [],
      type: [],
      extra: [],
      bridgeInspectorList: [],
      stretchList: [],
      imageList: [],
      blueprintList: [],
      stapesList: [],
      commentList: [],
      sensorList: [],
      channelChannelId: [],
      generalDataGeneralDataId: [],
      nonStructuralElementsNonStructuralElementsId: [],
      otherOtherId: [],
      pilePileId: [],
      superstructureSuperstructureId: [],
    });
    this.form.setValue(this.bridgeComunicationService.getBridge());
    this.onDepartamentChange();
  }

  /**
   * Get all departaments
   */
  getAllDepartaments(): void {
    this.departamentService.getAllDepartaments().subscribe((data) => {
      this.departaments = data;
    });
  }

  /**
   * Get all municipalities by departament
   */
  onDepartamentChange(): void {
    if (this.form.value.departamentDepartamentId !== null) {
      if (this.form.value.departamentDepartamentId !== undefined) {
        this.municipalities =
          this.form.value.departamentDepartamentId.municipalityList;
      }
    }
  }

  onSave(): void {
    this.bridgeService.create(this.form.value).subscribe((data) => {
      console.log('Guardado con exito', data);
    });
    //console.log(this.form.value);
  }
}
