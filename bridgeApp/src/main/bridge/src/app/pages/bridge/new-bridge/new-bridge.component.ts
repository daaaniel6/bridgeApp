import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BearingSlab } from 'src/app/models/bridge/bearing-slab';
import { Channel } from 'src/app/models/bridge/channel/channel';
import { ConcreteRow } from 'src/app/models/bridge/concrete-row';
import { GeneralData } from 'src/app/models/bridge/general-data';
import { Barrier } from 'src/app/models/bridge/nonStructuralElements/barrier';
import { Council } from 'src/app/models/bridge/nonStructuralElements/council';
import { HandrailRailing } from 'src/app/models/bridge/nonStructuralElements/handrail-railing';
import { NonStructuralElements } from 'src/app/models/bridge/nonStructuralElements/non-structural-elements';
import { ProtectionWorks } from 'src/app/models/bridge/nonStructuralElements/protection-works';
import { RailingPosts } from 'src/app/models/bridge/nonStructuralElements/railing-posts';
import { SlabAccess } from 'src/app/models/bridge/nonStructuralElements/slab-access';
import { Other } from 'src/app/models/bridge/other/other';
import { Pile } from 'src/app/models/bridge/pile';
import { Scour } from 'src/app/models/bridge/scour';
import { SewerSystem } from 'src/app/models/bridge/sewer-system';
import { Stapes } from 'src/app/models/bridge/stapes';
import { SteelRow } from 'src/app/models/bridge/steel-row';
import { Stretch } from 'src/app/models/bridge/stretch';
import { Superstructure } from 'src/app/models/bridge/superstructure';
import { Support } from 'src/app/models/bridge/support';
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
  stretchList: Stretch[] = [];
  generalDataGeneralDataId: GeneralData = {};

  scourScourId: Scour = { name: 'Socavacion' };
  supportSupportId: Support = { name: 'Apoyos' };
  outputStape: Stapes = {
    nameStapes: 'Entrada',
    rowWidthList: [
      { nameRow: 'Cortina Superior' },
      { nameRow: 'Cortina Inferior' },
      { nameRow: 'Viga de Apoyo' },
      { nameRow: 'Columnas' },
      { nameRow: 'Cuerpo' },
      { nameRow: 'Aguas Arriba' },
      { nameRow: 'Aguas Abajo' },
    ],
    scourScourId: this.scourScourId,
    supportSupportId: this.supportSupportId,
  };
  entryStape: Stapes = {
    nameStapes: 'Salida',
    rowWidthList: [
      { nameRow: 'Cortina Superior' },
      { nameRow: 'Cortina Inferior' },
      { nameRow: 'Viga de Apoyo' },
      { nameRow: 'Columnas' },
      { nameRow: 'Cuerpo' },
      { nameRow: 'Aguas Arriba' },
      { nameRow: 'Aguas Abajo' },
    ],
    scourScourId: this.scourScourId,
    supportSupportId: this.supportSupportId,
  };
  stapesList: Stapes[] = [this.entryStape, this.outputStape];

  pile: Pile = {
    namePile: 'Pilas',
    rowWidthPileList: [
      { nameRow: 'Viga Cabezal' },
      { nameRow: 'Columnas' },
      { nameRow: 'Cuerpo' },
    ],
    scourScourId: this.scourScourId,
    supportSupportId: this.supportSupportId,
  };

  //Superstructure
  bearingSlab: BearingSlab = {};
  sewerSystem: SewerSystem = {};
  concreteRowList: ConcreteRow[] = [
    { nameConcrete: 'Elemento Portante de Concreto' },
    { nameConcrete: 'Diafragmas Concreto' },
  ];
  steelRowList: SteelRow[] = [
    { nameSteel: 'Elemento Portante de Acero' },
    { nameSteel: 'Diafragmas Acero' },
    { nameSteel: 'Estructura Tipo Sercha' },
  ];
  superstructure: Superstructure = {
    concreteRowList: this.concreteRowList,
    bearingSlabBearingSlabId: this.bearingSlab,
    sewerSystemSewerSystemId: this.sewerSystem,
    steelRowList: this.steelRowList,
  };

  //NonStructuralElements
  handrailRailing: HandrailRailing = {};
  railingPosts: RailingPosts = {};
  barrier: Barrier = {};
  councilList: Council[] = [
    { nameCouncil: 'Junta (Entrada)' },
    { nameCouncil: 'Junta (Salida)' },
    { nameCouncil: 'Juntas Intermedias' },
  ];
  slabAccessList: SlabAccess[] = [
    { nameSalabAccess: 'Losa Acceso (Entrada)' },
    { nameSalabAccess: 'Losa Acceso (Salida)' },
  ];
  protectionWorksList: ProtectionWorks[] = [
    { nameProtectionWorks: 'Obras Proteccion (aguas arriba)' },
    { nameProtectionWorks: 'Obras Proteccion (aguas abajo)' },
  ];
  nonStructuralElements: NonStructuralElements = {
    handrailRailingHandrailRailingId: this.handrailRailing,
    railingPostsRailingPostsId: this.railingPosts,
    barrierBarrierId: this.barrier,
    councilList: this.councilList,
    slabAccessList: this.slabAccessList,
    protectionWorksList: this.protectionWorksList,
  };

  channel: Channel = {};
  other: Other = {};

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
    this.stretchList = [{}, {}, {}, {}];
    this.stapesList = [this.entryStape, this.outputStape];

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
      stretchList: [this.stretchList],
      stapesList: [this.stapesList],
      generalDataGeneralDataId: [this.generalDataGeneralDataId],
      pilePileId: [this.pile],
      superstructureSuperstructureId: [this.superstructure],
      nonStructuralElementsNonStructuralElementsId: [
        this.nonStructuralElements,
      ],
      channelChannelId: [this.channel],
      otherOtherId: [this.other],
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
    console.log(this.form.value);
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
