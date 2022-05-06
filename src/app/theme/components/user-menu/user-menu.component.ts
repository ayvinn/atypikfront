import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router'; 
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(public appService:AppService,public router:Router,public UserService:UsersService) { }
  cnx = 'False';
  user='';  
  async ngOnInit() {
    var data = await this.UserService.getUsersprofile().toPromise();
    this.cnx = localStorage.getItem('isLoggedIn');
    this.user = data['firstName']+' '+data['lastName'];
    
  }

  navigate(){
    this.router.navigate(["/login"]);
  }
  logout(){
    if (window.confirm("Se déconnecter ?!")) {
      localStorage.setItem('isLoggedIn','false');
      localStorage.removeItem('jwt');
      window.location.href = '/login';
  }

  }
}
