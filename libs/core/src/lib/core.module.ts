import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    GalleriaModule,
    TabViewModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class CoreModule {}
