import { Photo } from "../photo";

export class CommentCreate {
    id : number;
    content : string;
    cleanlinessScore : string;
    serviceScore : string;
    communicationScore : string;
    environmentalScore :string;
    accommodationId : number;
    photos : Photo[];

}

