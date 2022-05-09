"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_submit-property_submit-property_module_ts"],{

/***/ 93083:
/*!********************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitPropertyComponent": () => (/* binding */ SubmitPropertyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_submit_property_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./submit-property.component.html */ 99507);
/* harmony import */ var _submit_property_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-property.component.scss */ 40332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/accommodations.service */ 45854);
/* harmony import */ var src_app_models_Accommodation_accommodation_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Accommodation/accommodation-create */ 57856);
/* harmony import */ var src_app_models_adress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/adress */ 23223);
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/upload.service */ 13205);
/* harmony import */ var src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/devices.service */ 33965);



/// <reference types="@types/googlemaps" />









let SubmitPropertyComponent = class SubmitPropertyComponent {
    constructor(appService, fb, mapsAPILoader, ngZone, globalservice, accomodationservice, devicesservice) {
        this.appService = appService;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.globalservice = globalservice;
        this.accomodationservice = accomodationservice;
        this.devicesservice = devicesservice;
        this.features = [];
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.options = this.features;
        this.neighborhoods = [];
        this.streets = [];
        this.feature = [];
        this.data = [];
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
        this.id = 0;
        this.fileData = null;
        this.previewUrl = null;
        this.files = [];
        this.acomodationcreate = new src_app_models_Accommodation_accommodation_create__WEBPACK_IMPORTED_MODULE_4__.AccommodationCreate();
        this.adress = new src_app_models_adress__WEBPACK_IMPORTED_MODULE_5__.Adress();
    }
    onChange(event) {
        // this.feature = <any>this.submitForm.get('additional.features').value as any;
        if (event.checked) {
            this.feature.push({ deviceId: event.source.value });
        }
        else {
            const i = this.feature.findIndex(x => x.value === event.source.value);
            this.feature.splice(i);
        }
    }
    submitstep1() {
        console.log(this.submitForm.get('basic.propertyType').value);
        this.acomodationcreate.kind = this.submitForm.get('basic.propertyType').value;
        this.acomodationcreate.size = this.submitForm.get('basic.propertyStatus').value;
        this.acomodationcreate.step = 2;
        this.accomodationservice.postAccommodation(this.acomodationcreate).subscribe(res => {
            this.id = res.id;
            this.submitstep6();
        });
    }
    submitstep2() {
        console.log(this.submitForm.get('address.city').value);
        this.adress.city = this.submitForm.get('address.city').value;
        this.adress.postalCode = this.submitForm.get('address.zipCode').value;
        this.adress.street = this.submitForm.get('address.street').value;
        this.adress.addressComplement = this.submitForm.get('address.neighborhood').value;
        this.adress.step = 3;
        this.accomodationservice.putAcommodation(this.id, { address: this.adress, step: 3 }).subscribe(res => {
        });
    }
    submitstep3() {
        this.accomodationservice.putAcommodation(this.id, { bathrooms: Number(this.submitForm.get('additional.bathrooms').value),
            bedrooms: Number(this.submitForm.get('additional.bathrooms').value),
            beds: Number(this.submitForm.get('additional.area').value),
            travelers: Number(this.submitForm.get('additional.garages').value),
            step: 4
        }).subscribe(res => {
        });
        this.submitstep4();
    }
    submitstep4() {
        this.accomodationservice.putAcommodation(this.id, { equipments: this.feature,
            step: 5
        }).subscribe(res => {
        });
        this.globalservice.clear();
    }
    submitstep5() {
        ;
        this.accomodationservice.putAcommodation(this.id, { photos: this.globalservice.getMyGV(), step: 6 }).subscribe(res => {
            this.submitstep8();
        });
        this.globalservice.clear();
    }
    upload(event) {
        this.fileData = event.addedFiles[0];
        this.files.push(...event.addedFiles);
        console.log('Event: ', event.addedFiles);
        console.log('FileName: ', this.fileData.name);
        this.preview();
    }
    submitstep6() {
        this.accomodationservice.putAcommodation(this.id, { title: this.submitForm.get('basic.title').value,
            description: this.submitForm.get('basic.desc').value,
            step: 7
        }).subscribe(res => {
            this.submitstep7();
        });
    }
    submitstep7() {
        this.accomodationservice.putAcommodation(this.id, { price: this.submitForm.get('basic.priceEuro').value,
            step: 8
        }).subscribe(res => {
        });
    }
    submitstep8() {
        this.accomodationservice.putAcommodation(this.id, { stauts: 1,
            step: 9
        }).subscribe(res => {
        });
    }
    preview() {
        const mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (event) => {
            this.previewUrl = reader.result;
            console.log('Result: ', reader.result);
            console.log('Reader: ', this.previewUrl);
        };
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
        this.previewUrl = null;
    }
    onCheckChange(event) {
        this.formArray = this.submitForm.get('additional.features');
        /* Selected */
        if (event.target.checked) {
            // Add a new control in the arrayForm
            this.formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(event.target.i.value));
        }
        /* unselected */
        else {
            // find the unselected element
            let i = 0;
            this.formArray.controls.forEach((ctrl) => {
                if (ctrl.value == event.target.value) {
                    // Remove the unselected element from the arrayForm
                    this.formArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    loaddata() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            /*  this.devicesservice.getDevices().subscribe(res => {
               if(!res){
                 return;
               }
               this.dataSource = new MatTableDataSource<any>(res);
             this.data=res;
             for(let data of this.data) {
             //  this.features.push({id:data.id}, {name:data.name})
               this.setfeatures(data.id,data.name);
             }
            //this.features =  res as any[];
            // console.log('hna',this.features);
             });*/
            const data = yield this.devicesservice.getDevices().toPromise();
            this.features = data;
        });
    }
    setfeatures(id, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.features.push({ id: id, name: name });
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // this.features = JSON.a; 
            yield this.loaddata();
            console.log('hna:', this.features);
            this.propertyTypes = this.appService.getPropertyTypes();
            this.propertyStatuses = this.appService.getPropertyStatuses();
            this.cities = this.appService.getCities();
            this.neighborhoods = this.appService.getNeighborhoods();
            this.streets = this.appService.getStreets();
            this.submitForm = this.fb.group({
                basic: this.fb.group({
                    propertyType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    propertyStatus: null,
                    title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    desc: null,
                    priceEuro: null,
                    //    gallery: null
                }),
                address: this.fb.group({
                    location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    zipCode: '',
                    neighborhood: '',
                    street: ''
                }),
                additional: this.fb.group({
                    bedrooms: '',
                    bathrooms: '',
                    garages: '',
                    area: '',
                    yearBuilt: '',
                    features: this.buildFeatures()
                }),
                media: this.fb.group({
                    videos: this.fb.array([this.createVideo()]),
                    plans: this.fb.array([this.createPlan()]),
                    additionalFeatures: this.fb.array([this.createFeature()]),
                    featured: false
                })
            });
            this.setCurrentPosition();
            this.placesAutocomplete();
        });
    }
    onSelectionChange(e) {
        if (e.selectedIndex == 4) {
            this.horizontalStepper._steps.forEach(step => step.editable = false);
            console.log(this.submitForm.value);
        }
    }
    reset() {
        this.horizontalStepper.reset();
        const videos = this.submitForm.controls.media.get('videos');
        while (videos.length > 1) {
            videos.removeAt(0);
        }
        const plans = this.submitForm.controls.media.get('plans');
        while (plans.length > 1) {
            plans.removeAt(0);
        }
        const additionalFeatures = this.submitForm.controls.media.get('additionalFeatures');
        while (additionalFeatures.length > 1) {
            additionalFeatures.removeAt(0);
        }
        this.submitForm.reset({
            additional: {
                features: this.features
            },
            media: {
                featured: false
            }
        });
    }
    // -------------------- Address ---------------------------  
    onSelectCity() {
        this.submitForm.controls.address.get('neighborhood').setValue(null, { emitEvent: false });
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    onSelectNeighborhood() {
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
    placesAutocomplete() {
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.addressAutocomplete.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    ;
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    this.getAddress();
                });
            });
        });
    }
    // public getAddress(){    
    //   this.mapsAPILoader.load().then(() => {
    //     let geocoder = new google.maps.Geocoder();
    //     let latlng = new google.maps.LatLng(this.lat, this.lng); 
    //     geocoder.geocode({'location': latlng}, (results, status) => {
    //       if(status === google.maps.GeocoderStatus.OK) {
    //         console.log(results); 
    //         //this.addresstext.nativeElement.focus();  
    //         let address = results[0].formatted_address; 
    //         this.submitForm.controls.location.setValue(address); 
    //         this.setAddresses(results[0]);          
    //       }
    //     });
    //   });
    // }
    getAddress() {
        this.appService.getAddress(this.lat, this.lng).subscribe(response => {
            console.log(response);
            if (response['results'].length) {
                let address = response['results'][0].formatted_address;
                this.submitForm.controls.address.get('location').setValue(address);
                this.setAddresses(response['results'][0]);
            }
        });
    }
    onMapClick(e) {
        this.lat = e.coords.lat;
        this.lng = e.coords.lng;
        this.getAddress();
    }
    onMarkerClick(e) {
        console.log(e);
    }
    setAddresses(result) {
        this.submitForm.controls.address.get('city').setValue(null);
        this.submitForm.controls.address.get('zipCode').setValue(null);
        this.submitForm.controls.address.get('street').setValue(null);
        var newCity, newStreet, newNeighborhood;
        result.address_components.forEach(item => {
            if (item.types.indexOf('locality') > -1) {
                if (this.cities.filter(city => city.name == item.long_name)[0]) {
                    newCity = this.cities.filter(city => city.name == item.long_name)[0];
                }
                else {
                    newCity = { id: this.cities.length + 1, name: item.long_name };
                    this.cities.push(newCity);
                }
                this.submitForm.controls.address.get('city').setValue(newCity);
            }
            if (item.types.indexOf('postal_code') > -1) {
                this.submitForm.controls.address.get('zipCode').setValue(item.long_name);
            }
        });
        if (!newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('administrative_area_level_1') > -1) {
                    if (this.cities.filter(city => city.name == item.long_name)[0]) {
                        newCity = this.cities.filter(city => city.name == item.long_name)[0];
                    }
                    else {
                        newCity = {
                            id: this.cities.length + 1,
                            name: item.long_name
                        };
                        this.cities.push(newCity);
                    }
                    this.submitForm.controls.address.get('city').setValue(newCity);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('neighborhood') > -1) {
                    let neighborhood = this.neighborhoods.filter(n => n.name == item.long_name && n.cityId == newCity.id)[0];
                    if (neighborhood) {
                        newNeighborhood = neighborhood;
                    }
                    else {
                        newNeighborhood = {
                            id: this.neighborhoods.length + 1,
                            name: item.long_name,
                            cityId: newCity.id
                        };
                        this.neighborhoods.push(newNeighborhood);
                    }
                    this.neighborhoods = [...this.neighborhoods];
                    this.submitForm.controls.address.get('neighborhood').setValue([newNeighborhood]);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('route') > -1) {
                    if (this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0]) {
                        newStreet = this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0];
                    }
                    else {
                        newStreet = {
                            id: this.streets.length + 1,
                            name: item.long_name,
                            cityId: newCity.id,
                            neighborhoodId: (newNeighborhood) ? newNeighborhood.id : null
                        };
                        this.streets.push(newStreet);
                    }
                    this.streets = [...this.streets];
                    this.submitForm.controls.address.get('street').setValue([newStreet]);
                }
            });
        }
    }
    // -------------------- Additional ---------------------------  
    buildFeatures() {
        const arr = this.features.map(feature => {
            return this.fb.group({
                id: feature.id,
                name: feature.name,
            });
        });
        return this.fb.array(arr);
    }
    // -------------------- Media --------------------------- 
    createVideo() {
        return this.fb.group({
            id: null,
            name: null,
            link: null
        });
    }
    addVideo() {
        const videos = this.submitForm.controls.media.get('videos');
        videos.push(this.createVideo());
    }
    deleteVideo(index) {
        const videos = this.submitForm.controls.media.get('videos');
        videos.removeAt(index);
    }
    createPlan() {
        return this.fb.group({
            id: null,
            name: null,
            desc: null,
            area: null,
            rooms: null,
            baths: null,
            image: null
        });
    }
    addPlan() {
        const plans = this.submitForm.controls.media.get('plans');
        plans.push(this.createPlan());
    }
    deletePlan(index) {
        const plans = this.submitForm.controls.media.get('plans');
        plans.removeAt(index);
    }
    createFeature() {
        return this.fb.group({
            id: null,
            name: null,
            value: null
        });
    }
    addFeature() {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.push(this.createFeature());
    }
    deleteFeature(index) {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.removeAt(index);
    }
};
SubmitPropertyComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_10__.MapsAPILoader },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone },
    { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_6__.UploadService },
    { type: src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_3__.AccommodationsService },
    { type: src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_7__.DevicesService }
];
SubmitPropertyComponent.propDecorators = {
    horizontalStepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['horizontalStepper',] }],
    addressAutocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['addressAutocomplete',] }]
};
SubmitPropertyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-submit-property',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_submit_property_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_submit_property_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubmitPropertyComponent);



