"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 76542:
/*!****************************************************!*\
  !*** ./src/app/models/CustomField/custom-field.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomField": () => (/* binding */ CustomField)
/* harmony export */ });
class CustomField {
}


/***/ }),

/***/ 28663:
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./account.component.html */ 49728);
/* harmony import */ var _account_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.component.scss */ 46540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ 43493);






let AccountComponent = class AccountComponent {
    constructor(router, UserService) {
        this.router = router;
        this.UserService = UserService;
        this.psConfig = {
            wheelPropagation: true
        };
        this.sidenavOpen = true;
        this.links = [];
        this.name = "";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (window.innerWidth < 960) {
                this.sidenavOpen = false;
            }
            ;
            this.links.push({ name: 'Profil', href: 'profile', icon: 'person' });
            this.links.push({ name: 'Mes reservations', href: 'bookings', icon: 'book' });
            if (localStorage.getItem('isadmin') == 'true')
                this.links.push({ name: 'Logements', href: 'logements', icon: 'home' });
            if (localStorage.getItem('isadmin') == 'true')
                this.links.push({ name: 'Paramètres', href: 'custom', icon: 'settings' });
            this.links.push({ name: 'Mes logements', href: 'my-properties', icon: 'view_list' });
            if (localStorage.getItem('isadmin') == 'true')
                this.links.push({ name: 'Gérer les équipements', href: 'equipment', icon: 'fitbit' });
            this.links.push({ name: 'Ajouter un logement', href: '/submit-property', icon: 'add_circle' });
            if (localStorage.getItem('isadmin') == 'true')
                this.links.push({ name: 'Gérer les comptes', href: 'users', icon: 'group' });
            this.links.push({ name: 'Se déconecter', href: '/login', icon: 'power_settings_new' });
            var data = yield this.UserService.getUsersprofile().toPromise();
            this.name = data['firstName'] + ' ' + data['lastName'];
        });
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                if (window.innerWidth < 960) {
                    this.sidenav.close();
                }
            }
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
AccountComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['sidenav',] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.HostListener, args: ['window:resize',] }]
};
AccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_account_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountComponent);



/***/ }),

/***/ 8715:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-input-file */ 47869);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.component */ 28663);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 58188);
/* harmony import */ var _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-properties/my-properties.component */ 15222);
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorites/favorites.component */ 12526);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ 28763);
/* harmony import */ var _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-property/edit-property.component */ 13593);
/* harmony import */ var _logements_logements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logements/logements.component */ 6204);
/* harmony import */ var _custom_fields_custom_fields_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-fields/custom-fields.component */ 53413);
/* harmony import */ var _custom_fields_add_custom_field_add_custom_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-fields/add-custom-field/add-custom-field.component */ 94701);
/* harmony import */ var _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./equipments/equipments.component */ 56786);
/* harmony import */ var _equipments_add_equipment_add_equipment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./equipments/add-equipment/add-equipment.component */ 95312);
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bookings/bookings.component */ 37668);
/* harmony import */ var _bookings_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bookings/add-comment/add-comment.component */ 80130);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users/users.component */ 44407);
/* harmony import */ var _users_edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/edit-users/edit-users.component */ 81800);
/* harmony import */ var src_app_shared_upload_manager_upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/upload-manager/upload-task/upload-task.component */ 25643);
/* harmony import */ var src_app_shared_upload_manager_upload_manager_upload_manager_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/upload-manager/upload-manager/upload-manager.component */ 58446);
























const routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent, children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'my-properties', component: _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_3__.MyPropertiesComponent },
            { path: 'my-properties/:id', component: _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_6__.EditPropertyComponent },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent },
            { path: 'logements', component: _logements_logements_component__WEBPACK_IMPORTED_MODULE_7__.LogementsComponent },
            { path: 'equipment', component: _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_10__.EquipmentsComponent },
            { path: 'custom', component: _custom_fields_custom_fields_component__WEBPACK_IMPORTED_MODULE_8__.CustomFieldsComponent },
            { path: 'bookings', component: _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__.BookingsComponent },
            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_14__.UsersComponent },
        ]
    }
];
let AccountModule = class AccountModule {
};
AccountModule = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgModule)({
        declarations: [
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, src_app_shared_upload_manager_upload_manager_upload_manager_component__WEBPACK_IMPORTED_MODULE_17__.UploadManagerComponent,
            _account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent,
            _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_3__.MyPropertiesComponent,
            _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__.FavoritesComponent,
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent,
            _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_6__.EditPropertyComponent, src_app_shared_upload_manager_upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_16__.UploadTaskComponent, _logements_logements_component__WEBPACK_IMPORTED_MODULE_7__.LogementsComponent, _custom_fields_custom_fields_component__WEBPACK_IMPORTED_MODULE_8__.CustomFieldsComponent, _custom_fields_add_custom_field_add_custom_field_component__WEBPACK_IMPORTED_MODULE_9__.AddCustomFieldComponent, _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_10__.EquipmentsComponent, _equipments_add_equipment_add_equipment_component__WEBPACK_IMPORTED_MODULE_11__.AddEquipmentComponent, _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__.BookingsComponent, _bookings_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_13__.AddCommentComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_14__.UsersComponent, _users_edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__.EditUsersComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_22__.InputFileModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_23__.AgmCoreModule
        ]
    })
], AccountModule);



/***/ }),

/***/ 80130:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/account/bookings/add-comment/add-comment.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCommentComponent": () => (/* binding */ AddCommentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_comment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-comment.component.html */ 87938);
/* harmony import */ var _add_comment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-comment.component.scss */ 99412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 46298);





let AddCommentComponent = class AddCommentComponent {
    constructor(data) {
        this.data = data;
        this.id = 0;
    }
    ngOnInit() {
        this.id = this.data.id;
        localStorage.setItem('accomodattionId', this.id.toString());
    }
};
AddCommentComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA,] }] }
];
AddCommentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-add-comment',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_comment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_comment_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddCommentComponent);



/***/ }),

/***/ 37668:
/*!**************************************************************!*\
  !*** ./src/app/pages/account/bookings/bookings.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsComponent": () => (/* binding */ BookingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bookings_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./bookings.component.html */ 73568);
/* harmony import */ var _bookings_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.component.scss */ 58984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ 43493);
/* harmony import */ var _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-comment/add-comment.component */ 80130);











let BookingsComponent = class BookingsComponent {
    constructor(appService, usersservice, dialog) {
        this.appService = appService;
        this.usersservice = usersservice;
        this.dialog = dialog;
        this.displayedColumns = ['Arrive', 'Departure', 'Price', 'Status', 'actions'];
        this.satuts = ['En attente', 'Annulé', 'Validé'];
        this.list = [];
    }
    ngOnInit() {
        /* this.appService.getProperties().subscribe(res => {
           this.initDataSource(res);
         });    */
        //  var event ;
        //  event.pageIndex = 0;
        this.data = this.appService.getPropertyStatuses();
        this.loaddata(0);
    }
    propertyType(data) {
        return this.data[parseInt(data)].name;
    }
    loaddata(val) {
        this.usersservice.getUsersbookings({ page: val, order: 'desc' }).subscribe(res => {
            if (!res) {
                return;
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res['items']);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    initDataSource(data) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
    onPaginateChange(event) {
        this.loaddata(JSON.stringify(event.pageIndex));
        //alert(JSON.stringify("Current page index: " + event.pageIndex));
    }
    openDialog(id) {
        localStorage.setItem('propertyId', id);
        const dialogRef = this.dialog.open(_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_4__.AddCommentComponent, {
            width: '800px',
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.libelle = result;
            this.ngOnInit();
        });
    }
    compare(date) {
        var date1 = new Date(date);
        if (date1 <= new Date()) {
            return true;
        }
        return false;
    }
};
BookingsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog }
];
BookingsComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, { static: true },] }]
};
BookingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-bookings',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bookings_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bookings_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookingsComponent);



/***/ }),

/***/ 94701:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/account/custom-fields/add-custom-field/add-custom-field.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomFieldComponent": () => (/* binding */ AddCustomFieldComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_custom_field_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-custom-field.component.html */ 46317);
/* harmony import */ var _add_custom_field_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-custom-field.component.scss */ 62054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/custom-fields.service */ 27295);








let AddCustomFieldComponent = class AddCustomFieldComponent {
    constructor(dialogRef, customfieldsservice, formBuilder, appService) {
        this.dialogRef = dialogRef;
        this.customfieldsservice = customfieldsservice;
        this.formBuilder = formBuilder;
        this.appService = appService;
        this.propertyStatuses = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            valeur: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        this.propertyStatuses = this.appService.getPropertyStatuses();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        var kinds = [{ kind: this.form.value.type }];
        const values = { value: this.form.value.valeur, label: this.form.value.nom, customFieldKinds: kinds, description: this.form.value.desc };
        console.log('Ajouter :', values);
        this.customfieldsservice.postCustomField(values).subscribe(res => {
            console.log('Ajouter : ', res);
            this.onNoClick();
        }, err => {
            console.log(err);
        });
    }
};
AddCustomFieldComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef },
    { type: src_app_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_3__.CustomFieldsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
AddCustomFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-custom-field',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_custom_field_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_custom_field_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddCustomFieldComponent);



/***/ }),

/***/ 53413:
/*!************************************************************************!*\
  !*** ./src/app/pages/account/custom-fields/custom-fields.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomFieldsComponent": () => (/* binding */ CustomFieldsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_fields_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-fields.component.html */ 65383);
