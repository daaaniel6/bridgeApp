import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RowWidth } from 'src/app/models/bridge/row-width';
import { RowWidthPile } from 'src/app/models/bridge/row-width-pile';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-row-width-row',
  templateUrl: './row-width-row.component.html',
  styleUrls: ['./row-width-row.component.scss'],
})
export class RowWidthRowComponent implements OnInit {
  @Input() rowWidth: RowWidth = {};
  @Input() nameStape: String = '';

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    if (this.nameStape === 'Pilas') {
      this.form = this.formBuilder.group({
        rowWidthPileId: [],
        nameRow: [],
        material: [],
        height: [],
        width: [],
        cracksInOneDirection: [],
        cracksInTwoDirections: [],
        stoneLossPerBlow: [],
        steelExhibition: [],
        others: [],
        extra: [],
      });
    } else {
      this.form = this.formBuilder.group({
        rowWidthId: [],
        nameRow: [],
        material: [],
        height: [],
        width: [],
        cracksInOneDirection: [],
        cracksInTwoDirections: [],
        stoneLossPerBlow: [],
        steelExhibition: [],
        others: [],
        extra: [],
      });
    }
    this.form.setValue(this.rowWidth);

    this.form.valueChanges.subscribe((values) => {
      if (this.nameStape === 'Pilas') {
        this.bridgeComunicationService
          .getBridge()
          .pilePileId?.rowWidthPileList?.find((rowWidth: RowWidthPile) => {
            if (rowWidth.nameRow === this.form.value.nameRow) {
              rowWidth.material = this.form.value.material;
              rowWidth.height = this.form.value.height;
              rowWidth.width = this.form.value.width;
              rowWidth.cracksInOneDirection =
                this.form.value.cracksInOneDirection;
              rowWidth.cracksInTwoDirections =
                this.form.value.cracksInTwoDirections;
              rowWidth.stoneLossPerBlow = this.form.value.stoneLossPerBlow;
              rowWidth.steelExhibition = this.form.value.steelExhibition;
              rowWidth.others = this.form.value.others;
              rowWidth.extra = this.form.value.extra;
            }
          });
      } else {
        this.bridgeComunicationService.getBridge().stapesList?.find((stape) => {
          if (stape.nameStapes === this.nameStape) {
            stape.rowWidthList.find((rowWidth: RowWidth) => {
              if (rowWidth.nameRow === this.form.value.nameRow) {
                rowWidth.material = this.form.value.material;
                rowWidth.height = this.form.value.height;
                rowWidth.width = this.form.value.width;
                rowWidth.cracksInOneDirection =
                  this.form.value.cracksInOneDirection;
                rowWidth.cracksInTwoDirections =
                  this.form.value.cracksInTwoDirections;
                rowWidth.stoneLossPerBlow = this.form.value.stoneLossPerBlow;
                rowWidth.steelExhibition = this.form.value.steelExhibition;
                rowWidth.others = this.form.value.others;
                rowWidth.extra = this.form.value.extra;
              }
            });
          }
        });
      }

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('Row with bridge updated', data);
        });
    });
  }
}
