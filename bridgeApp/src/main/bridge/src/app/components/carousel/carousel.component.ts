import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Bridge } from 'src/app/models/bridge/bridge';
import { Image } from 'src/app/models/image/image';
import { BridgeService } from 'src/app/services/bridges/bridge.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  bridges: Bridge[] = []; //
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(
    private bridgeService: BridgeService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getAllBridges();
  }

  getAllBridges(): void {
    this.bridgeService.getAll().subscribe((data) => {
      this.bridges = data;
    });
  }

  convertToImage(img: Image): SafeUrl {
    let safeUrl = '';
    if (img !== undefined) {
      let objectURL = 'data:image/png;base64,' + img.image;
      let safeUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      return safeUrl;
    }
    return safeUrl;
  }
}
