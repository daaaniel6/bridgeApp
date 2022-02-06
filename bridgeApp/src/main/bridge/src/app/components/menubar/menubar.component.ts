import { Component, OnInit } from '@angular/core';

// primeng
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Message } from 'primeng//api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
  providers: [MessageService],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];
  itemsUser: MenuItem[] = [];
  image: boolean = false;
  msgs1: Message[] = [
    { severity: 'success', summary: 'Success', detail: 'Message Content' },
    { severity: 'info', summary: 'Info', detail: 'Message Content' },
    { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
    { severity: 'error', summary: 'Error', detail: 'Message Content' },
  ];

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.itemsUser = [
      {
        label: 'Opciones',
        items: [
          {
            label: 'Mi perfil',
            icon: 'pi pi-refresh',
            command: (event) => {
              this.redirectToPage('/404');
            },
          },
          {
            label: 'Notificaciones',
            icon: 'pi pi-external-link',
            command: (click) => {
              this.redirectToPage('/404');
            },
          },
        ],
      },
      {
        label: 'Navegar',
        items: [
          {
            label: 'Salir',
            icon: 'pi pi-times',
            url: 'http://google.com',
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            command: (click) => {
              this.delete();
            },
          },
        ],
      },
    ];

    this.items = [
      {
        label: 'Registros',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Registro de puente existente',
                icon: 'pi pi-fw pi-bookmark',
                command: (click) => {
                  this.redirectToPage('/selectBridge');
                },
              },
              {
                label: 'Nuevo puente',
                icon: 'pi pi-fw pi-video',
                command: (click) => {
                  this.redirectToPage('/newRegister');
                },
              },
            ],
          },
          {
            label: 'En proceso',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'Eliminar',
            icon: 'pi pi-fw pi-trash',
            command: (click) => {
              this.redirectToPage('/algo');
            },
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },

      {
        label: 'Consultar',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Puente',
            icon: 'pi pi-fw pi-sitemap',
            items: [
              {
                label: 'Mis puentes',
                icon: 'pi pi-fw pi-calendar-minus',
              },
              {
                label: 'Todos los puentes',
                icon: 'pi pi-fw pi-calendar-plus',
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'Graficas',
            icon: 'pi pi-fw pi-calendar-times',
            command: (click) => {
              this.redirectToPage('/');
            },
          },
        ],
      },
    ];
  }

  update() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Updated',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete',
      detail: 'Data Deleted',
    });
  }

  redirectToPage(page: string) {
    this.route.navigate([page]);
  }

  addMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
      sticky: true,
    });
  }
}
