import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
})
export class GeneralTableComponent implements OnInit {
  puenteSobre = [
    { label: 'Rio', value: 'Rio' },
    { label: 'Quebrada', value: 'Quebrada' },
    { label: 'Carretera', value: 'Carretera' },
    { label: 'Linea ferrea', value: 'Linea ferrea' },
  ];

  selectedCity: City | undefined;
  date = Date.now();
  value1: number = 42723;
  value2: number = 58151;
  zindex: number = 999999;

  constructor() {}

  ngOnInit(): void {}
}
interface City {
  name: string;
  code: string;
}
