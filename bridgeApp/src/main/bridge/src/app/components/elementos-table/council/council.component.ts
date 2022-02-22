import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Council } from 'src/app/models/bridge/nonStructuralElements/council';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-council',
  templateUrl: './council.component.html',
  styleUrls: ['./council.component.scss'],
})
export class CouncilComponent implements OnInit {
  @Input() council: Council = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      councilId: [],
      nameCouncil: [],
      material: [],
      missingItem: [],
      cleanGasket: [],
      damage: [],
      extra: [],
    });

    this.form.setValue(this.council);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService
        .getBridge()
        .nonStructuralElementsNonStructuralElementsId?.councilList?.find(
          (council: Council) => {
            if (council.nameCouncil === this.form.value.nameCouncil) {
              council.material = this.form.value.material;
              council.missingItem = this.form.value.missingItem;
              council.cleanGasket = this.form.value.cleanGasket;
              council.damage = this.form.value.damage;
            }
          }
        );

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('Council row updated', data);
        });
    });
  }
}
