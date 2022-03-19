import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'augment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent {
  items: MenuItem[];

  /**
   *
   */
  constructor() {
    this.items = [
      {
        label: 'Image Augmentation',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Audio Augmentation',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'GAN',
        icon: 'pi pi-fw pi-user',
      }
    ];
  }
}
