import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departament } from 'src/app/models/departaments/departament';
import { Municipality } from 'src/app/models/departaments/municipality';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { DepartamentService } from 'src/app/services/bridges/departament.service';
import { ToastService } from 'src/app/services/notifications/toast.service';

@Component({
  selector: 'app-new-bridge',
  templateUrl: './new-bridge.component.html',
  styleUrls: ['./new-bridge.component.scss'],
})
export class NewBridgeComponent implements OnInit {
  departaments: Departament[] = [];
  municipalities: Municipality[] = [];

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private departamentService: DepartamentService,
    private bridgeService: BridgeService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDepartaments();
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
  onDepartamentChange(): void {
    this.municipalities =
      this.form.value.departamentDepartamentId.municipalityList;
  }

  /**
   * Save bridge
   */
  onSave(): void {
    this.form.value.evaluationStartDate = new Date();
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
