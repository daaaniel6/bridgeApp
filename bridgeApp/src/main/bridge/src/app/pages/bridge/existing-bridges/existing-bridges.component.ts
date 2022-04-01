import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BearingSlab } from 'src/app/models/bridge/bearing-slab';
import { Bridge } from 'src/app/models/bridge/bridge';
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
import { Image } from 'src/app/models/image/image';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth.service';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { ToastService } from 'src/app/services/notifications/toast.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-existing-bridges',
  templateUrl: './existing-bridges.component.html',
  styleUrls: ['./existing-bridges.component.scss'],
})
export class ExistingBridgesComponent implements OnInit {
  cols = [
    { field: 'name', header: 'nombre' },
    { field: 'mileage', header: 'kilometraje' },
    { field: 'departamentDepartamentId.name', header: 'Departamento' },
    { field: 'status', header: 'estado' },
  ];
  bridges: Bridge[] = [];

  selectedBridge: Bridge = this.bridges[0];

  constructor(
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService,
    private toastService: ToastService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}

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

  imageList: Image[] = [];

  public form: FormGroup = this.formBuilder.group({});

  ngOnInit(): void {
    this.bridgeComunicationService.setBridge({});
    this.getAllBridges();
    this.selectedBridge = {};

    this.stretchList = [{}, {}, {}, {}];
    this.stapesList = [this.entryStape, this.outputStape];
    this.other.imageOtherList = [];

    //this.getAllDepartaments();
    this.getUserByUsername(this.tokenService.getUserName());
    this.form = this.formBuilder.group({
      name: [''],
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
      status: [''],
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
      imageList: [this.imageList],
    });
  }

  clickContinue() {
    if (
      this.selectedBridge === null ||
      this.selectedBridge === undefined ||
      this.selectedBridge === {}
    ) {
      this.toastService.showError(
        'Error',
        'Tiene que seleccionar uno de los puentes'
      );
    } else {
      // find selectedBridge in bridges

      this.bridges.find((bridge) => {
        if (bridge.bridgeId === this.selectedBridge.bridgeId) {
          this.selectedBridge = bridge;
          //crear unuevo puente con bridge
          this.form.value.name = bridge.name;
          this.form.value.code = bridge.code;
          this.form.value.route = bridge.route;
          this.form.value.mileage = bridge.mileage;
          this.form.value.municipalityMunicipalityId =
            bridge.municipalityMunicipalityId;
          this.form.value.pavedRoute = bridge.pavedRoute;
          this.form.value.horizontalAlignment = bridge.horizontalAlignment;
          this.form.value.skew = bridge.skew;
          this.form.value.northUtmCoordinates = bridge.northUtmCoordinates;
          this.form.value.eastUtmCoordinates = bridge.eastUtmCoordinates;
          this.form.value.populationBefore = bridge.populationBefore;
          this.form.value.populationAfter = bridge.populationAfter;
          this.form.value.status = bridge.status;

          this.form.value.evaluationStartDate = new Date();
          this.form.value.user = this.user;

          console.log(this.form.value);

          this.bridgeService.create(this.form.value).subscribe(
            (data) => {
              this.toastService.showInfo(
                'Informacion',
                'Se creo un nuevo proceso del puede, puede insertar los datos en el menu PUENTES EN PROCESO'
              );
              this.form.reset();
              this.redirectToPage('/dashboard');
            },
            (err) => {
              this.toastService.showError('Error al guardar el puente', err);
              console.log(err);
            }
          );
        }
      });

      //this.toastService.showConfirm();
    }
  }

  redirectToPage(page: string) {
    this.route.navigate([page]);
  }

  getAllBridges(): void {
    this.bridgeService.getAll().subscribe((data) => {
      let allBridges: Bridge[] = data;
      let bridgesInProcess: Bridge[] = [];
      for (let bridge of allBridges) {
        if (
          bridge.user?.userName === this.tokenService.getUserName() &&
          bridge.evaluationEndDate === null
        ) {
          bridgesInProcess.push(bridge);
        }
      }

      const key = 'name';
      let arrayUniqueByKey: Bridge[] = [
        ...new Map(allBridges.map((item) => [item[key], item])).values(),
      ];

      for (let i = 0; i < arrayUniqueByKey.length; i++) {
        for (let j = 0; j < bridgesInProcess.length; j++) {
          if (arrayUniqueByKey.length !== 0) {
            if (arrayUniqueByKey[i].name === bridgesInProcess[j].name) {
              arrayUniqueByKey.splice(i, 1);
              i--;
            }
          }
        }
      }

      this.bridges = arrayUniqueByKey;
    });
  }
  getUserByUsername(username: String): void {
    this.authService.getUserByUsername(username).subscribe((data) => {
      this.user = data;
    });
  }

  removeItemFromArray(array: Bridge[], bridge: Bridge): Bridge[] {
    var i = array.indexOf(bridge);
    if (i !== -1) {
      array.splice(i, 1);
    }
    return array;
  }
}
