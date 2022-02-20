import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SteelRow } from 'src/app/models/bridge/steel-row';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-steel-row',
  templateUrl: './steel-row.component.html',
  styleUrls: ['./steel-row.component.scss'],
})
export class SteelRowComponent implements OnInit {
  @Input() steelRow: SteelRow = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      steelRowId: [],
      nameSteel: [],
      oxide: [],
      missingBolts: [],
      hitElement: [],
      cutElement: [],
      painting: [],
      others: [],
      extra: [],
    });

    this.form.setValue(this.steelRow);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService
        .getBridge()
        .superstructureSuperstructureId?.steelRowList?.find(
          (steelRow: SteelRow) => {
            if (steelRow.nameSteel === values.nameSteel) {
              steelRow.oxide = values.oxide;
              steelRow.missingBolts = values.missingBolts;
              steelRow.hitElement = values.hitElement;
              steelRow.cutElement = values.cutElement;
              steelRow.painting = values.painting;
              steelRow.others = values.others;
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
