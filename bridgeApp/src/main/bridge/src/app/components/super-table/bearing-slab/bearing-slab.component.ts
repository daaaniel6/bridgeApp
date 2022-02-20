import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BearingSlab } from 'src/app/models/bridge/bearing-slab';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-bearing-slab',
  templateUrl: './bearing-slab.component.html',
  styleUrls: ['./bearing-slab.component.scss'],
})
export class BearingSlabComponent implements OnInit {
  @Input() bearingSlab: BearingSlab = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      bearingSlabId: [],
      material: [],
      cracksInOneDirection: [],
      cracksInTwoDirections: [],
      detachmentOf: [],
      potholes: [],
      steelExhibition: [],
      others: [],
      extra: [],
    });

    this.form.setValue(this.bearingSlab);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService.getBridge().superstructureSuperstructureId!.bearingSlabBearingSlabId =
        this.form.value;

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('Bearung skab updated', data);
        });
    });
  }
}
