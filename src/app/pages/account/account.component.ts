import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation:true
  };
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen:boolean = true;
  public links = [  ]; 
  constructor(public router:Router,public UserService:UsersService) { }
  public name = "";
  async ngOnInit() {
    if(window.innerWidth < 960){
      this.sidenavOpen = false;
    };

    this.links.push({ name: 'Profil', href: 'profile', icon: 'person' });
    this.links.push({ name: 'Mes reservations', href: 'bookings', icon: 'book' });
   if(localStorage.getItem('isadmin') == 'true') this.links.push({ name: 'Logements', href: 'logements', icon: 'home' });
   if(localStorage.getItem('isadmin') == 'true') this.links.push({ name: 'Paramètres', href: 'custom', icon: 'settings' });
    this.links.push({ name: 'Mes logements', href: 'my-properties', icon: 'view_list' });
    if(localStorage.getItem('isadmin') == 'true') this.links.push({ name: 'Gérer les équipements', href: 'equipment', icon: 'fitbit' });
    this.links.push({ name: 'Ajouter un logement', href: '/submit-property', icon: 'add_circle' });
    if(localStorage.getItem('isadmin') == 'true') this.links.push({ name: 'Gérer les comptes', href: 'users', icon: 'group'});
    this.links.push({ name: 'Se déconecter', href: '/login', icon: 'power_settings_new' });
    var data = await this.UserService.getUsersprofile().toPromise();
    this.name = data['firstName']+' '+data['lastName'];
  }
 

  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {  
        if(window.innerWidth < 960){
          this.sidenav.close(); 
        }
      }                
    });
  } 


}
