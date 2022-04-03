import { Accommodation } from "./Accommodation/accommodation";
import { User } from "./user";

export class UnavailableSlot {
    id : number;
    start : Date;
    end : Date;
    userId : number;
    user : User;
    accommodationId : number;
    accommodation : Accommodation;
}
