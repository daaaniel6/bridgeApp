import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementos-table',
  templateUrl: './elementos-table.component.html',
  styleUrls: ['./elementos-table.component.scss'],
})
export class ElementosTableComponent implements OnInit {
  danios = [
    { label: 'Asentado', value: 'Asentado' },
    { label: 'Fisurado', value: 'Fisurado' },
    { label: 'Bache', value: 'Bache' },
  ];

  tipos = [
    { label: 'Gaviones', value: 'Gaviones' },
    { label: 'Muro', value: 'Muro' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
