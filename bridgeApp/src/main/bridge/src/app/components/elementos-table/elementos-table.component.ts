import { Component, OnInit } from '@angular/core';
import { Barrier } from 'src/app/models/bridge/nonStructuralElements/barrier';
import { Council } from 'src/app/models/bridge/nonStructuralElements/council';
import { HandrailRailing } from 'src/app/models/bridge/nonStructuralElements/handrail-railing';
import { ProtectionWorks } from 'src/app/models/bridge/nonStructuralElements/protection-works';
import { RailingPosts } from 'src/app/models/bridge/nonStructuralElements/railing-posts';
import { SlabAccess } from 'src/app/models/bridge/nonStructuralElements/slab-access';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';

@Component({
  selector: 'app-elementos-table',
  templateUrl: './elementos-table.component.html',
  styleUrls: ['./elementos-table.component.scss'],
})
export class ElementosTableComponent implements OnInit {
  handrailRailing: HandrailRailing = {};
  railingPosts: RailingPosts = {};
  barrier: Barrier = {};

  councilList: Council[] = [];
  slabAccessList: SlabAccess[] = [];
  protectionWorksList: ProtectionWorks[] = [];

  constructor(private bridgeComunicationService: BridgeComunicationService) {}

  ngOnInit(): void {
    this.handrailRailing =
      this.bridgeComunicationService.getBridge()
        .nonStructuralElementsNonStructuralElementsId!
        .handrailRailingHandrailRailingId || {};

    this.railingPosts =
      this.bridgeComunicationService.getBridge()
        .nonStructuralElementsNonStructuralElementsId!
        .railingPostsRailingPostsId || {};

    this.barrier =
      this.bridgeComunicationService.getBridge()
        .nonStructuralElementsNonStructuralElementsId!.barrierBarrierId || {};

    this.councilList =
      this.bridgeComunicationService.getBridge()
        .nonStructuralElementsNonStructuralElementsId!.councilList || [];

    this.slabAccessList =
      this.bridgeComunicationService.getBridge()
        .nonStructuralElementsNonStructuralElementsId!.slabAccessList || [];

    this.protectionWorksList =
      this.bridgeComunicationService.getBridge()
        .nonStructuralElementsNonStructuralElementsId?.protectionWorksList ||
      [];
  }
}
