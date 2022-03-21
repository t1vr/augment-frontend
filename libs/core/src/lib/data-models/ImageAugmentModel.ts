export interface FileAugmentationRequestModel{
    file:Blob|string;
    augmentType:AugmentationTypeModel[];
}


export interface AugmentationTypeModel{
    name:string;
    value:number[];
}