import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-augment-type',
  templateUrl: './image-augment-type.component.html',
  styleUrls: ['./image-augment-type.component.css']
})
export class ImageAugmentTypeComponent implements OnInit {

  selectedTypes:any[]=[];

  augmentationType: any[] = [
    { name: 'blur', isChecked: false, value: [] },
    { name: 'vertical_shift', isChecked: false, value: [] },
    { name: 'horizontal_shift', isChecked: false, value: [] },
    { name: 'zoom', isChecked: false, value: [] },
    { name: 'horizontal_flip', isChecked: false, value: [] },
    { name: 'vertical_flip', isChecked: false, value: [] },
    { name: 'rotation', isChecked: false, value: [] },
    { name: 'horizontal_shift_mode', isChecked: false, value: [] },
  ];
  augmentationParameter:any[]=[0,0,0,0,0,0,0,0];
  val:any;
  constructor() { }

  ngOnInit() {
  }
  onChange(){
    console.log(this.selectedTypes);
    
  }
}

// # img = horizontal_shift(cv_img , 0.5) 
// # ### Zooming
// # img = zoom(cv_img, .1) 
// # ### horizontal Flip 
// # img = horizontal_flip(cv_img, True)
// # ### vertical Flip 
// # img = vertical_flip(cv_img,True) 
// # ### Rotation
// # img = rotation(cv_img, 30)
// ### MODING ...
// # img = horizontal_shift_mode(cv_img, .7 ,'nearest'