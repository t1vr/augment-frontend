import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UIState {
  isGlobalLoaderVisible: boolean;

}

export function createInitialUIState(): UIState {
  return {
    isGlobalLoaderVisible: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui', resettable: false })
export class UIStore extends Store<UIState> {
  constructor() {
    super(createInitialUIState());
  }

  setGlobalLoaderVisible(isGlobalLoaderVisible: boolean) {
    this.update(state => ({ isGlobalLoaderVisible: isGlobalLoaderVisible }));
  }
}
