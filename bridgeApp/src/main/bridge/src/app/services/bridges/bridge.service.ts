import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bridge } from 'src/app/models/bridge/bridge';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BridgeService {
  private bridgeURL = environment.bridgeURL;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Bridge[]> {
    return this.httpClient.get<Bridge[]>(this.bridgeURL);
  }

  getBridge(id: string) {
    return this.httpClient.get<Bridge>(this.bridgeURL + '/' + id);
  }

  create(bridge: Bridge) {
    return this.httpClient.post(this.bridgeURL, bridge);
  }

  update(bridge: Bridge) {
    return this.httpClient.put(this.bridgeURL + '/' + bridge.bridgeId, bridge);
  }

  delete(id: string) {
    return this.httpClient.delete(this.bridgeURL + '/' + id);
  }
}
