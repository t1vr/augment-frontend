export interface FileAugmentationRequestModel{
    file:Blob|string;
    augmentType:AugmentationTypeModel[];
}


export interface AugmentationTypeModel{
    name:string;
    value:number[];
}

export interface AugmentedFileModel{
    label:string;
    URL:string;
    code:string;
}

export interface BaseResponseModel<T>{
    data:T;
    message:string;
    status:string;
    success:boolean;
}
