import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProtectionWorks } from 'src/app/models/bridge/nonStructuralElements/protection-works';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-protection-works',
  templateUrl: './protection-works.component.html',
  styleUrls: ['./protection-works.component.scss'],
})
export class ProtectionWorksComponent implements OnInit {
  @Input() protectionWorks: ProtectionWorks = {};

  typeOptions = [
    { label: 'Gaviones', value: 'Gaviones' },
    { label: 'Muro', value: 'Muro' },
  ];

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      protectionWorksId: [],
      nameProtectionWorks: [],
      material: [],
      type: [],
      long1: [],
      width: [],
      height: [],
    });

    this.form.setValue(this.protectionWorks);

    this.form.valueChanges.subscribe((values) => {
      console.log('ProtectionWorks row updated', values);
      this.bridgeComunicationService
        .getBridge()
        .nonStructuralElementsNonStructuralElementsId?.protectionWorksList?.find(
          (protectionWorks: ProtectionWorks) => {
            if (
              protectionWorks.nameProtectionWorks ===
              this.form.value.nameProtectionWorks
            ) {
              protectionWorks.material = this.form.value.material;
              protectionWorks.type = this.form.value.type;
              protectionWorks.long1 = this.form.value.long1;
              protectionWorks.width = this.form.value.width;
              protectionWorks.height = this.form.value.height;
            }
          }
        );

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('protection works updated', data);
        });
    });
  }
}
