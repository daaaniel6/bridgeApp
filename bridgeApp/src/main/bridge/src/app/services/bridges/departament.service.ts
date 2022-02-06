import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departament } from 'src/app/models/departaments/departament';

@Injectable({
  providedIn: 'root',
})
export class DepartamentService {
  private departamentURL = 'http://localhost:8080/api/departaments';

  constructor(private httpClient: HttpClient) {}

  getAllDepartaments(): Observable<Departament[]> {
    return this.httpClient.get<Departament[]>(this.departamentURL);
  }
}
