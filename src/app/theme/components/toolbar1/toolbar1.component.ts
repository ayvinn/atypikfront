import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-toolbar1',
  templateUrl: './toolbar1.component.html'
})
export class Toolbar1Component implements OnInit {
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  constructor(public appService:AppService,public UserService:UsersService) { }
  public result = 0;
  async ngOnInit() {
    var databookings = await this.UserService.getUsersbookings({page:0,order:'desc'}).toPromise();  
    const res = databookings['items'].filter(p => p.bookingStatus ==0);
    this.result = res.length;
   }

  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }
}