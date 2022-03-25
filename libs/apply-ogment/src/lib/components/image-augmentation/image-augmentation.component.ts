import { Component, OnInit } from '@angular/core';
import { AugmentationTypeModel, PhotoService, UIQuery } from '@augment/core';
import { MessageService } from 'primeng/api';
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-image-augmentation',
  templateUrl: './image-augmentation.component.html',
  styleUrls: ['./image-augmentation.component.css'],
})
export class ImageAugmentationComponent implements OnInit {
  uploadedFiles: any[] = [];
  images: any[] = [];
  val!: number;
  displayCustom: boolean = true;

  activeIndex: number = 0;
  selectedCities: string = '';
  augmentationType: any[] = [{ name: 'blur', isChecked: false, value: [] }];
  /**
   *
   */
  constructor(public uiQuery: UIQuery, private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImagesRaw().subscribe((images: any) => {
      let img=images;
      const blob2Base64 = (blob:Blob):Promise<string> => {
        return new Promise<string> ((resolve,reject)=> {
             const reader = new FileReader();
             reader.readAsDataURL(blob);
             reader.onload = () => resolve(reader.result!.toString());
             reader.onerror = error => reject(error);
         })
        }
        blob2Base64(img).then(res=>console.log(res))

      console.log(this.images);
    });
    this.photoService.getImages().then((images) => {
      this.images = images;
      console.log(this.images);
    });
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  responsiveOptions2: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  change() {
    console.log('found');
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  download() {
    var zip = new JSZip();
    zip.file('Title.txt', 'hello');
    var imgFolder = zip.folder('images')!;
    for (let i = 0; i < this.images?.length; i++) {
      imgFolder.file(this.images[i].name, this.images[i], { base64: true });
    }
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      FileSaver.saveAs(content, 'Sample.zip');
    });
  }


  cities: any[]= [
    {name: 'All', code: 'NY'},
    {name: 'Selected', code: 'RM'},
];

  selectedCity: any;
  oncahnge(){
    console.log('sldkf');
    
  }

}
