import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cauce-table',
  templateUrl: './cauce-table.component.html',
  styleUrls: ['./cauce-table.component.scss'],
})
export class CauceTableComponent implements OnInit {
  cuerpo = [
    { label: 'Rio', value: 'Rio' },
    { label: 'Quebrada', value: 'Quebrada' },
  ];

  channelStatusOptions = [
    { label: 'Limpio', value: 'Limpio' },
    { label: 'Asolvado/Sedimentado', value: 'Asolvado/Sedimentado' },
    { label: 'Erosionado', value: 'Erosionado' },
  ];

  channelingOptions = [
    { label: 'Recto', value: 'Recto' },
    { label: 'Curva', value: 'Curva' },
    { label: 'Indefinido', value: 'Indefinido' },
  ];

  overflowOptions = [
    { label: 'Si', value: 'Si' },
    { label: 'No', value: 'No' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