/***/ }),

/***/ 16875:
/*!*****************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "SubmitPropertyModule": () => (/* binding */ SubmitPropertyModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-input-file */ 47869);
/* harmony import */ var _submit_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-property.component */ 93083);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-dropzone */ 82629);
/* harmony import */ var src_app_shared_upload_manager_upload_manager_upload_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/upload-manager/upload-manager/upload-manager.component */ 58446);
/* harmony import */ var src_app_shared_upload_manager_upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/upload-manager/upload-task/upload-task.component */ 25643);











const routes = [
    { path: '', component: _submit_property_component__WEBPACK_IMPORTED_MODULE_1__.SubmitPropertyComponent, pathMatch: 'full' }
];
let SubmitPropertyModule = class SubmitPropertyModule {
};
SubmitPropertyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_submit_property_component__WEBPACK_IMPORTED_MODULE_1__.SubmitPropertyComponent, src_app_shared_upload_manager_upload_manager_upload_manager_component__WEBPACK_IMPORTED_MODULE_2__.UploadManagerComponent, src_app_shared_upload_manager_upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_3__.UploadTaskComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_8__.AgmCoreModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_9__.InputFileModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__.NgxDropzoneModule
        ]
    })
], SubmitPropertyModule);



/***/ }),

/***/ 99507:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/submit-property/submit-property.component.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n  \r\n      <mat-card ngClass.lt-lg=\"p-0\" [formGroup]=\"submitForm\">\r\n  \r\n        <mat-horizontal-stepper #horizontalStepper linear=\"false\" class=\"submit-property\" (selectionChange)=\"onSelectionChange($event)\">\r\n\r\n            <mat-step [stepControl]=\"submitForm.get('basic')\" label=\"Basique\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"basic\" fxLayout=\"row wrap\">\r\n\r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">Basique</h1>\r\n                      </div>\r\n                              \r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Titre</mat-label>\r\n                            <input matInput placeholder=\"Title\" formControlName=\"title\" required autocomplete=\"off\">\r\n                            <mat-error *ngIf=\"submitForm.get('basic')['controls'].title.errors?.required\">Le titre est requis</mat-error>\r\n                        </mat-form-field>\r\n                      </div>  \r\n                  \r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Description</mat-label> \r\n                            <textarea matInput placeholder=\"Description\" formControlName=\"desc\" rows=\"7\"></textarea> \r\n                        </mat-form-field> \r\n                      </div> \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Prix (€)</mat-label>\r\n                            <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceEuro\" autocomplete=\"off\"> \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Catégorie de logement</mat-label> \r\n                            <mat-select placeholder=\"Select Property Type\" formControlName=\"propertyType\" required>\r\n                                <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType.id\">\r\n                                    {{propertyType.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"submitForm.get('basic')['controls'].propertyType.errors?.required\">Champ obligatoire</mat-error>                               \r\n                        </mat-form-field>\r\n                      </div>\r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Type de logement</mat-label>\r\n                            <mat-select placeholder=\"Select Property Status\" formControlName=\"propertyStatus\" >\r\n                                <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus.id\">\r\n                                    {{propertyStatus.name}}\r\n                                </mat-option>\r\n                            </mat-select>                             \r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"end center\">\r\n                        <button mat-raised-button color=\"primary\" (click)= \"submitstep1()\" matStepperNext fxLayout=\"row\"  fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <span class=\"mx-1 uppercase\">Suivant </span>                    \r\n                          <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                      </div> \r\n                  \r\n                  </form>\r\n               \r\n              </div>\r\n            </mat-step>\r\n            \r\n            <mat-step [stepControl]=\"submitForm.get('address')\" label=\"Addresse\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"address\" fxLayout=\"row wrap\">\r\n            \r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">Addresse</h1>\r\n                      </div>\r\n                                \r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-icon matPrefix class=\"mr-1 text-muted\">location_on</mat-icon>\r\n                            <mat-label>Location</mat-label>\r\n                            <input matInput placeholder=\"Enter a location\" formControlName=\"location\" autocomplete=\"off\" #addressAutocomplete> \r\n                            <button *ngIf=\"submitForm.get('address')['controls'].location.value\" mat-button matSuffix mat-icon-button (click)=\"submitForm.get('address')['controls'].location.setValue(null)\" type=\"button\">\r\n                              <mat-icon>Fermer</mat-icon>\r\n                            </button>\r\n                            <mat-error *ngIf=\"submitForm.get('address')['controls'].location.errors?.required\">La localisation est obligatoire</mat-error>   \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" class=\"px-2 mb-4\">\r\n                          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\" (mapClick)=\"onMapClick($event)\">\r\n                              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\" (markerClick)=\"onMarkerClick($event)\"></agm-marker>\r\n                          </agm-map>\r\n                      </div>\r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Ville</mat-label>\r\n                            <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\" required> \r\n                              <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">\r\n                                {{city.name}}\r\n                              </mat-option>\r\n                            </mat-select> \r\n                            <mat-error *ngIf=\"submitForm.get('address')['controls'].city.errors?.required\">City is required</mat-error>                    \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Code postale</mat-label>\r\n                            <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Quatier</mat-label>\r\n                          <mat-select placeholder=\"Select Neighborhood...\" formControlName=\"neighborhood\"  (selectionChange)=\"onSelectNeighborhood()\">\r\n                            <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: submitForm.get('address')['controls'].city.value?.id\" [value]=\"neighborhood.name\">\r\n                              {{neighborhood.name}}\r\n                            </mat-option>\r\n                          </mat-select>   \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Rue</mat-label>\r\n                          <mat-select placeholder=\"Select Street...\" formControlName=\"street\" > \r\n                            <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods: submitForm.get('address')['controls'].neighborhood.value?.id, cityId:submitForm.get('address')['controls'].city.value?.id } \" [value]=\"street.name\">\r\n                              {{street.name}}\r\n                            </mat-option>\r\n                          </mat-select>  \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                        <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <mat-icon>navigate_before</mat-icon>\r\n                          <span class=\"mx-1 uppercase\">Précédent</span>  \r\n                        </button>\r\n                        <button mat-raised-button color=\"primary\" matStepperNext (click)= \"submitstep2()\" fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <span class=\"mx-1 uppercase\">Suivant</span>                    \r\n                          <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                      </div>  \r\n                    \r\n                  </form>\r\n                \r\n              </div> \r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"submitForm.get('additional')\" label=\"Supplémentaire\">\r\n              <div class=\"step-content\">\r\n                  <form formGroupName=\"additional\" fxLayout=\"row wrap\">\r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">Supplémentaire</h1>\r\n                      </div>\r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Chambres</mat-label>\r\n                            <input matInput placeholder=\"bedrooms\" autocomplete=\"off\" formControlName=\"bedrooms\" onlyNumber maxlength=\"2\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Salles de bains</mat-label>\r\n                            <input matInput placeholder=\"bathrooms\" autocomplete=\"off\" formControlName=\"bathrooms\" onlyNumber maxlength=\"2\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Nombre de voyageur</mat-label>\r\n                            <input matInput placeholder=\"Garages\" autocomplete=\"off\" formControlName=\"garages\" onlyNumber maxlength=\"2\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Nombre de lits</mat-label>\r\n                            <input matInput placeholder=\"Area\" autocomplete=\"off\" formControlName=\"area\" onlyNumber>                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                      <div fxFlex=\"100\" class=\"mb-2\"> \r\n                          <p class=\"uppercase m-2 fw-500\">Caractéristiques</p> \r\n                          <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                              <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\"   class=\"p-2\">\r\n                                  <mat-checkbox formControlName=\"selected\" (change)=\"onChange($event)\"  [value]=\"features[i].id \">{{features[i].name }}</mat-checkbox>                         \r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                        <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <mat-icon>navigate_before</mat-icon>\r\n                          <span class=\"mx-1 uppercase\">Précédent</span>  \r\n                        </button>\r\n                        <button mat-raised-button color=\"primary\" matStepperNext (click)= \"submitstep3()\" fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <span class=\"mx-1 uppercase\">Suivant</span>                    \r\n                          <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                      </div>        \r\n                  </form>\r\n              </div> \r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"submitForm.get('media')\" label=\"Media\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"media\" fxLayout=\"row wrap\">    \r\n                   \r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">Media</h1>\r\n                      </div>\r\n               <div style=\"text-align: center; margin: auto;\r\n               width: 50%;\r\n               padding: 10px;\"> <app-upload-manager></app-upload-manager> </div>\r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                          <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                              <mat-icon>navigate_before</mat-icon>\r\n                              <span class=\"mx-1 uppercase\">Précédent</span>  \r\n                          </button>\r\n                          <button mat-raised-button color=\"primary\" (click)=\"submitstep5()\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                              <span class=\"mx-1 uppercase\">Soumettre</span>                    \r\n                              <mat-icon>navigate_next</mat-icon>\r\n                          </button> \r\n                      </div> \r\n                  </form>\r\n              </div> \r\n            </mat-step>\r\n\r\n            <mat-step label=\"Confirmation\">\r\n              <div class=\"step-content\">\r\n                \r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"pt-5 text-center\"> \r\n                    <button mat-fab color=\"primary\"><mat-icon>check</mat-icon></button>\r\n                    <h2 class=\"mt-3 uppercase\">Félicitation!</h2>\r\n                <!--    <h2 class=\"my-3\">Votre bien <span class=\"primary-color\">\"{{submitForm.get('basic')['controls'].title.value}}\"</span> has been submitted</h2>-->\r\n                    <p class=\"text-muted\">Votre logement a bien été ajouté et est en attente de validation.</p>\r\n                  </div>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-3\">  \r\n                    <button mat-raised-button color=\"accent\" (click)=\"reset()\" type=\"button\">Retourner pour soumettre une nouvelle propriété</button>       \r\n                  </div>\r\n              </div> \r\n            </mat-step>\r\n        </mat-horizontal-stepper>\r\n      </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ 40332:
/*!**********************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJtaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_submit-property_submit-property_module_ts.js.map