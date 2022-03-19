import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  uploadedFiles: any[] = [];
  imgSrc:string='';

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
  


  images: any[]=[];

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    responsiveOptions2:any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    ngOnInit() {
    }

   

}
