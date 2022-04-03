import { Photo } from "../Photo/photo";

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

