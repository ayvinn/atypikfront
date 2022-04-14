import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Property } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';
import { AccommodationsService } from 'src/app/services/accommodations.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  displayedColumns: string[] = ['Arrive','Departure','Price','Status','actions'];
  satuts: string[] = ['En attente','Annulé','Validé'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  data :any[];
  constructor(public appService:AppService,public usersservice:UsersService) { }

  ngOnInit() {
   /* this.appService.getProperties().subscribe(res => {
      this.initDataSource(res);
    });    */
  //  var event ;
  //  event.pageIndex = 0;
    this.data = this.appService.getPropertyStatuses();
    this.loaddata(0);
  }
  propertyType(data){
    return this.data[parseInt(data)].name;
  }
  list: any[] = [];
  loaddata(val:any){
    this.usersservice.getUsersbookings({page:val,order:'desc'}).subscribe(res => {
      if(!res){
        return;
      }
      
      this.dataSource = new MatTableDataSource(res['items']);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  public initDataSource(data:any){


    this.dataSource = new MatTableDataSource<Property>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 
  
  
  
  getstatuts(a: any){
    return this.satuts[a] ;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onPaginateChange(event){
    this.loaddata(JSON.stringify(event.pageIndex));
    //alert(JSON.stringify("Current page index: " + event.pageIndex));
  }
}
