import { Component, OnInit } from '@angular/core';
import { Bridge } from 'src/app/models/bridge/bridge';
import { BridgeService } from 'src/app/services/bridges/bridge.service';

@Component({
  selector: 'app-info-boxes',
  templateUrl: './info-boxes.component.html',
  styleUrls: ['./info-boxes.component.scss'],
})
export class InfoBoxesComponent implements OnInit {
  bridges: Bridge[] = [];
  goodBridges: number = 0;
  badBridges: number = 0;
  membersCount: number = 0;

  constructor(private bridgeService: BridgeService) {}

  ngOnInit(): void {
    this.getAllBridges();
  }

  getAllBridges(): void {
    this.bridgeService.getAll().subscribe((data) => {
      this.bridges = data;
      this.badBridges = this.bridges.filter(
        (bridge) => bridge.status === 'Malo'
      ).length;
      this.goodBridges = this.bridges.filter(
        (bridge) => bridge.status === 'Bueno'
      ).length;

      let members: Bridge[] = [
        ...new Map(
          this.bridges.map((item) => [item.user?.userName, item])
        ).values(),
      ];
      this.membersCount = members.length;
    });
  }
}
