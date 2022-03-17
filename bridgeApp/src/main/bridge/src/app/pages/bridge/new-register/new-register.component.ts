import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Image } from 'src/app/models/image/image';
import { BridgeService } from 'src/app/services/bridges/bridge.service';
import { ImageOtherService } from 'src/app/services/bridges/image-other.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { ToastService } from 'src/app/services/notifications/toast.service';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss'],
})
export class NewRegisterComponent implements OnInit {
  puenteForm: boolean = false;
  generalForm: boolean = false;
  tramosForm: boolean = false;
  entradaForm: boolean = false;
  salidaForm: boolean = false;
  pilasForm: boolean = false;
  superForm: boolean = false;
  elementosForm: boolean = false;
  cauceForm: boolean = false;
  otrosForm: boolean = false;

  subStructure: boolean = false;

  myfiles: any = [];
  imagesList: Image[] = [];

  constructor(
    private toastService: ToastService,
    private messageService: MessageService,
    private bridgeService: BridgeService,
    private bridgeComunicationService: BridgeComunicationService,
    private router: Router,
    private imageService: ImageOtherService
  ) {}

  ngOnInit(): void {}

  onUpload(event: any) {
    for (let file of event.files) {
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', file, file.name);
      this.imageService
        .uploadDocumentInOther(
          this.bridgeComunicationService.getBridge().otherOtherId?.otherId || 0,
          uploadImageData
        )
        .subscribe(async (response) => {
          this.toastService.showSuccess(
            'Documento subida correctamente',
            file.name
          );
          this.imagesList.push(response);
        });
    }
    this.myfiles = [];
  }

  endRegister() {
    this.toastService.showConfirm(
      '¿Seguro quieres finalizar el registro?',
      'Ya no podras editar el registro'
    );
  }

  onReject() {
    this.messageService.clear();
    this.toastService.showInfo('Cancelado', 'Se cancelo la operacion');
  }

  onConfirm() {
    this.messageService.clear();
    this.bridgeComunicationService.getBridge().evaluationEndDate = new Date();
    this.bridgeService
      .update(this.bridgeComunicationService.getBridge())
      .subscribe((data) => {
        this.bridgeComunicationService.setBridge(data);
        this.toastService.showSuccess(
          'Registro finalizado',
          'Puede buscar el registro en el menu de REGISTROS'
        );
        this.router.navigate(['/all-registrations']);
      });
  }

  showPuenteDialog() {
    this.puenteForm = true;
  }
  showGeneralDialog() {
    this.generalForm = true;
  }
}
