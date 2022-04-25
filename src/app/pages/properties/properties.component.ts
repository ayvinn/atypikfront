import { Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Settings, AppSettings } from '../../app.settings';
import { AppService } from '../../app.service';
import { Property, Pagination } from '../../app.models';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DevicesService } from 'src/app/services/devices.service';
import { AccommodationsService } from 'src/app/services/accommodations.service';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };
  
  @Input() variant: number = 1;
  @Input() vertical: boolean = true;
  public properties: any[] = [];
  public viewType: string = 'grid';
  public viewCol: number = 33.3;
  public variable: string = "La maison est l'endroit d'où l'on part...  –T.S. Eliot";
  public count: number = 12;
  public datestart = new Date();
  public dateend = new Date();
  public feature = [];
  public datestring1 = '';
  public datestring2 = '';
  public sort: string;
  public searchFields: any;
  public removedSearchField: string;
  public pagination: Pagination = new Pagination(1, this.count, null, 2, 0, 0);
  public message: string;
  public watcher: Subscription;
  public form: FormGroup;
  public propertyTypes = [];
  public propertyStatuses = [];
  public cities = [];
  public neighborhoods = [];
  public streets = [];
  public features = [];


  public settings: Settings
  constructor(public appSettings: AppSettings,
    public appService: AppService,
    public mediaObserver: MediaObserver, public accomodationservice: AccommodationsService,
    @Inject(PLATFORM_ID) private platformId: Object, public fb: FormBuilder, public devicesservice: DevicesService) {
    this.settings = this.appSettings.settings;
    this.watcher = mediaObserver.asObservable()
      .pipe(filter((changes: MediaChange[]) => changes.length > 0), map((changes: MediaChange[]) => changes[0]))
      .subscribe((change: MediaChange) => {
        if (change.mqAlias == 'xs') {
          this.sidenavOpen = false;
          this.viewCol = 100;
        }
        else if (change.mqAlias == 'sm') {
          this.sidenavOpen = false;
          this.viewCol = 50;
        }
        else if (change.mqAlias == 'md') {
          this.viewCol = 50;
          this.sidenavOpen = true;
        }
        else {
          this.viewCol = 33.3;
          this.sidenavOpen = true;
        }
      });

  }
  onChange(event) {
    // this.feature = <any>this.submitForm.get('additional.features').value as any;

    if (event.checked) {
      this.feature.push( event.source.value   )
    } else {
      const i = this.feature.findIndex(x => x.value === event.source.value);
      this.feature.splice(i);
    }
  }
  

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    console.log(dateRangeStart.value);
    console.log(dateRangeEnd.value);

    this.datestart = new Date(dateRangeStart.value);
    console.log(this.datestart.getFullYear() + '-' + this.datestart.getMonth() + '-' + this.datestart.getDay())
    this.datestring1 = this.datestart.getFullYear() + '-' + this.datestart.getMonth() + '-' + this.datestart.getDay();
    this.dateend = new Date(dateRangeEnd.value);
    this.datestring2 = this.dateend.getFullYear() + '-' + this.dateend.getMonth() + '-' + this.dateend.getDay();

  }
  public async loaddata() {
    const data = await this.devicesservice.getDevices().toPromise();
    this.features = data;
  }

  async ngOnInit() {
    this.getProperties();
    await this.loaddata();
    this.variable = "La maison est l'endroit d'où l'on part...  –T.S. Eliot";
    this.propertyTypes = this.appService.getPropertyTypes();
    this.propertyStatuses = this.appService.getPropertyStatuses();
    this.cities = this.appService.getCities();
    this.neighborhoods = this.appService.getNeighborhoods();
    this.streets = this.appService.getStreets();
    this.form = this.fb.group({
      propertyType: null,
      propertyStatus: null,
      price: this.fb.group({
        from: null,
        to: null
      }),
      city: null,
      zipCode: null,
      neighborhood: null,
      street: null,
      bedrooms: this.fb.group({
        from: null,
        to: null
      }),
      bathrooms: this.fb.group({
        from: null,
        to: null
      }),
      garages: this.fb.group({
        from: null,
        to: null
      }),
      area: this.fb.group({
        from: null,
        to: null
      }),
      yearBuilt: this.fb.group({
        from: null,
        to: null
      }),
      features: this.buildFeatures(),
      datedepart:null,
      datearrive:null
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
  vider(){
    this.form.reset();
    this.feature = [];
    this.ngOnInit();
   }
  search() {
    //console.log('get properties by : ', this.searchFields);  
    this.properties = [];
    this.appService.getProperties().subscribe(data => {
      let result = this.filterData(data);
      const values = {
        page: 0, dateArrival: this.datestring1,
        dateDeparture: this.datestring2,
        travelers: this.form.get('zipCode').value, city: this.form.get('city').value,
        size:this.form.value.propertyType,kind:this.form.get('propertyStatus').value,
        devices:this.feature,beds:this.form.get('garages.from').value,bedrooms:this.form.get('bedrooms.from').value,
        bathrooms:this.form.get('bathrooms.from').value,priceMin:this.form.get('price.from').value,priceMax:this.form.get('price.to').value
      };
      console.log(values);
      this.accomodationservice.getAccommodations(values).subscribe(res => {
        if (res['accommodations'].length == 0) {
          console.log('aucun');
          this.properties.length = 0;
          this.pagination = new Pagination(1, this.count, null, 2, 0, 0);
          this.message = 'Aucun resultat trouvé';
          return false;
        }
        console.log(res);
        res['accommodations'].forEach(element => {
          console.log(element.title);
          var photos = [];
          element.photos.forEach(photo => {
            photos.push({ small: photo.name, big: photo.name, medium: photo.name });
          });
          const values = {
            title: element.title, bathrooms: element.bathrooms, bedrooms: element.bedrooms, city: element.address.city,
            additionalFeatures: [],
            area: { value: element.travelers, unit: "voyageur" },
            desc: element.description,
            featured: false,
            features: ["Climatisation", "Barbeque", "Séchoir", "Micro-ondes", "Réfrigérateur", "Cheminée", "Piscine"],
            formattedAddress: element.address.street + ', ' + element.address.city + ', ' + element.address.postalCode,
            gallery: photos,
            garages: element.beds,
            id: element.id,
            lastUpdate: "2019-05-20 14:20:00",
            location: { lat: 40.84915, lng: -73.9351 },
            neighborhood: ["Astoria", "Midtown"],
            plans: [{ name: "First floor" }, { name: "Second floor" }],
            priceDollar: { sale: element.price, rent: null },
            priceEuro: { sale: element.price, rent: null },
            propertyStatus: ['Diponible'],
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

      this.pagination = result.pagination;
      this.message = null;


    })

  }

  public getProperties() {
    //console.log('get properties by : ', this.searchFields);  
    this.appService.getProperties().subscribe(data => {
      let result = this.filterData(data);
      if (result.data.length == 0) {
        this.properties.length = 0;
        this.pagination = new Pagination(1, this.count, null, 2, 0, 0);
        this.message = 'Aucun resultat trouvé';
        return false;
      }
      else {
        this.accomodationservice.getAccommodations({ page: 0 }).subscribe(res => {
          console.log(res);
          res['accommodations'].forEach(element => {
            console.log(element.title);
            var photos = [];
            element.photos.forEach(photo => {
              photos.push({ small: photo.name, big: photo.name, medium: photo.name });
            });
            const values = {
              title: element.title, bathrooms: element.bathrooms, bedrooms: element.bedrooms, city: element.address.city,
              additionalFeatures: [],
              area: { value: element.travelers, unit: "voyageur" },
              desc: element.description,
              featured: false,
              features: ["Climatisation", "Barbeque", "Séchoir", "Micro-ondes", "Réfrigérateur", "Cheminée", "Piscine"],
              formattedAddress: element.address.street + ', ' + element.address.city + ', ' + element.address.postalCode,
              gallery: photos,
              garages: element.beds,
              id: element.id,
              lastUpdate: "2019-05-20 14:20:00",
              location: { lat: 40.84915, lng: -73.9351 },
              neighborhood: ["Astoria", "Midtown"],
              plans: [{ name: "First floor" }, { name: "Second floor" }],
              priceDollar: { sale: element.price, rent: null },
              priceEuro: { sale: element.price, rent: null },
              propertyStatus: ['Diponible'],
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
    })
  }

  public resetPagination() {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }
    this.pagination = new Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
  }
  public buildFeatures() {

    const arr = this.features.map(feature => {

      return this.fb.group({
        id: feature.id,
        name: feature.name,
      });
    })
    return this.fb.array(arr);
  }

  public filterData(data) {
    return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
  }

  public searchClicked() {
    this.properties.length = 0;
    this.getProperties();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
  public searchChanged(event) {
    event.valueChanges.subscribe(() => {
      this.resetPagination();
      this.searchFields = event.value;
      setTimeout(() => {
        this.removedSearchField = null;
      });
      if (!this.settings.searchOnBtnClick) {
        this.properties.length = 0;
      }
    });
    event.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => {
      if (!this.settings.searchOnBtnClick) {
        this.getProperties();
      }
    });
  }
  public removeSearchField(field) {
    this.message = null;
    this.removedSearchField = field;
  }


  public changeCount(count) {
    this.count = count;
    this.properties.length = 0;
    this.resetPagination();
    this.getProperties();
  }
  public changeSorting(sort) {
    this.sort = sort;
    this.properties.length = 0;
    this.getProperties();
  }
  public changeViewType(obj) {
    this.viewType = obj.viewType;
    this.viewCol = obj.viewCol;
  }


  public onPageChange(e) {
    this.pagination.page = e.pageIndex + 1;
    this.getProperties();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

}