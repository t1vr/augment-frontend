import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ImageAugmentationComponent } from './components/image-augmentation/image-augmentation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component:ImageAugmentationComponent
  },
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    CardModule,
    ImageModule,
  ],
  declarations:[ImageAugmentationComponent,UploadFileComponent]
})
export class ApplyOgmentModule {}
