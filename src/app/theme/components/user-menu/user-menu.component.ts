import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(public appService:AppService,public router:Router) { }
  cnx = 'False';
  ngOnInit() {
    this.cnx = localStorage.getItem('isLoggedIn');

  }

  navigate(){
    this.router.navigate(["/login"]);
  }
  logout(){
    localStorage.setItem('isLoggedIn','false');
    window.location.href = '/';
  }
}
