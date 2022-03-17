import { Component, OnInit } from '@angular/core';
import { Bridge } from 'src/app/models/bridge/bridge';
import { BridgeService } from 'src/app/services/bridges/bridge.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  bridges: Bridge[] = [];

  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ];

  view: [number, number] = [600, 450];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Departamento';
  showYAxisLabel = true;
  yAxisLabel = 'CAntidad de registros';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  constructor(private bridgeService: BridgeService) {}

  ngOnInit(): void {
    this.getAllBridges();
  }

  getAllBridges(): void {
    this.bridgeService.getAll().subscribe((data) => {
      this.bridges = data;
      this.single = [];

      let arrayUniqueByKey: Bridge[] = [
        ...new Map(
          this.bridges.map((item) => [
            item.municipalityMunicipalityId?.departamentDepartamentId?.name,
            item,
          ])
        ).values(),
      ];

      for (let bridgeUnique of arrayUniqueByKey) {
        this.single.push({
          name:
            bridgeUnique.municipalityMunicipalityId?.departamentDepartamentId
              ?.name || '',
          value: this.bridges.filter(
            (bridge) =>
              bridge.municipalityMunicipalityId?.departamentDepartamentId
                ?.name ===
              bridgeUnique.municipalityMunicipalityId?.departamentDepartamentId
                ?.name
          ).length,
        });
      }
    });
  }

  onSelect(data: any) {
    console.log(event);
  }
}
