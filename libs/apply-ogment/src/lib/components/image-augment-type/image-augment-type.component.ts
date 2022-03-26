import { HttpClient } from '@angular/common/http';
import { AugmentationTypeModel, BaseResponseModel, FileAugmentationRequestModel, UIQuery, UIStore, AugmentedFileModel } from '@augment/core';
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
    blur: { name: 'blur', value: [] },
    vertical_shift: { name: 'vertical_shift',  value: [] },
    horizontal_shift: { name: 'horizontal_shift',  value: [] },
    zoom: { name: 'zoom', isChecked: false, value: [] },
    horizontal_flip: { name: 'horizontal_flip', value: [] },
    vertical_flip: { name: 'vertical_flip',  value: [] },
    rotation: { name: 'rotation',  value: [] },
    horizontal_shift_mode: {
      name: 'horizontal_shift_mode',
      value: [],
    },
  };
  augmentationParameter: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
  val: any;
  src:string='';
  constructor(private uiStore:UIStore,private uiQuery:UIQuery,private httpClient:HttpClient,private changeDetection:ChangeDetectorRef) {}

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

    let augmentationTypeList:AugmentationTypeModel[]=[];
    for(let i=0;i<this.selectedTypes.length;i++){
      augmentationTypeList.push(this.augmentationType[this.selectedTypes[i]]);
    }
    let fileUploadModel:any={
      file:this.file,
      augmentTypes:augmentationTypeList
    }

    let formdata=new FormData();
    formdata.append('image',fileUploadModel.file); 
    formdata.append('types',fileUploadModel.augmentTypes); 
    console.log(fileUploadModel.augmentTypes);
    
    this.httpClient.post('http://127.0.0.1:8000/image/augment/',formdata).subscribe(
      (baseResponse:any)=>{
        if(baseResponse&&baseResponse.success&&baseResponse.data){
          this.uiStore.update({files:baseResponse.data})
        }
      },
      error=>console.log(error)
    )
  }
}