/* harmony import */ var _custom_fields_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-fields.component.scss */ 43140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var src_app_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/custom-fields.service */ 27295);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _add_custom_field_add_custom_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-custom-field/add-custom-field.component */ 94701);











let CustomFieldsComponent = class CustomFieldsComponent {
    constructor(appService, customfieldsservice, dialog) {
        this.appService = appService;
        this.customfieldsservice = customfieldsservice;
        this.dialog = dialog;
        this.displayedColumns = ['Title', 'Value', 'actions'];
        this.data = ['Booleen', 'Texte', 'Nombre'];
        this.list = [];
    }
    ngOnInit() {
        /* this.appService.getProperties().subscribe(res => {
           this.initDataSource(res);
         });    */
        //  var event ;
        //  event.pageIndex = 0;
        this.loaddata(0);
    }
    propertyType(data) {
        return this.data[parseInt(data)];
    }
    loaddata(val) {
        this.customfieldsservice.getCustomFields().subscribe(res => {
            if (!res) {
                return;
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_add_custom_field_add_custom_field_component__WEBPACK_IMPORTED_MODULE_4__.AddCustomFieldComponent, {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.libelle = result;
            this.ngOnInit();
        });
    }
    initDataSource(data) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    remove(element) {
        // const index: number = this.dataSource.data.indexOf(element.id);    
        if (element !== -1) {
            const message = 'Etes Vous sur ?';
            let dialogRef = this.appService.openConfirmDialog(null, message);
            dialogRef.afterClosed().subscribe(dialogResult => {
                if (dialogResult) {
                    // this.dataSource.data.splice(index,1);
                    // this.initDataSource(this.dataSource.data); 
                    this.customfieldsservice.deleteCustomField(element).subscribe(res => {
                        this.ngOnInit();
                    });
                }
            });
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onPaginateChange(event) {
        this.loaddata(JSON.stringify(event.pageIndex));
        //alert(JSON.stringify("Current page index: " + event.pageIndex));
    }
};
CustomFieldsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: src_app_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_3__.CustomFieldsService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog }
];
CustomFieldsComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, { static: true },] }]
};
CustomFieldsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-custom-fields',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_fields_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_custom_fields_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomFieldsComponent);



/***/ }),

/***/ 58188:
/*!****************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.component.html */ 80303);
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ 3182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardComponent);



/***/ }),

/***/ 13593:
/*!************************************************************************!*\
  !*** ./src/app/pages/account/edit-property/edit-property.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPropertyComponent": () => (/* binding */ EditPropertyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_property_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-property.component.html */ 40925);
/* harmony import */ var _edit_property_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-property.component.scss */ 52914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var src_app_models_Accommodation_accommodation_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Accommodation/accommodation-create */ 57856);
/* harmony import */ var src_app_models_adress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/adress */ 23223);
/* harmony import */ var src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/accommodations.service */ 45854);
/* harmony import */ var src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/devices.service */ 33965);
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/upload.service */ 13205);













let EditPropertyComponent = class EditPropertyComponent {
    constructor(appService, fb, mapsAPILoader, ngZone, globalservice, accomodationservice, activatedRoute, devicesservice) {
        this.appService = appService;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.globalservice = globalservice;
        this.accomodationservice = accomodationservice;
        this.activatedRoute = activatedRoute;
        this.devicesservice = devicesservice;
        this.features = [];
        this.donne = [];
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
        this.acomodationcreate = new src_app_models_Accommodation_accommodation_create__WEBPACK_IMPORTED_MODULE_3__.AccommodationCreate();
        this.adress = new src_app_models_adress__WEBPACK_IMPORTED_MODULE_4__.Adress();
    }
    onChange(event) {
        // this.feature = <any>this.submitForm.get('additional.features').value as any;
        if (event.checked) {
            this.feature.push({ deviceId: event.source.value });
        }
        else {
            const i = this.feature.findIndex((x) => x.value === event.source.value);
            this.feature.splice(i);
        }
    }
    submitstep1() {
        console.log(this.submitForm.get('basic.propertyType').value);
        this.acomodationcreate.kind = this.submitForm.get('basic.propertyType').value;
        this.acomodationcreate.size = this.submitForm.get('basic.propertyStatus').value;
        this.acomodationcreate.step = 2;
        this.sub = this.activatedRoute.params.subscribe((params) => {
            this.id = params['id'];
        });
        this.submitstep6();
    }
    submitstep2() {
        console.log(this.submitForm.get('address.city').value);
        this.adress.city = this.submitForm.get('address.city').value;
        this.adress.postalCode = this.submitForm.get('address.zipCode').value;
        this.adress.street = this.submitForm.get('address.street').value;
        this.adress.addressComplement = this.submitForm.get('address.neighborhood').value;
        this.adress.step = 3;
        this.accomodationservice
            .putAcommodation(this.id, { address: this.adress, step: 3 })
            .subscribe((res) => { });
    }
    submitstep3() {
        this.accomodationservice
            .putAcommodation(this.id, {
            bathrooms: Number(this.submitForm.get('additional.bathrooms').value),
            bedrooms: Number(this.submitForm.get('additional.bathrooms').value),
            beds: Number(this.submitForm.get('additional.area').value),
            travelers: Number(this.submitForm.get('additional.garages').value),
            step: 4,
        })
            .subscribe((res) => { });
        this.submitstep4();
    }
    submitstep4() {
        var json = Object.assign({}, this.feature);
        this.accomodationservice
            .putAcommodation(this.id, { equipments: this.feature, step: 5 })
            .subscribe((res) => { });
        this.globalservice.clear();
    }
    submitstep5() {
        this.accomodationservice
            .putAcommodation(this.id, {
            photos: this.globalservice.getMyGV(),
            step: 6,
        })
            .subscribe((res) => {
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
        this.accomodationservice
            .putAcommodation(this.id, {
            title: this.submitForm.get('basic.title').value,
            description: this.submitForm.get('basic.desc').value,
            step: 7,
        })
            .subscribe((res) => {
            this.submitstep7();
        });
    }
    submitstep7() {
        this.accomodationservice
            .putAcommodation(this.id, {
            price: this.submitForm.get('basic.priceEuro').value,
            step: 8,
        })
            .subscribe((res) => { });
    }
    submitstep8() {
        this.accomodationservice
            .putAcommodation(this.id, { stauts: 1, step: 9 })
            .subscribe((res) => { });
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
        else {
            /* unselected */
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
            const data = yield this.devicesservice.getDevices().toPromise();
            this.features = data;
        });
    }
    setfeatures(id, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.features.push({ id: id, name: name });
        });
    }
    load() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.accomodationservice.getAccommodation(this.id).toPromise();
            this.donne = data;
            console.log('donne', this.donne);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // this.features = JSON.a;
            this.sub = this.activatedRoute.params.subscribe(params => {
                this.id = params['id'];
            });
            yield this.loaddata();
            yield this.load();
            console.log('donne', this.donne);
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
                    city: [this.donne['address'].city, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    zipCode: this.donne['address'].postalCode,
                    neighborhood: '',
                    street: this.donne['address'].street,
                }),
                additional: this.fb.group({
                    bedrooms: this.donne['bedrooms'],
                    bathrooms: this.donne['bathrooms'],
                    garages: this.donne['travelers'],
                    area: this.donne['beds'],
                    yearBuilt: '',
                    features: this.buildFeatures(),
                }),
                media: this.fb.group({
                    videos: this.fb.array([this.createVideo()]),
                    plans: this.fb.array([this.createPlan()]),
                    additionalFeatures: this.fb.array([this.createFeature()]),
                    featured: false,
                }),
            });
            this.setCurrentPosition();
            this.placesAutocomplete();
        });
    }
    onSelectionChange(e) {
        if (e.selectedIndex == 4) {
            this.horizontalStepper._steps.forEach((step) => (step.editable = false));
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
        const additionalFeatures = (this.submitForm.controls.media.get('additionalFeatures'));
        while (additionalFeatures.length > 1) {
            additionalFeatures.removeAt(0);
        }
        this.submitForm.reset({
            additional: {
                features: this.features,
            },
            media: {
                featured: false,
            },
        });
    }
    // -------------------- Address ---------------------------
    onSelectCity() {
        this.submitForm.controls.address
            .get('neighborhood')
            .setValue(null, { emitEvent: false });
        this.submitForm.controls.address
            .get('street')
            .setValue(null, { emitEvent: false });
    }
    onSelectNeighborhood() {
        this.submitForm.controls.address
            .get('street')
            .setValue(null, { emitEvent: false });
    }
    setCurrentPosition() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
    placesAutocomplete() {
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.addressAutocomplete.nativeElement, {
                types: ['address'],
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
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
        this.appService.getAddress(this.lat, this.lng).subscribe((response) => {
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
        result.address_components.forEach((item) => {
            if (item.types.indexOf('locality') > -1) {
                if (this.cities.filter((city) => city.name == item.long_name)[0]) {
                    newCity = this.cities.filter((city) => city.name == item.long_name)[0];
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
            result.address_components.forEach((item) => {
                if (item.types.indexOf('administrative_area_level_1') > -1) {
                    if (this.cities.filter((city) => city.name == item.long_name)[0]) {
                        newCity = this.cities.filter((city) => city.name == item.long_name)[0];
                    }
                    else {
                        newCity = {
                            id: this.cities.length + 1,
                            name: item.long_name,
                        };
                        this.cities.push(newCity);
                    }
                    this.submitForm.controls.address.get('city').setValue(newCity);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach((item) => {
                if (item.types.indexOf('neighborhood') > -1) {
                    let neighborhood = this.neighborhoods.filter((n) => n.name == item.long_name && n.cityId == newCity.id)[0];
                    if (neighborhood) {
                        newNeighborhood = neighborhood;
                    }
                    else {
                        newNeighborhood = {
                            id: this.neighborhoods.length + 1,
                            name: item.long_name,
                            cityId: newCity.id,
                        };
                        this.neighborhoods.push(newNeighborhood);
                    }
                    this.neighborhoods = [...this.neighborhoods];
                    this.submitForm.controls.address
                        .get('neighborhood')
                        .setValue([newNeighborhood]);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach((item) => {
                if (item.types.indexOf('route') > -1) {
                    if (this.streets.filter((street) => street.name == item.long_name && street.cityId == newCity.id)[0]) {
                        newStreet = this.streets.filter((street) => street.name == item.long_name && street.cityId == newCity.id)[0];
                    }
                    else {
                        newStreet = {
                            id: this.streets.length + 1,
                            name: item.long_name,
                            cityId: newCity.id,
                            neighborhoodId: newNeighborhood ? newNeighborhood.id : null,
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
        const arr = this.features.map((feature) => {
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
            link: null,
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
            image: null,
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
            value: null,
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
EditPropertyComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_10__.MapsAPILoader },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone },
    { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_7__.UploadService },
    { type: src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_5__.AccommodationsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_6__.DevicesService }
];
EditPropertyComponent.propDecorators = {
    horizontalStepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['horizontalStepper',] }],
    addressAutocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['addressAutocomplete',] }]
};
EditPropertyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-edit-property',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_property_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_property_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditPropertyComponent);



/***/ }),

/***/ 95312:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/account/equipments/add-equipment/add-equipment.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEquipmentComponent": () => (/* binding */ AddEquipmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_equipment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-equipment.component.html */ 20618);
/* harmony import */ var _add_equipment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-equipment.component.scss */ 40185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/devices.service */ 33965);








let AddEquipmentComponent = class AddEquipmentComponent {
    constructor(dialogRef, devicesservice, formBuilder, appService) {
        this.dialogRef = dialogRef;
        this.devicesservice = devicesservice;
        this.formBuilder = formBuilder;
        this.appService = appService;
        this.propertyStatuses = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.propertyStatuses = this.appService.getPropertyStatuses();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        var kinds = [{ kind: this.form.value.type }];
        const values = { category: 0, name: this.form.value.nom };
        console.log('Ajouter :', values);
        this.devicesservice.postDevices(values).subscribe(res => {
            console.log('Ajouter : ', res);
            this.onNoClick();
        }, err => {
            console.log(err);
        });
    }
};
AddEquipmentComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef },
    { type: src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_3__.DevicesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
AddEquipmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-equipment',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_equipment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_equipment_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEquipmentComponent);



/***/ }),

/***/ 56786:
/*!******************************************************************!*\
  !*** ./src/app/pages/account/equipments/equipments.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentsComponent": () => (/* binding */ EquipmentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_equipments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./equipments.component.html */ 33484);
/* harmony import */ var _equipments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipments.component.scss */ 41553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/devices.service */ 33965);
/* harmony import */ var _add_equipment_add_equipment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-equipment/add-equipment.component */ 95312);











let EquipmentsComponent = class EquipmentsComponent {
    constructor(appService, devicesservice, dialog) {
        this.appService = appService;
        this.devicesservice = devicesservice;
        this.dialog = dialog;
        this.displayedColumns = ['Title', 'actions'];
        this.data = ['Booleen', 'Texte', 'Nombre'];
        this.list = [];
    }
    ngOnInit() {
        /* this.appService.getProperties().subscribe(res => {
           this.initDataSource(res);
         });    */
        //  var event ;
        //  event.pageIndex = 0;
        this.loaddata(0);
    }
    propertyType(data) {
        return this.data[parseInt(data)];
    }
    loaddata(val) {
        this.devicesservice.getDevices().subscribe(res => {
            if (!res) {
                return;
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_add_equipment_add_equipment_component__WEBPACK_IMPORTED_MODULE_4__.AddEquipmentComponent, {
            width: '800px',
            /* data:{
               id:
             }*/
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.libelle = result;
            this.ngOnInit();
        });
    }
    initDataSource(data) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    remove(element) {
        // const index: number = this.dataSource.data.indexOf(element.id);    
        if (element !== -1) {
            const message = 'Etes Vous sur ?';
            let dialogRef = this.appService.openConfirmDialog(null, message);
            dialogRef.afterClosed().subscribe(dialogResult => {
                if (dialogResult) {
                    // this.dataSource.data.splice(index,1);
                    // this.initDataSource(this.dataSource.data); 
                    this.devicesservice.deleteDevice(element).subscribe(res => {
                        this.ngOnInit();
                    });
                }
            });
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onPaginateChange(event) {
        this.loaddata(JSON.stringify(event.pageIndex));
        //alert(JSON.stringify("Current page index: " + event.pageIndex));
    }
};
EquipmentsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: src_app_services_devices_service__WEBPACK_IMPORTED_MODULE_3__.DevicesService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog }
];
EquipmentsComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, { static: true },] }]
};
EquipmentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-equipments',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_equipments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_equipments_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EquipmentsComponent);



/***/ }),

/***/ 12526:
/*!****************************************************************!*\
  !*** ./src/app/pages/account/favorites/favorites.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesComponent": () => (/* binding */ FavoritesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favorites_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favorites.component.html */ 52945);
/* harmony import */ var _favorites_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.component.scss */ 80903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 73959);








let FavoritesComponent = class FavoritesComponent {
    constructor(appService) {
        this.appService = appService;
        this.displayedColumns = ['id', 'image', 'title', 'actions'];
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.appService.Data.favorites);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    remove(property) {
        const index = this.dataSource.data.indexOf(property);
        if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.dataSource.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
FavoritesComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, { static: true },] }]
};
FavoritesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-favorites',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favorites_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favorites_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavoritesComponent);



