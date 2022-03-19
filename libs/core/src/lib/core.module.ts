import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,    
    MenubarModule,
  ],
  declarations:[HeaderComponent],
  exports:[HeaderComponent]
})
export class CoreModule {}
