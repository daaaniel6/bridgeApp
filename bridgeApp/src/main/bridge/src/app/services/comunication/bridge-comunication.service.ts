import { EventEmitter, Injectable } from '@angular/core';
import { Bridge } from 'src/app/models/bridge/bridge';
@Injectable({
  providedIn: 'root',
})
export class BridgeComunicationService {
  //Pendiente a los cambios
  bridge$ = new EventEmitter<Bridge>();

  private bridge: Bridge = {};

  constructor() {}

  setBridge(bridge: Bridge): void {
    this.bridge = bridge;
  }

  getBridge(): Bridge {
    return this.bridge;
  }
}
