import { Component, OnInit } from '@angular/core';

import { AugmentedFileModel, PhotoService, UIQuery } from '@augment/core';
import * as fs from 'file-saver';
import { HttpClient } from '@angular/common/http';
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-image-augmentation',
  templateUrl: './image-augmentation.component.html',
  styleUrls: ['./image-augmentation.component.css'],
})
export class ImageAugmentationComponent implements OnInit {
  uploadedFiles: any[] = [];
  images: AugmentedFileModel[] = [
    {
      label: 'Horizontal Shift',
      url: 'https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/demo.jpg?alt=media&token=15d4ef91-dc09-427e-9b62-6ac3d9fc974e',
      code: 'some code',
    },
    {
      label: 'Vertical Shift',
      url: 'https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/demo.jpg?alt=media&token=15d4ef91-dc09-427e-9b62-6ac3d9fc974e',
      code: 'some code',
    },
    {
      label: 'Zoom',
      url: 'https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/demo.jpg?alt=media&token=15d4ef91-dc09-427e-9b62-6ac3d9fc974e',
      code: 'some code',
    },
    {
      label: 'Horizontal Flip',
      url: 'https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/demo.jpg?alt=media&token=15d4ef91-dc09-427e-9b62-6ac3d9fc974e',
      code: 'some code',
    },
    {
      label: 'Vertical Flip',
      url: 'https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/demo.jpg?alt=media&token=15d4ef91-dc09-427e-9b62-6ac3d9fc974e',
      code: 'some code',
    },
    {
      label: 'Rotate',
      url: 'https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/demo.jpg?alt=media&token=15d4ef91-dc09-427e-9b62-6ac3d9fc974e',
      code: 'some code',
    },
    {
      label: 'Special Mode (Wrap,Nearest,Constant,Reflect)',
      url: 'https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/demo.jpg?alt=media&token=15d4ef91-dc09-427e-9b62-6ac3d9fc974e',
      code: 'some code',
    },
  ];
  photos: any[] = [];
  imageNameList: string[] = [
    'h_flip_img',
    'h_shift_img',
    'rotate_img',
    'special_mode_img',
    'v_shift_img',
    'zoom_img',
  ];
  val!: number;
  displayCustom: boolean = true;

  activeIndex: number = 0;
  selectedCities: string = '';
  augmentationType: any[] = [{ name: 'blur', isChecked: false, value: [] }];
  /**
   *
   */
  constructor(
    public uiQuery: UIQuery,
    private photoService: PhotoService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // this.photoService.getImages().then((images) => {
    //   this.images = images;
    //   console.log(this.images);
    // });

    this.uiQuery.files$.subscribe((response) => {
      // this.images=response;
    });
  }

  change() {
    console.log('found');
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  // download() {
  //   var zip = new JSZip();
  //   zip.file('Title.txt', 'hello');
  //   var imgFolder = zip.folder('images')!;
  //   for (let i = 0; i < this.images?.length; i++) {
  //     imgFolder.file(this.images[i].name, this.images[i], { base64: true });
  //   }
  //   zip.generateAsync({ type: 'blob' }).then(function (content) {
  //     FileSaver.saveAs(content, 'Sample.zip');
  //   });
  // }

  cities: any[] = [
    { name: 'All', code: 'NY' },
    { name: 'Selected', code: 'RM' },
  ];

  selectedCity: any;

  // downloadFile() {
  //   let url =
  //     'https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/chackma%20numeric.PNG?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVnbWEtZGU1NTAiLCJhdWQiOiJhdWdtYS1kZTU1MCIsImF1dGhfdGltZSI6MTY0ODIyODUyNywidXNlcl9pZCI6Ik5vc0tJNEs1OGhmN3BUTVpNRW54YlhDTVVsRDMiLCJzdWIiOiJOb3NLSTRLNThoZjdwVE1aTUVueGJYQ01VbEQzIiwiaWF0IjoxNjQ4MjI4NTI3LCJleHAiOjE2NDgyMzIxMjcsImVtYWlsIjoibnJtZXRodW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ybWV0aHVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jvdjVSm0pjCWGgqgfe_WZquLW-HVYW94fHdOvTcz_gqw34_U7Xf0rGW1qfesPFaJ16IqHBsMK-7TkzcCb7srJkClhEWMSD0N2UKSKef0ASacvf8hao4wm6VLtKUsSzK2AoOkVp_YXr1m_lsKdYhdqcVWmJDD45fpD_qXxXd5YXlqviBFC3tYZgN_UFFADTK0dXzfyxOxW7AUjIEcD5XXtJgaGFq-AEI0TMRvL4vqZ-xz588t28MgCkw2xAUiThbwGZVT5J72DaewoR20_nWUf26ZTE4U6m5GtyGr5VvK9AQFkEd3Cb07ij6VgGgeqfIID2WuSWRSquibhq7H-elm0w&fbclid=IwAR1hIKQQH5w81t_Wv0ftof8HwS74ljc-YixtZrqgcIsvfMaS-6Eg6PE1C2o';
  //   var filename = url.split('/').pop();
  //   console.log(filename);
  //   window.open(url, '_blank');

  //   try {
  //     fs.saveAs(url, filename);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  downloadFiles() {

    const zip = new JSZip();
    // zip.file('Title.txt', 'hello');
    this.http.get('assets/image.json').subscribe((response: any) => {
      console.log(response.nameList);
      for (let i = 0; i < response.nameList.length; i++) {
        console.log(response.nameList[i]);
        
        this.http
          .get(`assets/images/${response.nameList[i]}.jpeg`, { responseType: 'blob' })
          .subscribe((res) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64data = reader.result as string;
              zip.file(`${response.nameList[i]}.jpg`, base64data?.split('base64,')[1], {
                base64: true,
              });
            };

            reader.readAsDataURL(res);
            console.log(res);
          });
      }
      setTimeout(() => {
        zip.generateAsync({ type: 'blob' }).then(function (content) {
          FileSaver.saveAs(content, 'Sample.zip');
        });
      }, 2000);
    });

    // const imgFolder = zip.folder('images')!;
    // for (let i = 0; i < this.imageNameList.length; i++) {
    //   console.log(`assets/images/${this.imageNameList[i]}`);

    //   imgFolder.file(this.imageNameList[i]+'.jpg', `assets/images/${this.imageNameList[i]}`, {
    //     binary:true
    //   });
    // }
  }
}
