import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { UIState, UIStore } from './ui.store';

@Injectable({
  providedIn: 'root'
})
export class UIQuery extends Query<UIState> {
  isGLobalLoaderVisible$=this.select(state=>state.isGlobalLoaderVisible);
  constructor(private uiStore: UIStore) {
    super(uiStore);
  }
}
