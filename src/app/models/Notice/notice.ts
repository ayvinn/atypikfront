import { Accommodation } from "../Accommodation/accommodation";
import { User } from "../User/user";

export class Notice {
    id : number;
    text : string;
    date : Date;
    cleanlinessScore : number; 
    serviceScore : number;
    communicationScore : number;
    environmentalScore : number;
    accommodationId : number;
    accommodation : Accommodation;
    userId : number;
    user : User;

}
