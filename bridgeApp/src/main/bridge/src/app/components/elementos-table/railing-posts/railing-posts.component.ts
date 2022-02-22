import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RailingPosts } from 'src/app/models/bridge/nonStructuralElements/railing-posts';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-railing-posts',
  templateUrl: './railing-posts.component.html',
  styleUrls: ['./railing-posts.component.scss'],
})
export class RailingPostsComponent implements OnInit {
  @Input() railingPosts: RailingPosts = {};

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private bridgeComunicationService: BridgeComunicationService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      railingPostsId: [],
      material: [],
      absenceOfSection: [],
      elementDeformation: [],
      beaten: [],
      painting: [],
      others: [],
      extra: [],
    });

    this.form.setValue(this.railingPosts);

    this.form.valueChanges.subscribe((values) => {
      this.bridgeComunicationService.getBridge().nonStructuralElementsNonStructuralElementsId!.railingPostsRailingPostsId =
        this.form.value;

      this.bridgeService
        .update(this.bridgeComunicationService.getBridge())
        .subscribe((data) => {
          this.bridgeComunicationService.setBridge(data);
          console.log('railing posts updated', data);
        });
    });
  }
}
