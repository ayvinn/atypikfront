import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { matchingPasswords, emailValidator } from 'src/app/theme/utils/app-validators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public hide = true;

  constructor(public fb: FormBuilder, public router: Router, public snackBar: MatSnackBar, public user: UserService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      receiveNewsletter: false
    }, { validator: matchingPasswords('password', 'confirmPassword') });
  }

  public onRegisterFormSubmit(values: Object): void {
    if (this.registerForm.valid) {
      const values = {
        email: this.registerForm.value.email, password: this.registerForm.value.password,
        passwordConfirm: this.registerForm.value.confirmPassword, lastname: this.registerForm.value.lastname, firstname: this.registerForm.value.firstname,
      };
      console.log(values);
      this.user.register(values).subscribe(
        data => {
          if (data) {
            this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
            window.location.href = '/';
          }
          else
            this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        },
        (error) => {
          this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        }
      
      );
    } 
  }
}
