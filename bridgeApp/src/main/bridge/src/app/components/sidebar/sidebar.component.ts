import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  username = '';

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.username = this.tokenService.getUserName();
  }
}
