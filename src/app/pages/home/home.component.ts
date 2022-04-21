import { Component, OnInit } from '@angular/core';
import { Settings, AppSettings } from '../../app.settings';
import { AppService } from '../../app.service';
import { Property, Pagination, Location } from '../../app.models';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout'; 
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'; 
import { AccommodationsService } from 'src/app/services/accommodations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  watcher: Subscription;
  activeMediaQuery = ''; 

  public slides = [];
  public test:string = "dfsdfsdfsdf";
  public properties: any[] = [];
  public viewType: string = 'grid';
  public viewCol: number = 25;
  public count: number = 8;
  public sort: string;
  public searchFields: any;
  public removedSearchField: string;
  public pagination:Pagination = new Pagination(1, 8, null, 2, 0, 0); 
  public message:string;
  public featuredProperties: Property[] = [];
  public locations: Location[] =[]; 

  public settings: Settings;
  constructor(public appSettings:AppSettings, public appService:AppService, public mediaObserver: MediaObserver, public accomodationservice : AccommodationsService) {
    this.settings = this.appSettings.settings;

    this.watcher = mediaObserver.asObservable()
    .pipe(filter((changes: MediaChange[]) => changes.length > 0), map((changes: MediaChange[]) => changes[0]))
    .subscribe((change: MediaChange) => {
      // console.log(change)
      if(change.mqAlias == 'xs') {
        this.viewCol = 100;
      }
      else if(change.mqAlias == 'sm'){
        this.viewCol = 50;
      }
      else if(change.mqAlias == 'md'){
        this.viewCol = 33.3;
      }
      else{
        this.viewCol = 25;
      }
    });

  }

  ngOnInit() {  
    this.getSlides();
    this.getLocations();
    this.getProperties();  
    this.getFeaturedProperties();
    this.settings.header = 'video';
  }

  ngDoCheck(){
    if(this.settings.loadMore.load){     
      this.settings.loadMore.load = false;     
      this.getProperties();  
    }
  }

  ngOnDestroy(){
    this.resetLoadMore();
    this.watcher.unsubscribe();
  }

  public getSlides(){
    this.appService.getHomeCarouselSlides().subscribe(res=>{
      this.slides = res;
    })
  }

  public getLocations(){
    this.appService.getLocations().subscribe(res =>{
      this.locations = res;
    })
  }

  public getProperties(){  
    //console.log('get properties by : ', this.searchFields);  
    this.appService.getProperties().subscribe(data => {      
      /*if(this.properties && this.properties.length > 0){  
        this.settings.loadMore.page++;
        this.pagination.page = this.settings.loadMore.page; 
      }*/
      let result = this.filterData(data); 
      if(result.data.length == 0){
        this.properties.length = 0;
        this.pagination = new Pagination(1, this.count, null, 2, 0, 0);  
        this.message = 'No Results Found';
        return false;
      }   
      if(this.properties && this.properties.length > 0){   
        this.properties = this.properties.concat(result.data);          
      }
      else{
        this.accomodationservice.getAccommodations({page:0}).subscribe(res  =>{
            console.log(res);
            res['accommodations'].forEach(element => {
              console.log(element.title);
              var photos = [];
              element.photos.forEach(photo => {
                    photos.push({small : photo.name,big:photo.name,medium:photo.name});
              });
              const values = {title : element.title,bathrooms: element.bathrooms,bedrooms:element.bedrooms,city:element.address.city,
                                additionalFeatures: [],
                                area: {value: element.travelers, unit: "voyageur"},
                                desc: element.description,
                                featured: false,
                                features: ["Climatisation", "Barbeque", "Séchoir", "Micro-ondes", "Réfrigérateur", "Cheminée", "Piscine"],
                                formattedAddress: element.address.street+', '+element.address.city+', '+element.address.postalCode,
                                gallery: photos,
                                garages: element.beds,
                                id: element.id,
                                lastUpdate: "2019-05-20 14:20:00",
                                location: {lat: 40.84915, lng: -73.9351},
                                neighborhood: ["Astoria", "Midtown"],
                                plans: [{name: "First floor"}, {name: "Second floor"}],
                                priceDollar: {sale: 1300000, rent: null},
                                priceEuro: {sale: element.price, rent: null},
                                propertyStatus: ["Disponible"],
                                propertyType: element.kind,
                                published: element.user.dateRegistration,
                                ratingsCount: 1,
                                ratingsValue: element.environmentalAverage,
                                street: [element.address.street],
                                videos: [],
                                views: 322,
                                yearBuilt: 2007,
                                zipCode: element.address.postalCode,
              }
              this.properties.push(values);
            });
        })
       // this.properties = result.data;  
      } 
      this.pagination = result.pagination;
      this.message = null;

      if(this.properties.length == this.pagination.total){
        this.settings.loadMore.complete = true;
        this.settings.loadMore.result = this.properties.length;
      }
      else{
        this.settings.loadMore.complete = false;
      }

      if(this.settings.header == 'map'){
        this.locations.length = 0;
        this.properties.forEach(p => {
          let loc = new Location(p.id, p.location.lat, p.location.lng);
          this.locations.push(loc);
        });
        this.locations = [...this.locations];
      } 
     
    })
  }

  public resetLoadMore(){
    this.settings.loadMore.complete = false;
    this.settings.loadMore.start = false;
    this.settings.loadMore.page = 1;
    this.pagination = new Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
  }

  public filterData(data){
    return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
  }

  public searchClicked(){ 
    this.properties.length = 0;
    this.getProperties(); 
  }
  public searchChanged(event){    
    event.valueChanges.subscribe(() => {
      this.resetLoadMore();
      this.searchFields = event.value;
      setTimeout(() => {      
        this.removedSearchField = null;
      });
      if(!this.settings.searchOnBtnClick){     
        this.properties.length = 0;  
      }            
    }); 
    event.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => { 
      if(!this.settings.searchOnBtnClick){     
        this.getProperties(); 
      }
    });       
  } 
  public removeSearchField(field){ 
    this.message = null;   
    this.removedSearchField = field; 
  } 
 


  public changeCount(count){
    this.count = count;
    this.resetLoadMore();   
    this.properties.length = 0;
    this.getProperties();

  }
  public changeSorting(sort){    
    this.sort = sort;
    this.resetLoadMore(); 
    this.properties.length = 0;
    this.getProperties();
  }
  public changeViewType(obj){ 
    this.viewType = obj.viewType;
    this.viewCol = obj.viewCol; 
  }


  public getFeaturedProperties(){
    this.appService.getFeaturedProperties().subscribe(properties=>{
      this.featuredProperties = properties;
    })
  } 

}
