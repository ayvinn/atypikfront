import { AccommodationFieldValue } from "../AccommodationFieldValue/accommodation-field-value";
import { AccommodationPhoto } from "../accommodation-photo";
import { Adress } from "../adress";
import { Equipment } from "../equipment";
import { UnavailableSlot } from "../unavailable-slot";

export class AccomodationUpdate {   
    size : number;
    kind : number;
    isStar : boolean;
    step : number;
    title : string;
    description : string;
    department : string;
    country : string;
    price : number;
    beds : number;
    travelers : number;
    status : number;
    bedrooms : number;
    bathrooms : number;
    accessibility : boolean;
    pro : boolean;
    address : Adress;
    equipments : Equipment[];
    AccommodationFieldValues : AccommodationFieldValue[];
    photos : AccommodationPhoto[];
    UnavailableSlots : UnavailableSlot[];
}
