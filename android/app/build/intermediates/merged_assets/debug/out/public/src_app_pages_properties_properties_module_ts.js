"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_properties_properties_module_ts"],{

/***/ 49621:
/*!*************************************************************************!*\
  !*** ./src/app/pages/properties/contact-host/contact-host.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactHostComponent": () => (/* binding */ ContactHostComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_host_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact-host.component.html */ 89934);
/* harmony import */ var _contact_host_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-host.component.scss */ 12502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_nearby_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/nearby.service */ 55995);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ 43493);









let ContactHostComponent = class ContactHostComponent {
    constructor(data, formBuilder, snearbyservice, activatedRoute, UserService, dialogRef) {
        this.data = data;
        this.formBuilder = formBuilder;
        this.snearbyservice = snearbyservice;
        this.activatedRoute = activatedRoute;
        this.UserService = UserService;
        this.dialogRef = dialogRef;
        this.lat = 48.844101;
        this.lng = 2.431290;
        this.zoom = 12;
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onContactFormSubmit(values) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.contactForm.valid) {
                this.sub = this.activatedRoute.params.subscribe(params => {
                    this.propertyId = params['id'];
                });
                var data = yield this.UserService.getUsersprofile().toPromise();
                const values = { description: this.contactForm.value.message, name: data['firstName'] + " " + data['lastName'], price: 0, url: "", distance: 0, address: { addressComplement: "", city: new Date(), cityCode: "", postalCode: "", street: "", x: null, y: null }, photos: [], accommodationId: parseInt(this.data.accommodationId) };
                console.log(values);
                this.snearbyservice.postNearby(values).subscribe();
                this.onNoClick();
            }
        });
    }
};
ContactHostComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA,] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_nearby_service__WEBPACK_IMPORTED_MODULE_2__.NearbyService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef }
];
ContactHostComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-contact-host',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_host_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_host_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactHostComponent);



/***/ }),

/***/ 23473:
/*!***************************************************************!*\
  !*** ./src/app/pages/properties/payment/payment.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./payment.component.html */ 23729);
/* harmony import */ var _payment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.component.scss */ 37530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reservations.service */ 79719);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);











let PaymentComponent = class PaymentComponent {
    constructor(data, dialogRef, reservationservice, formBuilder, appService, snackBar) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.reservationservice = reservationservice;
        this.formBuilder = formBuilder;
        this.appService = appService;
        this.snackBar = snackBar;
        this.propertyStatuses = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            creditCard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            expirationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cvc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        this.propertyStatuses = this.appService.getPropertyStatuses();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        var dateconcat = '01/' + this.form.value.expirationDate;
        var exp = (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatDate)(new Date(dateconcat), 'yyyy/dd/MM', 'en');
        var last = new Date(exp);
        const values = { accommodationId: this.data.accommodationId, cardNumber: this.form.value.creditCard, cvc: this.form.value.cvc,
            dateArrival: this.data.datestart, dateDeparture: this.data.dateend, expiration: last, travelers: this.data.numberprs,
            month: last.getMonth() + 1, year: last.getFullYear()
        };
        console.log('Ajouter :', values);
        var start = [];
        start.push({ start: this.data.datestart, end: this.data.dateend });
        this.reservationservice.postReservations(values).subscribe(res => {
            console.log('Ajouter : ', res);
            if (res) {
                this.snackBar.open("Success la reservation est en attente d'approvement !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
            }
            else
                this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            this.onNoClick();
        }, err => {
            console.log(err);
        });
    }
};
PaymentComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA,] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef },
    { type: src_app_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__.ReservationsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar }
];
PaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-payment',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_payment_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentComponent);

function MD_DIALOG_DATA(MD_DIALOG_DATA) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 72443:
/*!**********************************************************!*\
  !*** ./src/app/pages/properties/properties.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesComponent": () => (/* binding */ PropertiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./properties.component.html */ 83323);
/* harmony import */ var _properties_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component.scss */ 59636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 55224);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 31569);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 41082);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 31607);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 18036);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 38198);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.models */ 11347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/devices.service */ 33965);
/* harmony import */ var src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/accommodations.service */ 45854);














let PropertiesComponent = class PropertiesComponent {
    constructor(appSettings, appService, mediaObserver, accomodationservice, platformId, fb, devicesservice) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.accomodationservice = accomodationservice;
        this.platformId = platformId;
        this.fb = fb;
        this.devicesservice = devicesservice;
        this.sidenavOpen = true;
        this.psConfig = {
            wheelPropagation: true
        };
        this.variant = 1;
        this.vertical = true;
        this.properties = [];
        this.viewType = 'grid';
        this.viewCol = 33.3;
        this.variable = "La maison est l'endroit d'où l'on part...  –T.S. Eliot";
        this.count = 12;
        this.datestart = new Date();
        this.dateend = new Date();
        this.feature = [];
        this.datestring1 = '';
        this.datestring2 = '';
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.features = [];
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((changes) => changes.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((changes) => changes[0]))
            .subscribe((change) => {
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
            this.feature.push(event.source.value);
        }
        else {
            const i = this.feature.findIndex(x => x.value === event.source.value);
            this.feature.splice(i);
        }
    }
    Count() {
        return this.properties.length;
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
    loaddata() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.devicesservice.getDevices().toPromise();
            this.features = data;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.getProperties();
            yield this.loaddata();
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
                datedepart: null,
                datearrive: null
            });
        });
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    vider() {
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
                size: this.form.value.propertyType, kind: this.form.get('propertyStatus').value,
                devices: this.feature, beds: this.form.get('garages.from').value, bedrooms: this.form.get('bedrooms.from').value,
                bathrooms: this.form.get('bathrooms.from').value, priceMin: this.form.get('price.from').value, priceMax: this.form.get('price.to').value
            };
            console.log(values);
            this.accomodationservice.getAccommodations(values).subscribe(res => {
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
        });
    }
    getProperties() {
        //console.log('get properties by : ', this.searchFields);  
        this.appService.getProperties().subscribe(data => {
            let result = this.filterData(data);
            if (result.data.length == 0) {
                this.properties.length = 0;
                this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
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
                        };
                        this.properties.push(values);
                    });
                });
                // this.properties = result.data;  
            }
            this.pagination = result.pagination;
            this.message = null;
        });
    }
    resetPagination() {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
        }
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    buildFeatures() {
        const arr = this.features.map(feature => {
            return this.fb.group({
                id: feature.id,
                name: feature.name,
            });
        });
        return this.fb.array(arr);
    }
    filterData(data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    }
    searchClicked() {
        this.properties.length = 0;
        this.getProperties();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
    searchChanged(event) {
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
        event.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)()).subscribe(() => {
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
        this.properties.length = 0;
        this.resetPagination();
        this.getProperties();
    }
    changeSorting(sort) {
        this.sort = sort;
        this.properties.length = 0;
        this.getProperties();
    }
    changeViewType(obj) {
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    }
    onPageChange(e) {
        this.pagination.page = e.pageIndex + 1;
        this.getProperties();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
};
PropertiesComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.MediaObserver },
    { type: src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_6__.AccommodationsService },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_14__.PLATFORM_ID,] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_5__.DevicesService }
];
PropertiesComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['sidenav',] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator,] }],
    variant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }]
};
PropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-properties',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_properties_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertiesComponent);



