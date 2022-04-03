import { Accommodation } from "./Accommodation/accommodation";
import { User } from "./user";

export class AccommodationPhoto {
    id : number;
    name : string;
    displayName :string;
    order : number;
    url : string;
    userId : number;
    user : User;
    accommodationId : number;
    accommodation : Accommodation;

}
