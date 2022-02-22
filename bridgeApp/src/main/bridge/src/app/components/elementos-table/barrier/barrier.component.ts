import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Barrier } from 'src/app/models/bridge/nonStructuralElements/barrier';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-barrier',
  templateUrl: './barrier.component.html',
  styleUrls: ['./barrier.component.scss'],
})
export class BarrierComponent implements OnInit {
  @Input() barrier: Barrier = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      barrierId: [],
      material: [],
      cracksInOneDirection: [],
      cracksInTwoDirections: [],
      beaten: [],
      painting: [],
      others: [],
      extra: [],
    });

    this.form.setValue(this.barrier);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService.getBridge().nonStructuralElementsNonStructuralElementsId!.barrierBarrierId =
        this.form.value;

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('barrier', data);
        });
    });
  }
}
