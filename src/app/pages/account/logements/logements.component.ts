import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Property } from 'src/app/app.models';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccommodationsService } from 'src/app/services/accommodations.service';

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.scss']
})
export class LogementsComponent implements OnInit {

  displayedColumns: string[] = ['Type','Title','Status','actions'];
  satuts: string[] = ['Brouillon','	En attente de validation','Validé'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  data :any[];
  constructor(public appService:AppService,public accomodationservice:AccommodationsService) { }

  ngOnInit() {
   /* this.appService.getProperties().subscribe(res => {
      this.initDataSource(res);
    });    */
  //  var event ;
  //  event.pageIndex = 0;
    this.data = this.appService.getPropertyStatuses();
    this.loaddata();
  }
  propertyType(data){
    return this.data[parseInt(data)].name;
  }
  list: any[] = [];
  loaddata(){
    this.accomodationservice.getAccommodationsAll({page:0,toValidateOnly:false,searchTerm:''}).subscribe(res => {
      if(!res){
        return;
      }

      this.dataSource = new MatTableDataSource(res['items']);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
          this.accomodationservice.deleteAcommodation(element).subscribe(res => {
            this.ngOnInit();
          }
          )
				}
			});   
    } 
  } 
  public updatestatuts(element:any) {
    
    // const index: number = this.dataSource.data.indexOf(element.id);    
     if (element !== -1) {
       
       const message = 'Publier ce logement ?';
       let dialogRef = this.appService.openConfirmDialog(null, message); 
       dialogRef.afterClosed().subscribe(dialogResult => {
         if(dialogResult){ 
          // this.dataSource.data.splice(index,1);
          // this.initDataSource(this.dataSource.data); 
           this.accomodationservice.putAcommodation(element,{status:2}).subscribe(res => {
             this.ngOnInit();
           }
           )
         }
       });   
     } 
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
}
