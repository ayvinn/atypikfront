import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { DevicesService } from 'src/app/services/devices.service';
import { AddCustomFieldComponent } from '../../custom-fields/add-custom-field/add-custom-field.component';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {

  form: FormGroup;
  public propertyStatuses = [];
  constructor(public dialogRef: MatDialogRef<AddCustomFieldComponent>,public devicesservice:DevicesService,private formBuilder: FormBuilder,public appService:AppService ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom: ['',Validators.required],
    }); 
    this.propertyStatuses = this.appService.getPropertyStatuses();
  }
  onNoClick(): void {
    this.dialogRef.close();
  } 
  submit(){
    var kinds=[{kind:this.form.value.type}]
    const values = {category: 0, name: this.form.value.nom };
    console.log('Ajouter :',values);
    this.devicesservice.postDevices(values).subscribe(res => {
      console.log('Ajouter : ', res);
      this.onNoClick();
    },
      err => {
        console.log(err);
      });
  }

}
