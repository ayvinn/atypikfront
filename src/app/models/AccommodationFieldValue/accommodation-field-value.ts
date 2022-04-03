import { Accommodation } from "../Accommodation/accommodation";
import { CustomField } from "../CustomField/custom-field";

export class AccommodationFieldValue {
    accommodationId : number;
    accommodation : Accommodation;
    customFieldId : number;
    customField : CustomField;
    valueText : string;
    valueBoolean : boolean;
    valueNumber : number;

}
