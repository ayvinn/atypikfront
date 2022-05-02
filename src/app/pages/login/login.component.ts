import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  etat :boolean= false;
  message: string;
  public hide = true;
  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms));
  }
  constructor(public fb: FormBuilder, public router:Router,public user: UserService,) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      rememberMe: false
    });
  }

  public onLoginFormSubmit(values:Object):void {
    if (this.loginForm.valid) {
      this.verify(); 
      console.log(this.etat);
      this.delay(500).then(any=>{ 
        if(this.etat == true)
        {
          localStorage.setItem('isLoggedIn', "true");
          window.location.href = '/';
            
        }else
        {
          this.message = "Login ou Mot de passe incorrect !";
        }
     });
    }
  }
  invalidlogin: boolean;

  verify() : any {
    const values = { username: this.loginForm.value.username, password: this.loginForm.value.password };
    console.log(values);
    this.user.authLogin(values).subscribe(
      data => {
        if(data){
          const token = (<any>data).token; 
          this.etat=true ; //Categorie Admin
          localStorage.setItem('isadmin', (<any>data).isAdmin );
          this.invalidlogin =false;
          localStorage.setItem('jwt', token );
          localStorage.setItem('nom', this.loginForm.value.username );
        }    
        else
          this.etat= false; 
      },
      (error) => {
        this.invalidlogin =true;
      }
    );
  }

}
