import { Component, OnInit } from '@angular/core';
//import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-bridges-table',
  templateUrl: './bridges-table.component.html',
  styleUrls: ['./bridges-table.component.scss'],
})
export class BridgesTableComponent implements OnInit {
  exportColumns: any[] = [];
  cols = [
    { field: 'id', header: 'id' },
    { field: 'nombre', header: 'nombre' },
    { field: 'cantidad', header: 'cantidad' },
    { field: 'estado', header: 'estado' },
  ];
  bridges = [
    {
      id: 1,
      nombre: 'golden',
      inspector: 'Daniel',
      cantidad: 6,
      estado: 'Malo',
    },
    {
      id: 2,
      nombre: 'golden 2',
      inspector: 'Carlos',
      cantidad: 2,
      estado: 'Bueno',
    },
    {
      id: 3,
      nombre: 'puente 3',
      inspector: 'Juan',
      cantidad: 1,
      estado: 'Regular',
    },
  ];

  selectedCustomer1: any;
  selectedBridges: any = [];

  constructor() {}

  ngOnInit(): void {
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  target(event: KeyboardEvent): HTMLInputElement {
    if (!(event.target instanceof HTMLInputElement)) {
      throw new Error('wrong target');
    }
    return event.target;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.bridges);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
}
