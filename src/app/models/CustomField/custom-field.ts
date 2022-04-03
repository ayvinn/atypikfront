import { CustomFieldKind } from "../custom-field-kind";
import { AccommodationFieldValue } from "../AccommodationFieldValue/accommodation-field-value";
export class CustomField {
    customFieldValue : number;
    id : number;
    label : string;
    description : string;
    value : number;
    materialIconName : string;
    customFieldKinds : CustomFieldKind[];
    accommodationFieldValues : AccommodationFieldValue[];
}

