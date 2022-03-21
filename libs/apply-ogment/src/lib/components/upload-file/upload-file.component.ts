import { UIQuery } from '@augment/core';
import { UIStore } from './../../../../../core/src/lib/states/ui/ui.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {


  imgSrc:string='';

  constructor(private uiStore:UIStore,private uiQuery:UIQuery) { }

  ngOnInit() {
    this.uiQuery.uploadedImage$.subscribe(
      response=>console.log(response)
      
    )
  }

  onFileChanged(event: any) {
    
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      console.log(file);
      let fr = new FileReader();
      fr.onload =  (event: any) => {
        let base64 = event.target.result;
        console.log(base64);

        let img = base64.split(',')[1];
        
        let blob = new Blob([window.atob(img)], { type: 'image/jpeg' });
        this.uiStore.update({uploadedImage:blob});

        console.log(blob);
        console.log(file);

        this.imgSrc=fr.result as string;

      }
      console.log(file);

      fr.readAsDataURL(file);
    }
  }

  onBasicUpload(event:any) {
    console.log(event);
    console.log(event.currentFiles[0]);

  }
}
