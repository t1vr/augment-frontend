import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { ImageAugmentTypeComponent } from './components/image-augment-type/image-augment-type.component';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
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
import {InputNumberModule} from 'primeng/inputnumber';
import {SliderModule} from 'primeng/slider';
import {BlockUIModule} from 'primeng/blockui';

const routes: Route[] = [
  {
    path: '',
    component: ImageAugmentationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    CoreModule,
    CardModule,
    ImageModule,
    TabViewModule,
    GalleriaModule,
    TabViewModule,
    CheckboxModule,
    FormsModule,
    ScrollPanelModule,
    FileUploadModule,
    InputNumberModule,
    SliderModule,
    ButtonModule,
    DropdownModule,
    BlockUIModule
    ],
  declarations: [ImageAugmentationComponent, UploadFileComponent,ImageAugmentTypeComponent],
})
export class ApplyOgmentModule {}