/***/ }),

/***/ 6204:
/*!****************************************************************!*\
  !*** ./src/app/pages/account/logements/logements.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogementsComponent": () => (/* binding */ LogementsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logements_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./logements.component.html */ 48764);
/* harmony import */ var _logements_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logements.component.scss */ 60504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/accommodations.service */ 45854);









let LogementsComponent = class LogementsComponent {
    constructor(appService, accomodationservice) {
        this.appService = appService;
        this.accomodationservice = accomodationservice;
        this.displayedColumns = ['Type', 'Title', 'Status', 'actions'];
        this.satuts = ['Brouillon', '	En attente de validation', 'Validé'];
        this.list = [];
    }
    ngOnInit() {
        /* this.appService.getProperties().subscribe(res => {
           this.initDataSource(res);
         });    */
        //  var event ;
        //  event.pageIndex = 0;
        this.data = this.appService.getPropertyStatuses();
        this.loaddata(0);
    }
    propertyType(data) {
        return this.data[parseInt(data)].name;
    }
    loaddata(val) {
        this.accomodationservice.getAccommodationsAll({ page: val, toValidateOnly: false, searchTerm: '' }).subscribe(res => {
            if (!res) {
                return;
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(res['items']);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    initDataSource(data) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    remove(element) {
        // const index: number = this.dataSource.data.indexOf(element.id);    
        if (element !== -1) {
            const message = 'Etes Vous sur ?';
            let dialogRef = this.appService.openConfirmDialog(null, message);
            dialogRef.afterClosed().subscribe(dialogResult => {
                if (dialogResult) {
                    // this.dataSource.data.splice(index,1);
                    // this.initDataSource(this.dataSource.data); 
                    this.accomodationservice.deleteAcommodation(element).subscribe(res => {
                        this.ngOnInit();
                    });
                }
            });
        }
    }
    updatestatuts(element) {
        // const index: number = this.dataSource.data.indexOf(element.id);    
        if (element !== -1) {
            const message = 'Publier ce logement ?';
            let dialogRef = this.appService.openConfirmDialog(null, message);
            dialogRef.afterClosed().subscribe(dialogResult => {
                if (dialogResult) {
                    // this.dataSource.data.splice(index,1);
                    // this.initDataSource(this.dataSource.data); 
                    this.accomodationservice.putAcommodation(element, { status: 2 }).subscribe(res => {
                        this.ngOnInit();
                    });
                }
            });
        }
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
    onPaginateChange(event) {
        this.loaddata(JSON.stringify(event.pageIndex));
        //alert(JSON.stringify("Current page index: " + event.pageIndex));
    }
};
LogementsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_3__.AccommodationsService }
];
LogementsComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, { static: true },] }]
};
LogementsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-logements',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logements_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_logements_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogementsComponent);



/***/ }),

/***/ 15222:
/*!************************************************************************!*\
  !*** ./src/app/pages/account/my-properties/my-properties.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPropertiesComponent": () => (/* binding */ MyPropertiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_properties_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-properties.component.html */ 88372);
/* harmony import */ var _my_properties_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-properties.component.scss */ 23386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/accommodations.service */ 45854);









