import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departament } from 'src/app/models/departaments/departament';
import { Municipality } from 'src/app/models/departaments/municipality';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartamentService {
  private departamentURL = environment.departamentURL;

  constructor(private httpClient: HttpClient) {}

  getAllDepartaments(): Observable<Departament[]> {
    return this.httpClient.get<Departament[]>(this.departamentURL);
  }

  getAllMunicipalities(id: String): Observable<Municipality[]> {
    return this.httpClient.get<Municipality[]>(
      this.departamentURL + '/' + id + '/municipalities'
    );
  }
}
