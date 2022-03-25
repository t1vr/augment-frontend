import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { UIState, UIStore } from './ui.store';

@Injectable({
  providedIn: 'root'
})
export class UIQuery extends Query<UIState> {
  isLoaderVisible$=this.select(state=>state.isLoaderVisible);
  uploadedImage$=this.select(state=>state.uploadedImage);
  fileUrls$=this.select(state=>state.fileUrl)
  constructor(private uiStore: UIStore) { 
    super(uiStore);
  }
}