let MyPropertiesComponent = class MyPropertiesComponent {
    constructor(appService, accomodationservice) {
        this.appService = appService;
        this.accomodationservice = accomodationservice;
        this.displayedColumns = ['Type', 'Title', 'Status', 'image', 'actions'];
        this.satuts = ['Poursuivre la création', '	En attente de validation', 'Publié'];
        this.list = [];
    }
    ngOnInit() {
        /* this.appService.getProperties().subscribe(res => {
           this.initDataSource(res);
         });    */
        //  var event ;
        //  event.pageIndex = 0;
        this.data = this.appService.getPropertyStatuses();
        this.loaddata(0);
    }
    propertyType(data) {
        return this.data[parseInt(data)].name;
    }
    loaddata(val) {
        this.accomodationservice.getAccommodationsHosts().subscribe(res => {
            if (!res) {
                return;
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    initDataSource(data) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    remove(element) {
        // const index: number = this.dataSource.data.indexOf(element.id);    
        if (element !== -1) {
            const message = 'Etes Vous sur ?';
            let dialogRef = this.appService.openConfirmDialog(null, message);
            dialogRef.afterClosed().subscribe(dialogResult => {
                if (dialogResult) {
                    // this.dataSource.data.splice(index,1);
                    // this.initDataSource(this.dataSource.data); 
                    this.accomodationservice.deleteAcommodation(element).subscribe(res => {
                        this.ngOnInit();
                    });
                }
            });
        }
    }
    updatestatuts(element) {
        // const index: number = this.dataSource.data.indexOf(element.id);    
        if (element !== -1) {
            const message = 'Publier ce logement ?';
            let dialogRef = this.appService.openConfirmDialog(null, message);
            dialogRef.afterClosed().subscribe(dialogResult => {
                if (dialogResult) {
                    // this.dataSource.data.splice(index,1);
                    // this.initDataSource(this.dataSource.data); 
                    this.accomodationservice.putAcommodation(element, { status: 2 }).subscribe(res => {
                        this.ngOnInit();
                    });
                }
            });
        }
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
    onPaginateChange(event) {
        this.loaddata(JSON.stringify(event.pageIndex));
        //alert(JSON.stringify("Current page index: " + event.pageIndex));
    }
};
MyPropertiesComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_3__.AccommodationsService }
];
MyPropertiesComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, { static: true },] }]
};
MyPropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-my-properties',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_properties_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_properties_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyPropertiesComponent);



/***/ }),

/***/ 28763:
/*!************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.component.html */ 98144);
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ 56141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ 43493);








let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, snackBar, UserService, appService) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.UserService = UserService;
        this.appService = appService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield this.UserService.getUsersprofile().toPromise();
            this.infoForm = this.formBuilder.group({
                firstname: [data['firstName'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)])],
                lastname: [data['lastName'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)])],
            });
        });
    }
    submit() {
        const values = { firstName: this.infoForm.get('firstname').value, lastName: this.infoForm.get('lastname').value };
        console.log('Ajouter :', values);
        this.UserService.putUsers(values).subscribe(res => {
            if (res) {
                this.snackBar.open("Vous avez bien modifier votre profil!", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
            }
            else
                this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 81800:
/*!************************************************************************!*\
  !*** ./src/app/pages/account/users/edit-users/edit-users.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUsersComponent": () => (/* binding */ EditUsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_users_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-users.component.html */ 58117);
/* harmony import */ var _edit_users_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-users.component.scss */ 28760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ 43493);









let EditUsersComponent = class EditUsersComponent {
    constructor(formBuilder, snackBar, UserService, appService, data, dialogRef) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.UserService = UserService;
        this.appService = appService;
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield this.UserService.getUsersid(this.data.id).toPromise();
            this.infoForm = this.formBuilder.group({
                firstname: [data['firstName'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)])],
                lastname: [data['lastName'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)])],
            });
        });
    }
    onNoclick() {
        this.dialogRef.close();
    }
    submit() {
        const values = { FirstName: this.infoForm.get('firstname').value, LastName: this.infoForm.get('lastname').value, Certified: true, Email: 'test@TestBed.test', ProfilePicture: '' };
        console.log('Ajouter :', values);
        this.UserService.putUsersnoid(this.data.id, values).subscribe(res => {
            console.log('Ajouter : ', res);
            this.onNoclick();
        });
    }
};
EditUsersComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA,] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef }
];
EditUsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-users',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_users_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_users_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditUsersComponent);



/***/ }),

/***/ 44407:
/*!********************************************************!*\
  !*** ./src/app/pages/account/users/users.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./users.component.html */ 42216);
/* harmony import */ var _users_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component.scss */ 97649);
/* harmony import */ var _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-users/edit-users.component */ 81800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ 43493);











let UsersComponent = class UsersComponent {
    constructor(appService, userservice, dialog) {
        this.appService = appService;
        this.userservice = userservice;
        this.dialog = dialog;
        this.displayedColumns = ['Title', 'Email', 'actions'];
        this.data = ['Booleen', 'Texte', 'Nombre'];
        this.list = [];
    }
    ngOnInit() {
        /* this.appService.getProperties().subscribe(res => {
           this.initDataSource(res);
         });    */
        //  var event ;
        //  event.pageIndex = 0;
        this.loaddata(0);
    }
    propertyType(data) {
        return this.data[parseInt(data)];
    }
    loaddata(val) {
        this.userservice.getAllUsers().subscribe(res => {
            if (!res) {
                return;
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log(this.dataSource);
        });
    }
    openDialog(id) {
        const dialogRef = this.dialog.open(_edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_2__.EditUsersComponent, {
            width: '800px',
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.libelle = result;
            this.ngOnInit();
        });
    }
    initDataSource(data) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    remove(element) {
        // const index: number = this.dataSource.data.indexOf(element.id);    
        if (element !== -1) {
            const message = 'Etes Vous sur ?';
            let dialogRef = this.appService.openConfirmDialog(null, message);
            dialogRef.afterClosed().subscribe(dialogResult => {
                if (dialogResult) {
                    // this.dataSource.data.splice(index,1);
                    // this.initDataSource(this.dataSource.data); 
                    this.userservice.deleteUsers(element).subscribe(res => {
                        this.ngOnInit();
                    });
                }
            });
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onPaginateChange(event) {
        this.loaddata(JSON.stringify(event.pageIndex));
        //alert(JSON.stringify("Current page index: " + event.pageIndex));
    }
};
UsersComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog }
];
UsersComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, { static: true },] }]
};
UsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-users',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_users_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersComponent);



/***/ }),

/***/ 27295:
/*!***************************************************!*\
  !*** ./src/app/services/custom-fields.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomFieldsService": () => (/* binding */ CustomFieldsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _models_CustomField_custom_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/CustomField/custom-field */ 76542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_constantURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constantURL */ 4274);





let CustomFieldsService = class CustomFieldsService {
    constructor(http) {
        this.http = http;
        this.url = _shared_constantURL__WEBPACK_IMPORTED_MODULE_1__.constantURL.apiEndpoint + '/api/CustomFields';
    }
    postCustomFields(CustomFieldsCreate) {
        return this.http.post(this.url, _models_CustomField_custom_field__WEBPACK_IMPORTED_MODULE_0__.CustomField);
    }
    getCustomFields() {
        return this.http.get(this.url);
    }
    getCustomField(id) {
        return this.http.get(this.url + "/" + id);
    }
    putCustomField(id, customfieldUpdate) {
        return this.http.put(`${this.url}/${id}`, customfieldUpdate);
    }
    deleteCustomField(id) {
        return this.http.delete(this.url + '/' + id);
    }
    postCustomField(CustomFieldCreate) {
        return this.http.post(this.url, CustomFieldCreate);
    }
    getCustomFieldacommonadation(id, id2) {
        return this.http.get(this.url + "/" + id + "/accommondation/" + id2);
    }
};
CustomFieldsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
CustomFieldsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CustomFieldsService);



/***/ }),

/***/ 49728:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/account.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n\r\n        <mat-sidenav-container class=\"account\">\r\n            <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"account-sidenav\">\r\n                <mat-card [perfectScrollbar]=\"psConfig\"> \r\n                    <button fxHide=\"false\" fxHide.gt-sm mat-mini-fab color=\"warn\" class=\"close\" (click)=\"sidenav.toggle()\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                    <mat-card-header fxLayoutAlign=\"start center\">                       \r\n                        <img mat-card-avatar src=\"assets/images/others/user.jpg\" alt=\"\">\r\n                        <mat-card-title class=\"text-muted mb-0\">{{name}}</mat-card-title> \r\n                    </mat-card-header>\r\n                    <div class=\"divider my-3\"></div>\r\n                    <div *ngFor=\"let link of links\">\r\n                        <a matLine [routerLink]=\"link.href\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-3\">\r\n                            <mat-icon class=\"text-muted\">{{link.icon}}</mat-icon>\r\n                            <span class=\"mx-2\">{{ link.name }}</span>\r\n                        </a>\r\n                    </div>                      \r\n                  </mat-card>  \r\n            </mat-sidenav>\r\n            <mat-sidenav-content ngClass.gt-sm=\"distance\">\r\n              <mat-card *ngIf=\"!sidenavOpen\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted mb-3\">\r\n                  <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                      <mat-icon>more_vert</mat-icon>\r\n                  </button>\r\n                  <h3>Mon compte</h3>\r\n              </mat-card>              \r\n              <mat-card class=\"account-wrapper\">\r\n                  <router-outlet></router-outlet>\r\n              </mat-card>  \r\n            </mat-sidenav-content>\r\n        </mat-sidenav-container>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ 87938:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/bookings/add-comment/add-comment.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-comments></app-comments>");

