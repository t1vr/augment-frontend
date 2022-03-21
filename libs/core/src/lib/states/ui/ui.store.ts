import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UIState {
  isLoaderVisible: boolean;

}

export function createInitialUIState(): UIState {
  return {
    isLoaderVisible: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui', resettable: false })
export class UIStore extends Store<UIState> {
  constructor() {
    super(createInitialUIState());
    console.log('store');
    
  }

  setLoaderVisible(isLoaderVisible: boolean) {
    this.update(state => ({ isLoaderVisible: isLoaderVisible }));
  }
}
