import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
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
  /**
   *
   *
   * @memberof InformationTableComponent
   */
  ngOnInit(): void {
    this.getAllDepartaments();
    this.form = this.formBuilder.group({
      bridgeId: [],
      name: ['', [Validators.required]],
      code: [],
      route: [],
      mileage: [],
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
      user: [],
    });

    this.form.setValue(this.bridgeComunicationService.getBridge());
    this.onDepartamentChange();

    /**
     * Save changes in bridge object
     */
    this.form.valueChanges.subscribe((values) => {
      this.bridgeService.update(values).subscribe((data) => {
        this.bridgeComunicationService.setBridge(values);
        console.log('Guardado con exito', data);
      });
    });
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
  getAllMunicipalitiesByDepartamet(id: String): void {
    this.departamentService.getAllMunicipalities(id).subscribe((data) => {
      this.municipalities = data;
    });
  }

  /**
   *
   */
  onDepartamentChange(): void {
    if (this.form.value.municipalityMunicipalityId !== null) {
      if (this.form.value.municipalityMunicipalityId !== undefined) {
        this.getAllMunicipalitiesByDepartamet(
          this.form.value.municipalityMunicipalityId.departamentDepartamentId
            .departamentId
        );
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