/***/ }),

/***/ 73568:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/bookings/bookings.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <div class=\"table-wrapper\"> \r\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n\r\n        <ng-container matColumnDef=\"Arrive\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Date d'arrivée </th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.accommodationId ]\" class=\"property-name\">{{element.dateArrival | date: 'dd/MM/yyyy'}}</a></td>\r\n        </ng-container> \r\n\r\n        <ng-container matColumnDef=\"Departure\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Date de départ </th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.accommodationId ]\" class=\"property-name\">{{element.dateDeparture | date: 'dd/MM/yyyy'}}</a></td>\r\n        </ng-container> \r\n        \r\n        <ng-container matColumnDef=\"Price\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Payé</th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.accommodationId ]\" class=\"property-name\">{{element.paid}}€</a></td>\r\n        </ng-container> \r\n\r\n        <ng-container matColumnDef=\"Status\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Statut de la réservation </th>\r\n            <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.accommodationId ]\" class=\"property-name\">{{getstatuts(element.bookingStatus)}}</a></td>\r\n          </ng-container> \r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n          <td mat-cell *matCellDef=\"let element\">  \r\n              <button mat-icon-button color=\"warn\" [routerLink]=\"['/properties', element.accommodationId ]\" matTooltip=\"Parcourire\" class=\"remove\">\r\n                  <mat-icon>zoom_in</mat-icon>\r\n              </button> \r\n             <button *ngIf=\"compare(element.dateArrival)  && element.bookingStatus==2\" mat-icon-button color=\"primary\" (click)=\"openDialog(element.accommodationId)\" matTooltip=\"Laisser un avis\" class=\"remove\">\r\n              <mat-icon>rate_review</mat-icon>\r\n          </button> \r\n\r\n          </td>\r\n        </ng-container> \r\n        \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n        </tr>\r\n      </table> \r\n      <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">Pas de données disponibles</p> \r\n  </div>\r\n  <mat-paginator [pageSizeOptions]=\"[20]\"  (page)=\"onPaginateChange($event)\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ 46317:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/custom-fields/add-custom-field/add-custom-field.component.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-xl-12 order-xl-1\">\n    <div class=\"card bg-secondary shadow\">\n      <div class=\"card-header bg-white border-0\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-8\">\n            <h3 class=\"mb-0\">Ajouter un champ personnalisé</h3>\n          </div>\n  \n        </div>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n          <h6 class=\"heading-small text-muted mb-4\">Information du champ</h6>\n          <div class=\"pl-lg-4\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Type de logement</mat-label>\n                        <mat-select placeholder=\"Type de logement\" formControlName=\"type\" >\n                            <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus.id\">\n                                {{propertyStatus.name}}\n                            </mat-option>\n                        </mat-select>                             \n                    </mat-form-field>\n                </div>\n                <div class=\"form-group\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Nom du champ pérsonalisé</mat-label>\n                        <input matInput placeholder=\"Nom\" formControlName=\"nom\" autocomplete=\"off\"> \n                    </mat-form-field>\n                  </div>\n                  <div class=\"form-group\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Type de valeur attendu</mat-label>\n                        <mat-select placeholder=\"Type de logement\" formControlName=\"valeur\" >\n                            <mat-option  [value]=\"0\">\n                                Booléen\n                            </mat-option>\n                            <mat-option  [value]=\"1\">\n                                Texte\n                            </mat-option>\n                            <mat-option  [value]=\"2\">\n                                Nombre\n                            </mat-option>\n                        </mat-select>                             \n                    </mat-form-field> \n                  </div>\n                  <div class=\"form-group\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Déscription</mat-label>\n                        <input matInput placeholder=\"Description\" formControlName=\"desc\" autocomplete=\"off\"> \n                    </mat-form-field>\n                  </div>\n              </div>\n            </div>\n           \n          </div>\n          <hr class=\"my-4\" />\n       \n  \n  \n          <div class=\"col-12 text-right\">\n            <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n            <button mat-raised-button color=\"primary\" style=\"background-color: grey;\" (click)=\"onNoClick()\" fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                <mat-icon>cancel</mat-icon>\n                <span class=\"mx-1 uppercase\">Annuler</span>  \n              </button>\n\n            <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"submit()\" fxLayout=\"row\"  fxLayoutAlign=\"center center\" type=\"button\">\n                <span class=\"mx-1 uppercase\">Ajouter </span>                    \n                <mat-icon>add_circle</mat-icon>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ 65383:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/custom-fields/custom-fields.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a mat-raised-button color=\"primary\" style=\"margin:1%;\" (click)=\"openDialog()\">Ajouter</a>\r\n<br>\r\n<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrer les proprietées\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <div class=\"table-wrapper\"> \r\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n    \r\n        <!-- ID Column -->\r\n       <!-- <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n          <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\r\n        </ng-container>  \r\n  \r\n        <!-- Image Column -->\r\n\r\n        <!-- Title Column -->\r\n\r\n        <ng-container matColumnDef=\"Title\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom du champ personnalisé </th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{element.label}}</a></td>\r\n        </ng-container> \r\n        \r\n       <ng-container matColumnDef=\"Value\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Type de valeur attendu</th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{propertyType(element.value)}}</a></td>\r\n        </ng-container> \r\n        \r\n\r\n       <!-- Actions Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n          <td mat-cell *matCellDef=\"let element\">  \r\n              <button mat-icon-button color=\"warn\" (click)=\"remove(element.id)\" matTooltip=\"Supprimer\" class=\"remove\">\r\n                  <mat-icon>delete</mat-icon>\r\n              </button> \r\n          </td>\r\n        </ng-container> \r\n        \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n        </tr>\r\n      </table> \r\n      <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">No data available</p> \r\n  </div>\r\n  <mat-paginator [pageSizeOptions]=\"[20]\"  (page)=\"onPaginateChange($event)\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ 80303:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/dashboard/dashboard.component.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\r\n  dashboard works!\r\n</p>\r\n");

/***/ }),

