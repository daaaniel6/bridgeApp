import { Component, OnInit } from '@angular/core';
import { Bridge } from 'src/app/models/bridge/bridge';
import { BridgeService } from 'src/app/services/bridges/bridge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bridges: Bridge[] = [];
  regularBridgesCount: number = 0;
  commentsCount: number = 0;
  imagesCount: number = 0;

  constructor(private bridgeService: BridgeService) {}

  ngOnInit(): void {
    this.getAllBridges();
  }
  /**
   *
   *
   * @memberof DashboardComponent
   */
  getAllBridges(): void {
    this.bridgeService.getAll().subscribe((data) => {
      this.bridges = data;

      /**
       * Serch for regular bridges
       */
      this.regularBridgesCount = this.bridges.filter(
        (bridge) => bridge.status === 'Regular'
      ).length;

      /**
       * Serch for comments
       */
      for (let bridge of this.bridges) {
        this.commentsCount += bridge.commentList!.length;
      }

      /**
       *
       */
      for (let bridge of this.bridges) {
        this.imagesCount += bridge.imageList!.length;
      }
    });
  }
}
