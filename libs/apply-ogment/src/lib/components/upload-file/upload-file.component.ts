import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {


  imgSrc:string='';

  constructor() { }

  ngOnInit() {
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
}
