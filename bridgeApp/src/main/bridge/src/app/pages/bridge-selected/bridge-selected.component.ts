import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bridge-selected',
  templateUrl: './bridge-selected.component.html',
  styleUrls: ['./bridge-selected.component.scss'],
})
export class BridgeSelectedComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  clickContinue() {
    this.redirectToPage('/register');
  }
  redirectToPage(page: string) {
    this.route.navigate([page]);
  }
}
