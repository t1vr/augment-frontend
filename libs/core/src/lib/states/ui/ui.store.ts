import { AugmentedFileModel } from './../../data-models/ImageAugmentModel';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UIState {
  isLoaderVisible: boolean;
  uploadedImage:Blob|string;
  files:AugmentedFileModel[];
}

export function createInitialUIState(): UIState {
  return {
    isLoaderVisible: false,
    uploadedImage:'',
    files:[]
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui', resettable: false })
export class UIStore extends Store<UIState> {
  constructor() {
    super(createInitialUIState());
  }

  setLoaderVisible(isLoaderVisible: boolean) {
    this.update(state => ({ isLoaderVisible: isLoaderVisible }));
  }
}
