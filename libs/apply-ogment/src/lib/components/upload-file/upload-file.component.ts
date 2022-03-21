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
        console.log(base64);

        let img = base64.split(',')[1];
        console.log(img);
        
        let blob = new Blob([window.atob(img)], { type: 'image/jpeg' });
        console.log(blob);
        
        this.imgSrc=fr.result as string;

      }
      console.log(file);

      fr.readAsDataURL(file);
    }
  }
}
