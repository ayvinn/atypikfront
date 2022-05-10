"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_host_host_module_ts"],{

/***/ 14970:
/*!**********************************************!*\
  !*** ./src/app/pages/host/host.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostComponent": () => (/* binding */ HostComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_host_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./host.component.html */ 95693);
/* harmony import */ var _host_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./host.component.scss */ 99479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/accommodations.service */ 45854);
/* harmony import */ var src_app_services_nearby_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/nearby.service */ 55995);
/* harmony import */ var src_app_services_reservations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/reservations.service */ 79719);














let HostComponent = class HostComponent {
    constructor(appService, accomodationservice, activatedRoute, reservationservice, fb, nearbyservice, snackBar) {
        this.appService = appService;
        this.accomodationservice = accomodationservice;
        this.activatedRoute = activatedRoute;
        this.reservationservice = reservationservice;
        this.fb = fb;
        this.nearbyservice = nearbyservice;
        this.snackBar = snackBar;
        this.messages = [];
        this.count = 0;
        this.todayDate = new Date();
        this.displayedColumns = ['Arrive', 'Departure', 'name', 'actions'];
        this.displayedColumns2 = ['Arrive', 'Departure', 'name', 'Status'];
        this.satuts = ['En attente', 'Refusé', 'Validé'];
        this.start = [];
        this.datamessages = [];
        this.end = [];
        this.parameters = null;
        this.datesToHighlight = ["2022-04-22T18:30:00.000Z", "2019-01-22T18:30:00.000Z", "2019-01-24T18:30:00.000Z", "2019-01-28T18:30:00.000Z", "2019-01-24T18:30:00.000Z", "2019-01-23T18:30:00.000Z", "2019-01-22T18:30:00.000Z", "2019-01-25T18:30:00.000Z"];
        this.myFilter = (d) => {
            for (let index = 0; index < this.start.length; index++) {
                const start = this.start[index].start;
                const end = this.start[index].end;
                if (d >= start && d <= end)
                    return false;
            }
            return true;
        };
        this.list = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.sub = this.activatedRoute.params.subscribe(params => {
                this.propertyId = params['id'];
            });
            const data = yield this.accomodationservice.getAccommodationHost(this.propertyId).toPromise();
            data['unavailableSlots'].forEach(element => {
                this.start.push({ start: new Date(element.start), end: new Date(element.end) });
            });
            this.datamessages = yield this.accomodationservice.getAccommodation(this.propertyId).toPromise();
            console.log(this.datamessages['nearby']);
            this.datamessages['nearby'].forEach(element => {
                this.messages.push({ id: element.id, name: element.name, message: element.description, date: new Date(element['address'].city) });
            });
            this.count = 0;
            //  var event ;
            //  event.pageIndex = 0;
            this.data = this.appService.getPropertyStatuses();
            this.loaddata();
            this.loaddata2();
            this.getparameters();
            const parameters = yield this.accomodationservice.getAccommodationBookingsParameters(this.propertyId).toPromise();
            this.parameters = parameters;
            console.log('hna:', this.parameters);
            this.submitForm = this.fb.group({
                additional: this.fb.group({
                    parameters: this.buildParameters(),
                })
            });
        });
    }
    buildParameters() {
        const arr = this.parameters.map(parameter => {
            return this.fb.group({
                valuertext: null,
                valeurbool: null,
                valeurnumber: null,
                id: parameter.id
            });
        });
        return this.fb.array(arr);
    }
    propertyType(data) {
        return this.data[parseInt(data)].name;
    }
    submitparameters() {
        var data = [];
        var arrayControl = this.submitForm.get(['additional', 'parameters']).value;
        arrayControl.forEach(element => {
            if (element.valuertext != null && element.valuertext != '') {
                data.push({ valueText: element.valuertext, customFieldId: element.id });
            }
            else if (element.valeurbool != null && element.valeurbool != '') {
                data.push({ valueBoolean: JSON.parse(element.valeurbool), customFieldId: element.id });
            }
            else if (element.valuernumber != null && element.valuernumber != '') {
                data.push({ valueNumber: element.valuertext, customFieldId: element.id });
            }
            else
                data.push({ customFieldId: element.id });
        });
        this.accomodationservice.putAcommodation(this.propertyId, { accommodationFieldValues: data }).subscribe(res => {
            if (res) {
                this.snackBar.open("Champ ajouter !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
            }
            else
                this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        });
    }
    get formRow() {
        return this.submitForm.get(['additional', 'parameters']);
    }
    loaddata() {
        this.accomodationservice.getAccommodationBookingsToValidate(this.propertyId).subscribe(res => {
            if (!res) {
                return;
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    loaddata2() {
        this.accomodationservice.getAccommodationBookings(this.propertyId, { page: 0, order: 'desc' }).subscribe(res => {
            if (!res) {
                return;
            }
            this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(res['items']);
            this.dataSource2.paginator = this.paginator2;
            this.dataSource2.sort = this.sort2;
        });
    }
    getstatut() {
    }
    initDataSource(data) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    validatereservation(id) {
        this.reservationservice.putReservations(id, { bookingStatus: 2 }).subscribe(res => {
            this.snackBar.open("Réservation valider !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
            this.ngOnInit();
        });
    }
    cancelreservation(id) {
        this.reservationservice.putReservations(id, { bookingStatus: 1 }).subscribe(res => {
            this.snackBar.open("Reservation annuler !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
            this.ngOnInit();
        });
    }
    getstatuts(a) {
        return this.satuts[a];
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onSelect(event) {
        this.selectedDate = event;
    }
    dateClass() {
        return (date) => {
            for (let index = 0; index < this.end.length; index++) {
                const start = this.end[index].start;
                const end = this.end[index].end;
                if (date >= start && date <= end)
                    return 'special-date';
            }
            return '';
        };
    }
    push(dateRangeStart, dateRangeEnd) {
        this.end.push({ start: new Date(dateRangeStart.value), end: new Date(dateRangeEnd.value) });
        this.dateClass();
    }
    clear() {
        this.end = [];
        this.dateClass();
    }
    submitslots() {
        if (this.end.length > 0) {
            this.end.forEach(element => {
                this.start.push({ start: element.start, end: element.end });
            });
            this.accomodationservice.putAcommodation(this.propertyId, { unavailableSlots: this.start }).subscribe(res => {
                if (res) {
                    this.snackBar.open("Planning Modifier !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
                }
                else
                    this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
                this.ngOnInit();
                this.end = [];
            });
        }
        else
            alert('aucun element a ajouter !');
    }
    getparameters() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // this.parameters = await this.accomodationservice.getAccommodationBookingsParameters(this.propertyId).toPromise();
        });
    }
    remove(ids) {
        this.datamessages['nearby'] = this.datamessages['nearby'].filter(({ id }) => id !== ids);
        this.accomodationservice.putAcommodation(this.propertyId, { nearby: this.datamessages['nearby'] }).subscribe();
        this.nearbyservice.deleteNearby(ids).subscribe();
        ;
        console.log(this.datamessages['nearby']);
        this.messages = [];
        this.ngOnInit();
    }
};
HostComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_3__.AccommodationsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_reservations_service__WEBPACK_IMPORTED_MODULE_5__.ReservationsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_nearby_service__WEBPACK_IMPORTED_MODULE_4__.NearbyService },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar }
];
HostComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, { static: true },] }],
    paginator2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, { static: true },] }],
    sort2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, { static: true },] }]
};
HostComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-host',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_host_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_host_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HostComponent);



