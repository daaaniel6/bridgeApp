import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otros-table',
  templateUrl: './otros-table.component.html',
  styleUrls: ['./otros-table.component.scss'],
})
export class OtrosTableComponent implements OnInit {
  signalingOptions = [
    { label: 'Hay', value: 'Hay' },
    { label: 'No hay', value: 'No hay' },
  ];

  booleanOptions = [
    { label: 'Si', value: 'Si' },
    { label: 'No', value: 'No' },
  ];

  statusOptions = [
    { label: 'Bueno', value: 'Bueno' },
    { label: 'Malo', value: 'Malo' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
