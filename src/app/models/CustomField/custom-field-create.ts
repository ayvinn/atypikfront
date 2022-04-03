import { CustomFieldKind } from "../custom-field-kind";

export class CustomFieldCreate {
 
    
    label : string;
    description : string;
    value : number;
    materialIconName : string;
    customFieldKinds : CustomFieldKind[];
}
