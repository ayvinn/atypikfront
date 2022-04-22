import { Component, Inject, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from 'src/app/app.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  public infoForm:FormGroup;
  public passwordForm:FormGroup;
  form: any;
  constructor(public formBuilder: FormBuilder, public snackBar: MatSnackBar,public UserService:UsersService,public appService:AppService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditUsersComponent>) { }

  async ngOnInit() {
    var data = await this.UserService.getUsersid(this.data.id).toPromise();
    this.infoForm = this.formBuilder.group({
      firstname: [data['firstName'], Validators.compose([Validators.required, Validators.minLength(3)])],
      lastname: [data['lastName'], Validators.compose([Validators.required, Validators.minLength(3)])],
     
    });
  
  }


  submit(){
    const values = {FirstName: this.infoForm.get('firstname').value, LastName: this.infoForm.get('lastname').value, Certified:true,Email:'test@TestBed.test',ProfilePicture:''};
    console.log('Ajouter :',values);
    this.UserService.putUsersnoid(this.data.id,values).subscribe(res => {
      console.log('Ajouter : ', res);
      
    });
  }

  

}