/***/ }),

/***/ 23130:
/*!*******************************************************!*\
  !*** ./src/app/pages/properties/properties.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "PropertiesModule": () => (/* binding */ PropertiesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component */ 72443);
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property/property.component */ 46344);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment/payment.component */ 23473);
/* harmony import */ var angular_cc_library__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-cc-library */ 57042);
/* harmony import */ var _contact_host_contact_host_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-host/contact-host.component */ 49621);









//import { MAT_DATE_LOCALE } from '@angular/material/core';


const routes = [
    { path: '', component: _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent, pathMatch: 'full' },
    { path: ':id', component: _property_property_component__WEBPACK_IMPORTED_MODULE_2__.PropertyComponent }
];
let PropertiesModule = class PropertiesModule {
};
PropertiesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent,
            _property_property_component__WEBPACK_IMPORTED_MODULE_2__.PropertyComponent, _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__.PaymentComponent, _contact_host_contact_host_component__WEBPACK_IMPORTED_MODULE_4__.ContactHostComponent,
        ],
        exports: [
            _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            _agm_core__WEBPACK_IMPORTED_MODULE_9__.AgmCoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            angular_cc_library__WEBPACK_IMPORTED_MODULE_10__.CreditCardDirectivesModule
        ],
        providers: [
        // { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
        ],
    })
], PropertiesModule);



/***/ }),

/***/ 46344:
/*!*****************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyComponent": () => (/* binding */ PropertyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_property_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./property.component.html */ 16152);
/* harmony import */ var _property_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.component.scss */ 69491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-swiper-wrapper */ 60692);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 18036);
/* harmony import */ var src_app_shared_compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/compare-overview/compare-overview.component */ 23023);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-embed-video */ 67702);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 49224);
/* harmony import */ var src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/accommodations.service */ 45854);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../payment/payment.component */ 23473);
/* harmony import */ var _contact_host_contact_host_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contact-host/contact-host.component */ 49621);
















