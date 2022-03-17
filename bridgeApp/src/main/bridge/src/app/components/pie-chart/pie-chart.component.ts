import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Bridge } from 'src/app/models/bridge/bridge';
import { BridgeService } from 'src/app/services/bridges/bridge.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  bridges: Bridge[] = [];

  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
  ];
  view: [number, number] = [900, 450];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#e74c3c', '#ffc107', '#00bc8c'],
  };

  constructor(private bridgeService: BridgeService) {
    //Object.assign(this, { single });
  }

  ngOnInit(): void {
    this.getAllBridges();
  }

  getAllBridges(): void {
    this.bridgeService.getAll().subscribe((data) => {
      this.bridges = data;
      this.single = [];
      this.single = [
        {
          name: 'Malo',
          value: this.bridges.filter((bridge) => bridge.status === 'Malo')
            .length,
        },
        {
          name: 'Regular',
          value: this.bridges.filter((bridge) => bridge.status === 'Regular')
            .length,
        },
        {
          name: 'Bueno',
          value: this.bridges.filter((bridge) => bridge.status === 'Bueno')
            .length,
        },
      ];
    });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
