import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConcreteRow } from 'src/app/models/bridge/concrete-row';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-concrete-row',
  templateUrl: './concrete-row.component.html',
  styleUrls: ['./concrete-row.component.scss'],
})
export class ConcreteRowComponent implements OnInit {
  @Input() concreteRow: ConcreteRow = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      concreteRowId: [],
      nameConcrete: [],
      diagonalCracks: [],
      verticalCracks: [],
      stoneLossPerBlow: [],
      steelExhibition: [],
      others: [],
      extra: [],
    });

    this.form.setValue(this.concreteRow);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService
        .getBridge()
        .superstructureSuperstructureId?.concreteRowList?.find(
          (concreteRow: ConcreteRow) => {
            if (concreteRow.nameConcrete === this.form.value.nameConcrete) {
              concreteRow.diagonalCracks = this.form.value.diagonalCracks;
              concreteRow.verticalCracks = this.form.value.verticalCracks;
              concreteRow.stoneLossPerBlow = this.form.value.stoneLossPerBlow;
              concreteRow.steelExhibition = this.form.value.steelExhibition;
              concreteRow.others = this.form.value.others;
            }
          }
        );

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('Concrete row updated', data);
        });
    });
  }
}