let PropertyComponent = class PropertyComponent {
    constructor(appSettings, appService, activatedRoute, embedService, fb, dialog, accomodationservice) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.embedService = embedService;
        this.fb = fb;
        this.dialog = dialog;
        this.accomodationservice = accomodationservice;
        this.psConfig = {
            wheelPropagation: true
        };
        this.sidenavOpen = true;
        this.config = {};
        this.config2 = {};
        this.todayDate = new Date();
        this.start = [];
        this.end = [];
        this.days = 0;
        this.name = '';
        this.total = 0;
        this.datestart = new Date();
        this.dateend = new Date();
        this.myFilter = (d) => {
            for (let index = 0; index < this.start.length; index++) {
                const start = this.start[index].start;
                const end = this.start[index].end;
                if (d >= start && d <= end)
                    return false;
            }
            return true;
        };
        this.settings = this.appSettings.settings;
    }
    dateRangeChange(dateRangeStart, dateRangeEnd) {
        console.log(dateRangeStart.value);
        console.log(dateRangeEnd.value);
        console.log(this.calculateDiff(dateRangeStart.value, dateRangeEnd.value));
        this.datestart = new Date(dateRangeStart.value);
        this.dateend = new Date(dateRangeEnd.value);
        this.days = this.calculateDiff(dateRangeStart.value, dateRangeEnd.value);
    }
    getdays() {
        return this.days;
    }
    gettva() {
        var a = this.days * this.data.price;
        a = a * 1.1;
        return a - (this.days * this.data.price);
    }
    gettotal() {
        this.total = this.days * this.data.price;
        return this.total + this.gettva();
    }
    openDialog() {
        console.log(this.getFotoFondo());
        const dialogRef = this.dialog.open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__.PaymentComponent, {
            width: '800px',
            data: {
                accommodationId: this.propertyId,
                datestart: this.datestart,
                dateend: this.dateend,
                numberprs: this.getFotoFondo()
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.libelle = result;
            this.ngOnInit();
        });
    }
    openDialog2() {
        console.log(this.getFotoFondo());
        const dialogRef = this.dialog.open(_contact_host_contact_host_component__WEBPACK_IMPORTED_MODULE_9__.ContactHostComponent, {
            width: '800px',
            data: {
                accommodationId: this.propertyId,
            }
        });
    }
    getFotoFondo() {
        return this.fondovalor.nativeElement.value;
    }
    calculateDiff(dateSent, dateback) {
        dateSent = new Date(dateSent);
        dateback = new Date(dateback);
        return Math.floor((Date.UTC(dateback.getFullYear(), dateback.getMonth(), dateback.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.sub = this.activatedRoute.params.subscribe(params => {
                this.getPropertyById(params['id']);
                this.propertyId = params['id'];
            });
            console.log(this.propertyId);
            const data2 = yield this.accomodationservice.getAccommodation(this.propertyId).toPromise();
            data2['unavailableSlots'].forEach(element => {
                this.start.push({ start: new Date(element.start), end: new Date(element.end) });
            });
            const data = yield this.accomodationservice.getAccommodation(this.propertyId).toPromise();
            this.data = data;
            console.log(this.data.price);
            this.getRelatedProperties();
            this.getFeaturedProperties();
            this.getAgent(1);
            if (window.innerWidth < 960) {
                this.sidenavOpen = false;
                if (this.sidenav) {
                    this.sidenav.close();
                }
            }
            ;
            this.mortgageForm = this.fb.group({
                principalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
                downPayment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
                interestRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
                period: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
            });
            this.contactForm = this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__.emailValidator])],
                phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
                message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
            });
        });
    }
    onKey(event) { this.name = event.target.value; }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    getPropertyById(id) {
        this.appService.getPropertyById(id).subscribe(data => {
            this.property = data;
            this.embedVideo = this.embedService.embed(this.property.videos[1].link);
            setTimeout(() => {
                this.config.observer = true;
                this.config2.observer = true;
                this.swipers.forEach(swiper => {
                    if (swiper) {
                        swiper.setIndex(0);
                    }
                });
            });
        });
    }
    ngAfterViewInit() {
        this.config = {
            observer: false,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            }
        };
        this.config2 = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: false,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                200: {
                    slidesPerView: 2
                },
                480: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 4
                }
            }
        };
    }
    onOpenedChange() {
        this.swipers.forEach(swiper => {
            if (swiper) {
                swiper.update();
            }
        });
    }
    selectImage(index) {
        this.swipers.forEach(swiper => {
            if (swiper['elementRef'].nativeElement.id == 'main-carousel') {
                swiper.setIndex(index);
            }
        });
    }
    onIndexChange(index) {
        this.swipers.forEach(swiper => {
            let elem = swiper['elementRef'].nativeElement;
            if (elem.id == 'small-carousel') {
                swiper.setIndex(index);
                for (let i = 0; i < elem.children[0].children.length; i++) {
                    const element = elem.children[0].children[i];
                    if (element.classList.contains('thumb-' + index)) {
                        element.classList.add('active-thumb');
                    }
                    else {
                        element.classList.remove('active-thumb');
                    }
                }
            }
        });
    }
    addToCompare() {
        this.appService.addToCompare(this.property, src_app_shared_compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__.CompareOverviewComponent, (this.settings.rtl) ? 'rtl' : 'ltr');
    }
    onCompare() {
        return this.appService.Data.compareList.filter(item => item.id == this.property.id)[0];
    }
    addToFavorites() {
        this.appService.addToFavorites(this.property, (this.settings.rtl) ? 'rtl' : 'ltr');
    }
    onFavorites() {
        return this.appService.Data.favorites.filter(item => item.id == this.property.id)[0];
    }
    getRelatedProperties() {
        this.appService.getRelatedProperties().subscribe(properties => {
            this.relatedProperties = properties;
        });
    }
    getFeaturedProperties() {
        this.appService.getFeaturedProperties().subscribe(properties => {
            this.featuredProperties = properties.slice(0, 3);
        });
    }
    getAgent(agentId = 1) {
        var ids = [1, 2, 3, 4, 5]; //agent ids 
        agentId = ids[Math.floor(Math.random() * ids.length)]; //random agent id
        this.agent = this.appService.getAgents().filter(agent => agent.id == agentId)[0];
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    }
    onMortgageFormSubmit(values) {
        if (this.mortgageForm.valid) {
            var principalAmount = values['principalAmount'];
            var down = values['downPayment'];
            var interest = values['interestRate'];
            var term = values['period'];
            this.monthlyPayment = this.calculateMortgage(principalAmount, down, interest / 100 / 12, term * 12).toFixed(2);
        }
    }
    calculateMortgage(principalAmount, downPayment, interestRate, period) {
        return ((principalAmount - downPayment) * interestRate) / (1 - Math.pow(1 + interestRate, -period));
    }
};
PropertyComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__.EmbedVideoService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog },
    { type: src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_7__.AccommodationsService }
];
PropertyComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['sidenav',] }],
    swipers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChildren, args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__.SwiperDirective,] }],
    fondovalor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['fondovalor',] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostListener, args: ['window:resize',] }]
};
PropertyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-property',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_property_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_property_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertyComponent);



/***/ }),

/***/ 89934:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/properties/contact-host/contact-host.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h3 class=\"mb-0\">Contacter l'hote</h3>\n<br>\n<form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\" fxLayout=\"row wrap\">\n\n    <div fxFlex=\"100\" class=\"px-1 mt-1\">\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Message</mat-label>\n            <textarea matInput placeholder=\"Message\" formControlName=\"message\" name=\"message\" required\n                rows=\"7\"></textarea>\n            <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Un message est requis</mat-error>\n        </mat-form-field>\n    </div>\n    <div fxFlex=\"100\">\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n            <button mat-raised-button color=\"primary\" style=\"background-color: grey;\" (click)=\"onNoClick()\"\n                fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                <mat-icon>cancel</mat-icon>\n                <span class=\"mx-1 uppercase\">Annuler</span>\n            </button>\n            <div class=\"w-100 py-2 text-center\">\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" style=\"float: right;\">Envoyer</button>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ 23729:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/properties/payment/payment.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-xl-12 order-xl-1\">\n    <div class=\"card bg-secondary shadow\">\n      <div class=\"card-header bg-white border-0\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-8\">\n            <h3 class=\"mb-0\">Payment</h3>\n          </div>\n          <br>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n            <div class=\"pl-lg-4\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Numéro de la carte de credit</mat-label>\n                            <input matInput placeholder=\" Enter le numéro de la carte de credit\" formControlName=\"creditCard\" autocomplete=\"cc-number\" ccNumber> \n                        </mat-form-field>\n                      </div>\n                      <div class=\"form-group\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Date d'éxpiration</mat-label>\n                            <input matInput id=\"cc-exp-date\" formControlName=\"expirationDate\" type=\"tel\" autocomplete=\"cc-exp\" ccExp>\n                        </mat-form-field>\n                      </div>\n                      <div class=\"form-group\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Cvc</mat-label>\n                            <input matInput id=\"cc-cvc\" formControlName=\"cvc\" type=\"tel\" autocomplete=\"off\" ccCvc>\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-12 text-right\">\n                        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n                        <button mat-raised-button color=\"primary\" style=\"background-color: grey;\" (click)=\"onNoClick()\" fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                            <mat-icon>cancel</mat-icon>\n                            <span class=\"mx-1 uppercase\">Annuler</span>  \n                          </button>\n                        <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"submit()\" fxLayout=\"row\"  fxLayoutAlign=\"center center\" type=\"button\">\n                            <span class=\"mx-1 uppercase\">Payer </span>                    \n                          </button>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n           </form>\n        </div>\n     </div>\n  </div>");

