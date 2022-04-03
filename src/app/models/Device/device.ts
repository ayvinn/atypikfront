import { Equipment } from "../Equipment/equipment";

export class Device {
    deviceCategory : number;
    Id : number;
    category : number;
    name : string;
    orderValue : number;
    materialIcon : string;
    equipments : Equipment[];
}