/***/ }),

/***/ 33253:
/*!*******************************************!*\
  !*** ./src/app/pages/host/host.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "HostModule": () => (/* binding */ HostModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-input-file */ 47869);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _host_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./host.component */ 14970);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 79391);









const routes = [
    {
        path: '',
        component: _host_component__WEBPACK_IMPORTED_MODULE_1__.HostComponent, children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
        ]
    }
];
let HostModule = class HostModule {
};
HostModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _host_component__WEBPACK_IMPORTED_MODULE_1__.HostComponent
        ],
        exports: [
            _host_component__WEBPACK_IMPORTED_MODULE_1__.HostComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_6__.InputFileModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmCoreModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
        ]
    })
], HostModule);



/***/ }),

/***/ 95693:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/host/host.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"px-3\">\r\n\r\n    <div class=\"theme-container\">\r\n        <mat-card class=\"main-content-header mb-5\">\r\n            <mat-tab-group>\r\n                <mat-tab label=\"Réservation en attente\">\r\n\r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\"\r\n                            autocomplete=\"off\">\r\n                    </mat-form-field>\r\n                    <div class=\"table-wrapper\">\r\n                        <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n\r\n                            <ng-container matColumnDef=\"Arrive\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date d'arrivée </th>\r\n                                <td mat-cell *matCellDef=\"let element \"><a\r\n                                        [routerLink]=\"['/properties', element.accommodationId ]\"\r\n                                        class=\"property-name\">{{element.dateArrival | date: 'dd/MM/yyyy'}}</a></td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"Departure\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date de départ </th>\r\n                                <td mat-cell *matCellDef=\"let element \"><a\r\n                                        [routerLink]=\"['/properties', element.accommodationId ]\"\r\n                                        class=\"property-name\">{{element.dateDeparture | date: 'dd/MM/yyyy'}}</a></td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"name\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>voyageur</th>\r\n                                <td mat-cell *matCellDef=\"let element \"><a\r\n                                        [routerLink]=\"['/properties', element.accommodationId ]\"\r\n                                        class=\"property-name\">{{element.user.firstName}} {{element.user.lastName}}</a>\r\n                                </td>\r\n                            </ng-container>\r\n\r\n\r\n                            <ng-container matColumnDef=\"actions\">\r\n                                <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n                                <td mat-cell *matCellDef=\"let element\">\r\n                                    <button mat-icon-button color=\"warn\" (click)=\"validatereservation(element.id)\"\r\n                                        matTooltip=\"Valider\" class=\"remove\">\r\n                                        <mat-icon>event_available</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button color=\"primary\" (click)=\"cancelreservation(element.id)\"\r\n                                        matTooltip=\"Annuler\" class=\"remove\">\r\n                                        <mat-icon>event_busy</mat-icon>\r\n                                    </button>\r\n\r\n\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                            <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n                            </tr>\r\n                        </table>\r\n                        <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">Pas de données disponibles</p>\r\n                    </div>\r\n                    <mat-paginator [pageSizeOptions]=\"[20]\" showFirstLastButtons></mat-paginator>\r\n\r\n\r\n                </mat-tab>\r\n                <mat-tab label=\"Historique des réservations\">\r\n\r\n\r\n\r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\"\r\n                            autocomplete=\"off\">\r\n                    </mat-form-field>\r\n                    <div class=\"table-wrapper\">\r\n                        <table mat-table [dataSource]=\"dataSource2\" matSort class=\"w-100\">\r\n\r\n                            <ng-container matColumnDef=\"Arrive\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date d'arrivée </th>\r\n                                <td mat-cell *matCellDef=\"let element \"><a\r\n                                        [routerLink]=\"['/properties', element.accommodationId ]\"\r\n                                        class=\"property-name\">{{element.dateArrival | date: 'dd/MM/yyyy'}}</a></td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"Departure\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date de départ </th>\r\n                                <td mat-cell *matCellDef=\"let element \"><a\r\n                                        [routerLink]=\"['/properties', element.accommodationId ]\"\r\n                                        class=\"property-name\">{{element.dateDeparture | date: 'dd/MM/yyyy'}}</a></td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"name\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>voyageur</th>\r\n                                <td mat-cell *matCellDef=\"let element \"><a\r\n                                        [routerLink]=\"['/properties', element.accommodationId ]\"\r\n                                        class=\"property-name\">{{element.user.firstName}} {{element.user.lastName}}</a>\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"Status\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Statut de la réservation</th>\r\n                                <td mat-cell *matCellDef=\"let element \"><a\r\n                                        [routerLink]=\"['/properties', element.accommodationId ]\"\r\n                                        class=\"property-name\">{{getstatuts(element.bookingStatus)}}</a>\r\n                                </td>\r\n                            </ng-container>\r\n\r\n\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n                            <tr mat-row *matRowDef=\"let property; columns: displayedColumns2;\">\r\n                            </tr>\r\n                        </table>\r\n                        <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">Pas de données disponibles</p>\r\n                    </div>\r\n                    <mat-paginator [pageSizeOptions]=\"[20]\" showFirstLastButtons></mat-paginator>\r\n\r\n                </mat-tab>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <mat-tab label=\"Gérer les disponibilités\" >\r\n\r\n                    <h2 style=\"margin: 2%;color:white;\"> Gérer les disponibilités</h2>\r\n\r\n                    <mat-form-field appearance=\"fill\" style=\"margin-left: 2%;\">\r\n                        <mat-label>Enter une date</mat-label>\r\n                        <mat-date-range-input [rangePicker]=\"picker\" [dateFilter]=\"myFilter\">\r\n                            <input matStartDate #dateRangeStart placeholder=\"Start date\">\r\n                            <input matEndDate #dateRangeEnd placeholder=\"End date\">\r\n                        </mat-date-range-input>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-date-range-picker #picker [dateClass]=\"dateClass()\" (selectedChange)=\"onSelect($event)\">\r\n                            <mat-date-range-picker-actions>\r\n                                <button mat-button matDateRangePickerCancel (click)=\"clear()\">Annuler</button>\r\n                                <button mat-raised-button color=\"primary\" matDateRangePickerApply\r\n                                    (click)=\"push(dateRangeStart, dateRangeEnd)\">Appliquer</button>\r\n                            </mat-date-range-picker-actions>\r\n                        </mat-date-range-picker>\r\n                    </mat-form-field>\r\n\r\n                    <button style=\"margin-left: 2%;\" mat-raised-button color=\"accent\" type=\"submit\"\r\n                        (click)=\"submitslots()\">Sauvgarder</button>\r\n\r\n                </mat-tab>\r\n                <mat-tab label=\"Informations supplémentaires\">\r\n\r\n                    <div fxFlex=\"100\" class=\"mb-2\" [formGroup]=\"submitForm\" (ngSubmit)=\"submitparameters()\"\r\n                        *ngIf=\"submitForm\">\r\n                        <p class=\"uppercase m-2 fw-500\">Informations supplémentaires</p>\r\n                        <form formGroupName=\"additional\"  style=\"display: table-caption !important;\">\r\n                            <div class=\"pl-lg-4\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-6\">\r\n                                        <div formArrayName=\"parameters\" fxLayout=\"row wrap\">\r\n                                            <div [formGroupName]=\"i\"\r\n                                                *ngFor=\"let control of submitForm.get('additional')['controls'].parameters['controls']; index as i\"\r\n                                                class=\"p-2\">\r\n                                                <!-- <mat-checkbox formControlName=\"selected\" (change)=\"onChange($event)\"  [value]=\"parameters[i].id \">{{parameters[i].name }}</mat-checkbox>-->\r\n                                                <div class=\"form-group\">\r\n                                                    <mat-radio-group *ngIf=\"parameters[i].value == 0\"\r\n                                                        aria-label=\"Select an option\" id=\"parameters[i].id\"\r\n                                                        formControlName=\"valeurbool\" class=\"w-100\">\r\n                                                        <mat-label>{{parameters[i].label}}</mat-label><br>\r\n                                                        <mat-radio-button value=true>Oui</mat-radio-button>\r\n                                                        <mat-radio-button style=\"margin-left: 5%;\" value=false>Non\r\n                                                        </mat-radio-button>\r\n                                                    </mat-radio-group>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                    <mat-form-field *ngIf=\"parameters[i].value == 1\"\r\n                                                        appearance=\"outline\" class=\"w-100\">\r\n                                                        <mat-label>{{parameters[i].label}}</mat-label>\r\n                                                        <input matInput id=\"parameters[i].id\"\r\n                                                            formControlName=\"valuertext\" type=\"text\" autocomplete=\"off\">\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n\r\n                                                    <mat-form-field *ngIf=\"parameters[i].value == 2\"\r\n                                                        appearance=\"outline\" class=\"w-100\">\r\n                                                        <mat-label>{{parameters[i].label}}</mat-label>\r\n                                                        <input matInput id=\"parameters[i].id\"\r\n                                                            formControlName=\"valuernumber\" type=\"tel\"\r\n                                                            autocomplete=\"off\">\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </div>\r\n                                            <button mat-raised-button  class=\"col-12 text-right\" type=\"submit\" color=\"primary\">Sauvgarder</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n\r\n                </mat-tab>\r\n                <mat-tab label =\"Messages\">\r\n                    <mat-card class=\"p-5 mt-5\">\r\n                        <mat-card-header fxLayoutAlign=\"center center\">\r\n                            <mat-card-title class=\"uppercase\">Messages</mat-card-title>\r\n                        </mat-card-header>\r\n                        <div class=\"divider\"></div>\r\n                        <div>\r\n                            <mat-list class=\"reviews mt-3\">\r\n                                <mat-list-item *ngFor=\"let message of messages\" class=\"h-100\">\r\n                                    <!--   <img matListAvatar [src]=\"review.avatar\" alt=\"image\" class=\"review-author\"> -->\r\n                                    <p matLine fxLayoutAlign=\"start center\">\r\n                                        <span class=\"fw-500\">{{message.name}}</span> <span\r\n                                            style=\"margin-left: 1%;\">\r\n                                        </span>\r\n                                        <mat-icon class=\"text-muted px-1\"  matTooltipPosition=\"after\">\r\n                                            message</mat-icon>\r\n                                    </p>\r\n                                    <p matLine class=\"text-muted\"><small>{{message.date | date: 'dd/MM/yyyy'}}</small></p>\r\n                                    <p matLine class=\"text\">{{message.message}}</p>\r\n                                    <button mat-icon-button color=\"warn\" (click)=\"remove(message.id)\"\r\n                                    matTooltip=\"Supprimer\" class=\"remove\">\r\n                                    <mat-icon>done</mat-icon>\r\n                                </button>\r\n                                </mat-list-item>\r\n                            </mat-list>\r\n                        </div>\r\n                    </mat-card>    \r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </mat-card>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ 99479:
/*!************************************************!*\
  !*** ./src/app/pages/host/host.component.scss ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".special-date {\n  background-color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKIiwiZmlsZSI6Imhvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlY2lhbC1kYXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_host_host_module_ts.js.map