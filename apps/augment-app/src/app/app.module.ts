import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import {ImageModule} from 'primeng/image';
import {GalleriaModule} from 'primeng/galleria';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@augment/core';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    HttpClientModule,
    ImageModule,
    GalleriaModule,
    CoreModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
