import { Adress } from "../adress";
import { NearbyPhotoCreate } from "./nearby-photo-create";

export class NearbyUpdate {
    description : number;
    name : string;
    url : string;
    distance : number;
    photos : NearbyPhotoCreate[];
    adress : Adress;
}
