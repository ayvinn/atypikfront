"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 20455:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home/featured-properties/featured-properties.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedPropertiesComponent": () => (/* binding */ FeaturedPropertiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_featured_properties_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./featured-properties.component.html */ 66390);
/* harmony import */ var _featured_properties_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featured-properties.component.scss */ 45386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let FeaturedPropertiesComponent = class FeaturedPropertiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeaturedPropertiesComponent.ctorParameters = () => [];
FeaturedPropertiesComponent.propDecorators = {
    featuredProperties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['properties',] }]
};
FeaturedPropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-featured-properties',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_featured_properties_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_featured_properties_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeaturedPropertiesComponent);



/***/ }),

/***/ 43049:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 55353);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 55474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 18036);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 38198);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.models */ 11347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 31569);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ 55224);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 41082);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 31607);
/* harmony import */ var src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/accommodations.service */ 45854);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);












let HomeComponent = class HomeComponent {
    constructor(appSettings, fb, appService, mediaObserver, accomodationservice) {
        this.appSettings = appSettings;
        this.fb = fb;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.accomodationservice = accomodationservice;
        this.activeMediaQuery = '';
        this.vertical = false;
        this.slides = [];
        this.days = 0;
        this.datestart = new Date();
        this.dateend = new Date();
        this.test = "dfsdfsdfsdf";
        this.properties = [];
        this.viewType = 'grid';
        this.viewCol = 25;
        this.count = 8;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, 8, null, 2, 0, 0);
        this.featuredProperties = [];
        this.locations = [];
        this.datestring1 = '';
        this.datestring2 = '';
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((changes) => changes.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((changes) => changes[0]))
            .subscribe((change) => {
            // console.log(change)
            if (change.mqAlias == 'xs') {
                this.viewCol = 100;
            }
            else if (change.mqAlias == 'sm') {
                this.viewCol = 50;
            }
            else if (change.mqAlias == 'md') {
                this.viewCol = 33.3;
            }
            else {
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
        this.contactForm = this.fb.group({
            name: [''],
            email: [''],
            lieu: [''],
            message: ['']
        });
    }
    ngDoCheck() {
        if (this.settings.loadMore.load) {
            this.settings.loadMore.load = false;
            this.getProperties();
        }
    }
    ngOnDestroy() {
        this.resetLoadMore();
        this.watcher.unsubscribe();
    }
    getSlides() {
        this.appService.getHomeCarouselSlides().subscribe(res => {
            this.slides = res;
        });
    }
    getFotoFondo() {
        return this.fondovalor.nativeElement.value;
    }
    getFotoFondo2() {
        return this.fondovalor2.nativeElement.value;
    }
    getLocations() {
        this.appService.getLocations().subscribe(res => {
            this.locations = res;
        });
    }
    getProperties() {
        //console.log('get properties by : ', this.searchFields);  
        this.appService.getProperties().subscribe(data => {
            /*if(this.properties && this.properties.length > 0){
              this.settings.loadMore.page++;
              this.pagination.page = this.settings.loadMore.page;
            }*/
            let result = this.filterData(data);
            if (result.data.length == 0) {
                this.properties.length = 0;
                this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
                this.message = 'Aucun resultat trouvé';
                return false;
            }
            if (this.properties && this.properties.length > 0) {
                this.properties = this.properties.concat(result.data);
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
                        };
                        this.properties.push(values);
                    });
                });
                // this.properties = result.data;  
            }
            this.pagination = result.pagination;
            this.message = null;
            if (this.properties.length == this.pagination.total) {
                this.settings.loadMore.complete = true;
                this.settings.loadMore.result = this.properties.length;
            }
            else {
                this.settings.loadMore.complete = false;
            }
            if (this.settings.header == 'map') {
                this.locations.length = 0;
                this.properties.forEach(p => {
                    let loc = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Location(p.id, p.location.lat, p.location.lng);
                    this.locations.push(loc);
                });
                this.locations = [...this.locations];
            }
        });
    }
    vider() {
        this.contactForm.reset();
        this.search();
    }
    Count() {
        return this.properties.length;
    }
    search() {
        //console.log('get properties by : ', this.searchFields);  
        this.properties = [];
        this.appService.getProperties().subscribe(data => {
            /*if(this.properties && this.properties.length > 0){
              this.settings.loadMore.page++;
              this.pagination.page = this.settings.loadMore.page;
            }*/
            let result = this.filterData(data);
            this.accomodationservice.getAccommodations({ page: 0, dateArrival: this.datestring1, dateDeparture: this.datestring2, travelers: this.getFotoFondo(), city: this.getFotoFondo2() }).subscribe(res => {
                if (res['accommodations'].length == 0) {
                    console.log('aucun');
                    this.properties.length = 0;
                    this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
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
                    };
                    this.properties.push(values);
                });
            });
            // this.properties = result.data;  
            this.pagination = result.pagination;
            this.message = null;
            if (this.properties.length == this.pagination.total) {
                this.settings.loadMore.complete = true;
                this.settings.loadMore.result = this.properties.length;
            }
            else {
                this.settings.loadMore.complete = false;
            }
            if (this.settings.header == 'map') {
                this.locations.length = 0;
                this.properties.forEach(p => {
                    let loc = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Location(p.id, p.location.lat, p.location.lng);
                    this.locations.push(loc);
                });
                this.locations = [...this.locations];
            }
        });
    }
    dateRangeChange(dateRangeStart, dateRangeEnd) {
        console.log(dateRangeStart.value);
        console.log(dateRangeEnd.value);
        this.datestart = new Date(dateRangeStart.value);
        console.log(this.datestart.getFullYear() + '-' + this.datestart.getMonth() + '-' + this.datestart.getDay());
        this.datestring1 = this.datestart.getFullYear() + '-' + this.datestart.getMonth() + '-' + this.datestart.getDay();
        this.dateend = new Date(dateRangeEnd.value);
        this.datestring2 = this.dateend.getFullYear() + '-' + this.dateend.getMonth() + '-' + this.dateend.getDay();
    }
    resetLoadMore() {
        this.settings.loadMore.complete = false;
        this.settings.loadMore.start = false;
        this.settings.loadMore.page = 1;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    filterData(data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    }
    searchClicked() {
        this.properties.length = 0;
        this.getProperties();
    }
    searchChanged(event) {
        event.valueChanges.subscribe(() => {
            this.resetLoadMore();
            this.searchFields = event.value;
            setTimeout(() => {
                this.removedSearchField = null;
            });
            if (!this.settings.searchOnBtnClick) {
                this.properties.length = 0;
            }
        });
        event.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(() => {
            if (!this.settings.searchOnBtnClick) {
                this.getProperties();
            }
        });
    }
    removeSearchField(field) {
        this.message = null;
        this.removedSearchField = field;
    }
    changeCount(count) {
        this.count = count;
        this.resetLoadMore();
        this.properties.length = 0;
        this.getProperties();
    }
    changeSorting(sort) {
        this.sort = sort;
        this.resetLoadMore();
        this.properties.length = 0;
        this.getProperties();
    }
    changeViewType(obj) {
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    }
    getFeaturedProperties() {
        this.appService.getFeaturedProperties().subscribe(properties => {
            this.featuredProperties = properties;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.MediaObserver },
    { type: src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_5__.AccommodationsService }
];
HomeComponent.propDecorators = {
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    fondovalor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['fondovalor',] }],
    fondovalor2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['fondovalor2',] }]
};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 35129:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 43049);
/* harmony import */ var _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hot-offer-today/hot-offer-today.component */ 27461);
/* harmony import */ var _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured-properties/featured-properties.component */ 20455);








