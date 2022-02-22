import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HandrailRailing } from 'src/app/models/bridge/nonStructuralElements/handrail-railing';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-handrail-railing',
  templateUrl: './handrail-railing.component.html',
  styleUrls: ['./handrail-railing.component.scss'],
})
export class HandrailRailingComponent implements OnInit {
  @Input() handrailRailing: HandrailRailing = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      handrailRailingId: [],
      material: [],
      absenceOfSection: [],
      elementDeformation: [],
      beaten: [],
      painting: [],
      others: [],
      extra: [],
    });

    this.form.setValue(this.handrailRailing);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService.getBridge().nonStructuralElementsNonStructuralElementsId!.handrailRailingHandrailRailingId =
        this.form.value;

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('handrail railing updated', data);
        });
    });
  }
}