/***/ }),

/***/ 83323:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/properties/properties.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-image [backgroundImage]=\"'assets/images/carousel/slide-3.jpg'\" \r\n                  [bgImageAnimate]=\"false\" \r\n                  [contentOffsetToTop]=\"false\" \r\n                  [desc]=\"'Proprietés'\"\r\n                  [contentMinHeight]=\"200\">\r\n</app-header-image>\r\n \r\n<div class=\"px-3\"> \r\n    \r\n  <div class=\"theme-container\">  \r\n    <mat-sidenav-container class=\"all-properties mt-3\"> \r\n      <mat-sidenav #sidenav [autoFocus]=\"false\" [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"search-sidenav\">         \r\n        <mat-card [perfectScrollbar]=\"psConfig\"> \r\n          <button fxHide=\"false\" fxHide.gt-xs mat-icon-button (click)=\"sidenav.toggle()\">\r\n              <mat-icon color=\"accent\">close</mat-icon>\r\n          </button>\r\n        <!--  <app-properties-search \r\n              [variant]=\"settings.searchPanelVariant\"\r\n              [vertical]=\"true\"\r\n              [searchOnBtnClick]=\"settings.searchOnBtnClick\"              \r\n              [removedSearchField]=\"removedSearchField\" \r\n              (onSearchChange)=\"searchChanged($event)\"\r\n              (onSearchClick)=\"searchClicked()\">\r\n          </app-properties-search>-->\r\n          <form [formGroup]=\"form\" class=\"search-wrapper\" [ngClass]=\"'variant-'+variant\" (ngSubmit)=\"search()\" *ngIf=\"form\" >\r\n\r\n            <div [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\"> \r\n        \r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n                    <mat-form-field appearance=\"outline\" >\r\n                        <mat-label>Catégorie du bien</mat-label> \r\n                        <mat-select placeholder=\"Selectioner la catégorie\" formControlName=\"propertyType\"  multiple >\r\n                            <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType.id\" >\r\n                                {{propertyType.name}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n        \r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Type du bien</mat-label>\r\n                        <mat-select placeholder=\"Selectionner le type \" formControlName=\"propertyStatus\"  multiple >\r\n                            <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus.id\">\r\n                                {{propertyStatus.name}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>        \r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n                    <mat-form-field appearance=\"outline\" >\r\n                        <mat-label>Enter la date </mat-label>\r\n                        <mat-date-range-input [rangePicker]=\"picker\">\r\n                            <input matStartDate placeholder=\"Date d'arriver\" #dateRangeStart formControlName=\"datedepart\">\r\n                            <input matEndDate placeholder=\"Date de depart\" #dateRangeEnd formControlName=\"datearrive\"\r\n                                (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\">\r\n                        </mat-date-range-input>\r\n                        \r\n                        <mat-datepicker-toggle style=\"margin-left: 40%;\" matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-date-range-picker #picker></mat-date-range-picker>\r\n                    </mat-form-field>\r\n                    </div>\r\n\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"price\">\r\n        \r\n                    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                        <div fxFlex=\"45\">\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>{{(variant == 1) ? 'Budget Min' : 'Budget Min'}}</mat-label>\r\n                                <input matInput autocomplete=\"off\" placeholder=\"From\" formControlName=\"from\" type=\"text\" onlyNumber>                  \r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                            <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                        </div>\r\n                        <div fxFlex=\"45\">\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>{{(variant == 1) ? 'Budget Max' : 'Budget Max'}}</mat-label>\r\n                                <input matInput autocomplete=\"off\" placeholder=\"To\" formControlName=\"to\" type=\"text\" onlyNumber>                  \r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div> \r\n        \r\n                </div>          \r\n        \r\n                \r\n                <div  [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\" class=\"w-100\">\r\n        \r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Ville</mat-label>\r\n                            <mat-select placeholder=\"Selectionner une ville\" formControlName=\"city\" >\r\n                                <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">\r\n                                    {{city.name}}\r\n                                </mat-option>\r\n                            </mat-select> \r\n                        </mat-form-field>\r\n                    </div>\r\n        \r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Nombre de perssone</mat-label>\r\n                            <input matInput placeholder=\"exp. 2\" autocomplete=\"off\" formControlName=\"zipCode\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n        \r\n\r\n            \r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"bedrooms\">\r\n            \r\n                        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                            \r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>{{(variant == 1) ? 'Chambres' : 'Chambres'}}</mat-label>\r\n                                    <mat-select placeholder=\"Nombre de chambres\" formControlName=\"from\">\r\n                                        <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                            {{number}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                           \r\n                     \r\n                        </div> \r\n            \r\n                    </div> \r\n            \r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"bathrooms\">\r\n            \r\n                        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                            <div fxFlex=\"100\">\r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>{{(variant == 1) ? 'Douches' : 'Douches'}}</mat-label>\r\n                                    <mat-select placeholder=\"Nombre de Douches\" formControlName=\"from\">\r\n                                        <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                            {{number}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div> \r\n            \r\n                    </div> \r\n        \r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"garages\">\r\n            \r\n                        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                            <div fxFlex=\"100\">\r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>{{(variant == 1) ? 'Lits' : 'Lits'}}</mat-label>\r\n                                    <mat-select placeholder=\"Nombre de lits\" formControlName=\"from\">\r\n                                        <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                            {{number}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div> \r\n            \r\n                    </div> \r\n                   \r\n        \r\n                    <div fxFlex=\"100\" class=\"mb-2\"> \r\n                        <p class=\"uppercase m-2 fw-500\">Caractéristiques</p> \r\n                        <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                            <div [formGroupName]=\"i\" *ngFor=\"let control of form.get('features')['controls']; index as i\"   class=\"p-2\">\r\n                                <mat-checkbox formControlName=\"selected\" (change)=\"onChange($event)\"  [value]=\"features[i].id \">{{features[i].name }}</mat-checkbox>                         \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n        \r\n                </div>\r\n        \r\n        \r\n            </div>\r\n          \r\n        \r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-2\" >\r\n                <button type=\"submit\"  mat-raised-button color=\"primary\" class=\"search-btn mx-1\" ><mat-icon>search</mat-icon> Chercher</button>       \r\n              <button mat-raised-button color=\"warn\" class=\"uppercase mx-1\" style=\"margin :3%\" (click)=\"vider()\">Vider</button>\r\n\r\n            </div>\r\n            \r\n        \r\n        </form>\r\n        \r\n        </mat-card> \r\n      </mat-sidenav>\r\n\r\n      <mat-sidenav-content ngClass.gt-sm=\"distance\"> \r\n\r\n        <div fxLayout=\"row wrap\" class=\"properties-wrapper mt-0\">            \r\n           \r\n            <div fxFlex=\"100\" class=\"px-2 pb-2 pt-0\">                \r\n                <app-properties-toolbar [showSidenavToggle]=\"!sidenavOpen\"\r\n                                        (onSidenavToggle)=\"sidenav.toggle()\"\r\n                                        (onChangeCount)=\"changeCount($event)\"\r\n                                        (onChangeSorting)=\"changeSorting($event)\"\r\n                                        (onChangeViewType)=\"changeViewType($event)\">\r\n                </app-properties-toolbar>\r\n            </div>\r\n           \r\n            <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\"> \r\n                <mat-chip-list [ngClass]=\"(settings.rtl) ? 'ml-2' : 'mr-2'\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{ Count() }} Trouvées\r\n                    </mat-chip> \r\n                </mat-chip-list>\r\n                <app-properties-search-results-filters \r\n                    [searchFields]=\"searchFields\" \r\n                    (onRemoveSearchField)=\"removeSearchField($event)\">\r\n                </app-properties-search-results-filters>                 \r\n            </div>\r\n\r\n            <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\"  class=\"item\">                         \r\n                <app-property-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\" [fullWidthPage]=\"false\"></app-property-item>\r\n            </div>\r\n\r\n            <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" [style.min-height.px]=\"200\">                \r\n                <mat-spinner *ngIf=\"!message\"></mat-spinner>\r\n                <mat-chip-list *ngIf=\"message\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{message}}\r\n                    </mat-chip> \r\n                </mat-chip-list> \r\n            </div>            \r\n\r\n            <div *ngIf=\"properties?.length > 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2\">\r\n                <mat-paginator [length]=\"pagination?.total\"\r\n                              [pageSize]=\"pagination?.perPage\"\r\n                              (page)=\"onPageChange($event)\"\r\n                              class=\"w-100 mat-elevation-z1\">\r\n                </mat-paginator>\r\n            </div>          \r\n         \r\n        </div>\r\n\r\n        \r\n\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<app-clients></app-clients>\r\n\r\n<app-get-in-touch></app-get-in-touch>");

