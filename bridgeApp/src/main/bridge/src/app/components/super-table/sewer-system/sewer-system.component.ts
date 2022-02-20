import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SewerSystem } from 'src/app/models/bridge/sewer-system';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-sewer-system',
  templateUrl: './sewer-system.component.html',
  styleUrls: ['./sewer-system.component.scss'],
})
export class SewerSystemComponent implements OnInit {
  @Input() sewerSystem: SewerSystem = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      sewerSystemId: [],
      clean: [],
      blocked: [],
      extra: [],
    });

    this.form.setValue(this.sewerSystem);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService.getBridge().superstructureSuperstructureId!.sewerSystemSewerSystemId =
        this.form.value;

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('Sewer System updated', data);
        });
    });
  }
}
