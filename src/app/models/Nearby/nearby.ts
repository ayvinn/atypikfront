import { Accommodation } from "../Accommodation/accommodation";
import { Adress } from "../adress";
import { NearbyComment } from "../NearByComment/nearby-comment";
import { NearbyPhoto } from "./nearby-photo";

export class Nearby {
  
    id : number;
    description : number;
    name : string;
    price : number;
    url : string;
    commentsNumber : number;;
    adress : Adress;
    distance : number;
    nearbyComments : NearbyComment[];
    photos : NearbyPhoto[];
    accommodationId : number;
    accommodation : Accommodation;

}
