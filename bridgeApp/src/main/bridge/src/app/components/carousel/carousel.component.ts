import { Component, OnInit } from '@angular/core';
import { Bridge } from 'src/app/interfaces/bridge';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  bridges: Bridge[] = [
    {
      id: '1',
      code: '1',
      name: 'Puente uno',
      description: 'Puente de izabal',
      price: 12,
      quantity: 1,
      status: 'Malo',
      category: 'elemental',
      image: '../../../assets/images/puentes/puente1.jpeg',
      rating: 2,
    },
    {
      id: '1',
      code: '1',
      name: 'Hola mundo',
      description: 'Carousel',
      price: 1,
      quantity: 1,
      status: 'Regular',
      category: 'elemental',
      image: '../../../assets/images/puentes/puente2.jpeg',
      rating: 2,
    },
    {
      id: '1',
      code: '1',
      name: 'Otro puente',
      description: 'Carousel',
      price: 1,
      quantity: 1,
      status: 'Bueno',
      category: 'elemental',
      image:
        'https://viajes.nationalgeographic.com.es/medio/2019/07/02/golden-gate-san-francisco_5c0925d4_1500x1000.jpg',
      rating: 2,
    },
    {
      id: '1',
      code: '1',
      name: 'carousel',
      description: 'Carousel',
      price: 1,
      quantity: 1,
      status: 'Malo',
      category: 'elemental',
      image: '../../../assets/images/puentes/puente3.jpeg',
      rating: 2,
    },
  ]; //
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

  constructor() {}

  ngOnInit(): void {}
}
