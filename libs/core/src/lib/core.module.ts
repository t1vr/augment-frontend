import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { LoaderComponent } from './components/loader/loader.component';
import {ProgressSpinner, ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    GalleriaModule,
    TabViewModule,
    ProgressSpinnerModule

  ],
  declarations: [HeaderComponent,LoaderComponent],
  exports: [HeaderComponent,LoaderComponent],
})
export class CoreModule {}
