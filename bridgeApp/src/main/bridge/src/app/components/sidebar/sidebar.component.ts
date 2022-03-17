import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bridge } from 'src/app/models/bridge/bridge';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  username = '';
  isLogged = false;
  bridges: Bridge[] = [];
  isAdmin = false;

  constructor(
    private tokenService: TokenService,
    private bridgeService: BridgeService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin();
    this.username = this.tokenService.getUserName();
    this.isLogged = this.tokenService.isLogged();
    this.getAllBridgesInProcess();
  }

  onLogOut(): void {
    this.tokenService.logOut();
  }

  getAllBridgesInProcess(): void {
    this.bridgeService.getAll().subscribe((data) => {
      this.bridges = data;

      let bridgesInProgress: Bridge[] = [];
      this.bridges.filter((bridge) => {
        if (
          bridge.user?.userName === this.tokenService.getUserName() &&
          bridge.evaluationEndDate === null
        ) {
          bridgesInProgress.push(bridge);
        }
      });
      this.bridges = bridgesInProgress;
    });
  }
}