const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, pathMatch: 'full' }
];
let HomeModule = class HomeModule {
};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
            _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_2__.HotOfferTodayComponent,
            _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_3__.FeaturedPropertiesComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], HomeModule);



/***/ }),

/***/ 27461:
/*!*************************************************************************!*\
  !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotOfferTodayComponent": () => (/* binding */ HotOfferTodayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_hot_offer_today_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./hot-offer-today.component.html */ 49824);
/* harmony import */ var _hot_offer_today_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hot-offer-today.component.scss */ 1399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);





let HotOfferTodayComponent = class HotOfferTodayComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        this.appService.getPropertyById(this.propertyId).subscribe(property => {
            this.property = property;
        });
    }
};
HotOfferTodayComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
HotOfferTodayComponent.propDecorators = {
    propertyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['propertyId',] }]
};
HotOfferTodayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-hot-offer-today',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_hot_offer_today_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_hot_offer_today_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HotOfferTodayComponent);



/***/ }),

/***/ 66390:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/featured-properties/featured-properties.component.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<div class=\"section mt-3\">\r\n  <div class=\"px-3\">\r\n      <div class=\"theme-container\">\r\n          <h1 class=\"section-title\">Featured properties</h1>\r\n\r\n          <app-properties-carousel [properties]=\"featuredProperties\"></app-properties-carousel>\r\n              \r\n      </div>\r\n    \r\n  </div>   \r\n</div> -->");

