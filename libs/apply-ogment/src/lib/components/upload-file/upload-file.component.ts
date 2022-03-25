import { HttpClient } from '@angular/common/http';
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
  file:any;

  constructor(private uiStore:UIStore,private uiQuery:UIQuery,private httpClient:HttpClient) { }

  ngOnInit() {
    this.uiQuery.uploadedImage$.subscribe(
      response=>console.log(response)
      
    )
  }

  onFileChanged(event: any) {
    
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      // console.log(file);
      this.file=file;

      let fr = new FileReader();
      fr.onload =  (event: any) => {
        let base64 = event.target.result;
        // console.log(base64);

        let img = base64.split(',')[1];
        
        let blob = new Blob([window.atob(img)], { type: 'image/jpeg' });
        this.uiStore.update({uploadedImage:file});
        // console.log(blob);
        // console.log(file);

        this.imgSrc=fr.result as string;

      }
      // console.log(file);

      fr.readAsDataURL(file);
    }
  }

  onBasicUpload() {

    let formdata=new FormData();
    formdata.append('image',this.file); 

    this.httpClient.post('http://127.0.0.1:8000/image/add/',formdata).subscribe(
      response=>console.log(response),
      error=>console.log(error)
    )
  }
}
