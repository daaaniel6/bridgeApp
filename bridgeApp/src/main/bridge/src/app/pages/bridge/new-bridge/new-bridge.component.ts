import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stapes } from 'src/app/models/bridge/stapes';
import { Stretch } from 'src/app/models/bridge/stretch';
import { Departament } from 'src/app/models/departaments/departament';
import { Municipality } from 'src/app/models/departaments/municipality';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth.service';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { DepartamentService } from 'src/app/services/bridges/departament.service';
import { ToastService } from 'src/app/services/notifications/toast.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-new-bridge',
  templateUrl: './new-bridge.component.html',
  styleUrls: ['./new-bridge.component.scss'],
})
export class NewBridgeComponent implements OnInit {
  departaments: Departament[] = [];
  municipalities: Municipality[] = [];
  user: User = {};
  stretchList: Stretch[] = [{}, {}, {}, {}];

  entryStape: Stapes = {
    nameStapes: 'Entrada',
    rowWidthList: [
      {
        nameRow: 'Cortina Superior',
        material: null,
        height: null,
        width: null,
        cracksInOneDirection: null,
        cracksInTwoDirections: null,
        stoneLossPerBlow: null,
        steelExhibition: null,
        others: null,
        extra: null,
      },
      {
        nameRow: 'Cortina Inferior',
        material: null,
        height: null,
        width: null,
        cracksInOneDirection: null,
        cracksInTwoDirections: null,
        stoneLossPerBlow: null,
        steelExhibition: null,
        others: null,
        extra: null,
      },
      {
        nameRow: 'Viga de Apoyo',
        material: null,
        height: null,
        width: null,
        cracksInOneDirection: null,
        cracksInTwoDirections: null,
        stoneLossPerBlow: null,
        steelExhibition: null,
        others: null,
        extra: null,
      },
      {
        nameRow: 'Columnas',
        material: null,
        height: null,
        width: null,
        cracksInOneDirection: null,
        cracksInTwoDirections: null,
        stoneLossPerBlow: null,
        steelExhibition: null,
        others: null,
        extra: null,
      },
      {
        nameRow: 'Cuerpo',
        material: null,
        height: null,
        width: null,
        cracksInOneDirection: null,
        cracksInTwoDirections: null,
        stoneLossPerBlow: null,
        steelExhibition: null,
        others: null,
        extra: null,
      },
      {
        nameRow: 'Aguas Arriba',
        material: null,
        height: null,
        width: null,
        cracksInOneDirection: null,
        cracksInTwoDirections: null,
        stoneLossPerBlow: null,
        steelExhibition: null,
        others: null,
        extra: null,
      },
      {
        nameRow: 'Aguas Abajo',
        material: null,
        height: null,
        width: null,
        cracksInOneDirection: null,
        cracksInTwoDirections: null,
        stoneLossPerBlow: null,
        steelExhibition: null,
        others: null,
        extra: null,
      },
    ],
    scourScourId: {
      name: 'Socavacion',
      thereIsNot: '',
      yesButThereIsNot: '',
      yesThereIsExposure: '',
      settlementOf: '',
      extra: null,
      pileList: [],
    },
    supportSupportId: {
      name: 'Apoyos',
      material: '',
      crushedNeoprene: '',
      outOfPlace: '',
      rusty: '',
      boltMissing: '',
      brokenBolt: '',
      others: '',
      extra: null,
      pileList: [],
    },
  };

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private departamentService: DepartamentService,
    private bridgeService: BridgeService,
    private authService: AuthService,
    private tokenService: TokenService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDepartaments();
    this.getUserByUsername(this.tokenService.getUserName());
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      code: [],
      route: [],
      mileage: [],
      departamentDepartamentId: ['', [Validators.required]],
      municipalityMunicipalityId: [],
      pavedRoute: [],
      horizontalAlignment: [],
      skew: [],
      northUtmCoordinates: [],
      eastUtmCoordinates: [],
      populationBefore: [],
      populationAfter: [],
      status: ['', [Validators.required]],
      evaluationStartDate: [],
      user: [],
      stretchList: this.stretchList,
    });
  }

  getUserByUsername(username: String): void {
    this.authService.getUserByUsername(username).subscribe((data) => {
      this.user = data;
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
  getAllMunicipalitiesFromDepartamet(id: String): void {
    this.departamentService.getAllMunicipalities(id).subscribe((data) => {
      this.municipalities = data;
    });
  }

  onDepartamentChange(): void {
    this.getAllMunicipalitiesFromDepartamet(
      this.form.value.departamentDepartamentId.departamentId
    );
  }

  /**
   * Save bridge
   */
  onSave(): void {
    this.form.value.evaluationStartDate = new Date();
    this.form.value.user = this.user;
    this.bridgeService.create(this.form.value).subscribe(
      (data) => {
        this.toastService.showSuccess(
          'Puente Guardado',
          'Se a creado el puente con nombre: ' + this.form.value.name
        );
        this.toastService.showInfo(
          'Puente',
          'Llene la informacion restante en Puentes en proceso '
        );
        this.form.reset();
      },
      (err) => {
        this.toastService.showError('Error al guardar el puente', err);
        console.log(err);
      }
    );
    // console.log(this.form.value);
  }
}