/***/ }),

/***/ 16152:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/properties/property/property.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"px-3\">     \r\n    <div class=\"theme-container\"> \r\n    \r\n        <mat-sidenav-container class=\"single-property mt-3\">\r\n            <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" position=\"end\" autoFocus=\"false\" (openedChange)=\"onOpenedChange()\">\r\n                <button fxHide=\"false\" fxHide.gt-sm=\"true\" mat-mini-fab color=\"warn\" class=\"close\" (click)=\"sidenav.close()\">\r\n                    <mat-icon>close</mat-icon>\r\n                </button>\r\n                <mat-card [perfectScrollbar]=\"psConfig\"> \r\n\r\n                  <!--  <div class=\"widget\"> \r\n                        <mat-card *ngIf=\"agent\">\r\n                            <img mat-card-image [src]=\"agent.image\" [alt]=\"agent.fullName\"> \r\n                            <mat-card-content>\r\n                                <h2 class=\"fw-600\">Agent {{agent.fullName}}</h2>\r\n                                <app-rating [ratingsCount]=\"agent.ratingsCount\" [ratingsValue]=\"agent.ratingsValue\"></app-rating>\r\n                                <p class=\"mt-3\">{{agent.desc}}</p>                                    \r\n                                <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\" matTooltip=\"Organization\" matTooltipPosition=\"above\">business</mat-icon><span class=\"mx-2\">{{agent.organization}}</span></p>\r\n                                <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">email</mat-icon><span class=\"mx-2\">{{agent.email}}</span></p>\r\n                                <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">call</mat-icon><span class=\"mx-2\">{{agent.phone}}</span></p>\r\n                            </mat-card-content>\r\n                            <mat-divider></mat-divider>\r\n                            <mat-card-actions fxLayoutAlign=\"space-between center\">\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"text-muted\">\r\n                                    <a [href]=\"'https://www.facebook.com/'+agent.social.facebook\" target=\"blank\" class=\"social-icon\">\r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a [href]=\"'https://twitter.com/'+agent.social.twitter\" target=\"blank\" class=\"social-icon\">\r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n                                        </svg> \r\n                                    </a>\r\n                                    <a [href]=\"'https://www.linkedin.com/'+agent.social.linkedin\" target=\"blank\" class=\"social-icon\"> \r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                        <path d=\"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a [href]=\"'https://instagram.com/'+agent.social.instagram\" target=\"blank\" class=\"social-icon\"> \r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z\" />\r\n                                        </svg>\r\n                                    </a> \r\n                                    <a [href]=\"agent.social.website\" target=\"blank\" class=\"social-icon\"> \r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z\" />\r\n                                        </svg>\r\n                                    </a>  \r\n                                </div>\r\n                                <div>\r\n                                    <a [routerLink]=\"['/agents', agent.id]\" mat-button color=\"primary\" class=\"uppercase\">View Profile</a>\r\n                                </div> \r\n                            </mat-card-actions>                              \r\n                        </mat-card>\r\n                    </div> -->\r\n                    \r\n                    <div class=\"widget\" >\r\n                        <h3 class=\"widget-title bg-primary\">Réservation</h3>\r\n                        <form style=\"margin-top: 10%;\" [formGroup]=\"contactForm\" (ngSubmit)=\"openDialog()\">\r\n                            \r\n\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Enter la date </mat-label>\r\n                                <mat-date-range-input [rangePicker]=\"picker\" [min]=\"todayDate\" [dateFilter]=\"myFilter\">\r\n                                    <input matStartDate\r\n                            placeholder=\"Start date\" [min]=\"todayDate\"\r\n                             #dateRangeStart>\r\n                            <input matEndDate\r\n                             placeholder=\"End date\" [min]=\"todayDate\"\r\n                             #dateRangeEnd\r\n                             (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\">\r\n                                </mat-date-range-input>\r\n                                <mat-hint>\r\n                                    MM/DD/YYYY – MM/DD/YYYY</mat-hint>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-date-range-picker #picker></mat-date-range-picker>\r\n                            </mat-form-field>\r\n                              \r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Nombre de personnes</mat-label>\r\n                                <input matInput placeholder=\"Enrer le Nombre des personnes \" autocomplete=\"off\" #fondovalor formControlName=\"name\" onlyNumber>\r\n                                <mat-error *ngIf=\"contactForm.controls.name.errors?.required\">Le nombre de perssonne est obligatoire</mat-error>                   \r\n                            </mat-form-field>   \r\n                             \r\n                            <p>{{data.price  | currency : 'EUR' : 'symbol' : '1.0'}} x {{getdays()}} Nuits</p>\r\n                            <hr class=\"solid\">\r\n                            <p style=\"margin-top: 2%;\"> TVA : {{gettva()}}</p>\r\n                            <hr class=\"solid\">\r\n                            <p style=\"font-weight: bold;margin-top: 2%;\"> TOTAL : {{gettotal()}}</p>\r\n                            <div class=\"text-center\">\r\n                                <button mat-raised-button color=\"accent\" type=\"submit\" (click)=\"openDialog()\">Réserver</button>\r\n                                <button mat-raised-button style=\"margin-left: 2%;\" color=\"primary\" type=\"submit\" (click)=\"openDialog2()\">Contacter l'hote</button>\r\n                            </div>\r\n                        </form>\r\n                    </div> \r\n                   \r\n                  <!--  <div class=\"widget\">\r\n                        <h3 class=\"widget-title bg-primary\">Mortgage Calculator</h3>\r\n                        <form [formGroup]=\"mortgageForm\" (ngSubmit)=\"onMortgageFormSubmit(mortgageForm.value)\">\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Principal Amount</mat-label>\r\n                                <input matInput placeholder=\"$\" autocomplete=\"off\" formControlName=\"principalAmount\" type=\"number\">                  \r\n                            </mat-form-field>\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Down Payment</mat-label>\r\n                                <input matInput placeholder=\"$\" autocomplete=\"off\" formControlName=\"downPayment\" type=\"number\">                  \r\n                            </mat-form-field>\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Interest Rate</mat-label>\r\n                                <input matInput placeholder=\"%\" autocomplete=\"off\" formControlName=\"interestRate\" type=\"number\">                  \r\n                            </mat-form-field>\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Period</mat-label>\r\n                                <input matInput placeholder=\"Number of Years\" autocomplete=\"off\" formControlName=\"period\" type=\"number\">                  \r\n                            </mat-form-field>\r\n                            <p *ngIf=\"monthlyPayment\">Monthly Payment: <span class=\"mx-2 fw-500\">${{monthlyPayment}}</span></p>\r\n                            <div class=\"text-center\">\r\n                                <button mat-raised-button color=\"accent\" type=\"submit\">Calculate Mortgage</button>\r\n                            </div>\r\n                        </form>\r\n                    </div> -->\r\n\r\n                   <!-- <div fxLayout=\"column\" class=\"widget\">\r\n                        <h3 class=\"widget-title bg-primary\">Featured Properties</h3>\r\n                        <div *ngFor=\"let prop of featuredProperties\" class=\"mb-3\">\r\n                            <app-property-item [property]=\"prop\" [viewType]=\"'grid'\"></app-property-item> \r\n                        </div> \r\n                    </div> -->\r\n                   \r\n                </mat-card>\r\n            </mat-sidenav>\r\n            <mat-sidenav-content ngClass.gt-sm=\"distance\">\r\n                <mat-card fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">             \r\n                    <div>\r\n                        <h2 class=\"uppercase\" ngClass.xs=\"text-center\">{{data.title}}</h2>\r\n                        <p fxLayout=\"row\" fxLayoutAlign.xs=\"center\" class=\"address mb-0\">\r\n                            <mat-icon class=\"text-muted\">location_on</mat-icon>\r\n                            <span>{{data.address.street}}, {{data.address.city}}, {{data.address.postalCode}}</span>\r\n                        </p>\r\n                    </div>\r\n                    <div fxLayout=\"column\" fxLayoutAlign.xs=\"center center\" class=\"mx-3\">                      \r\n                        <h2 *ngIf=\"settings.currency == 'USD'\" class=\"primary-color price\">\r\n                            <span *ngIf=\"data?.price.sale\">{{property?.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n                            <span *ngIf=\"property?.priceDollar.rent\">{{property?.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /mois</span>\r\n                        </h2>\r\n                        <h2 *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price\">\r\n                            <span *ngIf=\"property?.price\">{{this.data?.price | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                            <span *ngIf=\"property?.price\">{{this.data?.price | currency : 'EUR' : 'symbol' : '1.0'}} /mois</span>\r\n                        </h2>\r\n                        <h2 *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price\">\r\n                            <span *ngIf=\"data.price\">{{data.price | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                        </h2>\r\n                        <app-rating [ratingsCount]=\"1\" [ratingsValue]=\"data.environmentalAverage\"></app-rating> \r\n                    </div>\r\n                    <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                        <mat-icon>more_vert</mat-icon>\r\n                    </button>                                  \r\n                </mat-card>\r\n\r\n                <mat-card class=\"mt-3\">\r\n                    <div class=\"main-carousel mb-3\"> \r\n                        <div *ngIf=\"property\" class=\"control-icons\">\r\n                           <!-- <button mat-button [disabled]=\"onFavorites()\" (click)=\"addToFavorites()\" matTooltip=\"Add To Favorite\">\r\n                                <mat-icon class=\"\">favorite_border</mat-icon>\r\n                            </button>-->\r\n                            <button mat-button [disabled]=\"onCompare()\" (click)=\"addToCompare()\" matTooltip=\"Add To Compare\">\r\n                                <mat-icon class=\"\">compare_arrows</mat-icon>\r\n                            </button>  \r\n                        </div>   \r\n                        <div id=\"main-carousel\" class=\"swiper-container\" [swiper]=\"config\" (indexChange)=\"onIndexChange($event)\"> \r\n                            <div class=\"swiper-wrapper\">      \r\n                                <div *ngFor=\"let image of data.photos\" class=\"swiper-slide\">\r\n                                    <img [attr.data-src]=\"image.name\" class=\"swiper-lazy\">\r\n                                    <div class=\"swiper-lazy-preloader\"></div>          \r\n                                </div>\r\n                            </div>                      \r\n                            <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                            <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"small-carousel\">   \r\n                        <div id=\"small-carousel\" class=\"swiper-container\" [swiper]=\"config2\"> \r\n                            <div class=\"swiper-wrapper\">      \r\n                                <div *ngFor=\"let image of data.photos; let i=index;\" class=\"swiper-slide\" [ngClass]=\"'thumb-'+i\" [class.active-thumb]=\"i == 0\">\r\n                                    <img [attr.data-src]=\"image.name\" class=\"swiper-lazy mw-100\" (click)=\"selectImage(i)\">\r\n                                    <div class=\"swiper-lazy-preloader\"></div>          \r\n                                </div>\r\n                            </div>  \r\n                        </div>\r\n                    </div>\r\n                </mat-card> \r\n                \r\n                \r\n                <mat-card *ngIf=\"property\" class=\"mt-3\">\r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Details</mat-card-title> \r\n                    </mat-card-header>\r\n                    <div fxLayout=\"row wrap\" class=\"details\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Type du bien:</span>\r\n                            <span>{{property.propertyType}}</span>\r\n                        </div> \r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Status du bien:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                                <span *ngFor=\"let status of property.propertyStatus; let last=last\" [class.list-item]=\"property.propertyStatus.length > 1\" [class.last]=\"last\">{{status}}</span>\r\n                            </div>\r\n                        </div> \r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Ville:</span>\r\n                            <span>{{property.city}}</span>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Code postale:</span>\r\n                            <span>{{property.zipCode}}</span>\r\n                        </div> \r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Quartier:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                                <span *ngFor=\"let neighborhood of property.neighborhood; let last=last\" [class.list-item]=\"property.neighborhood.length > 1\" [class.last]=\"last\">{{neighborhood}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Rue:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                                <span *ngFor=\"let street of property.street; let last=last\" [class.list-item]=\"property.street.length > 1\" [class.last]=\"last\">{{street}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Chambres:</span>\r\n                            <span>{{property.bedrooms}}</span>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Salles de bain:</span>\r\n                            <span>{{property.bathrooms}}</span>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Garages:</span>\r\n                            <span>{{property.garages}}</span>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Supéficie du bien:</span>\r\n                            <span>{{property.area.value}} {{property.area.unit}}</span>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Année de construction:</span>\r\n                            <span>{{property.yearBuilt}}</span>\r\n                        </div>\r\n                    </div>   \r\n                </mat-card>\r\n\r\n                <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Equipments</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <div fxLayout=\"row wrap\">\r\n                            <div *ngFor=\"let equipment of data.equipments\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\r\n                                <mat-icon class=\"mat-icon-sm\" color=\"primary\">check</mat-icon>                              \r\n                                <span class=\"mx-2\">{{equipment.device.name}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n\r\n               <!-- <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Additional features</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <div fxLayout=\"row wrap\" class=\"details\">\r\n                            <div *ngFor=\"let feature of property?.additionalFeatures\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"item\">\r\n                                <span>{{feature.name}}:</span>\r\n                                <span>{{feature.value}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card-content>\r\n                </mat-card>-->\r\n\r\n                <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Description</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <p>{{data.description}}</p>\r\n                    </mat-card-content>\r\n                </mat-card> \r\n\r\n                <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">À savoir</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <div fxLayout=\"row wrap\">\r\n                            <div *ngFor=\"let property of data.accommodationFieldValues\" fxFlex=\"100\">\r\n                                <div fxFlex=\"100\" fxFlex.gt-xs=\"100\" *ngIf=\"property.valueBoolean == true\">\r\n                                <mat-icon class=\"mat-icon-sm\" color=\"primary\" *ngIf=\"property.valueBoolean == true\">check</mat-icon>                              \r\n                                <span class=\"mx-2\" *ngIf=\"property.valueBoolean == true\">{{property.customField.label}}</span>\r\n                                 </div>\r\n                                 <div  fxFlex.gt-xs=\"500\" *ngIf=\"property.valueText != null\"   >\r\n                                <mat-icon class=\"mat-icon-sm\" color=\"primary\" *ngIf=\"property.valueText != null\">check</mat-icon>  \r\n                                <span class=\"mx-2\" *ngIf=\"property.valueText != null\">{{property.customField.label}} : {{property.valueText}} </span>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card-content>\r\n                </mat-card> \r\n\r\n               <!-- <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Location</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <agm-map [latitude]=\"property?.location.lat\" [longitude]=\"property?.location.lng\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\">\r\n                            <agm-marker [latitude]=\"property?.location.lat\" [longitude]=\"property?.location.lng\" [markerDraggable]=\"false\"></agm-marker>\r\n                        </agm-map>\r\n                    </mat-card-content>                   \r\n                </mat-card> -->\r\n\r\n               <!---- <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Plans</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <mat-accordion>\r\n                            <mat-expansion-panel *ngFor=\"let plan of property?.plans; let i = index;\" [expanded]=\"i === 0\">\r\n                                <mat-expansion-panel-header>  \r\n                                    <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                        <div class=\"fw-500\">{{plan.name}}</div>\r\n                                        <div fxShow=\"false\" fxShow.gt-xs=\"true\" class=\"text-muted\">\r\n                                            <span>Area: <span class=\"fw-500\">{{plan.area.value}} {{plan.area.unit}}</span></span>\r\n                                            <span class=\"mx-3\">Rooms: <span class=\"fw-500\">{{plan.rooms}}</span></span>\r\n                                            <span>Baths: <span class=\"fw-500\">{{plan.baths}}</span></span>   \r\n                                        </div>\r\n                                    </mat-panel-title> \r\n                                </mat-expansion-panel-header>                                  \r\n                                <img [src]=\"plan.image\" [alt]=\"plan.name\" class=\"mw-100\">\r\n                                <p>{{plan.desc}}</p>\r\n                            </mat-expansion-panel> \r\n                        </mat-accordion>                         \r\n                    </mat-card-content>\r\n                </mat-card> -->\r\n\r\n              <!--  <mat-card *ngIf=\"property\" class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Videos</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <video controls class=\"mw-100\">\r\n                            <source [src]=\"property.videos[0].link\" type=\"video/mp4\"> \r\n                            Your browser does not support the video tag.\r\n                        </video> \r\n                        <div class=\"mt-5\">\r\n                            <h3 class=\"text-center fw-500\">{{property.videos[1].name}}</h3>\r\n                            <div [innerHtml]=\"embedVideo\" class=\"videoWrapper\"></div>                                    \r\n                        </div>                             \r\n                    </mat-card-content>\r\n                </mat-card>      -->          \r\n\r\n                <app-comments *ngIf=\"data\" [propertyId]=\"data.id\"></app-comments>  \r\n\r\n            </mat-sidenav-content>\r\n        </mat-sidenav-container>\r\n\r\n    </div>\r\n</div>\r\n \r\n<!--<div class=\"section mt-3\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\"> \r\n            <h1 class=\"section-title\">Related properties</h1>            \r\n            <app-properties-carousel [properties]=\"relatedProperties\"></app-properties-carousel>                        \r\n        </div>\r\n    </div>   \r\n</div> -->\r\n\r\n<app-get-in-touch></app-get-in-touch>");