/***/ 40925:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/edit-property/edit-property.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"p-3\">\r\n  <div class=\"theme-container\">\r\n\r\n    <mat-card ngClass.lt-lg=\"p-0\" [formGroup]=\"submitForm\">\r\n\r\n      <mat-horizontal-stepper #horizontalStepper linear=\"false\" class=\"submit-property\" (selectionChange)=\"onSelectionChange($event)\">\r\n\r\n          <mat-step [stepControl]=\"submitForm.get('basic')\" label=\"Basic\">\r\n            <div class=\"step-content\">\r\n\r\n                <form formGroupName=\"basic\" fxLayout=\"row wrap\">\r\n\r\n                    <div fxFlex=\"100\" class=\"p-3\">\r\n                      <h1 class=\"fw-500 text-center\">Basique</h1>\r\n                    </div>\r\n                            \r\n                    <div fxFlex=\"100\" class=\"px-2\">\r\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Titre</mat-label>\r\n                          <input matInput placeholder=\"Title\" formControlName=\"title\" required autocomplete=\"off\">\r\n                          <mat-error *ngIf=\"submitForm.get('basic')['controls'].title.errors?.required\">Le titre est requis</mat-error>\r\n                      </mat-form-field>\r\n                    </div>  \r\n                \r\n                    <div fxFlex=\"100\" class=\"px-2\">\r\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Description</mat-label> \r\n                          <textarea matInput placeholder=\"Description\" formControlName=\"desc\" rows=\"7\"></textarea> \r\n                      </mat-form-field> \r\n                    </div> \r\n                <!--\r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Prix ($)</mat-label>\r\n                          <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceDollar\" autocomplete=\"off\"> \r\n                      </mat-form-field>\r\n                    </div> \r\n                  -->\r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Prix (€)</mat-label>\r\n                          <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceEuro\" autocomplete=\"off\"> \r\n                      </mat-form-field>\r\n                    </div> \r\n                  \r\n\r\n                <!--\r\n                    <div fxFlex=\"100\" class=\"step-section pb-2\">\r\n                        <p class=\"mb-0\"><span class=\"uppercase fw-500\">Gallery</span><span class=\"text-muted mx-3\">(max 8 images)</span></p>  \r\n                        <input-file formControlName=\"gallery\" fileLimit=\"8\" fileAccept=\"image/*\"></input-file>  \r\n                    </div> \r\n                  -->\r\n                    <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"end center\">\r\n                      <button mat-raised-button color=\"primary\" (click)= \"submitstep1()\" matStepperNext fxLayout=\"row\"  fxLayoutAlign=\"center center\" type=\"button\">\r\n                        <span class=\"mx-1 uppercase\">Suivant </span>                    \r\n                        <mat-icon>navigate_next</mat-icon>\r\n                      </button> \r\n                    </div> \r\n                \r\n                </form>\r\n             \r\n            </div>\r\n          </mat-step>\r\n          \r\n          <mat-step [stepControl]=\"submitForm.get('address')\" label=\"Address\">\r\n            <div class=\"step-content\">\r\n\r\n                <form formGroupName=\"address\" fxLayout=\"row wrap\">\r\n          \r\n                    <div fxFlex=\"100\" class=\"p-3\">\r\n                      <h1 class=\"fw-500 text-center\">Addresse</h1>\r\n                    </div>\r\n                              \r\n                    <div fxFlex=\"100\" class=\"px-2\">\r\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-icon matPrefix class=\"mr-1 text-muted\">location_on</mat-icon>\r\n                          <mat-label>Location</mat-label>\r\n                          <input matInput placeholder=\"Enter a location\" formControlName=\"location\" autocomplete=\"off\" #addressAutocomplete> \r\n                          <button *ngIf=\"submitForm.get('address')['controls'].location.value\" mat-button matSuffix mat-icon-button (click)=\"submitForm.get('address')['controls'].location.setValue(null)\" type=\"button\">\r\n                            <mat-icon>Fermer</mat-icon>\r\n                          </button>\r\n                          <mat-error *ngIf=\"submitForm.get('address')['controls'].location.errors?.required\">La localisation est obligatoire</mat-error>   \r\n                      </mat-form-field>\r\n                    </div> \r\n                  \r\n                    <div fxFlex=\"100\" class=\"px-2 mb-4\">\r\n                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\" (mapClick)=\"onMapClick($event)\">\r\n                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\" (markerClick)=\"onMarkerClick($event)\"></agm-marker>\r\n                        </agm-map>\r\n                    </div>\r\n                  \r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Ville</mat-label>\r\n                          <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\" required> \r\n                            <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">\r\n                              {{city.name}}\r\n                            </mat-option>\r\n                          </mat-select> \r\n                          <mat-error *ngIf=\"submitForm.get('address')['controls'].city.errors?.required\">City is required</mat-error>                    \r\n                      </mat-form-field>\r\n                    </div> \r\n                  \r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Code postale</mat-label>\r\n                          <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                  \r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Quatier</mat-label>\r\n                        <mat-select placeholder=\"Select Neighborhood...\" formControlName=\"neighborhood\"  (selectionChange)=\"onSelectNeighborhood()\">\r\n                          <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: submitForm.get('address')['controls'].city.value?.id\" [value]=\"neighborhood.name\">\r\n                            {{neighborhood.name}}\r\n                          </mat-option>\r\n                        </mat-select>   \r\n                      </mat-form-field>\r\n                    </div> \r\n                  \r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Rue</mat-label>\r\n                        <mat-select placeholder=\"Select Street...\" formControlName=\"street\" > \r\n                          <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods: submitForm.get('address')['controls'].neighborhood.value?.id, cityId:submitForm.get('address')['controls'].city.value?.id } \" [value]=\"street.name\">\r\n                            {{street.name}}\r\n                          </mat-option>\r\n                        </mat-select>  \r\n                      </mat-form-field>\r\n                    </div> \r\n                  \r\n                    <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                      <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                        <mat-icon>navigate_before</mat-icon>\r\n                        <span class=\"mx-1 uppercase\">Précédent</span>  \r\n                      </button>\r\n                      <button mat-raised-button color=\"primary\" matStepperNext (click)= \"submitstep2()\" fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                        <span class=\"mx-1 uppercase\">Suivant</span>                    \r\n                        <mat-icon>navigate_next</mat-icon>\r\n                      </button> \r\n                    </div>  \r\n                  \r\n                </form>\r\n              \r\n            </div> \r\n          </mat-step>\r\n\r\n          <mat-step [stepControl]=\"submitForm.get('additional')\" label=\"Additional\">\r\n            <div class=\"step-content\">\r\n\r\n                <form formGroupName=\"additional\" fxLayout=\"row wrap\">\r\n  \r\n                    <div fxFlex=\"100\" class=\"p-3\">\r\n                      <h1 class=\"fw-500 text-center\">Supplémentaire</h1>\r\n                    </div>\r\n                \r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Chambres</mat-label>\r\n                          <input matInput placeholder=\"bedrooms\" autocomplete=\"off\" formControlName=\"bedrooms\" onlyNumber maxlength=\"2\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                \r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Salles de bains</mat-label>\r\n                          <input matInput placeholder=\"bathrooms\" autocomplete=\"off\" formControlName=\"bathrooms\" onlyNumber maxlength=\"2\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                \r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Nombre de voyageur</mat-label>\r\n                          <input matInput placeholder=\"Garages\" autocomplete=\"off\" formControlName=\"garages\" onlyNumber maxlength=\"2\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                    \r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Nombre de lits</mat-label>\r\n                          <input matInput placeholder=\"Area\" autocomplete=\"off\" formControlName=\"area\" onlyNumber>                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                 <!--   \r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Année de construction</mat-label>\r\n                          <input matInput placeholder=\"Year Built\" autocomplete=\"off\" formControlName=\"yearBuilt\" onlyNumber  maxlength=\"4\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                  -->\r\n                    <div fxFlex=\"100\" class=\"mb-2\"> \r\n                        <p class=\"uppercase m-2 fw-500\">Caractéristiques</p> \r\n                        <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                            <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\"   class=\"p-2\">\r\n                                <mat-checkbox formControlName=\"selected\" (change)=\"onChange($event)\"  [value]=\"features[i].id \">{{features[i].name }}</mat-checkbox>                         \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n                \r\n                    <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                      <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                        <mat-icon>navigate_before</mat-icon>\r\n                        <span class=\"mx-1 uppercase\">Précédent</span>  \r\n                      </button>\r\n                      <button mat-raised-button color=\"primary\" matStepperNext (click)= \"submitstep3()\" fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                        <span class=\"mx-1 uppercase\">Suivant</span>                    \r\n                        <mat-icon>navigate_next</mat-icon>\r\n                      </button> \r\n                    </div>        \r\n                </form>\r\n                \r\n              \r\n            </div> \r\n          </mat-step>\r\n\r\n          <mat-step [stepControl]=\"submitForm.get('media')\" label=\"Media\">\r\n            <div class=\"step-content\">\r\n\r\n                <form formGroupName=\"media\" fxLayout=\"row wrap\">    \r\n                 \r\n                    <div fxFlex=\"100\" class=\"p-3\">\r\n                      <h1 class=\"fw-500 text-center\">Media</h1>\r\n                    </div>\r\n                <!--\r\n                    <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n                        <p class=\"mb-0\"><span class=\"uppercase fw-500\">Videos</span><span class=\"text-muted mx-3\">(video link to .mp4)</span></p>                            \r\n                        <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addVideo()\" matTooltip=\"Add New Video\" matTooltipPosition=\"after\">\r\n                            <mat-icon>add_circle</mat-icon>\r\n                        </button>\r\n                    </div> \r\n                    <div formArrayName=\"videos\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n                        <div *ngFor=\"let item of submitForm.get('media')['controls'].videos['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                            <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                            <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                                <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                                    <mat-label>Nom</mat-label>\r\n                                    <input matInput placeholder=\"Video name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                                </mat-form-field>\r\n                                <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                                    <mat-label>Lien</mat-label>\r\n                                    <input matInput placeholder=\"Link to video\" formControlName=\"link\" autocomplete=\"off\">     \r\n                                </mat-form-field>                                                 \r\n                            </div>\r\n                            <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                                <button mat-icon-button color=\"warn\" (click)=\"deleteVideo(i)\" matTooltip=\"Delete Video\">\r\n                                    <mat-icon>Annuler</mat-icon>\r\n                                </button>\r\n                            </div>                            \r\n                        </div>        \r\n                    </div>\r\n                \r\n                    <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n                        <p class=\"uppercase fw-500 mb-0\">Plans</p>                            \r\n                        <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addPlan()\" matTooltip=\"Add New Plan\" matTooltipPosition=\"after\" class=\"mx-3\">\r\n                            <mat-icon>add_circle</mat-icon>\r\n                        </button>\r\n                    </div> \r\n                    <div formArrayName=\"plans\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n                        <div *ngFor=\"let item of submitForm.get('media')['controls'].plans['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section pb-2\">\r\n                            <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                            <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                                <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                                    <mat-label>Nom</mat-label>\r\n                                    <input matInput placeholder=\"Plan name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                                </mat-form-field>\r\n                                <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                                    <mat-label>Description</mat-label>\r\n                                    <input matInput placeholder=\"Description\" formControlName=\"desc\" autocomplete=\"off\">     \r\n                                </mat-form-field> \r\n                                <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                                    <mat-label>Supérficie (ft²)</mat-label>\r\n                                    <input matInput placeholder=\"Area\" formControlName=\"area\" autocomplete=\"off\" onlyNumber>     \r\n                                </mat-form-field>\r\n                                <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                                    <mat-label>Chambres</mat-label>\r\n                                    <input matInput placeholder=\"Rooms\" formControlName=\"rooms\" autocomplete=\"off\" onlyNumber>     \r\n                                </mat-form-field>\r\n                                <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                                    <mat-label>Salles de bains</mat-label>\r\n                                    <input matInput placeholder=\"Baths\" formControlName=\"baths\" autocomplete=\"off\" onlyNumber>     \r\n                                </mat-form-field>\r\n                                <div fxFlex=\"100\" class=\"px-2\">  \r\n                                    <input-file placeholder=\"Image (or link to image)\" formControlName=\"image\" fileLimit=\"1\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \r\n                                </div>                \r\n                            </div>\r\n                            <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                                <button mat-icon-button color=\"warn\" (click)=\"deletePlan(i)\" matTooltip=\"Delete Plan\">\r\n                                    <mat-icon>Annuler</mat-icon>\r\n                                </button>\r\n                            </div>  \r\n                        </div>        \r\n                    </div> \r\n                \r\n                    \r\n                    <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n                        <p class=\"mb-0 uppercase fw-500\">Caractéristiques supplémentaires</p>                            \r\n                        <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addFeature()\" matTooltip=\"Add New Feature\" matTooltipPosition=\"after\">\r\n                            <mat-icon>add_circle</mat-icon>\r\n                        </button>\r\n                    </div> \r\n                    <div formArrayName=\"additionalFeatures\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n                        <div *ngFor=\"let item of submitForm.get('media')['controls'].additionalFeatures['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                            <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                            <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                                <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                                    <mat-label>Nom</mat-label>\r\n                                    <input matInput placeholder=\"Feature name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                                </mat-form-field>\r\n                                <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                                    <mat-label>Valeur</mat-label>\r\n                                    <input matInput placeholder=\"Feature value\" formControlName=\"value\" autocomplete=\"off\">     \r\n                                </mat-form-field>                                                 \r\n                            </div>\r\n                            <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                                <button mat-icon-button color=\"warn\" (click)=\"deleteFeature(i)\" matTooltip=\"Delete Feature\">\r\n                                    <mat-icon>Annuler</mat-icon>\r\n                                </button>\r\n                            </div>                            \r\n                        </div>        \r\n                    </div>\r\n                \r\n                \r\n                    <div fxFlex=\"100\" class=\"py-3\">\r\n                        <mat-slide-toggle formControlName=\"featured\">Featured</mat-slide-toggle>\r\n                    </div>\r\n                 \r\n\r\n                  <ngx-dropzone   class=\"custom-dropzone\" ngx-dropzone [multiple]=\"true\" [accept]=\"'image/jpeg,image/jpg,image/png,image/gif'\"\r\n                  (change)=\"upload($event)\">\r\n                    <ngx-dropzone-label>ajouter une image</ngx-dropzone-label>\r\n                  \r\n                    <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of files\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f)\" >\r\n                      <ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\r\n                    </ngx-dropzone-image-preview>\r\n                </ngx-dropzone>\r\n              -->\r\n              <app-upload-manager></app-upload-manager>\r\n                    <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                        <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                            <mat-icon>navigate_before</mat-icon>\r\n                            <span class=\"mx-1 uppercase\">Précédent</span>  \r\n                        </button>\r\n                        <button mat-raised-button color=\"primary\" (click)=\"submitstep5()\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                            <span class=\"mx-1 uppercase\">Soumettre</span>                    \r\n                            <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                    </div> \r\n                 \r\n                \r\n                </form>\r\n              \r\n            </div> \r\n          </mat-step>\r\n\r\n          <mat-step label=\"Confirmation\">\r\n            <div class=\"step-content\">\r\n              \r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"pt-5 text-center\"> \r\n                  <button mat-fab color=\"primary\"><mat-icon>check</mat-icon></button>\r\n                  <h2 class=\"mt-3 uppercase\">Félicitation!</h2>\r\n              <!--    <h2 class=\"my-3\">Votre bien <span class=\"primary-color\">\"{{submitForm.get('basic')['controls'].title.value}}\"</span> has been submitted</h2>-->\r\n                  <p class=\"text-muted\">Votre logement a bien été ajouté et est en attente de validation.</p>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-3\">  \r\n                  <button mat-raised-button color=\"accent\" (click)=\"reset()\" type=\"button\">Retourner pour soumettre une nouvelle propriété</button>       \r\n                </div>\r\n\r\n            </div> \r\n          </mat-step>\r\n\r\n      </mat-horizontal-stepper>\r\n\r\n    </mat-card>\r\n\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ 20618:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/equipments/add-equipment/add-equipment.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-xl-12 order-xl-1\">\n    <div class=\"card bg-secondary shadow\">\n      <div class=\"card-header bg-white border-0\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-8\">\n            <h3 class=\"mb-0\">Ajouter un equipement</h3>\n          </div>\n  \n        </div>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n          <h6 class=\"heading-small text-muted mb-4\">Information du champ pérsonalisé</h6>\n          <div class=\"pl-lg-4\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Nom de l'equipement</mat-label>\n                        <input matInput placeholder=\"Nom\" formControlName=\"nom\" autocomplete=\"off\"> \n                    </mat-form-field>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <hr class=\"my-4\" />\n          <div class=\"col-12 text-right\">\n            <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n            <button mat-raised-button color=\"primary\" style=\"background-color: grey;\" (click)=\"onNoClick()\" fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                <mat-icon>cancel</mat-icon>\n                <span class=\"mx-1 uppercase\">Annuler</span>  \n              </button>\n            <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"submit()\" fxLayout=\"row\"  fxLayoutAlign=\"center center\" type=\"button\">\n                <span class=\"mx-1 uppercase\">Ajouter </span>                    \n                <mat-icon>add_circle</mat-icon>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ 33484:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/equipments/equipments.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a mat-raised-button color=\"primary\" style=\"margin:1%;\" (click)=\"openDialog()\">Ajouter</a>\r\n<br>\r\n<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <div class=\"table-wrapper\"> \r\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n    \r\n        <!-- ID Column -->\r\n       <!-- <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n          <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\r\n        </ng-container>  \r\n  \r\n        <!-- Image Column -->\r\n\r\n        <!-- Title Column -->\r\n\r\n        <ng-container matColumnDef=\"Title\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom de l'equipement </th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{element.name}}</a></td>\r\n        </ng-container> \r\n        \r\n\r\n        \r\n\r\n       <!-- Actions Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n          <td mat-cell *matCellDef=\"let element\">  \r\n              <button mat-icon-button color=\"warn\" (click)=\"remove(element.id)\" matTooltip=\"Supprimer\" class=\"remove\">\r\n                  <mat-icon>delete</mat-icon>\r\n              </button> \r\n          </td>\r\n        </ng-container> \r\n        \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n        </tr>\r\n      </table> \r\n      <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">Pas de données disponibles</p> \r\n  </div>\r\n  <mat-paginator [pageSizeOptions]=\"[20]\"  (page)=\"onPaginateChange($event)\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ 52945:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/favorites/favorites.component.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n</mat-form-field> \r\n<div class=\"table-wrapper\"> \r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n  \r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\r\n      </ng-container>  \r\n\r\n      <!-- Image Column -->\r\n      <ng-container matColumnDef=\"image\">\r\n        <th mat-header-cell *matHeaderCellDef> Photo </th>\r\n        <td mat-cell *matCellDef=\"let property\"><img [src]=\"property.gallery[0].small\" [style.width.px]=\"100\" class=\"d-block\"></td>\r\n      </ng-container> \r\n  \r\n      <!-- Title Column -->\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Titre </th>\r\n        <td mat-cell *matCellDef=\"let property\"><a [routerLink]=\"['/properties', property.id ]\" class=\"property-name\">{{property.title}}</a></td>\r\n      </ng-container>  \r\n\r\n      <!-- Actions Column -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef> Supprimé </th>\r\n        <td mat-cell *matCellDef=\"let property\"> \r\n            <button mat-icon-button color=\"warn\" (click)=\"remove(property)\" matTooltip=\"Remove\" class=\"remove\">\r\n                <mat-icon>Supprimmer</mat-icon>\r\n            </button> \r\n        </td>\r\n      </ng-container> \r\n  \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n      </tr>\r\n    </table> \r\n    <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">Pas de données disponibles</p> \r\n</div>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>");

