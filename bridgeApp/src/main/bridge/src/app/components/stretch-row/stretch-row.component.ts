import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Stretch } from 'src/app/models/bridge/stretch';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-stretch-row',
  templateUrl: './stretch-row.component.html',
  styleUrls: ['./stretch-row.component.scss'],
})
export class StretchRowComponent implements OnInit {
  @Input() stretch: Stretch = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      stretchId: [],
      length: [],
      typeSection: [],
      name: [],
    });

    this.form.setValue(this.stretch);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService
        .getBridge()
        .stretchList?.find((stretch) => {
          if (stretch.stretchId === this.stretch.stretchId) {
            stretch.length = values.length;
            stretch.typeSection = values.typeSection;
          }
        });

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('Tramo Guardado', data);
        });
    });
  }
}
