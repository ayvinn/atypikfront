import { EditUsersComponent } from './edit-users/edit-users.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Property } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';
import { DevicesService } from 'src/app/services/devices.service';
import { UserService } from 'src/app/services/user.service';
import { UsersService } from 'src/app/services/users.service';
import { AddEquipmentComponent } from '../equipments/add-equipment/add-equipment.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  displayedColumns: string[] = ['Title','Email','actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  data :string[]=['Booleen','Texte','Nombre'];
  constructor(public appService:AppService,public userservice:UsersService,public dialog: MatDialog) { }

  ngOnInit() {
   /* this.appService.getProperties().subscribe(res => {
      this.initDataSource(res);
    });    */
  //  var event ;
  //  event.pageIndex = 0;
    
    this.loaddata(0);
  }
  propertyType(data){
    return this.data[parseInt(data)];
  }
  list: any[] = [];
  loaddata(val:any){
    this.userservice.getAllUsers().subscribe(res => {
      if(!res){
        return;
      }   
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }
  openDialog(id): void {

    const dialogRef = this.dialog.open(EditUsersComponent, {
      width: '800px',
      data:{
        id:id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.libelle = result;
      this.ngOnInit();
    });

  }
  public initDataSource(data:any){


    this.dataSource = new MatTableDataSource<Property>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 
  
  public remove(element:any) {
    
   // const index: number = this.dataSource.data.indexOf(element.id);    
    if (element !== -1) {
      
      const message = 'Etes Vous sur ?';
      let dialogRef = this.appService.openConfirmDialog(null, message); 
			dialogRef.afterClosed().subscribe(dialogResult => {
				if(dialogResult){ 
         // this.dataSource.data.splice(index,1);
         // this.initDataSource(this.dataSource.data); 
          this.userservice.deleteUsers(element).subscribe(res => {
            this.ngOnInit();
          }
          )
				}
			});   
    } 
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
