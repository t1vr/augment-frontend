import { HttpClient } from '@angular/common/http';
import { UIQuery } from '@augment/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-augment-type',
  templateUrl: './image-augment-type.component.html',
  styleUrls: ['./image-augment-type.component.css'],
})
export class ImageAugmentTypeComponent implements OnInit {
  selectedTypes: any[] = [];
  file:any;
  augmentationType: any = {
    blur: { name: 'blur', isChecked: false, value: [] },
    vertical_shift: { name: 'vertical_shift', isChecked: false, value: [] },
    horizontal_shift: { name: 'horizontal_shift', isChecked: false, value: [] },
    zoom: { name: 'zoom', isChecked: false, value: [] },
    horizontal_flip: { name: 'horizontal_flip', isChecked: false, value: [] },
    vertical_flip: { name: 'vertical_flip', isChecked: false, value: [] },
    rotation: { name: 'rotation', isChecked: false, value: [] },
    horizontal_shift_mode: {
      name: 'horizontal_shift_mode',
      isChecked: false,
      value: [],
    },
  };
  augmentationParameter: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
  val: any;
  src:string='';
  constructor(private uiQuery:UIQuery,private httpClient:HttpClient,private changeDetection:ChangeDetectorRef) {}

  ngOnInit() {
    this.uiQuery.uploadedImage$.subscribe(
      response=>{this.file=response;console.log(response);
      },
      error=>console.log(error)
      
    )
  }
  onChange() {
    console.log(this.selectedTypes);
    console.log(this.augmentationType);

  }


  onBasicUpload() {

    let formdata=new FormData();
    let model:any[]=[];
    for(let i=0;i<this.selectedTypes.length;i++){
      
      model.push(this.augmentationType[this.selectedTypes[i]]);
      console.log(model);
    }
    let fileUploadModel:RequestModel={
      file:this.file,
      augmentationTypes:model
    }
    formdata.append('image',fileUploadModel.file); 
    formdata.append('types',fileUploadModel.augmentationTypes); 

    console.log(fileUploadModel.augmentationTypes);
    

    this.httpClient.post('http://127.0.0.1:8000/image/add/',formdata).subscribe(
      (response:any)=>{console.log(response);
        let base64String = btoa(String.fromCharCode(...new Uint8Array(response.label)));
        base64String='data:image/png;base64,'+base64String;
        console.log(base64String);
        this.src=base64String
        this.changeDetection.markForCheck();
        console.log(this.src);
        
      },
      error=>console.log(error)
    )
  }
}

export interface RequestModel{
  file:Blob;
  augmentationTypes:any;
}
