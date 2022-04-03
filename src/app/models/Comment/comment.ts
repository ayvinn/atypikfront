import { DateSelectionModelChange } from "@angular/material/datepicker";
import { CommentPhoto } from "../comment-photo";
import { User } from "../user";

export class Comment {
    id : number;
    content : string;
    date : Date;
    cleanlinessScore : string;
    serviceScore : string;
    communicationScore : string;
    environmentalScore :string;
    userId : number;
    author : User;
    AccommodationId : number;
    commentPhotos : CommentPhoto[];






    




}

