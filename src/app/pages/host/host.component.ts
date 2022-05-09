import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';
import { AccommodationsService } from 'src/app/services/accommodations.service';
import { NearbyService } from 'src/app/services/nearby.service';
import { ReservationsService } from 'src/app/services/reservations.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
  /*public sub ;
   public propertyId: any;
    constructor(
      @Inject(PLATFORM_ID) private platformId: Object,
      private activatedRoute: ActivatedRoute,
    ) { }
  
    ngOnInit(): void {
      this.sub = this.activatedRoute.params.subscribe(params => {   
        this.propertyId = params['id'];
      });
    }*/
  public sub;
  public propertyId: any;
  public submitForm:FormGroup; 
  public messages  = [];
  public count = 0;
  todayDate: Date = new Date();
  displayedColumns: string[] = ['Arrive', 'Departure', 'name', 'actions'];
  displayedColumns2: string[] = ['Arrive', 'Departure', 'name', 'Status'];
  satuts: string[] = ['En attente','Refusé', 'Validé'];
  public start = [];
  public datamessages =[];
  public end = [];
  public parameters: any = null;
  dataSource: MatTableDataSource<any>;
  dataSource2: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator2: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort2: MatSort;
  datesToHighlight = ["2022-04-22T18:30:00.000Z", "2019-01-22T18:30:00.000Z", "2019-01-24T18:30:00.000Z", "2019-01-28T18:30:00.000Z", "2019-01-24T18:30:00.000Z", "2019-01-23T18:30:00.000Z", "2019-01-22T18:30:00.000Z", "2019-01-25T18:30:00.000Z"];
  data: any[];
  constructor(public appService: AppService, public accomodationservice: AccommodationsService, private activatedRoute: ActivatedRoute,
    public reservationservice: ReservationsService,private fb: FormBuilder,public nearbyservice:NearbyService,public snackBar:MatSnackBar
  ) { }

  async ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.propertyId = params['id'];
    });
    const data = await this.accomodationservice.getAccommodationHost(this.propertyId).toPromise();
    
    data['unavailableSlots'].forEach(element => {
      this.start.push({ start: new Date(element.start), end: new Date(element.end) });
    });
    this.datamessages = await this.accomodationservice.getAccommodation(this.propertyId).toPromise();
    console.log(this.datamessages['nearby']);
    this.datamessages['nearby'].forEach(element => {
      this.messages.push({ id:element.id,name: element.name, message: element.description ,date : new Date(element['address'].city)});
    });
    this.count = 0;
    //  var event ;
    //  event.pageIndex = 0;
    this.data = this.appService.getPropertyStatuses();
    this.loaddata();
    this.loaddata2();
    this.getparameters();
    const parameters = await this.accomodationservice.getAccommodationBookingsParameters(this.propertyId).toPromise();
    this.parameters = parameters;
    console.log('hna:',this.parameters);
    this.submitForm = this.fb.group({
      additional: this.fb.group({
      
        parameters: this.buildParameters(),

      })
   
    }); 


  }
  public buildParameters() {

    const arr = this.parameters.map(parameter  => { 
      
       return this.fb.group({
        valuertext:null,
        valeurbool:null,
        valeurnumber:null,
        id : parameter.id
      });
    })   
    return this.fb.array(arr);
  }
  propertyType(data) {
    return this.data[parseInt(data)].name;
  }
  myFilter = (d: Date): boolean => {

    for (let index = 0; index < this.start.length; index++) {
      const start = this.start[index].start;
      const end = this.start[index].end;
      if (d >= start && d <= end) return false;
    }

    return true;

  }
submitparameters(){
  var data = [];
  var arrayControl = this.submitForm.get(['additional','parameters']).value;
  arrayControl.forEach(element => {

          if(element.valuertext != null && element.valuertext != ''){
              data.push({valueText:element.valuertext,customFieldId:element.id});
          }
          else if(element.valeurbool != null && element.valeurbool != ''){
            data.push({valueBoolean:JSON.parse(element.valeurbool),customFieldId:element.id});
          }

        else if(element.valuernumber != null && element.valuernumber != ''){
          data.push({valueNumber:element.valuertext,customFieldId:element.id});
           }
        else data.push({customFieldId:element.id});   
  });
  this.accomodationservice.putAcommodation(this.propertyId,{accommodationFieldValues:data}).subscribe(res =>
    {
      if (res) {
        this.snackBar.open("Champ ajouter !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 }); 
      }
      else
      this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  )
}
get formRow() {
  return this.submitForm.get(['additional','parameters']) as FormArray;
}
  list: any[] = [];
  loaddata() {
    this.accomodationservice.getAccommodationBookingsToValidate(this.propertyId).subscribe(res => {
      if (!res) {
        return;
      }

      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  loaddata2() {
    this.accomodationservice.getAccommodationBookings(this.propertyId, { page: 0, order: 'desc' }).subscribe(res => {
      if (!res) {
        return;
      }

      this.dataSource2 = new MatTableDataSource<any>(res['items']);
      this.dataSource2.paginator = this.paginator2;
      this.dataSource2.sort = this.sort2;
    });
  }

  getstatut() {

  }

  public initDataSource(data: any) {


    this.dataSource = new MatTableDataSource<Property>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  validatereservation(id) {
    this.reservationservice.putReservations(id, { bookingStatus: 2 }).subscribe(res => {
        this.snackBar.open("Réservation valider !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 }); 
      this.ngOnInit();
    })
  }

  cancelreservation(id) {
    this.reservationservice.putReservations(id, { bookingStatus: 1 }).subscribe(res => {
        this.snackBar.open("Reservation annuler !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 }); 
      this.ngOnInit();

    })
  }

  getstatuts(a: any) {
    return this.satuts[a];
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectedDate: any;
  onSelect(event) {
    
    this.selectedDate = event;
  }

  dateClass() {

    return (date: Date): MatCalendarCellCssClasses => {

      for (let index = 0; index < this.end.length; index++) {
        const start = this.end[index].start;
        const end = this.end[index].end;
        if (date >= start && date <= end) return 'special-date';
      }

      return '';

    }
  }
  push(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
        this.end.push({start:new Date (dateRangeStart.value),end:new Date (dateRangeEnd.value)});
        this.dateClass();
  }
  clear(){
    this.end = [];
    this.dateClass();
  }
  submitslots(){
    if(this.end.length>0){

      this.end.forEach(element => {
        this.start.push({start:element.start,end:element.end})
      });  
      this.accomodationservice.putAcommodation(this.propertyId,{unavailableSlots:this.start}).subscribe( res =>{
        if (res) {
          this.snackBar.open("Planning Modifier !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 }); 
        }
        else
        this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

        this.ngOnInit()
        this.end = [];
      }
       
      );
    }else alert('aucun element a ajouter !');
 
 
  }

  async getparameters(){
   // this.parameters = await this.accomodationservice.getAccommodationBookingsParameters(this.propertyId).toPromise();
  }
  remove(ids){
    
      this.datamessages['nearby'] = this.datamessages['nearby'].filter(({ id }) => id !== ids);
      this.accomodationservice.putAcommodation(this.propertyId,{nearby:this.datamessages['nearby']}).subscribe();          
      this.nearbyservice.deleteNearby(ids).subscribe();;
      console.log(this.datamessages['nearby']);
      this.messages =[];
      this.ngOnInit();
  }
}
