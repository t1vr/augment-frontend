import { CoreModule } from '@augment/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ImageAugmentationComponent } from './components/image-augmentation/image-augmentation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';

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
    CoreModule,
    CardModule,
    ImageModule,
    TabViewModule,
    GalleriaModule,
    TabViewModule,
    CheckboxModule,
    FormsModule,
    ScrollPanelModule
  ],
  declarations:[ImageAugmentationComponent,UploadFileComponent]
})
export class ApplyOgmentModule {}