/***/ }),

/***/ 55353:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-image *ngIf=\"settings.header == 'image'\" [backgroundImage]=\"'assets/images/others/homepage.jpg'\"\r\n    [bgImageAnimate]=\"true\" [contentOffsetToTop]=\"true\" [title]=\"'Find your house key'\"\r\n    [desc]=\"'Leading Real Estate Company'\" [isHomePage]=\"true\" [fullscreen]=\"false\">\r\n</app-header-image>\r\n\r\n\r\n<app-header-carousel *ngIf=\"settings.header == 'carousel'\" [slides]=\"slides\" [contentOffsetToTop]=\"true\"\r\n    [fullscreen]=\"false\">\r\n</app-header-carousel>\r\n\r\n<app-header-map *ngIf=\"settings.header == 'map'\" [locations]=\"locations\" [contentOffsetToTop]=\"true\"\r\n    [fullscreen]=\"false\">\r\n</app-header-map>\r\n\r\n<app-header-video *ngIf=\"settings.header == 'video'\"\r\n    [backgroundVideo]=\"'https://buziphone.com/wp-content/uploads/2022/05/Decouvrez-nos-hebergements-insolites-Roulotte-yourtes-Chalets-insolites_Trim.mp4'\" [contentOffsetToTop]=\"true\"\r\n    [title]=\"'Découvrez nos hébergements Atypique'\" [desc]=\"'Quelle sera votre prochaine destination ?'\"\r\n\r\n    [isHomePage]=\"true\" [fullscreen]=\"true\">\r\n</app-header-video>\r\n\r\n<div class=\"px-3\">\r\n    <div class=\"theme-container\">\r\n\r\n        <mat-card class=\"main-content-header\">\r\n\r\n            <form  [formGroup]=\"contactForm\" class=\"search-wrapper\">\r\n                <div [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\"> \r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n                <mat-form-field appearance=\"outline\" >\r\n                    <mat-label>Lieu</mat-label>\r\n                    <input matInput placeholder=\"Enrer la ville\" autocomplete=\"off\" #fondovalor2\r\n                        formControlName=\"lieu\" >\r\n                </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n                <mat-form-field appearance=\"outline\" >\r\n                    <mat-label>Enter la date </mat-label>\r\n                    <mat-date-range-input [rangePicker]=\"picker\">\r\n                        <input matStartDate placeholder=\"Start date\" #dateRangeStart formControlName=\"email\">\r\n                        <input matEndDate placeholder=\"End date\" #dateRangeEnd formControlName=\"message\"\r\n                            (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\">\r\n                    </mat-date-range-input>\r\n                    <mat-hint>\r\n                        MM/DD/YYYY – MM/DD/YYYY</mat-hint>\r\n                    <mat-datepicker-toggle style=\"margin-left: 40%;\" matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-date-range-picker #picker></mat-date-range-picker>\r\n                </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n                <mat-form-field appearance=\"outline\" >\r\n                    <mat-label>Nombre de personnes</mat-label>\r\n                    <input matInput placeholder=\"Enrer le Nombre des personnes \" autocomplete=\"off\" #fondovalor\r\n                        formControlName=\"name\" onlyNumber>\r\n                </mat-form-field>\r\n                </div>\r\n\r\n                </div>\r\n            </form>\r\n                \r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"p-2\">       \r\n                <button mat-raised-button color=\"warn\" class=\"uppercase mx-1\" (click)=\"search()\" >Rechercher</button>\r\n                <button mat-raised-button color=\"secondary\" class=\"uppercase mx-1\" (click)=\"vider()\">vider</button>\r\n                <button *ngIf=\"!vertical\" mat-raised-button color=\"primary\" class=\"uppercase mx-1\" [routerLink]=\"['/properties']\" (click)=\"showMore = !showMore\">\r\n                   Avancer\r\n                  </button>      \r\n              </div>\r\n\r\n        </mat-card>\r\n\r\n    </div>\r\n\r\n    <div class=\"theme-container\">\r\n\r\n        <div fxLayout=\"row wrap\" class=\"properties-wrapper\">\r\n\r\n            <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\">\r\n                <mat-chip-list >\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{ Count() }} Trouvées\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n                <app-properties-search-results-filters [searchFields]=\"searchFields\"\r\n                    (onRemoveSearchField)=\"removeSearchField($event)\">\r\n                </app-properties-search-results-filters>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"p-2\">\r\n                <app-properties-toolbar [isHomePage]=\"true\" (onChangeCount)=\"changeCount($event)\"\r\n                    (onChangeSorting)=\"changeSorting($event)\" (onChangeViewType)=\"changeViewType($event)\">\r\n                </app-properties-toolbar>\r\n            </div>\r\n            <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\" class=\"item\">\r\n                <app-property-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\">\r\n                </app-property-item>\r\n            </div>\r\n            <div *ngIf=\"properties?.length\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2 mt-2\">\r\n                <app-load-more [step]=\"2\"></app-load-more>\r\n            </div>\r\n\r\n            <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" [style.min-height.px]=\"200\">\r\n                <mat-spinner *ngIf=\"!message\"></mat-spinner>\r\n                <mat-chip-list *ngIf=\"message\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{message}}\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<app-mission></app-mission>\r\n\r\n<app-our-services></app-our-services>\r\n\r\n<app-testimonials></app-testimonials>\r\n\r\n<app-hot-offer-today [propertyId]=\"4\"></app-hot-offer-today>\r\n\r\n<app-featured-properties [properties]=\"featuredProperties\"></app-featured-properties>\r\n\r\n<app-our-agents></app-our-agents>\r\n\r\n<app-clients></app-clients>\r\n\r\n<app-get-in-touch></app-get-in-touch>");

/***/ }),

/***/ 49824:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/hot-offer-today/hot-offer-today.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<div class=\"section mt-3\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n            <h1 class=\"section-title\">Offre spéciale today</h1>\r\n\r\n            <app-property-item *ngIf=\"property\" [property]=\"property\" [viewType]=\"'list'\"></app-property-item> \r\n                \r\n        </div>\r\n    \r\n    </div>   \r\n</div>-->");

/***/ }),

/***/ 45386:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/home/featured-properties/featured-properties.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlZC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 55474:
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1399:
/*!***************************************************************************!*\
  !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Qtb2ZmZXItdG9kYXkuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map