/***/ }),

/***/ 48764:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/logements/logements.component.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <div class=\"table-wrapper\"> \r\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n    \r\n        <!-- ID Column -->\r\n       <!-- <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n          <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\r\n        </ng-container>  \r\n  \r\n        <!-- Image Column -->\r\n       <!-- <ng-container matColumnDef=\"image\">\r\n          <th mat-header-cell *matHeaderCellDef> Image </th>\r\n          <td mat-cell *matCellDef=\"let property\"><img [src]=\"property.gallery[0].small\" [style.width.px]=\"100\" class=\"d-block\"></td>\r\n        </ng-container> \r\n    \r\n        <!-- Title Column -->\r\n        <ng-container matColumnDef=\"Type\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Type de logement </th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{propertyType(element.kind)}}</a></td>\r\n        </ng-container> \r\n\r\n        <ng-container matColumnDef=\"Title\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Titre du logement </th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{element.title}}</a></td>\r\n        </ng-container> \r\n        \r\n        <ng-container matColumnDef=\"Status\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Statut de logement </th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{getstatuts(element.status)}}</a></td>\r\n        </ng-container> \r\n        \r\n        <!-- Published Column \r\n        <ng-container matColumnDef=\"published\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Published </th>\r\n          <td mat-cell *matCellDef=\"let property\"> {{property.published | date:\"dd MMMM, yyyy\"}} </td>\r\n        </ng-container> \r\n  \r\n        <!-- Views Column \r\n        <ng-container matColumnDef=\"views\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Views </th>\r\n          <td mat-cell *matCellDef=\"let property\"> {{property.views}} </td>\r\n        </ng-container> \r\n      \r\n        Actions Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n          <td mat-cell *matCellDef=\"let element\">  \r\n              <a [routerLink]=\"['/account/my-properties', element.id]\"mat-icon-button color=\"primary\" matTooltip=\"Modifier\">\r\n                  <mat-icon>edit</mat-icon>\r\n              </a>\r\n              <button mat-icon-button color=\"warn\" (click)=\"remove(element.id)\" matTooltip=\"Supprimer\" class=\"remove\">\r\n                  <mat-icon>delete</mat-icon>\r\n              </button> \r\n              <button *ngIf=\"element.status==1  \" mat-icon-button color=\"primary\" (click)=\"updatestatuts(element.id)\" matTooltip=\"Publier\" class=\"remove\">\r\n                <mat-icon>done outline icon</mat-icon>\r\n            </button> \r\n          </td>\r\n        </ng-container> \r\n        \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n        </tr>\r\n      </table> \r\n      <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">Pas de données disponibles</p> \r\n  </div>\r\n  <mat-paginator [pageSizeOptions]=\"[20]\"  (page)=\"onPaginateChange($event)\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ 88372:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/my-properties/my-properties.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n</mat-form-field>\r\n<div class=\"table-wrapper\"> \r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n  \r\n      <!-- ID Column -->\r\n     <!-- <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\r\n      </ng-container>  \r\n\r\n      <!-- Image Column -->\r\n      <ng-container matColumnDef=\"image\">\r\n        <th mat-header-cell *matHeaderCellDef> Image </th>\r\n        <td mat-cell *matCellDef=\"let element\"><img *ngIf=\"element.photos.length > 01\" [src]=\"element.photos[0].name\" [style.width.px]=\"100\" class=\"d-block\"></td>\r\n      </ng-container> \r\n\r\n      <ng-container matColumnDef=\"Status\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Statut de logement </th>\r\n        <td mat-cell *matCellDef=\"let element \"><a mat-raised-button color=\"primary\" *ngIf=\"element.status == 0\">Poursuivre la création</a><a *ngIf=\"element.status != 0\" [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{getstatuts(element.status)}}</a></td>\r\n      </ng-container> \r\n      <!-- Title Column -->\r\n      <ng-container matColumnDef=\"Type\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Type de logement </th>\r\n        <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{propertyType(element.kind)}}</a></td>\r\n      </ng-container> \r\n\r\n      <ng-container matColumnDef=\"Title\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Titre du logement </th>\r\n        <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{element.title}}</a></td>\r\n      </ng-container> \r\n      \r\n    <!--  <ng-container matColumnDef=\"Status\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Ville </th>\r\n        <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{element.address.city}}</a></td>\r\n      </ng-container> -->\r\n      \r\n      <!-- Published Column \r\n      <ng-container matColumnDef=\"published\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Published </th>\r\n        <td mat-cell *matCellDef=\"let property\"> {{property.published | date:\"dd MMMM, yyyy\"}} </td>\r\n      </ng-container> \r\n\r\n      <!-- Views Column \r\n      <ng-container matColumnDef=\"views\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Views </th>\r\n        <td mat-cell *matCellDef=\"let property\"> {{property.views}} </td>\r\n      </ng-container> \r\n    \r\n      Actions Column -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n        <td mat-cell *matCellDef=\"let element\">  \r\n          <a [routerLink]=\"['/host', element.id]\"mat-icon-button color=\"primary\" matTooltip=\"Gérer\">\r\n            <mat-icon>settings</mat-icon>\r\n        </a>\r\n            <a [routerLink]=\"['/account/my-properties', element.id]\"mat-icon-button color=\"primary\" matTooltip=\"Modifier\">\r\n                <mat-icon>edit</mat-icon>\r\n            </a>\r\n            <button mat-icon-button color=\"warn\" (click)=\"remove(element.id)\" matTooltip=\"Supprimer\" class=\"remove\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button> \r\n        </td>\r\n      </ng-container> \r\n      \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n      </tr>\r\n    </table> \r\n    <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">No data available</p> \r\n</div>\r\n<mat-paginator [pageSizeOptions]=\"[20]\"  (page)=\"onPaginateChange($event)\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ 98144:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/profile/profile.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\r\n        <h2 class=\"text-muted text-center fw-600 mb-3\">Détails du compte</h2>\r\n        <form [formGroup]=\"infoForm\" (ngSubmit)=\"submit()\" *ngIf=\"infoForm\"> \r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Prénom</mat-label>\r\n                <input matInput placeholder=\"Prénom\" formControlName=\"firstname\" required autocomplete=\"off\">\r\n                <mat-error *ngIf=\"infoForm.controls.firstname.errors?.required\">Le prénom est requis</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.firstname.hasError('minlength')\">Le nom doit contenir 3 caractères minimum</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput placeholder=\"Nom\" formControlName=\"lastname\" required autocomplete=\"off\">\r\n                <mat-error *ngIf=\"infoForm.controls.lastname.errors?.required\">Le nom est requis</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.lastname.hasError('minlength')\">Le nom doit contenir 3 caractères minimum</mat-error>\r\n            </mat-form-field>\r\n           \r\n            <div class=\"text-center mt-2\">\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Mettre à jour le profil</button>\r\n            </div> \r\n        </form>\r\n    </div>\r\n    \r\n\r\n</div> \r\n");

