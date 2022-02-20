import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Scour } from 'src/app/models/bridge/scour';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-scour',
  templateUrl: './scour.component.html',
  styleUrls: ['./scour.component.scss'],
})
export class ScourComponent implements OnInit {
  @Input() scour: Scour = {};
  @Input() nameStape: String = '';

  public form: FormGroup = this.formBuilder.group({});

  options = [
    { label: 'Aguas arriba', value: 'Aguas arriba' },
    { label: 'Aguas abajo', value: 'Aguas abajo' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      scourId: [],
      name: [],
      thereIsNot: [],
      yesButThereIsNot: [],
      yesThereIsExposure: [],
      settlementOf: [],
      extra: [],
      //pileList: [],
    });

    this.form.setValue(this.scour);

    this.form.valueChanges.subscribe((values) => {
      if (this.nameStape === 'Pilas') {
        this.bridgeComunicationService.getBridge().pilePileId!.scourScourId =
          this.form.value;
      } else {
        this.bridgeComunicationService.getBridge().stapesList?.find((stape) => {
          if (stape.nameStapes === this.nameStape) {
            stape.scourScourId = this.form.value;
          }
        });
      }

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('Scour updated', data);
        });
    });
  }
}
