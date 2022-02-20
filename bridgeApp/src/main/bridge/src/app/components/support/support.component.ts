import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Support } from 'src/app/models/bridge/support';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  @Input() support: Support = {};
  @Input() nameStape: String = '';

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      supportId: [],
      name: [],
      material: [],
      crushedNeoprene: [],
      outOfPlace: [],
      rusty: [],
      boltMissing: [],
      brokenBolt: [],
      others: [],
      extra: [],
      //pileList: [],
    });

    this.form.setValue(this.support);

    this.form.valueChanges.subscribe((values) => {
      if (this.nameStape === 'Pilas') {
        this.bridgeComunicationService.getBridge().pilePileId!.supportSupportId =
          this.form.value;
      } else {
        this.bridgeComunicationService.getBridge().stapesList?.find((stape) => {
          if (stape.nameStapes === this.nameStape) {
            stape.supportSupportId = this.form.value;
          }
        });
      }

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('Suport updated', data);
        });
    });
  }
}
