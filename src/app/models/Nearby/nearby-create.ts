import { Adress } from "../adress";
import { NearbyPhoto } from "./nearby-photo";

export class NearbyCreate {

    description : number;
    name : string;
    price : number;
    url : string;
    adress : Adress;
    distance : number;
    photos : NearbyPhoto[];
    accommodationId : number;
}
