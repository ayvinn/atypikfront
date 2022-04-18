
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, matchingPasswords } from 'src/app/theme/utils/app-validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from 'src/app/app.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public infoForm:FormGroup;
  public passwordForm:FormGroup;
  form: any;
  constructor(public formBuilder: FormBuilder, public snackBar: MatSnackBar,public UserService:UsersService,public appService:AppService) { }

  async ngOnInit() {
    var data = await this.UserService.getUsersprofile().toPromise();
    this.infoForm = this.formBuilder.group({
      firstname: [data['firstName'], Validators.compose([Validators.required, Validators.minLength(3)])],
      lastname: [data['lastName'], Validators.compose([Validators.required, Validators.minLength(3)])],
    });
  
  }


  submit(){
    const values = {firstName: this.infoForm.get('firstname').value, lastName: this.infoForm.get('lastname').value};
    console.log('Ajouter :',values);
    this.UserService.putUsers(values).subscribe(res => {
      console.log('Ajouter : ', res);
      
    });
  }
}
