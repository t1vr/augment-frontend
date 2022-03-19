import { Component, OnInit } from '@angular/core';
import { PhotoService } from '@augment/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-image-augmentation',
  templateUrl: './image-augmentation.component.html',
  styleUrls: ['./image-augmentation.component.css']
})
export class ImageAugmentationComponent implements OnInit {

  uploadedFiles: any[] = [];
  imgSrc:string='';
  images: any[]=[];

  displayCustom: boolean=true;

  activeIndex: number = 0;
  /**
   *
   */
  constructor(private messageService: MessageService,private photoService: PhotoService) {
    
  }
  
  ngOnInit() {
    this.photoService.getImages().then(images =>{ 
        this.images = images
    })
}
  onFileChanged(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      let fr = new FileReader();
      fr.onload =  (event: any) => {
        let base64 = event.target.result;
        let img = base64.split(',')[1];
        let blob = new Blob([window.atob(img)], { type: 'image/jpeg' });
        this.imgSrc=fr.result as string;

      }
      fr.readAsDataURL(file);
    }
  }


 

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

    




    

    imageClick(index: number) {
        this.activeIndex = index;
        this.displayCustom = true;
    }
}
