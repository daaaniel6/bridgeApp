import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SlabAccess } from 'src/app/models/bridge/nonStructuralElements/slab-access';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-slab-access',
  templateUrl: './slab-access.component.html',
  styleUrls: ['./slab-access.component.scss'],
})
export class SlabAccessComponent implements OnInit {
  @Input() slabAccess: SlabAccess = {};

  damageOptions = [
    { label: 'Asentado', value: 'Asentado' },
    { label: 'Fisurado', value: 'Fisurado' },
    { label: 'Bache', value: 'Bache' },
  ];

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      slabAccessId: [],
      nameSalabAccess: [],
      material: [],
      goodCondition: [],
      damage: [],
      extra: [],
    });

    this.form.setValue(this.slabAccess);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService
        .getBridge()
        .nonStructuralElementsNonStructuralElementsId?.slabAccessList?.find(
          (slabAccess: SlabAccess) => {
            if (
              slabAccess.nameSalabAccess === this.form.value.nameSalabAccess
            ) {
              slabAccess.material = this.form.value.material;
              slabAccess.goodCondition = this.form.value.goodCondition;
              slabAccess.damage = this.form.value.damage;
            }
          }
        );

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('slab access updated', data);
        });
    });
  }
}
