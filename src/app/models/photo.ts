import { CommentPhoto } from "./comment-photo";
import { NearbyCommentPhoto } from "./nearby-comment-photo";
import { NearbyPhoto } from "./nearby-photo";
import { User } from "./user";

export class Photo {
    id : number;
    name : string;
    displayName : string;
    url : string;
    userId : number;
    user : User;
    nearbyList : [NearbyPhoto];
    nearbyCommentPhotos : [NearbyCommentPhoto];
    commentPhotos : [CommentPhoto]

}