/***/ }),

/***/ 58117:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/users/edit-users/edit-users.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\r\n        <h2 class=\"text-muted text-center fw-600 mb-3\">Détails du compte</h2>\r\n        <form [formGroup]=\"infoForm\" (ngSubmit)=\"submit()\" *ngIf=\"infoForm\"> \r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Prénom</mat-label>\r\n                <input matInput placeholder=\"Prénom\" formControlName=\"firstname\" required autocomplete=\"off\">\r\n                <mat-error *ngIf=\"infoForm.controls.firstname.errors?.required\">Le prénom est requis</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.firstname.hasError('minlength')\">Le nom doit contenir 3 caractères minimum</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput placeholder=\"Nom\" formControlName=\"lastname\" required autocomplete=\"off\">\r\n                <mat-error *ngIf=\"infoForm.controls.lastname.errors?.required\">Le nom est requis</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.lastname.hasError('minlength')\">Le nom doit contenir 3 caractères minimum</mat-error>\r\n            </mat-form-field>\r\n           \r\n            <div class=\"text-center mt-2\">\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Mettre à jour le profil</button>\r\n            </div> \r\n        </form>\r\n    </div>\r\n    \r\n\r\n</div> \r\n");

/***/ }),

/***/ 42216:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/users/users.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<br>\r\n<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <div class=\"table-wrapper\"> \r\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n    \r\n        <!-- ID Column -->\r\n       <!-- <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n          <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\r\n        </ng-container>  \r\n  \r\n        <!-- Image Column -->\r\n\r\n        <!-- Title Column -->\r\n\r\n        <ng-container matColumnDef=\"Title\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom </th>\r\n          <td mat-cell *matCellDef=\"let element \"><a [routerLink]=\"['/properties', element.id ]\" class=\"property-name\">{{element.firstName}} {{element.lastName}}</a></td>\r\n        </ng-container> \r\n        \r\n        <ng-container matColumnDef=\"Email\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n          <td mat-cell *matCellDef=\"let element \">{{element.email}}</td>\r\n        </ng-container> \r\n        \r\n\r\n       <!-- Actions Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n          <td mat-cell *matCellDef=\"let element\">  \r\n              <a  (click)=\"openDialog(element.id)\" mat-icon-button color=\"primary\" matTooltip=\"Modifier\">\r\n                  <mat-icon>edit</mat-icon>\r\n              </a>\r\n              <button mat-icon-button color=\"warn\" (click)=\"remove(element.id)\" matTooltip=\"Supprimer\" class=\"remove\">\r\n                  <mat-icon>delete</mat-icon>\r\n              </button> \r\n          </td>\r\n        </ng-container> \r\n        \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n        </tr>\r\n      </table> \r\n      <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">Pas de données disponibles</p> \r\n  </div>\r\n  <mat-paginator [pageSizeOptions]=\"[20]\"  (page)=\"onPaginateChange($event)\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ 46540:
/*!******************************************************!*\
  !*** ./src/app/pages/account/account.component.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 99412:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/account/bookings/add-comment/add-comment.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29tbWVudC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 58984:
/*!****************************************************************!*\
  !*** ./src/app/pages/account/bookings/bookings.component.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5ncy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 62054:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/account/custom-fields/add-custom-field/add-custom-field.component.scss ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY3VzdG9tLWZpZWxkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 43140:
/*!**************************************************************************!*\
  !*** ./src/app/pages/account/custom-fields/custom-fields.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tZmllbGRzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3182:
/*!******************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 52914:
/*!**************************************************************************!*\
  !*** ./src/app/pages/account/edit-property/edit-property.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".edit-property .sebm-google-map-container {\n  height: 400px;\n}\n.edit-property .step-section {\n  padding: 20px 10px 0;\n  border-radius: 4px;\n  margin: 8px 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUFSIiwiZmlsZSI6ImVkaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1wcm9wZXJ0eSB7IFxyXG4gICAgLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9IFxyXG4gICAgLnN0ZXAtc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDhweCAxNnB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 40185:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/account/equipments/add-equipment/add-equipment.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 41553:
/*!********************************************************************!*\
  !*** ./src/app/pages/account/equipments/equipments.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcXVpcG1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 80903:
/*!******************************************************************!*\
  !*** ./src/app/pages/account/favorites/favorites.component.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZXMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 60504:
/*!******************************************************************!*\
  !*** ./src/app/pages/account/logements/logements.component.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dlbWVudHMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 23386:
/*!**************************************************************************!*\
  !*** ./src/app/pages/account/my-properties/my-properties.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 56141:
/*!**************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.scss ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 28760:
/*!**************************************************************************!*\
  !*** ./src/app/pages/account/users/edit-users/edit-users.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 97649:
/*!**********************************************************!*\
  !*** ./src/app/pages/account/users/users.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account_module_ts.js.map