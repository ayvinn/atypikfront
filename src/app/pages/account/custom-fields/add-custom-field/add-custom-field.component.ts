import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { CustomFieldsService } from 'src/app/services/custom-fields.service';

@Component({
  selector: 'app-add-custom-field',
  templateUrl: './add-custom-field.component.html',
  styleUrls: ['./add-custom-field.component.scss']
})
export class AddCustomFieldComponent implements OnInit {
  form: FormGroup;
  public propertyStatuses = [];
  constructor(public dialogRef: MatDialogRef<AddCustomFieldComponent>, public customfieldsservice: CustomFieldsService, private formBuilder: FormBuilder, public appService: AppService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      nom: ['', Validators.required],
      valeur: ['', Validators.required],
      desc: ['', Validators.required]
    });
    this.propertyStatuses = this.appService.getPropertyStatuses();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
    var kinds = [{ kind: this.form.value.type }]
    const values = { value: this.form.value.valeur, label: this.form.value.nom, customFieldKinds: kinds, description: this.form.value.desc };
    console.log('Ajouter :', values);
    this.customfieldsservice.postCustomField(values).subscribe(res => {
      console.log('Ajouter : ', res);
      this.onNoClick();
    },
      err => {
        console.log(err);
      });
  }

}
