import { Accommodation } from "./Accommodation/accommodation";
import { User } from "./user";

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
