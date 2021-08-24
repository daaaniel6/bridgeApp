import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.scss'],
})
export class InformationTableComponent implements OnInit {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  rutaPavimentada = [
    { name: 'Si', code: '1' },
    { name: 'No', code: '2' },
    { name: 'Parcial', code: '3' },
  ];

  alineamientoHorizontal = [
    { label: 'Tangente', value: 'Tangente' },
    { label: 'Curva', value: 'Curva' },
  ];

  esviaje = [
    { label: 'Si', value: 'Si' },
    { label: 'No', value: 'No' },
  ];

  selectedCity: City | undefined;

  constructor() {}

  ngOnInit(): void {}
}

interface City {
  name: string;
  code: string;
}
