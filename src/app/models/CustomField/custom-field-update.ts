import { CustomFieldKindCreate } from "./custom-field-kind-create";

export class CustomFieldUpdate {
    label : string;
    description : string;
    value : number;
    materialIconName : string;
    customFieldKinds : CustomFieldKindCreate[];
}