/***/ }),

/***/ 12502:
/*!***************************************************************************!*\
  !*** ./src/app/pages/properties/contact-host/contact-host.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWhvc3QuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 37530:
/*!*****************************************************************!*\
  !*** ./src/app/pages/properties/payment/payment.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 59636:
/*!************************************************************!*\
  !*** ./src/app/pages/properties/properties.component.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 69491:
/*!*******************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".main-carousel .swiper-slide {\n  text-align: center;\n  padding-bottom: 66.25%;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.04);\n}\n.main-carousel img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n}\n.main-carousel .control-icons {\n  position: absolute;\n  z-index: 2;\n  top: 24px;\n  right: 20px;\n}\n.main-carousel .control-icons button.mat-button {\n  min-width: 36px;\n  width: 36px;\n  padding: 0;\n  margin: 0 4px;\n  background: rgba(255, 252, 252, 0.6);\n  transition: 0.2s;\n  color: rgba(0, 0, 0, 0.87);\n}\n.main-carousel .control-icons button.mat-button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.main-carousel .control-icons button.mat-button:hover:enabled {\n  background: #fffcfc;\n}\n.small-carousel .swiper-slide img {\n  display: block;\n  opacity: 0.3;\n}\n.small-carousel .swiper-slide.active-thumb img {\n  border-width: 3px;\n  border-style: solid;\n  box-sizing: border-box;\n  opacity: 1;\n}\n.small-carousel .swiper-slide .swiper-lazy-preloader {\n  margin-top: 10px;\n}\n.widget {\n  margin-bottom: 40px;\n}\n.widget .widget-title {\n  margin: 0 -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.widget:first-child .widget-title {\n  margin: -16px -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\nhr.solid {\n  border-top: 3px solid #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFDWjtBQUFZO0VBQ0ksMEJBQUE7QUFFaEI7QUFBWTtFQUNJLG1CQUFBO0FBRWhCO0FBS1E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUZaO0FBS1k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBSGhCO0FBTVE7RUFDSSxnQkFBQTtBQUpaO0FBU0E7RUFDSSxtQkFBQTtBQU5KO0FBT0k7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUxSO0FBUVE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQU5aO0FBV0E7RUFDSSwwQkFBQTtBQVJKIiwiZmlsZSI6InByb3BlcnR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY2Fyb3VzZWx7IFxyXG4gICAgLnN3aXBlci1zbGlkZXsgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjYuMjUlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTsgICAgICAgICBcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH0gXHJcbiAgICAuY29udHJvbC1pY29uc3sgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7IFxyXG4gICAgICAgIHRvcDogMjRweDtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICBidXR0b24ubWF0LWJ1dHRvbntcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MiwgMjUyLCAwLjYpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzOyBcclxuICAgICAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgICAgICAgICAgJjpkaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyOmVuYWJsZWR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjUyLCAyNTIsIDEpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uc21hbGwtY2Fyb3VzZWx7IFxyXG4gICAgLnN3aXBlci1zbGlkZXsgIFxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUtdGh1bWJ7XHJcbiAgICAgICAgICAgIGltZ3sgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICAuc3dpcGVyLWxhenktcHJlbG9hZGVye1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfSBcclxufVxyXG4gXHJcbi53aWRnZXR7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC53aWRnZXQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luOiAwIC0xNnB4IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZHsgIFxyXG4gICAgICAgIC53aWRnZXQtdGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLTE2cHggLTE2cHggMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSBcclxuXHJcbmhyLnNvbGlkIHtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjYmJiO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_properties_properties_module_ts.js.map