"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["main"],{

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.settings */ 18036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let AppComponent = class AppComponent {
    constructor(appSettings, router, platformId, translate) {
        this.appSettings = appSettings;
        this.router = router;
        this.platformId = platformId;
        this.translate = translate;
        this.settings = this.appSettings.settings;
        translate.addLangs(['en', 'de', 'fr', 'ru', 'tr']);
        translate.setDefaultLang('en');
        translate.use('en');
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                setTimeout(() => {
                    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                        window.scrollTo(0, 0);
                    }
                });
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID,] }] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "tokenGetter": () => (/* binding */ tokenGetter),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @auth0/angular-jwt */ 40704);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-progressbar */ 49499);
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-progressbar/http */ 95484);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-embed-video */ 67702);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-input-file */ 47869);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 82003);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ 38516);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ 52882);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 51382);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.settings */ 18036);
/* harmony import */ var _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/utils/app-interceptor */ 52700);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-dropzone */ 82629);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pages.component */ 85722);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 98622);
/* harmony import */ var _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/components/toolbar1/toolbar1.component */ 80571);
/* harmony import */ var _theme_components_toolbar2_toolbar2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/components/toolbar2/toolbar2.component */ 79858);
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ 71233);
/* harmony import */ var _theme_components_currency_currency_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/components/currency/currency.component */ 1642);
/* harmony import */ var _theme_components_lang_lang_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/components/lang/lang.component */ 78313);
/* harmony import */ var _theme_components_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/components/social-icons/social-icons.component */ 80312);
/* harmony import */ var _theme_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/components/contacts/contacts.component */ 9627);
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ 67144);
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ 20054);
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/components/footer/footer.component */ 11833);
/* harmony import */ var _pages_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/lock-screen/lock-screen.component */ 71324);
/* harmony import */ var _directives_dropzone_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/dropzone.directive */ 74088);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/compat */ 20762);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/compat/database */ 97606);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var angular_cc_library__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-cc-library */ 57042);












const config = {
    fileAccept: '*'
};




function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(httpClient, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/assets/i18n/', '.json');
}



























function tokenGetter() {
    return localStorage.getItem("jwt");
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent,
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_9__.PagesComponent,
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__.NotFoundComponent,
            _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_13__.UserMenuComponent,
            _theme_components_currency_currency_component__WEBPACK_IMPORTED_MODULE_14__.CurrencyComponent,
            _theme_components_lang_lang_component__WEBPACK_IMPORTED_MODULE_15__.LangComponent,
            _theme_components_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_16__.SocialIconsComponent,
            _theme_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_17__.ContactsComponent,
            _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_11__.Toolbar1Component,
            _theme_components_toolbar2_toolbar2_component__WEBPACK_IMPORTED_MODULE_12__.Toolbar2Component,
            _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_18__.HorizontalMenuComponent,
            _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_19__.VerticalMenuComponent,
            _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__.FooterComponent,
            _pages_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_21__.LockScreenComponent,
            _directives_dropzone_directive__WEBPACK_IMPORTED_MODULE_22__.DropzoneDirective,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabsModule,
            angular_cc_library__WEBPACK_IMPORTED_MODULE_29__.CreditCardDirectivesModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_30__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.firebase),
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_31__.AngularFirestoreModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_32__.AngularFireStorageModule,
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_33__.AngularFireDatabaseModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_34__.NgxDropzoneModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HttpClientModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_36__.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I',
                libraries: ["places"]
            }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HttpClient]
                }
            }),
            ngx_embed_video__WEBPACK_IMPORTED_MODULE_0__.EmbedVideo.forRoot(),
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_38__.NgProgressModule,
            ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_39__.NgProgressHttpModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_40__.InputFileModule.forRoot(config),
            _app_routing__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_41__.JwtModule.forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: ["localhost:8080", "localhost:5001", "atypikhouse.azurewebsites.net"],
                    disallowedRoutes: []
                }
            }),
        ],
        providers: [
            _app_settings__WEBPACK_IMPORTED_MODULE_7__.AppSettings,
            { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayContainer, useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_3__.CustomOverlayContainer },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HTTP_INTERCEPTORS, useClass: _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_8__.AppInterceptor, multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 52882:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.component */ 85722);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 98622);
/* harmony import */ var _pages_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/lock-screen/lock-screen.component */ 71324);
/* harmony import */ var _app_services_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/services/guard.service */ 41954);







const routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent, children: [
            //{ path: '', redirectTo: '/landing', pathMatch: 'full' },
            { path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 35129)).then(m => m.HomeModule) },
            { path: 'about', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 20654)).then(m => m.AboutModule) },
            { path: 'contact', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.module */ 73603)).then(m => m.ContactModule) },
            { path: 'properties', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_properties_properties_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/properties/properties.module */ 23130)).then(m => m.PropertiesModule), canActivate: [_app_services_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceGuard] },
            { path: 'compare', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_compare_compare_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/compare/compare.module */ 43706)).then(m => m.CompareModule) },
            //    { path: 'faq', loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule) },
            { path: 'login', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 82371)).then(m => m.LoginModule) },
            { path: 'register', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 69751)).then(m => m.RegisterModule) },
            { path: 'terms-conditions', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terms-conditions/terms-conditions.module */ 66863)).then(m => m.TermsConditionsModule) },
            { path: 'account', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 8715)).then(m => m.AccountModule), canActivate: [_app_services_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceGuard] },
            { path: 'host/:id', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_host_host_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/host/host.module */ 33253)).then(m => m.HostModule), canActivate: [_app_services_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceGuard] },
            { path: 'submit-property', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_submit-property_submit-property_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/submit-property/submit-property.module */ 16875)).then(m => m.SubmitPropertyModule), canActivate: [_app_services_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceGuard] }
        ]
    },
    { path: 'landing', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing/landing.module */ 7384)).then(m => m.LandingModule) },
    { path: 'lock-screen', component: _pages_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_2__.LockScreenComponent },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_6__.PreloadAllModules,
                relativeLinkResolution: 'legacy',
                initialNavigation: 'enabled', // for one load page, without reload
                // useHash: true
            })
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ 38198:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data),
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 42132);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.settings */ 18036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ 43327);
/* harmony import */ var _shared_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/alert-dialog/alert-dialog.component */ 73880);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/devices.service */ 33965);













class Data {
    constructor(properties, compareList, favorites, locations) {
        this.properties = properties;
        this.compareList = compareList;
        this.favorites = favorites;
        this.locations = locations;
    }
}
let AppService = class AppService {
    constructor(http, bottomSheet, snackBar, appSettings, dialog, translateService, devicesservice, platformId) {
        this.http = http;
        this.bottomSheet = bottomSheet;
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.translateService = translateService;
        this.devicesservice = devicesservice;
        this.platformId = platformId;
        this.Data = new Data([], // properties
        [], // compareList
        [], // favorites
        [] // locations
        );
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/assets/data/';
        this.apiKey = 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I';
        this.features = [];
    }
    getProperties() {
        return this.http.get(this.url + 'properties.json');
    }
    getPropertyById(id) {
        return this.http.get(this.url + 'property-' + id + '.json');
    }
    getFeaturedProperties() {
        return this.http.get(this.url + 'featured-properties.json');
    }
    getRelatedProperties() {
        return this.http.get(this.url + 'related-properties.json');
    }
    getPropertiesByAgentId(agentId) {
        return this.http.get(this.url + 'properties-agentid-' + agentId + '.json');
    }
    getLocations() {
        return this.http.get(this.url + 'locations.json');
    }
    getAddress(lat = 40.714224, lng = -73.961452) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey);
    }
    getLatLng(address) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=' + this.apiKey + '&address=' + address);
    }
    getFullAddress(lat = 40.714224, lng = -73.961452) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey).subscribe(data => {
            return data['results'][0]['formatted_address'];
        });
    }
    addToCompare(property, component, direction) {
        if (!this.Data.compareList.filter(item => item.id == property.id)[0]) {
            this.Data.compareList.push(property);
            this.bottomSheet.open(component, {
                direction: direction
            }).afterDismissed().subscribe(isRedirect => {
                if (isRedirect) {
                    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
                        window.scrollTo(0, 0);
                    }
                }
            });
        }
    }
    addToFavorites(property, direction) {
        if (!this.Data.favorites.filter(item => item.id == property.id)[0]) {
            this.Data.favorites.push(property);
            this.snackBar.open('The property "' + property.title + '" has been added to favorites.', '×', {
                verticalPosition: 'top',
                duration: 3000,
                direction: direction
            });
        }
    }
    openConfirmDialog(title, message) {
        const dialogData = new _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogModel(title, message);
        const dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData
        });
        return dialogRef;
    }
    openAlertDialog(message) {
        const dialogRef = this.dialog.open(_shared_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AlertDialogComponent, {
            maxWidth: "400px",
            data: message
        });
        return dialogRef;
    }
    getTranslateValue(key, param = null) {
        let value = null;
        this.translateService.get(key, { param: param }).subscribe((res) => {
            value = res;
        });
        return value;
    }
    getPropertyTypes() {
        return [
            { id: 0, name: 'Appartement' },
            { id: 1, name: 'Maison' },
            { id: 3, name: 'Annexe' },
            { id: 4, name: "Maison d'hote" },
        ];
    }
    getPropertyStatuses() {
        return [
            { id: 0, name: ' Cabane dans les arbres ' },
            { id: 1, name: ' Bulle ' },
            { id: 2, name: " Cabane sur l'eau " },
            { id: 3, name: ' Cabane ' },
            { id: 4, name: ' Cabane sur pilotis ' },
            { id: 5, name: ' Chalet ' }
        ];
    }
    getCities() {
        return [
            { id: 1, name: 'Paris' },
            { id: 2, name: 'Nantes' },
            { id: 3, name: 'Lyon' },
            { id: 4, name: 'Rennes' },
            { id: 5, name: 'Bordeaux' },
            { id: 6, name: 'Marseille' },
            { id: 7, name: 'Lille' }
        ];
    }
    getNeighborhoods() {
        return [
            { id: 1, name: 'Faubourg d isle', cityId: 1 },
            { id: 2, name: 'Fontbouillant', cityId: 1 },
            { id: 3, name: 'Les Chartreux', cityId: 1 },
            { id: 4, name: 'Le Plessis', cityId: 2 },
            { id: 5, name: 'Saint Augustin', cityId: 2 },
            { id: 6, name: 'Point du Jour', cityId: 2 },
            { id: 7, name: 'La Conte', cityId: 3 },
            { id: 8, name: 'Le Tricot', cityId: 3 },
            { id: 9, name: 'Corsy', cityId: 3 },
            { id: 10, name: 'Centre Nord', cityId: 4 },
            { id: 11, name: 'Henri Sellier', cityId: 4 },
            { id: 12, name: 'Saint Michel', cityId: 4 }
        ];
    }
    getStreets() {
        return [
            { id: 1, name: 'Chemin de la Terre de Fer', cityId: 1, neighborhoodId: 1 },
            { id: 2, name: 'Chemin de l Océan', cityId: 1, neighborhoodId: 1 },
            { id: 3, name: 'Voie d Apollon', cityId: 1, neighborhoodId: 2 },
            { id: 4, name: 'Chemin des Orchidées', cityId: 1, neighborhoodId: 2 },
            { id: 5, name: 'Rue d Eau', cityId: 1, neighborhoodId: 3 },
            { id: 6, name: 'Boulevard d Été', cityId: 1, neighborhoodId: 3 },
            { id: 7, name: 'Boulevard des Rois', cityId: 2, neighborhoodId: 4 },
            { id: 8, name: 'Rue de Crasse', cityId: 2, neighborhoodId: 4 },
            { id: 9, name: 'Rue des Pigeons', cityId: 2, neighborhoodId: 5 },
            { id: 10, name: 'Rue des Marins', cityId: 2, neighborhoodId: 5 },
            { id: 11, name: 'Rue de la Mairie', cityId: 2, neighborhoodId: 6 },
            { id: 12, name: 'Rue Principale', cityId: 2, neighborhoodId: 6 },
            { id: 13, name: 'Rue du Stade', cityId: 3, neighborhoodId: 7 },
            { id: 14, name: 'Rue de la Fontaine', cityId: 3, neighborhoodId: 7 },
            { id: 15, name: 'Rue Pasteur7', cityId: 3, neighborhoodId: 8 },
            { id: 16, name: 'Rue des Jardins', cityId: 3, neighborhoodId: 8 },
            { id: 17, name: 'Rue Victor-Hugo', cityId: 3, neighborhoodId: 9 },
            { id: 18, name: 'Rue de l Église', cityId: 3, neighborhoodId: 9 },
            { id: 19, name: 'Grande Rue', cityId: 4, neighborhoodId: 10 },
            { id: 20, name: 'Rue du Moulin', cityId: 4, neighborhoodId: 10 },
            { id: 21, name: 'Avenue de Guyenne', cityId: 4, neighborhoodId: 11 },
            { id: 22, name: 'Avenue du Canada', cityId: 4, neighborhoodId: 11 },
            { id: 23, name: 'Rue Alphonse Guérin', cityId: 4, neighborhoodId: 12 },
            { id: 24, name: 'Rue Charles Geniaux', cityId: 4, neighborhoodId: 12 }
        ];
    }
    getFeatures() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.devicesservice.getDevices().subscribe(res => {
                if (!res) {
                    return;
                }
                //  this.dataSource = new MatTableDataSource<any>(res);
                this.data = res;
                var features = [];
                for (let data of this.data) {
                    //  this.features.push({id:data.id}, {name:data.name})
                    // this.setfeatures(data.id,data.name);
                    features.push({ id: data.id }, { name: data.name });
                }
                // return features;
                return this.features = res;
                // console.log('hna',this.features);
            });
            /*return [
              { id: 1, name: 'Climatisation', selected: false },
              { id: 2, name: 'Barbeque', selected: false },
              { id: 3, name: 'Séchoir', selected: false },
              { id: 4, name: 'Micro-ondes', selected: false },
              { id: 5, name: 'Réfrigérateur', selected: false },
              { id: 6, name: 'TV Cable', selected: false },
              { id: 7, name: 'Sauna', selected: false },
              { id: 8, name: 'WiFi', selected: false },
              { id: 9, name: 'Cheminée', selected: false },
              { id: 10, name: 'Piscine', selected: false },
              { id: 11, name: 'Salle de sport', selected: false },
            ]*/
        });
    }
    getHomeCarouselSlides() {
        return this.http.get(this.url + 'slides.json');
    }
    filterData(data, params, sort, page, perPage) {
        if (params) {
            if (params.propertyType) {
                data = data.filter(property => property.propertyType == params.propertyType.name);
            }
            if (params.propertyStatus && params.propertyStatus.length) {
                let statuses = [];
                params.propertyStatus.forEach(status => { statuses.push(status.name); });
                let properties = [];
                data.filter(property => property.propertyStatus.forEach(status => {
                    if (statuses.indexOf(status) > -1) {
                        if (!properties.includes(property)) {
                            properties.push(property);
                        }
                    }
                }));
                data = properties;
            }
            if (params.price) {
                if (this.appSettings.settings.currency == 'USD') {
                    if (params.price.from) {
                        data = data.filter(property => {
                            if (property.priceDollar.sale && property.priceDollar.sale >= params.price.from) {
                                return true;
                            }
                            if (property.priceDollar.rent && property.priceDollar.rent >= params.price.from) {
                                return true;
                            }
                            return false;
                        });
                    }
                    if (params.price.to) {
                        data = data.filter(property => {
                            if (property.priceDollar.sale && property.priceDollar.sale <= params.price.to) {
                                return true;
                            }
                            if (property.priceDollar.rent && property.priceDollar.rent <= params.price.to) {
                                return true;
                            }
                            return false;
                        });
                    }
                }
                if (this.appSettings.settings.currency == 'EUR') {
                    if (params.price.from) {
                        data = data.filter(property => {
                            if (property.priceEuro.sale && property.priceEuro.sale >= params.price.from) {
                                return true;
                            }
                            if (property.priceEuro.rent && property.priceEuro.rent >= params.price.from) {
                                return true;
                            }
                            return false;
                        });
                    }
                    if (params.price.to) {
                        data = data.filter(property => {
                            if (property.priceEuro.sale && property.priceEuro.sale <= params.price.to) {
                                return true;
                            }
                            if (property.priceEuro.rent && property.priceEuro.rent <= params.price.to) {
                                return true;
                            }
                            return false;
                        });
                    }
                }
            }
            if (params.city) {
                data = data.filter(property => property.city == params.city.name);
            }
            if (params.zipCode) {
                data = data.filter(property => property.zipCode == params.zipCode);
            }
            if (params.neighborhood && params.neighborhood.length) {
                let neighborhoods = [];
                params.neighborhood.forEach(item => { neighborhoods.push(item.name); });
                let properties = [];
                data.filter(property => property.neighborhood.forEach(item => {
                    if (neighborhoods.indexOf(item) > -1) {
                        if (!properties.includes(property)) {
                            properties.push(property);
                        }
                    }
                }));
                data = properties;
            }
            if (params.street && params.street.length) {
                let streets = [];
                params.street.forEach(item => { streets.push(item.name); });
                let properties = [];
                data.filter(property => property.street.forEach(item => {
                    if (streets.indexOf(item) > -1) {
                        if (!properties.includes(property)) {
                            properties.push(property);
                        }
                    }
                }));
                data = properties;
            }
            if (params.bedrooms) {
                if (params.bedrooms.from) {
                    data = data.filter(property => property.bedrooms >= params.bedrooms.from);
                }
                if (params.bedrooms.to) {
                    data = data.filter(property => property.bedrooms <= params.bedrooms.to);
                }
            }
            if (params.bathrooms) {
                if (params.bathrooms.from) {
                    data = data.filter(property => property.bathrooms >= params.bathrooms.from);
                }
                if (params.bathrooms.to) {
                    data = data.filter(property => property.bathrooms <= params.bathrooms.to);
                }
            }
            if (params.garages) {
                if (params.garages.from) {
                    data = data.filter(property => property.garages >= params.garages.from);
                }
                if (params.garages.to) {
                    data = data.filter(property => property.garages <= params.garages.to);
                }
            }
            if (params.area) {
                if (params.area.from) {
                    data = data.filter(property => property.area.value >= params.area.from);
                }
                if (params.area.to) {
                    data = data.filter(property => property.area.value <= params.area.to);
                }
            }
            if (params.yearBuilt) {
                if (params.yearBuilt.from) {
                    data = data.filter(property => property.yearBuilt >= params.yearBuilt.from);
                }
                if (params.yearBuilt.to) {
                    data = data.filter(property => property.yearBuilt <= params.yearBuilt.to);
                }
            }
            if (params.features) {
                let arr = [];
                params.features.forEach(feature => {
                    if (feature.selected)
                        arr.push(feature.name);
                });
                if (arr.length > 0) {
                    let properties = [];
                    data.filter(property => property.features.forEach(feature => {
                        if (arr.indexOf(feature) > -1) {
                            if (!properties.includes(property)) {
                                properties.push(property);
                            }
                        }
                    }));
                    data = properties;
                }
            }
        }
        // console.log(data)
        //for show more properties mock data 
        for (var index = 0; index < 2; index++) {
            data = data.concat(data);
        }
        this.sortData(sort, data);
        return this.paginator(data, page, perPage);
    }
    sortData(sort, data) {
        if (sort) {
            switch (sort) {
                case 'Newest':
                    data = data.sort((a, b) => { return new Date(b.published) - new Date(a.published); });
                    break;
                case 'Oldest':
                    data = data.sort((a, b) => { return new Date(a.published) - new Date(b.published); });
                    break;
                case 'Popular':
                    data = data.sort((a, b) => {
                        if (a.ratingsValue / a.ratingsCount < b.ratingsValue / b.ratingsCount) {
                            return 1;
                        }
                        if (a.ratingsValue / a.ratingsCount > b.ratingsValue / b.ratingsCount) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case 'Price (Low to High)':
                    if (this.appSettings.settings.currency == 'USD') {
                        data = data.sort((a, b) => {
                            if ((a.priceDollar.sale || a.priceDollar.rent) > (b.priceDollar.sale || b.priceDollar.rent)) {
                                return 1;
                            }
                            if ((a.priceDollar.sale || a.priceDollar.rent) < (b.priceDollar.sale || b.priceDollar.rent)) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    if (this.appSettings.settings.currency == 'EUR') {
                        data = data.sort((a, b) => {
                            if ((a.priceEuro.sale || a.priceEuro.rent) > (b.priceEuro.sale || b.v.rent)) {
                                return 1;
                            }
                            if ((a.priceEuro.sale || a.priceEuro.rent) < (b.priceEuro.sale || b.priceEuro.rent)) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    break;
                case 'Price (High to Low)':
                    if (this.appSettings.settings.currency == 'USD') {
                        data = data.sort((a, b) => {
                            if ((a.priceDollar.sale || a.priceDollar.rent) < (b.priceDollar.sale || b.priceDollar.rent)) {
                                return 1;
                            }
                            if ((a.priceDollar.sale || a.priceDollar.rent) > (b.priceDollar.sale || b.priceDollar.rent)) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    if (this.appSettings.settings.currency == 'EUR') {
                        data = data.sort((a, b) => {
                            if ((a.priceEuro.sale || a.priceEuro.rent) < (b.priceEuro.sale || b.v.rent)) {
                                return 1;
                            }
                            if ((a.priceEuro.sale || a.priceEuro.rent) > (b.priceEuro.sale || b.priceEuro.rent)) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    break;
                default:
                    break;
            }
        }
        return data;
    }
    paginator(items, page, perPage) {
        var page = page || 1, perPage = perPage || 4, offset = (page - 1) * perPage, paginatedItems = items.slice(offset).slice(0, perPage), totalPages = Math.ceil(items.length / perPage);
        return {
            data: paginatedItems,
            pagination: {
                page: page,
                perPage: perPage,
                prePage: page - 1 ? page - 1 : null,
                nextPage: (totalPages > page) ? page + 1 : null,
                total: items.length,
                totalPages: totalPages,
            }
        };
    }
    getTestimonials() {
        return [
            {
                text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
                author: 'Mr. Adam Sandler',
                position: 'General Director',
                image: 'assets/images/profile/adam.jpg'
            },
            {
                text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
                author: 'Ashley Ahlberg',
                position: 'Housewife',
                image: 'assets/images/profile/ashley.jpg'
            },
            {
                text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
                author: 'Bruno Vespa',
                position: 'Blogger',
                image: 'assets/images/profile/bruno.jpg'
            },
            {
                text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
                author: 'Mrs. Julia Aniston',
                position: 'Marketing Manager',
                image: 'assets/images/profile/julia.jpg'
            }
        ];
    }
    getAgents() {
        return [
            {
                id: 1,
                fullName: 'Lusia Manuel',
                desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
                organization: 'HouseKey',
                email: 'lusia.m@housekey.com',
                phone: '(224) 267-1346',
                social: {
                    facebook: 'lusia',
                    twitter: 'lusia',
                    linkedin: 'lusia',
                    instagram: 'lusia',
                    website: 'https://lusia.manuel.com'
                },
                ratingsCount: 6,
                ratingsValue: 480,
                image: 'assets/images/agents/a-1.jpg'
            },
            {
                id: 2,
                fullName: 'Andy Warhol',
                desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
                organization: 'HouseKey',
                email: 'andy.w@housekey.com',
                phone: '(212) 457-2308',
                social: {
                    facebook: '',
                    twitter: '',
                    linkedin: '',
                    instagram: '',
                    website: 'https://andy.warhol.com'
                },
                ratingsCount: 4,
                ratingsValue: 400,
                image: 'assets/images/agents/a-2.jpg'
            },
            {
                id: 3,
                fullName: 'Tereza Stiles',
                desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
                organization: 'HouseKey',
                email: 'tereza.s@housekey.com',
                phone: '(214) 617-2614',
                social: {
                    facebook: '',
                    twitter: '',
                    linkedin: '',
                    instagram: '',
                    website: 'https://tereza.stiles.com'
                },
                ratingsCount: 4,
                ratingsValue: 380,
                image: 'assets/images/agents/a-3.jpg'
            },
            {
                id: 4,
                fullName: 'Michael Blair',
                desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
                organization: 'HouseKey',
                email: 'michael.b@housekey.com',
                phone: '(267) 388-1637',
                social: {
                    facebook: '',
                    twitter: '',
                    linkedin: '',
                    instagram: '',
                    website: 'https://michael.blair.com'
                },
                ratingsCount: 6,
                ratingsValue: 480,
                image: 'assets/images/agents/a-4.jpg'
            },
            {
                id: 5,
                fullName: 'Michelle Ormond',
                desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
                organization: 'HouseKey',
                email: 'michelle.o@housekey.com',
                phone: '(267) 388-1637',
                social: {
                    facebook: '',
                    twitter: '',
                    linkedin: '',
                    instagram: '',
                    website: 'https://michelle.ormond.com'
                },
                ratingsCount: 6,
                ratingsValue: 480,
                image: 'assets/images/agents/a-5.jpg'
            }
        ];
    }
    getClients() {
        return [
            { name: 'aloha', image: 'assets/images/clients/aloha.png' },
            { name: 'dream', image: 'assets/images/clients/dream.png' },
            { name: 'congrats', image: 'assets/images/clients/congrats.png' },
            { name: 'best', image: 'assets/images/clients/best.png' },
            { name: 'original', image: 'assets/images/clients/original.png' },
            { name: 'retro', image: 'assets/images/clients/retro.png' },
            { name: 'king', image: 'assets/images/clients/king.png' },
            { name: 'love', image: 'assets/images/clients/love.png' },
            { name: 'the', image: 'assets/images/clients/the.png' },
            { name: 'easter', image: 'assets/images/clients/easter.png' },
            { name: 'with', image: 'assets/images/clients/with.png' },
            { name: 'special', image: 'assets/images/clients/special.png' },
            { name: 'bravo', image: 'assets/images/clients/bravo.png' }
        ];
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__.MatBottomSheet },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar },
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _services_devices_service__WEBPACK_IMPORTED_MODULE_4__.DevicesService },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_12__.PLATFORM_ID,] }] }
];
AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ 18036:
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "AppSettings": () => (/* binding */ AppSettings)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


class Settings {
    constructor(name, theme, toolbar, stickyMenuToolbar, header, rtl, searchPanelVariant, searchOnBtnClick, currency, 
    //additional options
    mainToolbarFixed, contentOffsetToTop, headerBgImage, headerBgVideo, loadMore) {
        this.name = name;
        this.theme = theme;
        this.toolbar = toolbar;
        this.stickyMenuToolbar = stickyMenuToolbar;
        this.header = header;
        this.rtl = rtl;
        this.searchPanelVariant = searchPanelVariant;
        this.searchOnBtnClick = searchOnBtnClick;
        this.currency = currency;
        this.mainToolbarFixed = mainToolbarFixed;
        this.contentOffsetToTop = contentOffsetToTop;
        this.headerBgImage = headerBgImage;
        this.headerBgVideo = headerBgVideo;
        this.loadMore = loadMore;
    }
}
let AppSettings = class AppSettings {
    constructor() {
        this.settings = new Settings('AtypikHouse', // theme name
        'orange-dark', // blue, green, red, pink, purple, grey, orange-dark
        1, // 1 or 2  
        true, // true = sticky, false = not sticky
        'image', // default, image, carousel, map, video
        false, // true = rtl, false = ltr
        2, //  1, 2  or 3
        false, //  true = search on button click
        'EUR', // USD, EUR
        //NOTE:  don't change additional options values, they used for theme performance
        false, false, false, false, {
            start: false,
            step: 1,
            load: false,
            page: 1,
            complete: false,
            result: 0
        });
    }
};
AppSettings = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], AppSettings);



/***/ }),

/***/ 74088:
/*!**************************************************!*\
  !*** ./src/app/directives/dropzone.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropzoneDirective": () => (/* binding */ DropzoneDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


let DropzoneDirective = class DropzoneDirective {
    constructor() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onDrop($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    }
    onDragOver($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    }
    onDragLeave($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    }
};
DropzoneDirective.ctorParameters = () => [];
DropzoneDirective.propDecorators = {
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    hovered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['drop', ['$event'],] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragleave', ['$event'],] }]
};
DropzoneDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[dropzone]'
    })
], DropzoneDirective);



/***/ }),

/***/ 71324:
/*!************************************************************!*\
  !*** ./src/app/pages/lock-screen/lock-screen.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockScreenComponent": () => (/* binding */ LockScreenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lock_screen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lock-screen.component.html */ 51798);
/* harmony import */ var _lock_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock-screen.component.scss */ 36163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);






let LockScreenComponent = class LockScreenComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.date = new Date();
    }
    ngOnInit() {
        this.timerInterval = setInterval(() => {
            this.date = new Date();
        }, 1000);
        this.form = this.fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)])]
        });
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
    ngOnDestroy() {
        clearInterval(this.timerInterval);
    }
    onSubmit(values) {
        if (this.form.valid) {
            this.router.navigate(['/']);
        }
    }
};
LockScreenComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LockScreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-lock-screen',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lock_screen_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.None,
        styles: [_lock_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LockScreenComponent);



/***/ }),

/***/ 98622:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./not-found.component.html */ 712);
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.scss */ 70085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);





let NotFoundComponent = class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goHome() {
        this.router.navigate(['/']);
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-not-found',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotFoundComponent);



/***/ }),

/***/ 85722:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pages.component.html */ 17072);
/* harmony import */ var _pages_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component.scss */ 61901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ 18036);







let PagesComponent = class PagesComponent {
    constructor(appSettings, router, platformId) {
        this.appSettings = appSettings;
        this.router = router;
        this.platformId = platformId;
        this.toolbarTypes = [1, 2];
        this.headerTypes = ['default', 'image', 'carousel', 'map', 'video'];
        this.searchPanelVariants = [1, 2, 3];
        this.headerFixed = false;
        this.showBackToTop = false;
        this.scrolledCount = 0;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.toolbarTypeOption = this.settings.toolbar;
        this.headerTypeOption = this.settings.header;
        this.searchPanelVariantOption = this.settings.searchPanelVariant;
    }
    changeTheme(theme) {
        this.settings.theme = theme;
    }
    chooseToolbarType() {
        this.settings.toolbar = this.toolbarTypeOption;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
    chooseHeaderType() {
        this.settings.header = this.headerTypeOption;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
        this.router.navigate(['/']);
    }
    chooseSearchPanelVariant() {
        this.settings.searchPanelVariant = this.searchPanelVariantOption;
    }
    onWindowScroll() {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        (scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
        if (this.settings.stickyMenuToolbar) {
            let top_toolbar = document.getElementById('top-toolbar');
            if (top_toolbar) {
                if (scrollTop >= top_toolbar.clientHeight) {
                    this.settings.mainToolbarFixed = true;
                }
                else {
                    this.settings.mainToolbarFixed = false;
                }
            }
        }
        let load_more = document.getElementById('load-more');
        if (load_more) {
            if (window.innerHeight > load_more.getBoundingClientRect().top + 120) {
                if (!this.settings.loadMore.complete) {
                    if (this.settings.loadMore.start) {
                        if (this.scrolledCount < this.settings.loadMore.step) {
                            this.scrolledCount++;
                            if (!this.settings.loadMore.load) {
                                this.settings.loadMore.load = true;
                            }
                        }
                        else {
                            this.settings.loadMore.start = false;
                            this.scrolledCount = 0;
                        }
                    }
                }
            }
        }
    }
    scrollToTop() {
        var scrollDuration = 200;
        var scrollStep = -window.pageYOffset / (scrollDuration / 20);
        var scrollInterval = setInterval(() => {
            if (window.pageYOffset != 0) {
                window.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                    window.scrollTo(0, 0);
                }
            });
        }
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this.sidenav.close();
                this.settings.mainToolbarFixed = false;
                setTimeout(() => {
                    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                        window.scrollTo(0, 0);
                    }
                });
            }
        });
    }
};
PagesComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID,] }] }
];
PagesComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['sidenav',] }],
    onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.HostListener, args: ['window:scroll',] }]
};
PagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pages',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pages_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pages_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagesComponent);



/***/ }),

/***/ 45854:
/*!****************************************************!*\
  !*** ./src/app/services/accommodations.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationsService": () => (/* binding */ AccommodationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_constantURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constantURL */ 4274);




let AccommodationsService = class AccommodationsService {
    constructor(http) {
        this.http = http;
        this.url = src_app_shared_constantURL__WEBPACK_IMPORTED_MODULE_0__.constantURL.apiEndpoint + '/api/Accommodations';
    }
    postAccommodation(accommodationcreate) {
        return this.http.post(this.url, accommodationcreate);
    }
    getAccommodations(param) {
        return this.http.get(this.url, { params: param });
    }
    getAccommodationstovalidate() {
        return this.http.get(`${this.url}/to-validate`);
    }
    getAccommodationsAll(param) {
        return this.http.get(`${this.url}/all`, { params: param });
    }
    getAccommodationsStars() {
        return this.http.get(`${this.url}/stars`);
    }
    getAccommodation(id) {
        return this.http.get(this.url + "/" + id);
    }
    putAcommodation(id, accommodationUpdate) {
        return this.http.put(`${this.url}/${id}`, accommodationUpdate);
    }
    deleteAcommodation(id) {
        return this.http.delete(this.url + "/" + id);
    }
    getAccommodationHost(id) {
        return this.http.get(this.url + "/" + id + "/host");
    }
    getAccommodationsHosts() {
        return this.http.get(this.url + "/host");
    }
    getAccommodationBookings(id, param) {
        return this.http.get(this.url + "/" + id + "/bookings", { params: param });
    }
    getAccommodationBookingsToValidate(id) {
        return this.http.get(this.url + "/" + id + "/bookings/to-validate");
    }
    getAccommodationBookingsParameters(id) {
        return this.http.get(this.url + "/" + id + "/parameters");
    }
    getAccommodationBookingsComments(id, param) {
        return this.http.get(this.url + "/" + id + "/parameters", { params: param });
    }
    getAccommodationComentsphotos(id) {
        return this.http.get(this.url + "/" + id + "/comments/photos");
    }
    getAccommodationActivities(id) {
        return this.http.get(this.url + "/" + id + "/activities");
    }
    deleteAcommodationComment(id) {
        return this.http.delete(this.url + "/comments/" + id);
    }
    postAccommodationComment(commentcreate) {
        return this.http.post(this.url + "/comments", commentcreate);
    }
};
AccommodationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AccommodationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AccommodationsService);



/***/ }),

/***/ 33965:
/*!*********************************************!*\
  !*** ./src/app/services/devices.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesService": () => (/* binding */ DevicesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_constantURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constantURL */ 4274);




let DevicesService = class DevicesService {
    constructor(http) {
        this.http = http;
        this.url = _shared_constantURL__WEBPACK_IMPORTED_MODULE_0__.constantURL.apiEndpoint + '/api/Devices';
    }
    getDevices() {
        return this.http.get(this.url);
    }
    postDevices(DevicesCreate) {
        return this.http.post(this.url, DevicesCreate);
    }
    putDevices(id, putdevice) {
        return this.http.put(this.url + "/" + id, putdevice);
    }
    deleteDevice(id) {
        return this.http.delete(this.url + "/" + id);
    }
};
DevicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DevicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DevicesService);



/***/ }),

/***/ 41954:
/*!*******************************************!*\
  !*** ./src/app/services/guard.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthServiceGuard": () => (/* binding */ AuthServiceGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 40704);




let AuthServiceGuard = class AuthServiceGuard {
    constructor(_router, jwtHelper) {
        this._router = _router;
        this.jwtHelper = jwtHelper;
    }
    canActivate(route, state) {
        const token = localStorage.getItem('jwt');
        //let url: string = state.url; 
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        this._router.navigate(["login"]);
        return false;
    }
};
AuthServiceGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService }
];
AuthServiceGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthServiceGuard);



/***/ }),

/***/ 43493:
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_constantURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constantURL */ 4274);




let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
        this.url = _shared_constantURL__WEBPACK_IMPORTED_MODULE_0__.constantURL.apiEndpoint + '/api/Users';
    }
    getAllUsers() {
        return this.http.get(this.url);
    }
    putUsersnoid(id, body) {
        return this.http.put(this.url + "/" + id, body);
    }
    getUsersid(id) {
        return this.http.get(this.url + "/" + id);
    }
    putUsers(body) {
        return this.http.put(this.url + "/", { body });
    }
    deleteUsers(id) {
        return this.http.delete(this.url + "/" + id);
    }
    getUsersprofile() {
        return this.http.get(this.url + "/profile");
    }
    getUsersbookings(param) {
        return this.http.get(`${this.url}/bookings`, { params: param });
    }
    getUsersUnavailableSlots() {
        return this.http.get(this.url + "/unavailableSlots");
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ 73880:
/*!***************************************************************!*\
  !*** ./src/app/shared/alert-dialog/alert-dialog.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDialogComponent": () => (/* binding */ AlertDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alert_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./alert-dialog.component.html */ 4488);
/* harmony import */ var _alert_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-dialog.component.scss */ 64713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 46298);





let AlertDialogComponent = class AlertDialogComponent {
    constructor(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
};
AlertDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA,] }] }
];
AlertDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alert-dialog',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alert_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_alert_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlertDialogComponent);



/***/ }),

/***/ 12353:
/*!*****************************************************!*\
  !*** ./src/app/shared/clients/clients.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsComponent": () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clients_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./clients.component.html */ 66726);
/* harmony import */ var _clients_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.component.scss */ 21843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);





let ClientsComponent = class ClientsComponent {
    constructor(appService) {
        this.appService = appService;
        this.config = {};
    }
    ngOnInit() {
        this.clients = this.appService.getClients();
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 7,
            spaceBetween: 16,
            keyboard: true,
            navigation: false,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide",
            breakpoints: {
                320: {
                    slidesPerView: 2
                },
                480: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 4
                },
                960: {
                    slidesPerView: 5
                },
                1280: {
                    slidesPerView: 6
                },
                1500: {
                    slidesPerView: 7
                }
            }
        };
    }
};
ClientsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
ClientsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-clients',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clients_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_clients_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientsComponent);



/***/ }),

/***/ 48346:
/*!*******************************************************!*\
  !*** ./src/app/shared/comments/comments.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": () => (/* binding */ CommentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comments.component.html */ 8432);
/* harmony import */ var _comments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.component.scss */ 99794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/accommodations.service */ 45854);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);








let CommentsComponent = class CommentsComponent {
    constructor(fb, activatedRoute, router, accommodationsservice, _snackBar) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.accommodationsservice = accommodationsservice;
        this._snackBar = _snackBar;
        this.reviews = [
            {
                author: 'Bruno Vespa',
                avatar: 'assets/images/avatars/avatar-1.png',
                tooltip: 'Dissatisfied',
                icon: 'sentiment_dissatisfied',
                date: '13 January, 2018 at 7:09',
                text: 'Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.'
            },
            {
                author: 'Julia Aniston',
                avatar: 'assets/images/avatars/avatar-2.png',
                tooltip: 'Very Satisfied',
                icon: 'sentiment_very_satisfied',
                date: '04 February, 2018 at 10:22',
                text: 'Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.'
            },
            {
                author: 'Andy Warhol',
                avatar: 'assets/images/avatars/avatar-3.png',
                tooltip: 'Neutral',
                icon: 'sentiment_neutral',
                date: '14 February, 2018 at 11:10',
                text: 'Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.'
            }
        ];
        this.ratings = [
            { title: 'Très Insatisfait', icon: 'sentiment_very_dissatisfied', percentage: 20, selected: false },
            { title: 'Insatisfait', icon: 'sentiment_dissatisfied', percentage: 40, selected: false },
            { title: 'Neutre', icon: 'sentiment_neutral', percentage: 60, selected: false },
            { title: 'Satisfait', icon: 'sentiment_satisfied', percentage: 80, selected: false },
            { title: 'Très Satisfait', icon: 'sentiment_very_satisfied', percentage: 100, selected: false }
        ];
        this.isadmin = 'false';
        this.comments = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.sub = this.activatedRoute.params.subscribe(params => {
                this.propertyId = params['id'];
            });
            this.isadmin = localStorage.getItem('isadmin');
            console.log(this.propertyId);
            if (this.propertyId != null) {
                const data = yield this.accommodationsservice.getAccommodation(parseInt(this.propertyId)).toPromise();
                this.comments = data['comments'];
            }
            this.commentForm = this.fb.group({
                review: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
                rate: null,
                propertyId: this.propertyId
            });
        });
    }
    isItemInfoRoute() {
        return this.router.url.search('properties') > -1;
    }
    isItemInfoRoute2() {
        return this.router.url.search('bookings') > -1;
    }
    onCommentFormSubmit(values) {
        if (this.commentForm.valid) {
            console.log(values);
            var id = parseInt(localStorage.getItem('propertyId'));
            this.accommodationsservice.postAccommodationComment({ accommodationId: id, environmentalScore: values.rate,
                content: values.review, cleanlinessScore: 0, serviceScore: 0, communicationScore: 0, photos: []
            }).subscribe((data) => this.openSnackBar('Commentaire ajouter avec success !', 'x'), (err) => this.openSnackBar(err.error.message, 'x'));
        }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action);
    }
    rate(rating) {
        this.ratings.filter(r => r.selected = false);
        this.ratings.filter(r => r.percentage == rating.percentage)[0].selected = true;
        this.commentForm.controls.rate.setValue(rating.percentage);
    }
    remove(id) {
        this.accommodationsservice.deleteAcommodationComment(id).subscribe();
        this.ngOnInit();
    }
};
CommentsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_accommodations_service__WEBPACK_IMPORTED_MODULE_2__.AccommodationsService },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar }
];
CommentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-comments',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_comments_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommentsComponent);



/***/ }),

/***/ 23023:
/*!***********************************************************************!*\
  !*** ./src/app/shared/compare-overview/compare-overview.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareOverviewComponent": () => (/* binding */ CompareOverviewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_compare_overview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./compare-overview.component.html */ 18810);
/* harmony import */ var _compare_overview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-overview.component.scss */ 96066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 42132);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 18036);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 38198);







let CompareOverviewComponent = class CompareOverviewComponent {
    constructor(appService, appSettings, bottomSheetRef) {
        this.appService = appService;
        this.appSettings = appSettings;
        this.bottomSheetRef = bottomSheetRef;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.properties = this.appService.Data.compareList;
    }
    hideSheet(isRedirect) {
        this.bottomSheetRef.dismiss(isRedirect);
    }
    remove(property, event) {
        const index = this.appService.Data.compareList.indexOf(property);
        if (index !== -1) {
            this.appService.Data.compareList.splice(index, 1);
        }
        if (this.appService.Data.compareList.length == 0) {
            this.hideSheet(false);
        }
        event.preventDefault();
    }
};
CompareOverviewComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetRef }
];
CompareOverviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-compare-overview',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_compare_overview_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_compare_overview_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompareOverviewComponent);



/***/ }),

/***/ 43327:
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogModel": () => (/* binding */ ConfirmDialogModel),
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./confirm-dialog.component.html */ 85217);
/* harmony import */ var _confirm_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-dialog.component.scss */ 14534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 46298);





class ConfirmDialogModel {
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}
let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        this.message = data.message;
    }
    ngOnInit() {
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef },
    { type: ConfirmDialogModel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA,] }] }
];
ConfirmDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-confirm-dialog',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_confirm_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmDialogComponent);



/***/ }),

/***/ 4274:
/*!***************************************!*\
  !*** ./src/app/shared/constantURL.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constantURL": () => (/* binding */ constantURL)
/* harmony export */ });
const constantURL = {
    apiEndpoint: 'https://atypikhouse.azurewebsites.net',
    //apiEndpoint:'http://localhost:5000', 
    //  apiEndpoint:'https://localhost:5001',
    // apiEndpoint:'http://localhost:8080',
};


/***/ }),

/***/ 70687:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/dialog-header-controls/dialog-header-controls.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogHeaderControlsComponent": () => (/* binding */ DialogHeaderControlsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dialog_header_controls_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dialog-header-controls.component.html */ 8519);
/* harmony import */ var _dialog_header_controls_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-header-controls.component.scss */ 52687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let DialogHeaderControlsComponent = class DialogHeaderControlsComponent {
    constructor() {
        this.showFullscreenIcon = true;
        this.isFullScreen = false;
    }
    ngOnInit() {
    }
    toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
        if (this.isFullScreen) {
            this.dialogRef.addPanelClass('fullscreen');
            document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        }
        else {
            this.dialogRef.removePanelClass('fullscreen');
            document.getElementsByTagName('html')[0].style.overflowY = null;
        }
    }
    close() {
        this.dialogRef.close();
        document.getElementsByTagName('html')[0].style.overflowY = null;
    }
};
DialogHeaderControlsComponent.ctorParameters = () => [];
DialogHeaderControlsComponent.propDecorators = {
    dialogRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['dialogRef',] }],
    showFullscreenIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['showFullscreenIcon',] }]
};
DialogHeaderControlsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dialog-header-controls',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dialog_header_controls_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dialog_header_controls_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DialogHeaderControlsComponent);



/***/ }),

/***/ 93570:
/*!***************************************************************!*\
  !*** ./src/app/shared/get-in-touch/get-in-touch.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetInTouchComponent": () => (/* binding */ GetInTouchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_get_in_touch_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./get-in-touch.component.html */ 77237);
/* harmony import */ var _get_in_touch_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-in-touch.component.scss */ 80568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let GetInTouchComponent = class GetInTouchComponent {
    constructor() { }
    ngOnInit() {
    }
};
GetInTouchComponent.ctorParameters = () => [];
GetInTouchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-get-in-touch',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_get_in_touch_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_get_in_touch_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GetInTouchComponent);



/***/ }),

/***/ 85163:
/*!*********************************************************************!*\
  !*** ./src/app/shared/header-carousel/header-carousel.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderCarouselComponent": () => (/* binding */ HeaderCarouselComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_carousel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-carousel.component.html */ 74673);
/* harmony import */ var _header_carousel_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-carousel.component.scss */ 293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 18036);





let HeaderCarouselComponent = class HeaderCarouselComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.slides = [];
        this.fullscreen = false;
        this.config = {};
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        if (this.contentOffsetToTop) {
            setTimeout(() => {
                this.settings.contentOffsetToTop = this.contentOffsetToTop;
            });
        }
    }
    ngAfterViewInit() {
        this.initCarousel();
    }
    ngOnChanges() {
        if (this.slides.length > 0) {
            this.currentSlide = this.slides[0];
        }
    }
    initCarousel() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide"
        };
    }
    ngOnDestroy() {
        setTimeout(() => {
            this.settings.contentOffsetToTop = false;
        });
    }
    onIndexChange(index) {
        this.currentSlide = this.slides[index];
    }
};
HeaderCarouselComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings }
];
HeaderCarouselComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['slides',] }],
    contentOffsetToTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['contentOffsetToTop',] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['fullscreen',] }]
};
HeaderCarouselComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header-carousel',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_carousel_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_carousel_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderCarouselComponent);



/***/ }),

/***/ 99787:
/*!***************************************************************!*\
  !*** ./src/app/shared/header-image/header-image.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderImageComponent": () => (/* binding */ HeaderImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_image_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-image.component.html */ 86958);
/* harmony import */ var _header_image_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-image.component.scss */ 97341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 18036);






let HeaderImageComponent = class HeaderImageComponent {
    constructor(appSettings, sanitizer) {
        this.appSettings = appSettings;
        this.sanitizer = sanitizer;
        this.isHomePage = false;
        this.fullscreen = false;
        this.settings = this.appSettings.settings;
        setTimeout(() => {
            this.settings.headerBgImage = true;
        });
    }
    ngOnInit() {
        if (this.contentOffsetToTop) {
            setTimeout(() => {
                this.settings.contentOffsetToTop = this.contentOffsetToTop;
            });
        }
        if (this.backgroundImage) {
            this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url(' + this.backgroundImage + ')');
        }
    }
    ngOnDestroy() {
        setTimeout(() => {
            this.settings.headerBgImage = false;
            this.settings.contentOffsetToTop = false;
        });
    }
};
HeaderImageComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer }
];
HeaderImageComponent.propDecorators = {
    backgroundImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['backgroundImage',] }],
    bgImageAnimate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['bgImageAnimate',] }],
    contentOffsetToTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['contentOffsetToTop',] }],
    contentMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['contentMinHeight',] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['title',] }],
    desc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['desc',] }],
    isHomePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['isHomePage',] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['fullscreen',] }]
};
HeaderImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header-image',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_image_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_image_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderImageComponent);



/***/ }),

/***/ 76601:
/*!***********************************************************!*\
  !*** ./src/app/shared/header-map/header-map.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMapComponent": () => (/* binding */ HeaderMapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-map.component.html */ 89000);
/* harmony import */ var _header_map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-map.component.scss */ 88814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 18036);






let HeaderMapComponent = class HeaderMapComponent {
    constructor(appSettings, appService) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.locations = [];
        this.fullscreen = false;
        this.lat = 40.678178;
        this.lng = -93.944158;
        this.zoom = 5;
        this.markerAnimation = 'BOUNCE';
        this.mapStyles = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8b9198"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#323336"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#414954"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2e2f31"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7a7c80"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#242427"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#202124"
                    }
                ]
            }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        if (this.contentOffsetToTop) {
            setTimeout(() => {
                this.settings.contentOffsetToTop = this.contentOffsetToTop;
            });
        }
    }
    ngOnChanges(changes) {
        if (changes.locations) {
            if (!changes.locations.isFirstChange()) {
                //reset map position on filter
                this.zoom = 5;
                this.lat = 40.678178;
                this.lng = -93.944158;
                this.markerAnimation = 'BOUNCE';
                setTimeout(() => {
                    this.markerAnimation = null;
                }, 1000);
            }
        }
    }
    ngOnDestroy() {
        setTimeout(() => {
            this.settings.contentOffsetToTop = false;
        });
    }
    onMapReady(e) {
        setTimeout(() => {
            this.markerAnimation = null;
        }, 1000);
    }
    onMapClick(e) {
        console.log(e);
    }
    onMarkerClick(e, propertyId) {
        this.lat = e.latitude;
        this.lng = e.longitude;
        if (this.zoom < 11) {
            this.zoom = 11;
        }
        this.property = null;
        setTimeout(() => {
            this.appService.getPropertyById(propertyId).subscribe(res => {
                this.property = res;
            });
        }, 500);
    }
    onZoomChange(e) {
        this.zoom = e;
    }
};
HeaderMapComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
HeaderMapComponent.propDecorators = {
    locations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['locations',] }],
    contentOffsetToTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['contentOffsetToTop',] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['fullscreen',] }]
};
HeaderMapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header-map',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_map_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderMapComponent);



/***/ }),

/***/ 79627:
/*!***************************************************************!*\
  !*** ./src/app/shared/header-video/header-video.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderVideoComponent": () => (/* binding */ HeaderVideoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_video_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-video.component.html */ 43509);
/* harmony import */ var _header_video_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-video.component.scss */ 70081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 18036);





let HeaderVideoComponent = class HeaderVideoComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.isHomePage = false;
        this.fullscreen = false;
        this.settings = this.appSettings.settings;
        setTimeout(() => {
            this.settings.headerBgVideo = true;
        });
    }
    ngOnInit() {
        if (this.contentOffsetToTop) {
            setTimeout(() => {
                this.settings.contentOffsetToTop = this.contentOffsetToTop;
            });
        }
        var vid = document.getElementById("bgVideo");
        vid.muted = true;
    }
    ngOnDestroy() {
        setTimeout(() => {
            this.settings.headerBgVideo = false;
            this.settings.contentOffsetToTop = false;
        });
    }
};
HeaderVideoComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings }
];
HeaderVideoComponent.propDecorators = {
    backgroundVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['backgroundVideo',] }],
    contentOffsetToTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['contentOffsetToTop',] }],
    contentMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['contentMinHeight',] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['title',] }],
    desc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['desc',] }],
    isHomePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['isHomePage',] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['fullscreen',] }]
};
HeaderVideoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header-video',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_video_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_video_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderVideoComponent);



/***/ }),

/***/ 61511:
/*!*********************************************************!*\
  !*** ./src/app/shared/load-more/load-more.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadMoreComponent": () => (/* binding */ LoadMoreComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_load_more_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./load-more.component.html */ 85223);
/* harmony import */ var _load_more_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-more.component.scss */ 31456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 18036);





let LoadMoreComponent = class LoadMoreComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.step = 1;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.settings.loadMore.step = this.step;
    }
    startLoad() {
        this.settings.loadMore.start = true;
        this.settings.loadMore.load = true;
    }
};
LoadMoreComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings }
];
LoadMoreComponent.propDecorators = {
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
LoadMoreComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-load-more',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_load_more_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_load_more_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoadMoreComponent);



/***/ }),

/***/ 33284:
/*!***********************************************!*\
  !*** ./src/app/shared/logo/logo.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./logo.component.html */ 31395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



let LogoComponent = class LogoComponent {
};
LogoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-logo',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], LogoComponent);



/***/ }),

/***/ 97997:
/*!*****************************************************!*\
  !*** ./src/app/shared/mission/mission.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissionComponent": () => (/* binding */ MissionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mission_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./mission.component.html */ 23876);
/* harmony import */ var _mission_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mission.component.scss */ 42820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let MissionComponent = class MissionComponent {
    constructor() { }
    ngOnInit() {
    }
};
MissionComponent.ctorParameters = () => [];
MissionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mission',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mission_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mission_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MissionComponent);



/***/ }),

/***/ 58675:
/*!***********************************************************!*\
  !*** ./src/app/shared/our-agents/our-agents.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurAgentsComponent": () => (/* binding */ OurAgentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_our_agents_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./our-agents.component.html */ 25109);
/* harmony import */ var _our_agents_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-agents.component.scss */ 95018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);





let OurAgentsComponent = class OurAgentsComponent {
    constructor(appService) {
        this.appService = appService;
        this.config = {};
    }
    ngOnInit() {
        this.agents = this.appService.getAgents();
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 2
                },
                960: {
                    slidesPerView: 3
                },
                1280: {
                    slidesPerView: 4
                }
            }
        };
    }
};
OurAgentsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
OurAgentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-our-agents',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_our_agents_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_our_agents_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OurAgentsComponent);



/***/ }),

/***/ 57920:
/*!***************************************************************!*\
  !*** ./src/app/shared/our-services/our-services.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurServicesComponent": () => (/* binding */ OurServicesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_our_services_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./our-services.component.html */ 21337);
/* harmony import */ var _our_services_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-services.component.scss */ 77393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let OurServicesComponent = class OurServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
OurServicesComponent.ctorParameters = () => [];
OurServicesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-our-services',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_our_services_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_our_services_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OurServicesComponent);



/***/ }),

/***/ 69151:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/properties-carousel/properties-carousel.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesCarouselComponent": () => (/* binding */ PropertiesCarouselComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_carousel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./properties-carousel.component.html */ 8054);
/* harmony import */ var _properties_carousel_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-carousel.component.scss */ 86191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let PropertiesCarouselComponent = class PropertiesCarouselComponent {
    constructor() {
        this.properties = [];
        this.config = {};
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: { nextEl: '.prop-next', prevEl: '.prop-prev' },
            pagination: true,
            grabCursor: true,
            loop: false,
            preloadImages: true,
            lazy: false,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 2
                },
                960: {
                    slidesPerView: 3
                },
                1280: {
                    slidesPerView: 4
                }
            }
        };
    }
};
PropertiesCarouselComponent.ctorParameters = () => [];
PropertiesCarouselComponent.propDecorators = {
    properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['properties',] }]
};
PropertiesCarouselComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-properties-carousel',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_carousel_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_properties_carousel_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertiesCarouselComponent);



/***/ }),

/***/ 65805:
/*!*********************************************************************************************************!*\
  !*** ./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesSearchResultsFiltersComponent": () => (/* binding */ PropertiesSearchResultsFiltersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_search_results_filters_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./properties-search-results-filters.component.html */ 29731);
/* harmony import */ var _properties_search_results_filters_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-search-results-filters.component.scss */ 7720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let PropertiesSearchResultsFiltersComponent = class PropertiesSearchResultsFiltersComponent {
    constructor() {
        this.onRemoveSearchField = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    remove(field) {
        this.onRemoveSearchField.emit(field);
    }
};
PropertiesSearchResultsFiltersComponent.ctorParameters = () => [];
PropertiesSearchResultsFiltersComponent.propDecorators = {
    searchFields: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    onRemoveSearchField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
PropertiesSearchResultsFiltersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-properties-search-results-filters',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_search_results_filters_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_properties_search_results_filters_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertiesSearchResultsFiltersComponent);



/***/ }),

/***/ 94101:
/*!*************************************************************************!*\
  !*** ./src/app/shared/properties-search/properties-search.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesSearchComponent": () => (/* binding */ PropertiesSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./properties-search.component.html */ 72980);
/* harmony import */ var _properties_search_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-search.component.scss */ 97660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ 38198);






let PropertiesSearchComponent = class PropertiesSearchComponent {
    constructor(appService, fb) {
        this.appService = appService;
        this.fb = fb;
        this.variant = 1;
        this.vertical = false;
        this.searchOnBtnClick = false;
        this.onSearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onSearchClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.showMore = false;
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.features = [];
    }
    ngOnInit() {
        if (this.vertical) {
            this.showMore = true;
        }
        ;
        this.propertyTypes = this.appService.getPropertyTypes();
        this.propertyStatuses = this.appService.getPropertyStatuses();
        this.cities = this.appService.getCities();
        this.neighborhoods = this.appService.getNeighborhoods();
        this.streets = this.appService.getStreets();
        //this.features = this.appService.getFeatures();
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
            features: this.buildFeatures()
        });
        this.onSearchChange.emit(this.form);
    }
    buildFeatures() {
        const arr = this.features.map(feature => {
            return this.fb.group({
                id: feature.id,
                name: feature.name,
                selected: feature.selected
            });
        });
        return this.fb.array(arr);
    }
    ngOnChanges() {
        if (this.removedSearchField) {
            if (this.removedSearchField.indexOf(".") > -1) {
                let arr = this.removedSearchField.split(".");
                this.form.controls[arr[0]]['controls'][arr[1]].reset();
            }
            else if (this.removedSearchField.indexOf(",") > -1) {
                let arr = this.removedSearchField.split(",");
                this.form.controls[arr[0]]['controls'][arr[1]]['controls']['selected'].setValue(false);
            }
            else {
                this.form.controls[this.removedSearchField].reset();
            }
        }
    }
    reset() {
        this.form.reset({
            propertyType: null,
            propertyStatus: null,
            price: {
                from: null,
                to: null
            },
            city: null,
            zipCode: null,
            neighborhood: null,
            street: null,
            bedrooms: {
                from: null,
                to: null
            },
            bathrooms: {
                from: null,
                to: null
            },
            garages: {
                from: null,
                to: null
            },
            area: {
                from: null,
                to: null
            },
            yearBuilt: {
                from: null,
                to: null
            },
            features: this.features
        });
    }
    search() {
        this.onSearchClick.emit();
    }
    onSelectCity() {
        this.form.controls['neighborhood'].setValue(null, { emitEvent: false });
        this.form.controls['street'].setValue(null, { emitEvent: false });
    }
    onSelectNeighborhood() {
        this.form.controls['street'].setValue(null, { emitEvent: false });
    }
    getAppearance() {
        return (this.variant != 3) ? 'outline' : '';
    }
    getFloatLabel() {
        return (this.variant == 1) ? 'always' : '';
    }
};
PropertiesSearchComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
PropertiesSearchComponent.propDecorators = {
    variant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    searchOnBtnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    removedSearchField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    onSearchChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    onSearchClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
PropertiesSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-properties-search',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_search_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_properties_search_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertiesSearchComponent);



/***/ }),

/***/ 54690:
/*!***************************************************************************!*\
  !*** ./src/app/shared/properties-toolbar/properties-toolbar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesToolbarComponent": () => (/* binding */ PropertiesToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./properties-toolbar.component.html */ 94747);
/* harmony import */ var _properties_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-toolbar.component.scss */ 66464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let PropertiesToolbarComponent = class PropertiesToolbarComponent {
    constructor() {
        this.isHomePage = false;
        this.showSidenavToggle = false;
        this.onSidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onChangeCount = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onChangeSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onChangeViewType = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.viewType = 'grid';
        this.viewCol = 25;
        this.counts = [8, 12, 16, 24, 36];
        this.sortings = ['Filtrage par Défaut', 'Nouveau', 'Ancien', 'Populaire', 'Prix (Ordre Croissant)', 'Prix (Ordre Décroissant)'];
    }
    ngOnInit() {
        this.count = (this.isHomePage) ? this.counts[0] : this.counts[1];
        this.sort = this.sortings[0];
    }
    ngOnChanges() {
        // console.log(' show toggle - ' ,this.showSidenavToggle)
    }
    changeCount(count) {
        this.count = count;
        this.onChangeCount.emit(count);
        // this.getAllProducts(); 
    }
    changeSorting(sort) {
        this.sort = sort;
        this.onChangeSorting.emit(sort);
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
        this.onChangeViewType.emit({ viewType: viewType, viewCol: viewCol });
    }
    sidenavToggle() {
        this.onSidenavToggle.emit();
    }
};
PropertiesToolbarComponent.ctorParameters = () => [];
PropertiesToolbarComponent.propDecorators = {
    isHomePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showSidenavToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    onSidenavToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onChangeCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onChangeSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onChangeViewType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
PropertiesToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-properties-toolbar',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_properties_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_properties_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertiesToolbarComponent);



/***/ }),

/***/ 62607:
/*!*****************************************************************!*\
  !*** ./src/app/shared/property-item/property-item.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyItemComponent": () => (/* binding */ PropertyItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_property_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./property-item.component.html */ 94893);
/* harmony import */ var _property_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-item.component.scss */ 86497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-swiper-wrapper */ 60692);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 18036);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 38198);
/* harmony import */ var _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compare-overview/compare-overview.component */ 23023);








let PropertyItemComponent = class PropertyItemComponent {
    constructor(appSettings, appService) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.viewType = "grid";
        this.viewColChanged = false;
        this.fullWidthPage = true;
        this.column = 4;
        this.config = {};
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
        this.settings = this.appSettings.settings;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.initCarousel();
        // this.appService.getAddress(this.property.location.lat, this.property.location.lng).subscribe(data=>{
        //   console.log(data['results'][0]['formatted_address']);
        //   this.address = data['results'][0]['formatted_address'];
        // })
    }
    ngOnChanges(changes) {
        if (changes.viewColChanged) {
            this.getColumnCount(changes.viewColChanged.currentValue);
            if (!changes.viewColChanged.isFirstChange()) {
                if (this.property.gallery.length > 1) {
                    this.directiveRef.update();
                }
            }
        }
        for (let propName in changes) {
            // let changedProp = changes[propName];
            // if (!changedProp.isFirstChange()) {
            //   if(this.property.gallery.length > 1){
            //     this.initCarousel();
            //     this.config.autoHeight = true;       
            //     this.directiveRef.update();  
            //   }       
            // }      
        }
    }
    getColumnCount(value) {
        if (value == 25) {
            this.column = 4;
        }
        else if (value == 33.3) {
            this.column = 3;
        }
        else if (value == 50) {
            this.column = 2;
        }
        else {
            this.column = 1;
        }
    }
    getStatusBgColor(status) {
        switch (status) {
            case 'À vendre':
                return '#558B2F';
            case 'À louer':
                return '#1E88E5';
            case 'Open Space':
                return '#009688';
            case 'Pas de frais':
                return '#FFA000';
            case 'Offre spéciale':
                return '#F44336';
            case 'Vendu':
                return '#000';
            default:
                return '#01579B';
        }
    }
    initCarousel() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: false,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            nested: true,
            // autoplay: {
            //   delay: 5000,
            //   disableOnInteraction: false
            // },
            speed: 500,
            effect: "slide"
        };
    }
    addToCompare() {
        this.appService.addToCompare(this.property, _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__.CompareOverviewComponent, (this.settings.rtl) ? 'rtl' : 'ltr');
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
};
PropertyItemComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService }
];
PropertyItemComponent.propDecorators = {
    property: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    viewType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    viewColChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    fullWidthPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SwiperDirective,] }]
};
PropertyItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-property-item',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_property_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_property_item_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertyItemComponent);



/***/ }),

/***/ 23145:
/*!***************************************************!*\
  !*** ./src/app/shared/rating/rating.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rating.component.html */ 50096);
/* harmony import */ var _rating_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.component.scss */ 31581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let RatingComponent = class RatingComponent {
    constructor() { }
    ngDoCheck() {
        if (this.ratingsCount && this.ratingsValue && !this.avg) {
            this.calculateAvgValue();
        }
    }
    calculateAvgValue() {
        this.avg = this.ratingsValue / this.ratingsCount;
        switch (true) {
            case this.avg > 0 && this.avg < 20: {
                this.stars = ['star_half', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg == 20: {
                this.stars = ['star', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg > 20 && this.avg < 40: {
                this.stars = ['star', 'star_half', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg == 40: {
                this.stars = ['star', 'star', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg > 40 && this.avg < 60: {
                this.stars = ['star', 'star', 'star_half', 'star_border', 'star_border'];
                break;
            }
            case this.avg == 60: {
                this.stars = ['star', 'star', 'star', 'star_border', 'star_border'];
                break;
            }
            case this.avg > 60 && this.avg < 80: {
                this.stars = ['star', 'star', 'star', 'star_half', 'star_border'];
                break;
            }
            case this.avg == 80: {
                this.stars = ['star', 'star', 'star', 'star', 'star_border'];
                break;
            }
            case this.avg > 80 && this.avg < 100: {
                this.stars = ['star', 'star', 'star', 'star', 'star_half'];
                break;
            }
            case this.avg >= 100: {
                this.stars = ['star', 'star', 'star', 'star', 'star'];
                break;
            }
            default: {
                this.stars = ['star_border', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
            }
        }
    }
};
RatingComponent.ctorParameters = () => [];
RatingComponent.propDecorators = {
    ratingsCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ratingsValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
RatingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-rating',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rating_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rating_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatingComponent);



/***/ }),

/***/ 51382:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-swiper-wrapper */ 60692);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/autocomplete */ 80686);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/badge */ 9379);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 42132);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/chips */ 71933);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/expansion */ 85082);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/grid-list */ 95409);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/progress-spinner */ 19372);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/radio */ 97435);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/sidenav */ 51986);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/slide-toggle */ 71232);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/slider */ 35291);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/stepper */ 21792);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/toolbar */ 47727);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-dropzone */ 82629);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @agm/snazzy-info-window */ 17230);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/pipes/pipes.module */ 69684);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/directives/directives.module */ 80213);
/* harmony import */ var _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-image/header-image.component */ 99787);
/* harmony import */ var _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-carousel/header-carousel.component */ 85163);
/* harmony import */ var _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property-item/property-item.component */ 62607);
/* harmony import */ var _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./load-more/load-more.component */ 61511);
/* harmony import */ var _properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties-toolbar/properties-toolbar.component */ 54690);
/* harmony import */ var _properties_search_properties_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties-search/properties-search.component */ 94101);
/* harmony import */ var _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compare-overview/compare-overview.component */ 23023);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rating/rating.component */ 23145);
/* harmony import */ var _properties_search_results_filters_properties_search_results_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./properties-search-results-filters/properties-search-results-filters.component */ 65805);
/* harmony import */ var _properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./properties-carousel/properties-carousel.component */ 69151);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients/clients.component */ 12353);
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-in-touch/get-in-touch.component */ 93570);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comments/comments.component */ 48346);
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testimonials/testimonials.component */ 17338);
/* harmony import */ var _our_agents_our_agents_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./our-agents/our-agents.component */ 58675);
/* harmony import */ var _mission_mission_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mission/mission.component */ 97997);
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./our-services/our-services.component */ 57920);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./logo/logo.component */ 33284);
/* harmony import */ var _header_map_header_map_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header-map/header-map.component */ 76601);
/* harmony import */ var _header_video_header_video_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header-video/header-video.component */ 79627);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ 43327);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ 73880);
/* harmony import */ var _dialog_header_controls_dialog_header_controls_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialog-header-controls/dialog-header-controls.component */ 70687);











































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: false,
    suppressScrollX: true
};



























let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_28__.NgxDropzoneModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__.SwiperModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__.FlexLayoutModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__.MatAutocompleteModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__.MatBadgeModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_36__.MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_38__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_39__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_40__.MatCheckboxModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__.MatChipsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__.MatDialogModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_45__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_47__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_48__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_50__.MatNativeDateModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_51__.MatPaginatorModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_52__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_53__.MatProgressSpinnerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_54__.MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_50__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_55__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_56__.MatSidenavModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_57__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_58__.MatSlideToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_59__.MatSnackBarModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_60__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_61__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_62__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_63__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_64__.MatTooltipModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_65__.MatStepperModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_66__.PerfectScrollbarModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_67__.AgmCoreModule,
            _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_68__.AgmSnazzyInfoWindowModule,
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__.SwiperModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__.FlexLayoutModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__.MatAutocompleteModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__.MatBadgeModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_36__.MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_38__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_39__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_40__.MatCheckboxModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__.MatChipsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__.MatDialogModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_45__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_47__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_48__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_50__.MatNativeDateModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_51__.MatPaginatorModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_52__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_53__.MatProgressSpinnerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_54__.MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_50__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_55__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_56__.MatSidenavModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_57__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_58__.MatSlideToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_59__.MatSnackBarModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_60__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_61__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_62__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_63__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_64__.MatTooltipModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_65__.MatStepperModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_66__.PerfectScrollbarModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_67__.AgmCoreModule,
            _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_68__.AgmSnazzyInfoWindowModule,
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule,
            _logo_logo_component__WEBPACK_IMPORTED_MODULE_19__.LogoComponent,
            _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_2__.HeaderImageComponent,
            _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__.HeaderCarouselComponent,
            _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_4__.PropertyItemComponent,
            _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_5__.LoadMoreComponent,
            _properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesToolbarComponent,
            _properties_search_properties_search_component__WEBPACK_IMPORTED_MODULE_7__.PropertiesSearchComponent,
            _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_8__.CompareOverviewComponent,
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__.RatingComponent,
            _properties_search_results_filters_properties_search_results_filters_component__WEBPACK_IMPORTED_MODULE_10__.PropertiesSearchResultsFiltersComponent,
            _properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_11__.PropertiesCarouselComponent,
            _clients_clients_component__WEBPACK_IMPORTED_MODULE_12__.ClientsComponent,
            _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_13__.GetInTouchComponent,
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_14__.CommentsComponent,
            _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_15__.TestimonialsComponent,
            _our_agents_our_agents_component__WEBPACK_IMPORTED_MODULE_16__.OurAgentsComponent,
            _mission_mission_component__WEBPACK_IMPORTED_MODULE_17__.MissionComponent,
            _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_18__.OurServicesComponent,
            _header_map_header_map_component__WEBPACK_IMPORTED_MODULE_20__.HeaderMapComponent,
            _header_video_header_video_component__WEBPACK_IMPORTED_MODULE_21__.HeaderVideoComponent,
            _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialogComponent,
            _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_23__.AlertDialogComponent,
            _dialog_header_controls_dialog_header_controls_component__WEBPACK_IMPORTED_MODULE_24__.DialogHeaderControlsComponent
        ],
        declarations: [
            _logo_logo_component__WEBPACK_IMPORTED_MODULE_19__.LogoComponent,
            _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_2__.HeaderImageComponent,
            _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__.HeaderCarouselComponent,
            _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_4__.PropertyItemComponent,
            _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_5__.LoadMoreComponent,
            _properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesToolbarComponent,
            _properties_search_properties_search_component__WEBPACK_IMPORTED_MODULE_7__.PropertiesSearchComponent,
            _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_8__.CompareOverviewComponent,
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__.RatingComponent,
            _properties_search_results_filters_properties_search_results_filters_component__WEBPACK_IMPORTED_MODULE_10__.PropertiesSearchResultsFiltersComponent,
            _properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_11__.PropertiesCarouselComponent,
            _clients_clients_component__WEBPACK_IMPORTED_MODULE_12__.ClientsComponent,
            _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_13__.GetInTouchComponent,
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_14__.CommentsComponent,
            _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_15__.TestimonialsComponent,
            _our_agents_our_agents_component__WEBPACK_IMPORTED_MODULE_16__.OurAgentsComponent,
            _mission_mission_component__WEBPACK_IMPORTED_MODULE_17__.MissionComponent,
            _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_18__.OurServicesComponent,
            _header_map_header_map_component__WEBPACK_IMPORTED_MODULE_20__.HeaderMapComponent,
            _header_video_header_video_component__WEBPACK_IMPORTED_MODULE_21__.HeaderVideoComponent,
            _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialogComponent,
            _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_23__.AlertDialogComponent,
            _dialog_header_controls_dialog_header_controls_component__WEBPACK_IMPORTED_MODULE_24__.DialogHeaderControlsComponent,
        ],
        providers: [
            { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_66__.PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
        ]
    })
], SharedModule);



/***/ }),

/***/ 17338:
/*!***************************************************************!*\
  !*** ./src/app/shared/testimonials/testimonials.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsComponent": () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./testimonials.component.html */ 13093);
/* harmony import */ var _testimonials_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonials.component.scss */ 23138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);





let TestimonialsComponent = class TestimonialsComponent {
    constructor(appService) {
        this.appService = appService;
        this.config = {};
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
    }
    ngOnInit() {
        this.testimonials = this.appService.getTestimonials();
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            // breakpoints: {
            //   480: {
            //     slidesPerView: 1
            //   },
            //   740: {
            //     slidesPerView: 2,
            //   },
            //   960: {
            //     slidesPerView: 3,
            //   }
            // }
        };
    }
};
TestimonialsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
TestimonialsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-testimonials',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_testimonials_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestimonialsComponent);



/***/ }),

/***/ 9627:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/contacts/contacts.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contacts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contacts.component.html */ 55141);
/* harmony import */ var _contacts_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.component.scss */ 90387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let ContactsComponent = class ContactsComponent {
    constructor() {
        this.dividers = true;
        this.iconSize = 'sm';
        this.iconColor = '';
    }
    ngOnInit() {
    }
};
ContactsComponent.ctorParameters = () => [];
ContactsComponent.propDecorators = {
    dividers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    iconSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ContactsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-contacts',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contacts_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contacts_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactsComponent);



/***/ }),

/***/ 1642:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/currency/currency.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyComponent": () => (/* binding */ CurrencyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_currency_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./currency.component.html */ 88429);
/* harmony import */ var _currency_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.component.scss */ 59708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ 18036);





let CurrencyComponent = class CurrencyComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.currencies = ['USD', 'EUR'];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.currency = this.settings.currency;
    }
    changeCurrency(currency) {
        this.currency = currency;
        this.settings.currency = currency;
    }
};
CurrencyComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings }
];
CurrencyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-currency',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_currency_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_currency_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyComponent);



/***/ }),

/***/ 11833:
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 1562);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 12755);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/app-validators */ 49224);







let FooterComponent = class FooterComponent {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.lat = 48.844100;
        this.lng = 2.431290;
        this.zoom = 4;
        this.rooms = [];
        this.mapStyles = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8b9198"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#323336"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#414954"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2e2f31"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7a7c80"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#242427"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#202124"
                    }
                ]
            }
        ];
    }
    ngOnInit() {
        this.rooms.push({ lat: 48.8588897, lng: 2.320041 });
        this.rooms.push({ lat: 45.7578137, lng: 4.8320114 });
        this.rooms.push({ lat: 44.841225, lng: -0.5800364 });
        this.rooms.push({ lat: 43.2961743, lng: 5.3699525 });
        this.rooms.push({ lat: 50.6365654, lng: 3.0635282 });
        this.feedbackForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.subscribeForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])]
        });
    }
    onFeedbackFormSubmit(values) {
        if (this.feedbackForm.valid) {
            this.http.post('https://api.sheetmonkey.io/form/3Vgpx6vhNDvKBJTFNkXSis', values).subscribe();
            this.ngOnInit();
        }
    }
    onSubscribeFormSubmit(values) {
        if (this.subscribeForm.valid) {
            this.http.post('https://api.sheetmonkey.io/form/3Vgpx6vhNDvKBJTFNkXSis', values);
            console.log(values);
        }
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-footer',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 78313:
/*!*********************************************************!*\
  !*** ./src/app/theme/components/lang/lang.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangComponent": () => (/* binding */ LangComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lang_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lang.component.html */ 65800);
/* harmony import */ var _lang_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang.component.scss */ 2451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 90466);





let LangComponent = class LangComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.langName = '';
    }
    ngOnInit() {
        this.langName = this.getLangName(this.translateService.getDefaultLang());
        this.translateService.use('fr');
    }
    changeLang(lang) {
        this.translateService.use(lang);
        this.langName = this.getLangName(lang);
    }
    getLangName(lang) {
        if (lang == 'en') {
            return 'English';
        }
        else if (lang == 'de') {
            return 'German';
        }
        else if (lang == 'fr') {
            return 'French';
        }
        else if (lang == 'ru') {
            return 'Russian';
        }
        else if (lang == 'tr') {
            return 'Turkish';
        }
        else {
            return 'English';
        }
    }
};
LangComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService }
];
LangComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-lang',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lang_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lang_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LangComponent);



/***/ }),

/***/ 67144:
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": () => (/* binding */ HorizontalMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_horizontal_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./horizontal-menu.component.html */ 51452);
/* harmony import */ var _horizontal_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-menu.component.scss */ 25950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ 86404);





let HorizontalMenuComponent = class HorizontalMenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getHorizontalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
};
HorizontalMenuComponent.ctorParameters = () => [
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService }
];
HorizontalMenuComponent.propDecorators = {
    menuParentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['menuParentId',] }]
};
HorizontalMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-horizontal-menu',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_horizontal_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService],
        styles: [_horizontal_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HorizontalMenuComponent);



/***/ }),

/***/ 44843:
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
class Menu {
    constructor(id, title, routerLink, href, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ 86404:
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 93840);





let MenuService = class MenuService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    getVerticalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_0__.verticalMenuItems;
    }
    getHorizontalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_0__.horizontalMenuItems;
    }
    expandActiveSubMenu(menu) {
        let url = this.location.path();
        let routerLink = decodeURIComponent(url);
        let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            let menuItem = activeMenuItem[0];
            while (menuItem.parentId != 0) {
                let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
                menuItem = parentMenuItem;
                this.toggleMenuItem(menuItem.id);
            }
        }
    }
    toggleMenuItem(menuId) {
        let menuItem = document.getElementById('menu-item-' + menuId);
        let subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    }
    closeOtherSubMenus(menu, menuId) {
        let currentMenuItem = menu.filter(item => item.id == menuId)[0];
        menu.forEach(item => {
            if ((item.id != menuId && item.parentId == currentMenuItem.parentId) || (currentMenuItem.parentId == 0 && item.id != menuId)) {
                let subMenu = document.getElementById('sub-menu-' + item.id);
                let menuItem = document.getElementById('menu-item-' + item.id);
                if (subMenu) {
                    if (subMenu.classList.contains('show')) {
                        subMenu.classList.remove('show');
                        menuItem.classList.remove('expanded');
                    }
                }
            }
        });
    }
    closeAllSubMenus() {
        _menu__WEBPACK_IMPORTED_MODULE_0__.verticalMenuItems.forEach(item => {
            let subMenu = document.getElementById('sub-menu-' + item.id);
            let menuItem = document.getElementById('menu-item-' + item.id);
            if (subMenu) {
                if (subMenu.classList.contains('show')) {
                    subMenu.classList.remove('show');
                    menuItem.classList.remove('expanded');
                }
            }
        });
    }
};
MenuService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MenuService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], MenuService);



/***/ }),

/***/ 93840:
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "horizontalMenuItems": () => (/* binding */ horizontalMenuItems),
/* harmony export */   "verticalMenuItems": () => (/* binding */ verticalMenuItems)
/* harmony export */ });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ 44843);

const horizontalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(1, 'NAV.HOME', '/', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(2, 'NAV.PROPERTIES', '/properties', null, null, false, 0),
    // new Menu (40, 'NAV.PAGES', null, null, null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(41, 'NAV.AGENTS', '/agents', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(42, 'NAV.AGENT', '/agents/1', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(43, 'LOGIN', '/login', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(44, 'REGISTER', '/register', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(45, 'FAQs', '/faq', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(46, 'NAV.PRICING', '/pricing', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(47, 'NAV.TERMS_CONDITIONS', '/terms-conditions', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(48, 'Landing', '/landing', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(50, '404 Page', '/404', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(60, 'NAV.CONTACT', '/contact', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(70, 'NAV.ABOUT_US', '/about', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(140, 'Others', null, null, null, true, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(141, 'NAV.EXTERNAL_LINK', null, 'http://themeseason.com', '_blank', false, 140),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(142, 'Menu item', null, 'http://themeseason.com', '_blank', false, 140),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(143, 'Menu item', null, 'http://themeseason.com', '_blank', false, 140),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(144, 'Menu item', null, 'http://themeseason.com', '_blank', false, 140)
];
const verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(1, 'NAV.HOME', '/', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(2, 'NAV.PROPERTIES', '/properties', null, null, false, 0),
    //new Menu (40, 'NAV.PAGES', null, null, null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(41, 'NAV.AGENTS', '/agents', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(42, 'NAV.AGENT', '/agents/1', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(43, 'LOGIN', '/login', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(44, 'REGISTER', '/register', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(45, 'FAQs', '/faq', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(46, 'NAV.PRICING', '/pricing', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(47, 'NAV.TERMS_CONDITIONS', '/terms-conditions', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(48, 'Landing', '/landing', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(50, '404 Page', '/404', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(60, 'NAV.CONTACT', '/contact', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(70, 'NAV.ABOUT_US', '/about', null, null, false, 0),
    // new Menu (140, 'Level 1', null, null, null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(141, 'Level 2', null, null, null, true, 140),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(142, 'Level 3', null, null, null, true, 141),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(143, 'Level 4', null, null, null, true, 142),
    // new Menu (144, 'Level 5', null, 'http://themeseason.com', null, false, 143),
    //new Menu (200, 'NAV.EXTERNAL_LINK', null, 'http://themeseason.com', '_blank', false, 0)
];


/***/ }),

/***/ 20054:
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": () => (/* binding */ VerticalMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_vertical_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./vertical-menu.component.html */ 14005);
/* harmony import */ var _vertical_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical-menu.component.scss */ 84757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ 86404);





let VerticalMenuComponent = class VerticalMenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    onClick(menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuService.getVerticalMenuItems(), menuId);
    }
};
VerticalMenuComponent.ctorParameters = () => [
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService }
];
VerticalMenuComponent.propDecorators = {
    menuParentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['menuParentId',] }]
};
VerticalMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-vertical-menu',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_vertical_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService],
        styles: [_vertical_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerticalMenuComponent);



/***/ }),

/***/ 80312:
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/social-icons/social-icons.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialIconsComponent": () => (/* binding */ SocialIconsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_social_icons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./social-icons.component.html */ 62254);
/* harmony import */ var _social_icons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-icons.component.scss */ 60775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let SocialIconsComponent = class SocialIconsComponent {
    constructor() {
        this.iconSize = '';
        this.iconColor = '';
    }
    ngOnInit() {
    }
};
SocialIconsComponent.ctorParameters = () => [];
SocialIconsComponent.propDecorators = {
    iconSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
SocialIconsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-social-icons',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_social_icons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_social_icons_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SocialIconsComponent);



/***/ }),

/***/ 80571:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/toolbar1/toolbar1.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toolbar1Component": () => (/* binding */ Toolbar1Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toolbar1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./toolbar1.component.html */ 74756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ 43493);





let Toolbar1Component = class Toolbar1Component {
    constructor(appService, UserService) {
        this.appService = appService;
        this.UserService = UserService;
        this.onMenuIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.result = 0;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var databookings = yield this.UserService.getUsersbookings({ page: 0, order: 'desc' }).toPromise();
            const res = databookings['items'].filter(p => p.bookingStatus == 0);
            this.result = res.length;
        });
    }
    sidenavToggle() {
        this.onMenuIconClick.emit();
    }
};
Toolbar1Component.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
Toolbar1Component.propDecorators = {
    onMenuIconClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
Toolbar1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-toolbar1',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toolbar1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], Toolbar1Component);



/***/ }),

/***/ 79858:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/toolbar2/toolbar2.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toolbar2Component": () => (/* binding */ Toolbar2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toolbar2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./toolbar2.component.html */ 70514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 38198);




let Toolbar2Component = class Toolbar2Component {
    constructor(appService) {
        this.appService = appService;
        this.onMenuIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    sidenavToggle() {
        this.onMenuIconClick.emit();
    }
};
Toolbar2Component.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService }
];
Toolbar2Component.propDecorators = {
    onMenuIconClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
Toolbar2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-toolbar2',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toolbar2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], Toolbar2Component);



/***/ }),

/***/ 71233:
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuComponent": () => (/* binding */ UserMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-menu.component.html */ 2855);
/* harmony import */ var _user_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-menu.component.scss */ 94835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 38198);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ 43493);







let UserMenuComponent = class UserMenuComponent {
    constructor(appService, router, UserService) {
        this.appService = appService;
        this.router = router;
        this.UserService = UserService;
        this.result = 0;
        this.cnx = 'False';
        this.user = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield this.UserService.getUsersprofile().toPromise();
            var databookings = yield this.UserService.getUsersbookings({ page: 0, order: 'desc' }).toPromise();
            const res = databookings['items'].filter(p => p.bookingStatus == 0);
            this.result = res.length;
            this.cnx = localStorage.getItem('isLoggedIn');
            this.user = data['firstName'] + ' ' + data['lastName'];
        });
    }
    navigate() {
        this.router.navigate(["/login"]);
    }
    logout() {
        if (window.confirm("Se déconnecter ?!")) {
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.removeItem('jwt');
            window.location.href = '/login';
        }
    }
};
UserMenuComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService }
];
UserMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-menu',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserMenuComponent);



/***/ }),

/***/ 80213:
/*!*******************************************************!*\
  !*** ./src/app/theme/directives/directives.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./only-number.directive */ 84889);




let DirectivesModule = class DirectivesModule {
};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _only_number_directive__WEBPACK_IMPORTED_MODULE_0__.OnlyNumberDirective
        ],
        exports: [
            _only_number_directive__WEBPACK_IMPORTED_MODULE_0__.OnlyNumberDirective
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]
    })
], DirectivesModule);



/***/ }),

/***/ 84889:
/*!***********************************************************!*\
  !*** ./src/app/theme/directives/only-number.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlyNumberDirective": () => (/* binding */ OnlyNumberDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


let OnlyNumberDirective = class OnlyNumberDirective {
    constructor() { }
    onInputChange(e) {
        if (e.target.value.length == 0 && e.which == 48) {
            return false;
        }
        var verified = String.fromCharCode(e.which).match(/[^0-9]/g);
        if (verified) {
            e.preventDefault();
            return false;
        }
        // var regex = new RegExp("[^0-9]");
        // var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        // if (regex.test(key)) {
        //     event.preventDefault();
        //     return false;
        // }    
    }
};
OnlyNumberDirective.ctorParameters = () => [];
OnlyNumberDirective.propDecorators = {
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keypress', ['$event'],] }]
};
OnlyNumberDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: 'input[onlyNumber]'
    })
], OnlyNumberDirective);



/***/ }),

/***/ 78583:
/*!**************************************************!*\
  !*** ./src/app/theme/pipes/filter-by-id.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterByIdPipe": () => (/* binding */ FilterByIdPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FilterByIdPipe = class FilterByIdPipe {
    transform(items, id) {
        return items.filter(item => item.id == id)[0];
    }
};
FilterByIdPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterById'
    })
], FilterByIdPipe);



/***/ }),

/***/ 5126:
/*!*****************************************************!*\
  !*** ./src/app/theme/pipes/filter-neighborhoods.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterNeighborhoodsPipe": () => (/* binding */ FilterNeighborhoodsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FilterNeighborhoodsPipe = class FilterNeighborhoodsPipe {
    transform(items, id) {
        if (id) {
            return items.filter(item => item.cityId == id);
        }
        return items;
    }
};
FilterNeighborhoodsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterNeighborhoods'
    })
], FilterNeighborhoodsPipe);



/***/ }),

/***/ 12849:
/*!****************************************************!*\
  !*** ./src/app/theme/pipes/filter-streets.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterStreetsPipe": () => (/* binding */ FilterStreetsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FilterStreetsPipe = class FilterStreetsPipe {
    transform(items, filter) {
        let neighborhoodIds = [];
        if (filter.neighborhoods) {
            filter.neighborhoods.forEach(neighborhood => {
                neighborhoodIds.push(neighborhood.id);
            });
        }
        if (neighborhoodIds.length > 0) {
            return items.filter(item => {
                return neighborhoodIds.indexOf(item.neighborhoodId) > -1;
            });
        }
        if (filter.cityId) {
            return items.filter(item => item.cityId == filter.cityId);
        }
        return items;
    }
};
FilterStreetsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterStreets'
    })
], FilterStreetsPipe);



/***/ }),

/***/ 69684:
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-by-id.pipe */ 78583);
/* harmony import */ var _filter_neighborhoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-neighborhoods */ 5126);
/* harmony import */ var _filter_streets_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-streets.pipe */ 12849);






let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ],
        declarations: [
            _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterByIdPipe,
            _filter_neighborhoods__WEBPACK_IMPORTED_MODULE_1__.FilterNeighborhoodsPipe,
            _filter_streets_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterStreetsPipe
        ],
        exports: [
            _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterByIdPipe,
            _filter_neighborhoods__WEBPACK_IMPORTED_MODULE_1__.FilterNeighborhoodsPipe,
            _filter_streets_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterStreetsPipe
        ]
    })
], PipesModule);



/***/ }),

/***/ 52700:
/*!************************************************!*\
  !*** ./src/app/theme/utils/app-interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInterceptor": () => (/* binding */ AppInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 56769);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 62489);





let AppInterceptor = class AppInterceptor {
    constructor() { }
    intercept(req, next) {
        // console.log(`Request for ${req.urlWithParams} started...`);
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                // console.log(`Request for ${req.urlWithParams} completed...`);
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            const started = Date.now();
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
            // debugger;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
};
AppInterceptor.ctorParameters = () => [];
AppInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], AppInterceptor);



/***/ }),

/***/ 49224:
/*!***********************************************!*\
  !*** ./src/app/theme/utils/app-validators.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailValidator": () => (/* binding */ emailValidator),
/* harmony export */   "matchingPasswords": () => (/* binding */ matchingPasswords)
/* harmony export */ });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return (group) => {
        let password = group.controls[passwordKey];
        let passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ }),

/***/ 38516:
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomOverlayContainer": () => (/* binding */ CustomOverlayContainer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);



let CustomOverlayContainer = class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayContainer {
    _createContainer() {
        let container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    }
};
CustomOverlayContainer = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], CustomOverlayContainer);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: '',
    firebase: {
        apiKey: "AIzaSyCpwm-ioR07BTQHqbAG8OyNy3g0hjRnQHQ",
        authDomain: "atypikhouse-87a7c.firebaseapp.com",
        projectId: "atypikhouse-87a7c",
        storageBucket: "atypikhouse-87a7c.appspot.com",
        messagingSenderId: "1036054515442",
        appId: "1:1036054515442:web:2491bea4abb66973768a6b",
        measurementId: "G-GQ8WNBV5P1"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\r\n            [ngClass]=\"[settings.theme, 'toolbar-'+settings.toolbar]\" \r\n            [class.main-toolbar-fixed]=\"settings.mainToolbarFixed\"> \r\n    <router-outlet></router-outlet>\r\n    <ng-progress \r\n        [spinner]=\"false\"\r\n        [meteor]=\"false\" \r\n        color=\"#e91e63\"></ng-progress>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ 51798:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/lock-screen/lock-screen.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-drawer-container fxFlexFill>\r\n  <div fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-3 lock-screen\"> \r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \r\n        <h3 class=\"name text-muted\">Dev Tech</h3>  \r\n        <img src=\"assets/images/profile/adam.jpg\" alt=\"\" class=\"mat-elevation-z4\">             \r\n        <input placeholder=\"Enter password\" formControlName=\"password\" required type=\"password\">\r\n        <button mat-icon-button color=\"primary\" type=\"submit\" class=\"submit\" [disabled]=\"!form.valid\">\r\n          <mat-icon>arrow_forward</mat-icon>\r\n        </button>\r\n        <a mat-button routerLink=\"/login\" color=\"primary\">Ou connectez-vous en tant qu'utilisateur différent</a>  \r\n    </form>\r\n     <p class=\"time\">{{ date | date:\"hh:mm:ss a\" }}</p> \r\n  </div>\r\n</mat-drawer-container>");

/***/ }),

/***/ 712:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/not-found/not-found.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n    <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n        <mat-card class=\"p-0 mat-elevation-z6 box\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                <mat-icon class=\"mat-icon-xlg\">error</mat-icon>\r\n                <h1 class=\"error\">404</h1>\r\n            </div>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z8 box-content-inner\">\r\n                    <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \r\n                    <p class=\"box-text\">If you are sure it should, search for it.</p> \r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Search keyword</mat-label>\r\n                        <input matInput placeholder=\"Enter search keyword...\">\r\n                    </mat-form-field>\r\n                </mat-card>\r\n                <div class=\"box-footer\">\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>home</mat-icon>\r\n                    </button>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>          \r\n    </div>\r\n</div>");

/***/ }),

/***/ 17072:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/pages.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-sidenav-container> \r\n    <mat-sidenav [opened]=\"false\" mode=\"over\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <button mat-icon-button color=\"warn\" class=\"close\" (click)=\"sidenav.close()\">\r\n           <mat-icon color=\"warn\">close</mat-icon>\r\n        </button>\r\n        <div class=\"divider\"></div>\r\n\r\n        <div perfectScrollbar class=\"vertical-menu-wrapper\">\r\n            <app-vertical-menu [menuParentId]=\"0\"></app-vertical-menu>    \r\n        </div>       \r\n\r\n        <div class=\"divider\"></div>\r\n        <app-social-icons [iconSize]=\"'xlg'\" [iconColor]=\"'primary'\" fxLayout=\"row\" fxLayoutAlign=\"center center\"></app-social-icons>\r\n        \r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content class=\"page-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n\r\n        <header [ngClass]=\"'toolbar-'+settings.toolbar\" [class.has-bg-image]=\"settings.headerBgImage\" [class.has-bg-video]=\"settings.headerBgVideo\" [class.main-toolbar-fixed]=\"settings.mainToolbarFixed\">\r\n\r\n            <app-toolbar1 *ngIf=\"settings.toolbar == 1\" (onMenuIconClick)=\"sidenav.toggle()\"></app-toolbar1>\r\n            <app-toolbar2 *ngIf=\"settings.toolbar == 2\" (onMenuIconClick)=\"sidenav.toggle()\"></app-toolbar2>\r\n        \r\n        </header>\r\n          \r\n        <main [class.content-offset-to-top]=\"settings.contentOffsetToTop\">\r\n            <router-outlet></router-outlet>              \r\n        </main>\r\n\r\n        <div class=\"sticky-footer-helper\" fxFlex=\"grow\"></div>\r\n\r\n        <app-footer></app-footer>\r\n       \r\n       <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"options-icon\" (click)=\"options.toggle()\">\r\n            <mat-icon>settings</mat-icon>\r\n        </div>\r\n    -->\r\n        <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top\" (click)=\"scrollToTop()\">\r\n            <mat-icon>arrow_upward</mat-icon>\r\n        </div>\r\n\r\n    </mat-sidenav-content> \r\n    \r\n    \r\n    \r\n</mat-sidenav-container> ");

/***/ }),

/***/ 4488:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/alert-dialog/alert-dialog.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1 mat-dialog-title>\n    <div class=\"text-center\">\n        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">notification_important</mat-icon>\n    </div>\n</h1>\n  \n<div mat-dialog-content>\n    <p>{{message}}</p>\n</div>\n  \n<div mat-dialog-actions> \n    <button mat-raised-button color=\"primary\" (click)=\"close()\" class=\"m-auto\">{{ 'BTN.OK' | translate }}</button>\n</div>");

/***/ }),

/***/ 66726:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/clients/clients.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<div class=\"section mt-3\">\r\n  <div class=\"px-3\">\r\n      <div class=\"theme-container\">\r\n          <h1 class=\"section-title mb-3\">Our Clients</h1>\r\n          <p class=\"text-center\">Sed magna ipsum, ultricies sed sagittis nec, scelerisque eu libero. Donec at metus ac eros accumsan semper.</p>\r\n\r\n          <div class=\"clients-carousel\"> \r\n              <div class=\"swiper-container h-100\" [swiper]=\"config\"> \r\n                  <div class=\"swiper-wrapper h-100\">      \r\n                      <div *ngFor=\"let client of clients\" class=\"swiper-slide\">\r\n                          <div class=\"client-item\"> \r\n                              <img [attr.data-src]=\"client.image\" class=\"swiper-lazy\"> \r\n                              <div class=\"swiper-lazy-preloader\"></div>\r\n                          </div>\r\n                      </div>\r\n                  </div> \r\n              </div>\r\n          </div>\r\n        \r\n      </div>\r\n  </div>   \r\n</div>-->");

/***/ }),

/***/ 8432:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/comments/comments.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-card class=\"p-5 mt-5\">\r\n    <mat-card-header fxLayoutAlign=\"center center\">\r\n        <mat-card-title class=\"uppercase\">Commentaires</mat-card-title>\r\n    </mat-card-header>\r\n    <div class=\"divider\"></div>\r\n    <div *ngIf=\"isItemInfoRoute()\">\r\n        <mat-list class=\"reviews mt-3\">\r\n            <mat-list-item *ngFor=\"let review of comments\" class=\"h-100\">\r\n                <!--   <img matListAvatar [src]=\"review.avatar\" alt=\"image\" class=\"review-author\"> -->\r\n                <p matLine fxLayoutAlign=\"start center\">\r\n                    <span class=\"fw-500\">{{review.author.firstName}} {{review.author.lastName}}</span> <span\r\n                        style=\"margin-left: 1%;\">\r\n                        <app-rating [ratingsCount]=\"1\" [ratingsValue]=\"review.environmentalScore\"></app-rating>\r\n                    </span>\r\n                    <mat-icon class=\"text-muted px-1\" [matTooltip]=\"review.tooltip\" matTooltipPosition=\"after\">\r\n                        {{review.icon}}</mat-icon>\r\n                </p>\r\n                <p matLine class=\"text-muted\"><small>{{review.date | date: 'dd/MM/yyyy'}}</small></p>\r\n                <p matLine class=\"text\">{{review.content}}</p>\r\n                <button mat-icon-button color=\"warn\" (click)=\"remove(review.id)\" *ngIf=\"isadmin=='true'\"\r\n                    matTooltip=\"Supprimer\" class=\"remove\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </div>\r\n    <div *ngIf=\"isItemInfoRoute2()\">\r\n        <h3 class=\"mt-3\">Laissez un Feedback : </h3>\r\n        <div class=\"divider\"></div>\r\n        <p class=\"mt-3 text-muted\"></p>\r\n        <h3 fxLayoutAlign=\"start center\" class=\"my-3 text-muted\">\r\n            <span>Votre Satifsaction : </span>\r\n            <button *ngFor=\"let rating of ratings\" mat-icon-button [matTooltip]=\"rating.title\"\r\n                matTooltipPosition=\"above\" (click)=\"rate(rating)\">\r\n                <mat-icon class=\"mat-icon-lg\" [class.primary-color]=\"rating.selected\">{{rating.icon}}</mat-icon>\r\n            </button>\r\n        </h3>\r\n        <form [formGroup]=\"commentForm\" (ngSubmit)=\"onCommentFormSubmit(commentForm.value)\" *ngIf=\"commentForm\"\r\n            fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"comment-form\">\r\n            <div fxFlex=\"100\" class=\"p-2\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                    <mat-label>Votre Commantaire</mat-label>\r\n                    <textarea matInput placeholder=\"Votre commentaire\" formControlName=\"review\" required rows=\"5\"></textarea>\r\n                    <mat-error *ngIf=\"commentForm.controls.review.errors?.required\">Commentaire Obligatoire</mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"text-center w-100\">\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Envoyer</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ 18810:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/compare-overview/compare-overview.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-toolbar fxLayoutAlign=\"space-between center\">      \r\n  <a routerLink=\"/compare\" (click)=\"hideSheet(true)\" mat-raised-button color=\"primary\">Compare - {{ properties.length }}</a>        \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n      <button mat-icon-button (click)=\"appService.Data.compareList.length = 0; hideSheet(false)\" matTooltip=\"Clear Compare List\">\r\n        <mat-icon color=\"warn\" class=\"mat-icon-lg\">cancel</mat-icon> \r\n      </button>\r\n      <button mat-icon-button (click)=\"hideSheet(false)\" matTooltip=\"Hide\">\r\n        <mat-icon color=\"primary\" class=\"mat-icon-lg\">arrow_drop_down_circle</mat-icon> \r\n      </button>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-nav-list>\r\n  <a mat-list-item *ngFor=\"let property of properties\" [routerLink]=\"['/properties', property.id]\" (click)=\"hideSheet(true)\">\r\n    <h3 mat-line class=\"fw-500\">{{property.title}}</h3>\r\n    <i mat-line><mat-icon class=\"mat-icon-sm text-muted\">location_on</mat-icon><small>{{property.formattedAddress}}</small></i>\r\n    <span *ngIf=\"settings.currency == 'USD'\" class=\"primary-color price fw-500 mx-2\">\r\n        <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n        <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\r\n    </span>\r\n    <span *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price fw-500 mx-2\">\r\n        <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n        <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\r\n    </span>  \r\n    <button mat-icon-button color=\"warn\" class=\"remove\" (click)=\"remove(property, $event)\" matTooltip=\"Remove\" matTooltipPosition=\"after\">\r\n        <mat-icon class=\"mat-icon-sm\">close</mat-icon>\r\n    </button>\r\n  </a>\r\n</mat-nav-list>");

/***/ }),

/***/ 85217:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div mat-dialog-title> \n    <div class=\"text-center\"> \n        <h4 class=\"mb-1\">{{title}}</h4>\n        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">warning</mat-icon>\n    </div> \n</div>\n  \n<div mat-dialog-content>\n    <p>{{message}}</p>\n</div>\n  \n<div mat-dialog-actions fxLayoutAlign=\"space-between center\" class=\"pb-4\">\n    <button mat-button (click)=\"onDismiss()\">{{ 'BTN.NO' | translate }}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">{{ 'BTN.YES' | translate }}</button>\n</div>");

/***/ }),

/***/ 8519:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/dialog-header-controls/dialog-header-controls.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n    <button *ngIf=\"showFullscreenIcon\" mat-icon-button type=\"button\" (click)=\"toggleFullScreen()\">\r\n        <mat-icon>{{(isFullScreen)? 'fullscreen_exit' : 'fullscreen'}}</mat-icon>\r\n    </button>\r\n    <button mat-icon-button type=\"button\" (click)=\"close()\">\r\n        <mat-icon>cancel</mat-icon>\r\n    </button>\r\n</div>");

/***/ }),

/***/ 77237:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/get-in-touch/get-in-touch.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n<div class=\"px-3\">\r\n\r\n    <div class=\"theme-container\"> \r\n\r\n       <div class=\"get-in-touch bg-primary\" ngClass.lt-md=\"mt-3\">\r\n            \r\n            <img src=\"assets/images/others/operator.png\" alt=\"operator\" fxShow=\"false\" fxShow.gt-xs>\r\n\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"content\" ngClass.xs=\"p-0\"> \r\n                <div fxLayout=\"column\" class=\"p-3\">\r\n                    <h2>LOOKING TO SELL YOUR HOME?</h2>\r\n                    <p class=\"mb-0\">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-3\">\r\n                    <mat-icon class=\"mat-icon-xlg mx-2\">call</mat-icon>\r\n                    <div fxLayout=\"column\">               \r\n                        <p class=\"mb-0\">CALL US NOW</p>\r\n                        <h2 class=\"ws-nowrap\">(+100) 123 456 7890</h2>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-3\">\r\n                    <a mat-flat-button routerLink=\"/contact\" class=\"mx-3 uppercase\">get in touch</a>\r\n                </div>\r\n            </div> \r\n        \r\n\r\n        </div>\r\n    -->\r\n");

/***/ }),

/***/ 74673:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/header-carousel/header-carousel.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"header-carousel\" [class.offset-bottom]=\"contentOffsetToTop\" [class.fullscreen]=\"fullscreen\" [ngClass]=\"'toolbar-'+settings.toolbar\">\r\n    <div *ngIf=\"slides.length > 1\"  class=\"swiper-container h-100\" [swiper]=\"config\" (indexChange)=\"onIndexChange($event)\">\r\n        <div class=\"swiper-wrapper h-100\">      \r\n            <div *ngFor=\"let slide of slides;\" class=\"swiper-slide\">\r\n                <div [attr.data-background]=\"slide.image\" class=\"slide-item swiper-lazy\">\r\n                    <div class=\"swiper-lazy-preloader\"></div>\r\n                </div>\r\n            </div>\r\n        </div>     \r\n        <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n        <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n      \r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"slide-info\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\">\r\n            <mat-card class=\"p-4\">\r\n                <h1 class=\"slide-title\">{{currentSlide.title}}</h1>\r\n                <p class=\"location\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <mat-icon color=\"primary\" ngClass.gt-sm=\"mat-icon-lg\">location_on</mat-icon>\r\n                    <span class=\"px-1\">{{currentSlide.location}}</span>\r\n                </p> \r\n                <button mat-raised-button color=\"primary\" class=\"price\">                        \r\n                    <span *ngIf=\"settings.currency == 'USD'\" class=\"price\">\r\n                        <span *ngIf=\"currentSlide.priceDollar.sale\">{{currentSlide.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n                        <span *ngIf=\"currentSlide.priceDollar.rent\">{{currentSlide.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\r\n                    </span>\r\n                    <span *ngIf=\"settings.currency == 'EUR'\" class=\"price\">\r\n                        <span *ngIf=\"currentSlide.priceEuro.sale\">{{currentSlide.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                        <span *ngIf=\"currentSlide.priceEuro.rent\">{{currentSlide.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\r\n                    </span>\r\n                </button>                  \r\n            </mat-card>  \r\n        </div> \r\n    </div>\r\n</div>");

/***/ }),

/***/ 86958:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/header-image/header-image.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"header-image-wrapper\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\" [class.fullscreen]=\"fullscreen\" [ngClass]=\"'toolbar-'+settings.toolbar\">\r\n    <div class=\"bg\" [style.background-image]=\"bgImage\" [class.bg-anime]=\"bgImageAnimate\"></div>\r\n    <div class=\"mask\"></div>\r\n   \r\n    <div class=\"header-image-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" [class.offset-bottom]=\"contentOffsetToTop\" [class.home-page]=\"isHomePage\" [style.min-height.px]=\"contentMinHeight\">\r\n        <h1 *ngIf=\"title\" class=\"title\">{{title}}</h1>\r\n        <p *ngIf=\"desc\" class=\"desc\">{{desc}}</p>\r\n        <div *ngIf=\"isHomePage\" ngClass.gt-xs=\"mt-4\" ngClass.xs=\"mt-3\">\r\n          <a mat-raised-button routerLink=\"/about\">{{ 'NAV.ABOUT_US' | translate}}</a>\r\n          <a mat-raised-button routerLink=\"/contact\">{{ 'NAV.CONTACT' | translate }}</a>      \r\n        </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ 89000:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/header-map/header-map.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"map-wrapper\" [class.fullscreen]=\"fullscreen\" [ngClass]=\"'toolbar-'+settings.toolbar\">  \r\n\r\n    <agm-map [latitude]=\"lat\" \r\n            [longitude]=\"lng\" \r\n            [zoom]=\"zoom\" \r\n            [scrollwheel]=\"false\" \r\n            [mapTypeControl]=\"false\" \r\n            [fullscreenControl]=\"true\"\r\n            [streetViewControl]=\"true\"\r\n            [styles]=\"(settings.theme == 'orange-dark') ? mapStyles : null\" \r\n            (mapReady)=\"onMapReady($event)\"\r\n            (mapClick)=\"onMapClick($event)\"\r\n            (zoomChange)=\"onZoomChange($event)\"> \r\n        <agm-marker *ngFor=\"let location of locations; let i = index\"  \r\n                    [latitude]=\"location.lat\" \r\n                    [longitude]=\"location.lng\"\r\n                    [animation]=\"markerAnimation\"\r\n                    (markerClick)=\"onMarkerClick($event, location.propertyId)\">  \r\n                    <agm-snazzy-info-window [closeWhenOthersOpen]=\"true\" wrapperClass=\"map-info-window\">\r\n                        <ng-template>\r\n                            <a *ngIf=\"property\" [routerLink]=\"['/properties', property.id]\" class=\"text-center\">\r\n                                <img [src]=\"property.gallery[0].small\" alt=\"image\" class=\"d-block w-100\"> \r\n                                <p class=\"my-1\">{{property.title}}</p> \r\n                                <p *ngIf=\"settings.currency == 'USD'\" class=\"fw-500 my-1\">\r\n                                    <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n                                    <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\r\n                                </p>\r\n                                <p *ngIf=\"settings.currency == 'EUR'\" class=\"fw-500 my-1\">\r\n                                    <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                                    <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\r\n                                </p>\r\n                            </a>\r\n                            <div *ngIf=\"!property\" class=\"p-3\">\r\n                                <mat-spinner color=\"warn\"></mat-spinner>\r\n                            </div>\r\n                        </ng-template>\r\n                    </agm-snazzy-info-window> \r\n        </agm-marker>  \r\n    </agm-map> \r\n\r\n</div>\r\n");

/***/ }),

/***/ 43509:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/header-video/header-video.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"header-video-wrapper\" [class.fullscreen]=\"fullscreen\" [ngClass]=\"'toolbar-'+settings.toolbar\"> \r\n    <video id=\"bgVideo\" autoplay muted loop [src]=\"backgroundVideo\"></video> \r\n    <div class=\"mask\"></div> \r\n    <div class=\"header-video-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" [class.offset-bottom]=\"contentOffsetToTop\" [class.home-page]=\"isHomePage\" [style.min-height.px]=\"contentMinHeight\">\r\n        <h1 *ngIf=\"title\" class=\"title\">{{title}}</h1>\r\n        <h2 *ngIf=\"desc\" class=\"desc\">{{desc}}</h2>\r\n        <div *ngIf=\"isHomePage\" ngClass.gt-xs=\"mt-4\" ngClass.xs=\"mt-3\">\r\n              \r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ 85223:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/load-more/load-more.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"load-more\">\r\n  <div *ngIf=\"!settings.loadMore.complete\">\r\n     <!-- <button *ngIf=\"!settings.loadMore.start\" mat-raised-button color=\"primary\" (click)=\"startLoad()\" class=\"uppercase\">Afficher plus</button>-->\r\n      <mat-spinner *ngIf=\"settings.loadMore.start\"></mat-spinner> \r\n  </div>\r\n  <mat-chip-list *ngIf=\"settings.loadMore.complete\">\r\n      <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n          {{settings.loadMore.result}} results\r\n      </mat-chip> \r\n  </mat-chip-list>\r\n</div>\r\n");

/***/ }),

/***/ 31395:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/logo/logo.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"logo\">\r\n<img id =\"logo\" alt=\"logo\" style=\"width: 30%;\" src=\"../../../assets/images/logos/logo-white.png\"/>\r\n</div>");

/***/ }),

/***/ 23876:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/mission/mission.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--  <div class=\"section default\">\r\n     <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n         <h1 class=\"section-title\">Our Mission</h1>            \r\n\r\n            <mat-card class=\"p-0\" fxLayout=\"row wrap\"> \r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"p-3\">            \r\n                   <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\r\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">monetization_on</mat-icon>\r\n                            <h2 class=\"capitalize fw-600 my-2\">save money</h2>\r\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\r\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">thumb_up</mat-icon>\r\n                            <h2 class=\"capitalize fw-600 my-2\">better ideas</h2>\r\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\r\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">group</mat-icon>\r\n                            <h2 class=\"capitalize fw-600 my-2\">collaboration</h2>\r\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\r\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">search</mat-icon>\r\n                            <h2 class=\"capitalize fw-600 my-2\">easy to find</h2>\r\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\r\n                        </div>\r\n                   </div>                     \r\n                </div> \r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxShow=\"false\" fxShow.gt-md>                    \r\n                    <img src=\"assets/images/others/mission.jpg\" alt=\"mission\" class=\"mw-100 d-block\">                \r\n                </div>            \r\n            </mat-card>\r\n      \r\n        </div>\r\n    </div>   \r\n</div>   --> ");

/***/ }),

/***/ 25109:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/our-agents/our-agents.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section agents\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n           <!-- <h1 class=\"section-title\">Meet our agents</h1>\r\n\r\n            <div class=\"agents-carousel\"> \r\n                <div class=\"swiper-container h-100 carousel-outer\" [swiper]=\"config\"> \r\n                    <div class=\"swiper-wrapper h-100\">      \r\n                        <div *ngFor=\"let agent of agents\" class=\"swiper-slide\">\r\n\r\n                            <mat-card>\r\n                                <img mat-card-image [attr.data-src]=\"agent.image\" alt=\"\" class=\"swiper-lazy d-block\">\r\n                                <div class=\"swiper-lazy-preloader\"></div>\r\n                                <mat-card-content>\r\n                                    <h2 class=\"fw-600\">{{agent.fullName}}</h2>\r\n                                    <app-rating [ratingsCount]=\"agent.ratingsCount\" [ratingsValue]=\"agent.ratingsValue\"></app-rating>\r\n                                    <p class=\"mt-3\">{{agent.desc}}</p>                                    \r\n                                    <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\" matTooltip=\"Organization\" matTooltipPosition=\"above\">business</mat-icon><span class=\"mx-2\">{{agent.organization}}</span></p>\r\n                                    <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">email</mat-icon><span class=\"mx-2\">{{agent.email}}</span></p>\r\n                                    <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">call</mat-icon><span class=\"mx-2\">{{agent.phone}}</span></p>\r\n                                </mat-card-content>\r\n                                <mat-divider></mat-divider>\r\n                                <mat-card-actions fxLayoutAlign=\"space-between center\">\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"text-muted\">\r\n                                        <a [href]=\"'https://www.facebook.com/'+agent.social.facebook\" target=\"blank\" class=\"social-icon\">\r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n                                          </svg>\r\n                                        </a>\r\n                                        <a [href]=\"'https://twitter.com/'+agent.social.twitter\" target=\"blank\" class=\"social-icon\">\r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                              <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n                                          </svg> \r\n                                        </a>\r\n                                        <a [href]=\"'https://www.linkedin.com/'+agent.social.linkedin\" target=\"blank\" class=\"social-icon\"> \r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z\" />\r\n                                          </svg>\r\n                                        </a>\r\n                                        <a [href]=\"'https://instagram.com/'+agent.social.instagram\" target=\"blank\" class=\"social-icon\"> \r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                              <path d=\"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z\" />\r\n                                          </svg>\r\n                                        </a> \r\n                                        <a [href]=\"agent.social.website\" target=\"blank\" class=\"social-icon\"> \r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                              <path d=\"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z\" />\r\n                                          </svg>\r\n                                        </a>  \r\n                                    </div>\r\n                                    <div>\r\n                                        <a [routerLink]=\"['/agents', agent.id]\" mat-button color=\"primary\" class=\"uppercase\">View Profile</a>\r\n                                    </div> \r\n                                </mat-card-actions>                              \r\n                            </mat-card>\r\n                            \r\n                        </div>\r\n                    </div>                      \r\n                    <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                    <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"w-100 text-center mt-5\">\r\n                <a routerLink=\"/agents\" mat-raised-button color=\"primary\" class=\"uppercase\">Our agents</a>\r\n            </div> \r\n        -->          \r\n                \r\n        </div>\r\n    </div>   \r\n</div>\r\n\r\n ");

/***/ }),

/***/ 21337:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/our-services/our-services.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<div class=\"section mt-3\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n            <h1 class=\"section-title\">Our Services</h1> \r\n\r\n            <div fxLayout=\"row wrap\" class=\"services-wrapper\">\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n                 \r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \r\n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">location_on</mat-icon>\r\n                        <h2 class=\"capitalize fw-600 my-3\">Find places anywhere in the world</h2>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>           \r\n                    </mat-card>\r\n                   \r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n                 \r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \r\n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">supervisor_account</mat-icon>\r\n                        <h2 class=\"capitalize fw-600 my-3\">We have agents with experience</h2>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>             \r\n                    </mat-card>\r\n                   \r\n                </div>\r\n\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n                 \r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \r\n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">home</mat-icon>\r\n                        <h2 class=\"capitalize fw-600 my-3\">Buy or rent beautiful properties</h2>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>             \r\n                    </mat-card>\r\n                   \r\n                </div>\r\n\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n                 \r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \r\n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">format_list_bulleted</mat-icon>\r\n                        <h2 class=\"capitalize fw-600 my-3\">With agent account you can list properties</h2>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>             \r\n                    </mat-card>\r\n                   \r\n                </div>\r\n            \r\n\r\n\r\n\r\n            </div>\r\n             \r\n        </div>\r\n    </div>   \r\n</div>-->");

/***/ }),

/***/ 8054:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/properties-carousel/properties-carousel.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"properties\" class=\"properties-carousel\">   \r\n    <div class=\"swiper-container h-100 carousel-outer\" [swiper]=\"config\"> \r\n        <div class=\"swiper-wrapper h-100\">      \r\n            <div *ngFor=\"let property of properties\" class=\"swiper-slide\">\r\n                <app-property-item [property]=\"property\" [viewType]=\"'grid'\"></app-property-item>                 \r\n            </div>\r\n        </div>                      \r\n        <button mat-mini-fab color=\"primary\" class=\"prop-prev swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n        <button mat-mini-fab color=\"primary\" class=\"prop-next swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n    </div>\r\n</div>");

/***/ }),

/***/ 29731:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.html ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-chip-list>\r\n    <mat-chip *ngIf=\"searchFields?.propertyType\">\r\n        {{searchFields?.propertyType.name}}        \r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('propertyType')\">cancel</mat-icon>\r\n    </mat-chip> \r\n    <mat-chip *ngIf=\"searchFields?.propertyStatus && searchFields?.propertyStatus.length > 0\">\r\n        <span *ngFor=\"let type of searchFields?.propertyStatus; let last = last;\" class=\"mr-1\">{{type.name}}<span *ngIf=\"!last\">,</span></span>\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('propertyStatus')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.price.from\">\r\n        Price > {{searchFields?.price.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('price.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.price.to\">\r\n        Price < {{searchFields?.price.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('price.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.city\">\r\n        {{searchFields?.city.name}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('city')\">cancel</mat-icon>\r\n    </mat-chip> \r\n    <mat-chip *ngIf=\"searchFields?.zipCode\">\r\n        {{searchFields?.zipCode}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('zipCode')\">cancel</mat-icon>\r\n    </mat-chip>    \r\n    <mat-chip *ngIf=\"searchFields?.neighborhood && searchFields?.neighborhood.length > 0\">\r\n        <span *ngFor=\"let item of searchFields?.neighborhood; let last = last;\" class=\"mr-1\">{{item.name}}<span *ngIf=\"!last\">,</span></span>\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('neighborhood')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.street && searchFields?.street.length > 0\">\r\n        <span *ngFor=\"let item of searchFields?.street; let last = last;\" class=\"mr-1\">{{item.name}}<span *ngIf=\"!last\">,</span></span>\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('street')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.bedrooms.from\">\r\n        Bedrooms > {{searchFields?.bedrooms.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bedrooms.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.bedrooms.to\">\r\n        Bedrooms < {{searchFields?.bedrooms.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bedrooms.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.bathrooms.from\">\r\n        Bathrooms > {{searchFields?.bathrooms.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bathrooms.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.bathrooms.to\">\r\n        Bathrooms < {{searchFields?.bathrooms.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bathrooms.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.garages.from\">\r\n        Garages > {{searchFields?.garages.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('garages.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.garages.to\">\r\n        Garages < {{searchFields?.garages.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('garages.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.area.from\">\r\n        Area > {{searchFields?.area.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('area.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.area.to\">\r\n        Area < {{searchFields?.area.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('area.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.yearBuilt.from\">\r\n        Year Built > {{searchFields?.yearBuilt.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('yearBuilt.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.yearBuilt.to\">\r\n        Year Built < {{searchFields?.yearBuilt.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('yearBuilt.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n\r\n    <span *ngIf=\"searchFields?.features\"> \r\n        <span *ngFor=\"let feature of searchFields?.features; index as i\">\r\n            <mat-chip *ngIf=\"feature.selected\">\r\n                {{feature.name}} \r\n                <mat-icon color=\"warn\" matChipRemove (click)=\"remove('features,'+i)\">cancel</mat-icon>\r\n            </mat-chip>\r\n        </span>  \r\n    </span>\r\n\r\n</mat-chip-list>\r\n");

/***/ }),

/***/ 72980:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/properties-search/properties-search.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form [formGroup]=\"form\" class=\"search-wrapper\" [ngClass]=\"'variant-'+variant\">\r\n\r\n    <div [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\"> \r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n            <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                <mat-label>Catégorie du bien</mat-label> \r\n                <mat-select placeholder=\"Select Property Type\" formControlName=\"propertyType\" >\r\n                    <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType.id\">\r\n                        {{propertyType.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n            <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                <mat-label>Type du bien</mat-label>\r\n                <mat-select placeholder=\"Select Property Status\" formControlName=\"propertyStatus\" >\r\n                    <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus.id\">\r\n                        {{propertyStatus.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>        \r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"price\">\r\n\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                <div fxFlex=\"45\">\r\n                    <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                        <mat-label>{{(variant == 1) ? 'Price' : 'Budget Min'}}</mat-label>\r\n                        <input matInput autocomplete=\"off\" placeholder=\"From\" formControlName=\"from\" type=\"text\" onlyNumber>                  \r\n                    </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                    <mat-icon class=\"text-muted\">Supprimmer</mat-icon>\r\n                </div>\r\n                <div fxFlex=\"45\">\r\n                    <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                        <mat-label>{{(variant == 1) ? '' : 'Budget Max'}}</mat-label>\r\n                        <input matInput autocomplete=\"off\" placeholder=\"To\" formControlName=\"to\" type=\"text\" onlyNumber>                  \r\n                    </mat-form-field>\r\n                </div>\r\n            </div> \r\n\r\n        </div>          \r\n\r\n        \r\n        <div *ngIf=\"showMore\" [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\" class=\"w-100\">\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \r\n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                    <mat-label>Ville</mat-label>\r\n                    <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\">\r\n                        <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\r\n                            {{city.name}}\r\n                        </mat-option>\r\n                    </mat-select> \r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                    <mat-label>Code postale</mat-label>\r\n                    <input matInput placeholder=\"Code postale\" autocomplete=\"off\" formControlName=\"zipCode\">                  \r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \r\n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                    <mat-label>Quartier</mat-label>\r\n                    <mat-select placeholder=\"Select Neighborhood...\" formControlName=\"neighborhood\" multiple (selectionChange)=\"onSelectNeighborhood()\">\r\n                        <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: form.get('city').value?.id\" [value]=\"neighborhood\">\r\n                            {{neighborhood.name}}\r\n                        </mat-option>\r\n                    </mat-select> \r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \r\n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                    <mat-label>Rue</mat-label>\r\n                    <mat-select placeholder=\"Select Street...\" formControlName=\"street\" multiple>\r\n                        <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods:form.get('neighborhood').value, cityId:form.get('city').value?.id } \" [value]=\"street\">\r\n                            {{street.name}}\r\n                        </mat-option>\r\n                    </mat-select> \r\n                </mat-form-field>\r\n            </div>\r\n    \r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"bedrooms\">\r\n    \r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Bedrooms' : 'Bedrooms From'}}</mat-label>\r\n                            <mat-select placeholder=\"From\" formControlName=\"from\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">Supprimmer</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Bedrooms To'}}</mat-label>\r\n                            <mat-select placeholder=\"To\" formControlName=\"to\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div> \r\n    \r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"bathrooms\">\r\n    \r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Bathrooms' : 'Bathrooms From'}}</mat-label>\r\n                            <mat-select placeholder=\"From\" formControlName=\"from\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Bathrooms To'}}</mat-label>\r\n                            <mat-select placeholder=\"To\" formControlName=\"to\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div> \r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"garages\">\r\n    \r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Garages' : 'Garages From'}}</mat-label>\r\n                            <mat-select placeholder=\"From\" formControlName=\"from\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">Supprimmer</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Garages To'}}</mat-label>\r\n                            <mat-select placeholder=\"To\" formControlName=\"to\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div> \r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"area\">\r\n\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Area' : 'Area From'}}</mat-label>\r\n                            <input matInput autocomplete=\"off\" placeholder=\"From\" formControlName=\"from\" type=\"text\" onlyNumber>                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Area To'}}</mat-label>\r\n                            <input matInput autocomplete=\"off\" placeholder=\"To\" formControlName=\"to\" type=\"text\" onlyNumber>                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div>\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"yearBuilt\">\r\n\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Year Built' : 'Fear Built From'}}</mat-label>\r\n                            <input matInput autocomplete=\"off\" placeholder=\"From\" formControlName=\"from\" type=\"text\" onlyNumber maxlength=\"4\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Year Built To'}}</mat-label>\r\n                            <input matInput autocomplete=\"off\" placeholder=\"To\" formControlName=\"to\" type=\"text\" onlyNumber maxlength=\"4\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div>\r\n\r\n            <div fxFlex=\"100\" class=\"mb-2\"> \r\n                <p class=\"uppercase m-2 fw-500\">Caractéristiques</p> \r\n                <div formArrayName=\"features\" [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\">\r\n                    <div [formGroupName]=\"i\" *ngFor=\"let control of form['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                        <mat-checkbox formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n  \r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"p-2\">       \r\n      <button mat-raised-button color=\"warn\" class=\"uppercase mx-1\" (click)=\"reset()\">Vider</button>\r\n      <button *ngIf=\"!vertical\" mat-raised-button color=\"primary\" class=\"uppercase mx-1\" (click)=\"showMore = !showMore\">\r\n         Avancée\r\n        </button>      \r\n      <button *ngIf=\"searchOnBtnClick\" mat-raised-button color=\"primary\" class=\"search-btn mx-1\" (click)=\"search()\"><mat-icon>chercher</mat-icon> Chercher</button>\r\n    </div>\r\n    \r\n\r\n</form>\r\n");

/***/ }),

/***/ 94747:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/properties-toolbar/properties-toolbar.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-card fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2 filter-row mat-elevation-z1 text-muted\">\r\n    <button *ngIf=\"showSidenavToggle\" mat-icon-button (click)=\"sidenavToggle()\">\r\n        <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <div>\r\n        <a mat-button style=\"display: none;\" [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\r\n            {{sort}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n        </a>\r\n        <mat-menu  #sortMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n            <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n                <button  mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n                    <span>{{sort}}</span>\r\n                </button>\r\n            </span>\r\n        </mat-menu>\r\n    </div>\r\n    <div fxShow=\"false\" fxShow.gt-xs>\r\n        <!-- <span *ngIf=\"isHomePage\"> -->\r\n            <a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\r\n                Afficher  {{count}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n            </a>\r\n            <mat-menu #countsMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\r\n                    <button mat-menu-item *ngFor=\"let count of counts\" (click)=\"changeCount(count)\">\r\n                        <span>{{count}}</span>\r\n                    </button>\r\n                </span>\r\n            </mat-menu>\r\n        <!-- </span>        -->\r\n        <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n            <mat-icon>view_list</mat-icon>\r\n        </button>\r\n        <!--<button mat-icon-button (click)=\"changeViewType('grid', 50)\">\r\n            <svg class=\"mat-icon mat-icon-sm\" viewBox=\"0 0 25 25\">\r\n                <path d=\"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3\" />\r\n            </svg>\r\n        </button>-->\r\n        <button *ngIf=\"!isHomePage\" mat-icon-button fxShow=\"false\" fxShow.gt-md (click)=\"changeViewType('grid', 33.3)\">\r\n            <mat-icon>view_module</mat-icon>\r\n        </button>\r\n        <button *ngIf=\"isHomePage\" mat-icon-button fxShow=\"false\" fxShow.gt-sm (click)=\"changeViewType('grid', 33.3)\">\r\n            <mat-icon>view_module</mat-icon>\r\n        </button>\r\n        <button *ngIf=\"isHomePage\" fxShow=\"false\" fxShow.gt-md mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n            <mat-icon>view_comfy</mat-icon>\r\n        </button>\r\n        \r\n\r\n        \r\n    </div>\r\n</mat-card>\r\n");

/***/ }),

/***/ 94893:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/property-item/property-item.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-card class=\"property-item p-0\" [ngClass]=\"[viewType + '-item', 'column-'+column]\"  [class.full-width-page]=\"fullWidthPage\" fxLayout=\"row wrap\">  \r\n  \r\n    <div fxFlex=\"100\" fxShrink=\"3\" [fxFlex.gt-sm]=\"(viewType=='list') ? 40 : 100\" [fxFlex.sm]=\"(viewType=='list') ? 50 : 100\" class=\"thumbnail-section\">\r\n\r\n        <div fxLayout=\"row wrap\" class=\"property-status\">\r\n            <span *ngFor=\"let status of property.propertyStatus\" [style.background-color]=\"getStatusBgColor(status)\">{{status}}</span>\r\n        </div>\r\n       \r\n        <div *ngIf=\"property.gallery.length == 1\" class=\"mat-card-image w-100 m-0\">\r\n            <img [src]=\"property.gallery[0].medium\"  alt=\"image.id\">\r\n        </div>\r\n        <div *ngIf=\"property.gallery.length > 1\" class=\"mat-card-image w-100 m-0\">\r\n            <div class=\"swiper-container\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\"> \r\n                    <div *ngFor=\"let image of property.gallery\" class=\"swiper-slide\">\r\n                        <img [attr.data-src]=\"image.medium\" class=\"swiper-lazy\" alt=\"image.id\">\r\n                        <div class=\"swiper-lazy-preloader\"></div>\r\n                    </div> \r\n                </div>  \r\n                <div class=\"swiper-pagination white\"></div>  \r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon class=\"mat-icon-lg\">keyboard_arrow_left</mat-icon></button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon class=\"mat-icon-lg\">keyboard_arrow_right</mat-icon></button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"control-icons\">\r\n           <!-- <button mat-button [disabled]=\"onFavorites()\" (click)=\"addToFavorites()\" matTooltip=\"Add To Favorite\">\r\n                <mat-icon class=\"mat-icon-sm\">favorite_border</mat-icon>\r\n            </button>-->\r\n            <button mat-button [disabled]=\"onCompare()\" (click)=\"addToCompare()\" matTooltip=\"Add To Compare\">\r\n                <mat-icon class=\"mat-icon-sm\">compare_arrows</mat-icon>\r\n            </button> \r\n        </div> \r\n\r\n    </div>\r\n    <div fxFlex=\"100\" [fxFlex.gt-sm]=\"(viewType=='list') ? 60 : 100\" [fxFlex.sm]=\"(viewType=='list') ? 50 : 100\" class=\"p-3\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" class=\"h-100\">\r\n            <mat-card-content class=\"mb-0\">\r\n              \r\n                <h1 class=\"title\"><a [routerLink]=\"['/properties', property.id]\">{{property.title}}</a></h1>\r\n\r\n                <p fxLayout=\"row\" class=\"address\">\r\n                    <mat-icon class=\"text-muted\">location_on</mat-icon>\r\n                    <span>{{property.formattedAddress}}</span>\r\n                </p>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <div>\r\n                        <h2 *ngIf=\"settings.currency == 'USD'\" class=\"primary-color price\">\r\n                            <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n                            <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /mois</span>\r\n                        </h2>\r\n                        <h2 *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price\">\r\n                            <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                            <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /mois</span>\r\n                        </h2>\r\n                    </div>\r\n                    <app-rating [ratingsCount]=\"property.ratingsCount\" [ratingsValue]=\"property.ratingsValue\"></app-rating>\r\n                </div>\r\n\r\n                <div *ngIf=\"viewType=='list' && fullWidthPage\" fxShow=\"false\" fxShow.gt-sm class=\"mt-3\"> \r\n                    <p>{{property.desc}}</p>\r\n                </div>\r\n\r\n                <div class=\"features mt-3\">                    \r\n                    <p><span>Nomnre de voyageur</span><span>{{property.area.value}} {{property.area.unit}}</span></p>\r\n                    <p><span>Chambres</span><span>{{property.bedrooms}}</span></p>\r\n                    <p><span>Salles de bain</span><span>{{property.bathrooms}}</span></p>\r\n                    <p><span>Lits</span><span>{{property.garages}}</span></p>\r\n                </div> \r\n            </mat-card-content>\r\n            <div class=\"sticky-footer-helper\" fxFlex=\"grow\"></div>\r\n            <mat-card-actions class=\"m-0 p-0\" fxLayoutAlign=\"space-between center\"> \r\n                <p fxLayout=\"row\" class=\"date mb-0\">\r\n                    <mat-icon class=\"text-muted\">date_range</mat-icon>\r\n                    <span class=\"mx-2\">{{property.published | date:\"dd/MM/yyyy\" }}</span>\r\n                </p>\r\n                <div>\r\n                    <a [routerLink]=\"['/properties', property.id]\" mat-stroked-button color=\"primary\" class=\"uppercase\">Details</a>\r\n                </div> \r\n            </mat-card-actions> \r\n        </div>        \r\n        \r\n    </div> \r\n\r\n</mat-card>");

/***/ }),

/***/ 50096:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/rating/rating.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"ratings\" [matTooltip]=\"ratingsCount + ' ratings'\">        \r\n  <mat-icon *ngFor=\"let star of stars;\" class=\"mat-icon-sm\">{{star}}</mat-icon>\r\n</div>");

/***/ }),

/***/ 13093:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/testimonials/testimonials.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<div class=\"section testimonials\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n             <h1 class=\"section-title\">What people are saying</h1>\r\n\r\n            <div class=\"testimonials-carousel\"> \r\n                <div class=\"swiper-container h-100\" [swiper]=\"config\"> \r\n                    <div class=\"swiper-wrapper h-100\">      \r\n                        <div *ngFor=\"let testimonial of testimonials\" class=\"swiper-slide\">\r\n                            <div class=\"content text-center\">\r\n                                <img [attr.data-src]=\"testimonial.image\" class=\"swiper-lazy\">\r\n                                <div class=\"quote open text-left primary-color\">“</div>\r\n                                <p class=\"text\">{{testimonial.text}}</p>\r\n                                <div class=\"quote close text-right primary-color\">”</div> \r\n                                <h3 class=\"author\">{{testimonial.author}}</h3>\r\n                                <p>{{testimonial.position}}</p> \r\n                                <div class=\"swiper-lazy-preloader\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"swiper-pagination\"></div> \r\n                </div>\r\n            </div>\r\n        \r\n                \r\n        </div>\r\n    </div>   \r\n</div>-->\r\n\r\n ");

/***/ }),

/***/ 55141:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/contacts/contacts.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span fxLayoutAlign=\"center center\" class=\"item\">\r\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">call</mat-icon>\r\n  <span class=\"px-1\"> 01 49 57 59 59</span>\r\n</span>\r\n<span *ngIf=\"dividers\" class=\"v-divider\"></span>\r\n<span fxLayoutAlign=\"center center\" class=\"item\">\r\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">location_on</mat-icon>\r\n  <span class=\"px-1\">22 rue des Vignerons 94300 Vincennes</span>\r\n</span>\r\n<span *ngIf=\"dividers\" class=\"v-divider\"></span>\r\n<span fxLayoutAlign=\"center center\" class=\"item\">\r\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">report_problem</mat-icon>\r\n  <span class=\"px-1\">ATTENTION CECI EST UN PROJET ÉTUDIANT</span>\r\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">report_problem</mat-icon>\r\n</span>\r\n");

/***/ }),

/***/ 88429:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/currency/currency.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a mat-button [matMenuTriggerFor]=\"currencyMenu\" #currencyMenuTrigger=\"matMenuTrigger\">\r\n    <span>{{currency}}</span><mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n</a>\r\n<mat-menu #currencyMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-menu-panel\">\r\n    <span (mouseleave)=\"currencyMenuTrigger.closeMenu()\">\r\n        <button mat-menu-item *ngFor=\"let cur of currencies\" (click)=\"changeCurrency(cur)\">\r\n            <span>{{cur}}</span>\r\n        </button>\r\n    </span>\r\n</mat-menu>");

/***/ }),

/***/ 1562:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/footer/footer.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<footer>       \r\n\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n\r\n         <!--   <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"content border-lighter py-5\">\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" fxLayout=\"column\" fxLayoutAlign=\"center center\"> \r\n                    <h2 class=\"uppercase\">Subscribe our Newsletter</h2>\r\n                    <p class=\"desc mb-1\">Stay up to date with our latest news and properties</p>\r\n                </div>\r\n                <form [formGroup]=\"subscribeForm\" (ngSubmit)=\"onSubscribeFormSubmit(subscribeForm.value)\" class=\"custom-form\" fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"42.4\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n                    <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"subscribe-input\" fxFlex>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"email\" placeholder=\"Your email address...\">                      \r\n                    </mat-form-field>\r\n                    <button mat-flat-button type=\"submit\" class=\"subscribe-btn\" color=\"primary\">Subscribe</button>\r\n                </form>\r\n            </div>\r\n        -->\r\n\r\n            <div class=\"py-5 content border-lighter\">\r\n\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\"> \r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"45\"> \r\n                        <a class=\"logo\" routerLink=\"/\"><app-logo></app-logo></a>\r\n                        <p class=\"mt-5 mb-3 desc\">AtypikHouse est une plateforme qui propose des hébergements dans différents types de propriétés insolites</p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n                            <mat-icon color=\"primary\">location_on</mat-icon>\r\n                            <span class=\"mx-2\">22 rue des Vignerons, 94300 Vincennes</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1\">\r\n                            <mat-icon color=\"primary\">Appelez</mat-icon>\r\n                            <span class=\"mx-2\">(+33)1 55 66 32 56</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1\">\r\n                            <mat-icon color=\"primary\">mail_outline</mat-icon>\r\n                            <span class=\"mx-2\">AtypikHouse@ief2i.com</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1\">\r\n                            <mat-icon color=\"primary\">schedule</mat-icon>\r\n                            <span class=\"mx-2\">Lundi - Dimanche / 9:00AM - 8:00PM</span>\r\n                        </p>\r\n                        <app-social-icons [iconSize]=\"'lg'\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"desc\"></app-social-icons>                    \r\n                    </div>\r\n\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"45\" ngClass.xs=\"pt-5\"> \r\n                        <h2 class=\"uppercase\">RETOUR D'INFORMATIONS</h2>\r\n                        <p class=\"desc\">Nous avons besoin de vos feedbacks</p>\r\n                        <form [formGroup]=\"feedbackForm\" (ngSubmit)=\"onFeedbackFormSubmit(feedbackForm.value)\" class=\"custom-form pt-2\">                            \r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>E-mail</mat-label> \r\n                                <input matInput autocomplete=\"off\" formControlName=\"email\" name =\"email\">\r\n                                <mat-error *ngIf=\"feedbackForm.controls.email.errors?.required\">Adresse email est requis</mat-error>\r\n                                <mat-error *ngIf=\"feedbackForm.controls.email.hasError('invalidEmail')\">Votre adresse email est invalide</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Un message pour nous</mat-label> \r\n                                <textarea matInput formControlName=\"message\" rows=\"6\" name = \"message\"></textarea> \r\n                                <mat-error *ngIf=\"feedbackForm.controls.message.errors?.required\">Message est requis</mat-error>\r\n                            </mat-form-field>\r\n                            <div class=\"w-100 text-center\">\r\n                                <button mat-flat-button color=\"primary\" class=\"uppercase\" type=\"submit\">Envoyer</button> \r\n                            </div> \r\n                        </form> \r\n                    </div>\r\n \r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" ngClass.lt-md=\"pt-5\"> \r\n                        <h2 class=\"uppercase mb-3\">Hébergements par régions</h2>\r\n                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"false\" [styles]=\"mapStyles\" alt=\"dfdf\">\r\n                            <agm-marker *ngFor=\"let data of rooms\" [latitude]=\"data.lat\" [longitude]=\"data.lng\" [markerDraggable]=\"false\"></agm-marker>\r\n                        </agm-map>\r\n                    </div>\r\n                </div>  \r\n              \r\n            </div>\r\n            \r\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"copyright\">\r\n                <p ngClass.xs=\"mt-1\">Copyright © 2022 Tous les droits sont réservés</p>\r\n                <p>Développer par<a mat-button href=\"https://www.institut-f2i.fr/\" target=\"_blank\">Dev Tech</a></p>\r\n            </div>\r\n\r\n        </div>\r\n    </div>                  \r\n                \r\n</footer>");

/***/ }),

/***/ 65800:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/lang/lang.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button mat-button [matMenuTriggerFor]=\"langMenu\" #langMenuTrigger=\"matMenuTrigger\" class=\"lang-btn\">\r\n    <img [src]=\"'assets/images/flags/'+translateService.currentLang+'.svg'\" width=\"18\" [alt]=\"translateService.currentLang\" class=\"mat-elevation-z1\">   \r\n    <span fxShow=\"false\" fxShow.gt-md class=\"uppercase flag-name\">{{langName}}</span>\r\n    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n</button>\r\n<mat-menu #langMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-menu-panel lang\">\r\n    <span (mouseleave)=\"langMenuTrigger.closeMenu()\">  \r\n        <button *ngFor=\"let lang of translateService.getLangs()\" mat-menu-item (click)=\"changeLang(lang)\">  \r\n            <img [src]=\"'assets/images/flags/'+lang+'.svg'\" width=\"18\" [alt]=\"lang\" class=\"mat-elevation-z1\"> \r\n            <span class=\"flag-name\">{{getLangName(lang)}}</span> \r\n        </button> \r\n    </span>\r\n</mat-menu>");

/***/ }),

/***/ 51452:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngFor=\"let menuItem of menuItems\">\r\n\r\n  <a *ngIf=\"menuItem.routerLink && !menuItem.hasSubMenu\" mat-button [routerLink]=\"[menuItem.routerLink]\" \r\n    routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n    <span>{{ menuItem.title | translate }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.href && !menuItem.hasSubMenu\" mat-button \r\n    [attr.href]=\"menuItem.href || ''\" [attr.target]=\"menuItem.target || ''\">\r\n    <span>{{ menuItem.title | translate }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.hasSubMenu && menuItem.parentId == 0\" mat-button [matMenuTriggerFor]=\"menu\"> \r\n    <span>{{ menuItem.title | translate }}</span><mat-icon class=\"caret\">arrow_drop_down</mat-icon> \r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.hasSubMenu && menuItem.parentId != 0\" mat-menu-item [matMenuTriggerFor]=\"menu\"> \r\n    <span>{{ menuItem.title | translate }}</span> \r\n  </a> \r\n\r\n  <mat-menu #menu=\"matMenu\" class=\"horizontal-sub-menu\">\r\n      <app-horizontal-menu [menuParentId]=\"menuItem.id\"></app-horizontal-menu>\r\n  </mat-menu>\r\n    \r\n</ng-container>");

/***/ }),

/***/ 14005:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngFor=\"let menu of menuItems\" class=\"menu-item\">\r\n  <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button\r\n      fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n      [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"        \r\n      (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n      <span class=\"menu-title\">{{ menu.title | translate }}</span>\r\n  </a>\r\n  <a *ngIf=\"menu.href && !menu.hasSubMenu\" mat-button \r\n      fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n      [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"       \r\n      (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n      <span class=\"menu-title\">{{ menu.title | translate }}</span>\r\n  </a>\r\n  <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n      fxLayout=\"row\" fxLayoutAlign=\"start center\"       \r\n      (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n      <span class=\"menu-title\">{{ menu.title | translate }}</span>\r\n      <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n  </a>\r\n  <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n      <app-vertical-menu [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 62254:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/social-icons/social-icons.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a href=\"https://www.facebook.com/AtypikHouse2022/\" target=\"blank\" class=\"social-icon\" aria-label=\"facebook\">\r\n  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\r\n    <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n  </svg>\r\n</a>\r\n<a href=\"https://twitter.com/Atypik__House\" target=\"blank\" class=\"social-icon\" aria-label=\"instagram\">\r\n  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\r\n      <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n  </svg> \r\n</a>\r\n<a href=\"https://www.linkedin.com/in/atypik-house-6135b0236/\" target=\"blank\" class=\"social-icon\" aria-label=\"twitter\"> \r\n  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\r\n    <path d=\"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z\" />\r\n  </svg>\r\n</a>\r\n<!--<a href=\"https://plus.google.com/\" target=\"blank\" class=\"social-icon\"> \r\n  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\r\n    <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z\" />\r\n  </svg>\r\n</a>-->");

/***/ }),

/***/ 74756:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/toolbar1/toolbar1.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-toolbar id=\"top-toolbar\" class=\"top-toolbar\">\r\n  <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <span fxHide=\"false\" fxHide.gt-sm>\r\n        <button mat-button (click)=\"sidenavToggle()\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button> \r\n      </span>\r\n      <app-contacts fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-sm></app-contacts>         \r\n    </div>\r\n    <app-social-icons fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-md></app-social-icons>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"\">\r\n    <!--  <app-currency></app-currency>--> \r\n      <!--<app-lang></app-lang>-->\r\n      <app-user-menu></app-user-menu>\r\n    </div>    \r\n  </div>           \r\n</mat-toolbar>  \r\n<mat-toolbar id=\"main-toolbar\" class=\"mat-elevation-z2\"> \r\n  <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <a class=\"logo\" routerLink=\"/\" ><app-logo></app-logo></a> \r\n    <div fxShow=\"false\" fxShow.gt-sm class=\"horizontal-menu\">            \r\n        <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n    </div> \r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <a routerLink=\"/account/bookings\" mat-icon-button matTooltip=\"Reservation en attente\" fxShow=\"false\" fxShow.gt-md>\r\n          <mat-icon [matBadge]=\"result\" \r\n                    [matBadgeHidden]=\"result == 0\" \r\n                    matBadgeSize=\"small\" \r\n                    matBadgeColor=\"warn\">book</mat-icon>\r\n      </a>\r\n      <a routerLink=\"/compare\" mat-icon-button matTooltip=\"Comparer\" fxShow=\"false\" fxShow.gt-md class=\"mr-3 ml-2\">\r\n          <mat-icon [matBadge]=\"appService.Data.compareList.length\" \r\n                    [matBadgeHidden]=\"appService.Data.compareList.length == 0\" \r\n                    matBadgeSize=\"small\" \r\n                    matBadgeColor=\"warn\">compare_arrows</mat-icon>\r\n      </a>      \r\n      <a routerLink=\"/submit-property\" mat-mini-fab color=\"primary\" fxHide=\"false\" fxHide.gt-xs><mat-icon>add</mat-icon></a>\r\n      <a routerLink=\"/submit-property\" mat-raised-button color=\"primary\" fxShow=\"false\" fxShow.gt-xs class=\"uppercase\">{{ 'SUBMIT_PROPERTY' | translate }}</a>\r\n    </div>   \r\n  </div>     \r\n</mat-toolbar>");

/***/ }),

/***/ 70514:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/toolbar2/toolbar2.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-toolbar id=\"top-toolbar\" class=\"top-toolbar\">\r\n  <mat-toolbar-row  ngClass.xs=\"p-0\">\r\n    <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutAlign.gt-sm=\"end center\" fxLayoutAlign.sm=\"space-between center\">\r\n      <app-social-icons [iconSize]=\"'lg'\" [iconColor]=\"'primary'\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide=\"false\" fxHide.gt-sm fxHide.xs></app-social-icons>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.xs class=\"bg-primary right-section px-2\">\r\n        <app-social-icons fxLayout=\"row\" fxLayoutAlign=\"start center\"></app-social-icons>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"bg-primary right-section\" ngClass.xs=\"w-100\">\r\n          <app-currency></app-currency>\r\n          <app-lang></app-lang>\r\n          <app-user-menu></app-user-menu>\r\n      </div>    \r\n    </div>\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row ngClass.xs=\"py-3\">\r\n    <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutAlign.gt-sm=\"space-between center\">\r\n      <a class=\"logo\" routerLink=\"/\" ><app-logo></app-logo></a> \r\n      <app-contacts [dividers]=\"false\" [iconColor]=\"'primary'\" [iconSize]=\"'lg'\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-sm></app-contacts>   \r\n      <app-social-icons [iconSize]=\"'lg'\" [iconColor]=\"'primary'\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxShow=\"false\" fxShow.gt-sm></app-social-icons>\r\n    </div> \r\n  </mat-toolbar-row>              \r\n</mat-toolbar>\r\n<mat-toolbar id=\"main-toolbar\" class=\"mat-elevation-z2\"> \r\n  <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">    \r\n    <mat-icon class=\"mat-icon-xlg\" fxHide=\"false\" fxHide.gt-sm (click)=\"sidenavToggle()\">menu</mat-icon>\r\n    <div fxShow=\"false\" fxShow.gt-sm class=\"horizontal-menu\">            \r\n        <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n    </div>     \r\n    <div>\r\n     <!-- <a routerLink=\"/account/favorites\" mat-icon-button matTooltip=\"Favorites\" fxShow=\"false\" fxShow.gt-md>\r\n        <mat-icon [matBadge]=\"appService.Data.favorites.length\" \r\n                  [matBadgeHidden]=\"appService.Data.favorites.length == 0\" \r\n                  matBadgeSize=\"small\" \r\n                  matBadgeColor=\"warn\">favorite_border</mat-icon>\r\n      </a>-->\r\n      <a routerLink=\"/compare\" mat-icon-button matTooltip=\"Comparer\" fxShow=\"false\" fxShow.gt-md class=\"mr-3 ml-2\">\r\n        <mat-icon [matBadge]=\"appService.Data.compareList.length\" \r\n                  [matBadgeHidden]=\"appService.Data.compareList.length == 0\" \r\n                  matBadgeSize=\"small\" \r\n                  matBadgeColor=\"warn\">compare_arrows</mat-icon>\r\n      </a>\r\n      <a routerLink=\"/submit-property\" mat-mini-fab color=\"accent\" fxHide=\"false\" fxHide.gt-xs><mat-icon>add</mat-icon></a>\r\n      <a routerLink=\"/submit-property\" mat-raised-button color=\"accent\" fxShow=\"false\" fxShow.gt-xs class=\"uppercase\">{{ 'SUBMIT_PROPERTY' | translate }}</a>\r\n    </div>  \r\n  </div>     \r\n</mat-toolbar>");

/***/ }),

/***/ 2855:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/theme/components/user-menu/user-menu.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a  *ngIf=\"cnx==='true'\" mat-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n    <mat-icon class=\"mat-icon-sm\">person</mat-icon>\r\n    <span fxShow=\"false\" fxShow.gt-sm class=\"mx-1 uppercase\">{{ 'ACCOUNT' | translate }}</span> \r\n    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n</a>\r\n<a  *ngIf=\"cnx!='true'\" mat-button (click)=\"navigate()\">\r\n    <mat-icon class=\"mat-icon-sm\">person</mat-icon>\r\n    <span fxShow=\"false\" fxShow.gt-sm class=\"mx-1 uppercase\">Se connecter</span> \r\n</a>\r\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-menu-panel user-menu\">\r\n    <span (mouseleave)=\"userMenuTrigger.closeMenu()\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"user-info\">                   \r\n            <img src=\"assets/images/others/user.jpg\" alt=\"user-image\" width=\"50\">\r\n            <p class=\"m-0\">{{user}}<br> <small><i></i></small></p>\r\n        </div>\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item routerLink=\"/submit-property\"> \r\n            <mat-icon class=\"mat-icon-sm\">add_circle</mat-icon>\r\n            <span>{{ 'SUBMIT_PROPERTY' | translate }}</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/account/my-properties\"> \r\n            <mat-icon class=\"mat-icon-sm\">home</mat-icon>\r\n            <span>{{ 'MY_PROPERTIES' | translate }}</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/account/bookings\"> \r\n            <mat-icon class=\"mat-icon-sm\">book</mat-icon>\r\n            <span [matBadge]=\"result\" \r\n                  [matBadgeHidden]=\"result == 0\"\r\n                  matBadgeSize=\"small\" \r\n                  matBadgeColor=\"warn\" \r\n                  matBadgeOverlap=\"false\">Mes reservations</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/compare\"> \r\n            <mat-icon class=\"mat-icon-sm\">compare_arrows</mat-icon> \r\n            <span [matBadge]=\"appService.Data.compareList.length\" \r\n                  [matBadgeHidden]=\"appService.Data.compareList.length == 0\"\r\n                  matBadgeSize=\"small\" \r\n                  matBadgeColor=\"warn\" \r\n                  matBadgeOverlap=\"false\">{{ 'COMPARE' | translate }}</span> \r\n        </a>\r\n        <!-- <a mat-menu-item routerLink=\"/\"> \r\n            <mat-icon class=\"mat-icon-sm\">search</mat-icon>\r\n            <span>Saved Searches</span> \r\n        </a> -->\r\n        <a mat-menu-item routerLink=\"/account/profile\"> \r\n            <mat-icon class=\"mat-icon-sm\">edit</mat-icon>\r\n            <span>{{ 'EDIT_PROFILE' | translate }}</span> \r\n        </a>\r\n        <!--<a mat-menu-item routerLink=\"/lock-screen\"> \r\n            <mat-icon class=\"mat-icon-sm\">lock</mat-icon>\r\n            <span>{{ 'LOCK_SCREEN' | translate }}</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/faq\"> \r\n            <mat-icon class=\"mat-icon-sm\">help</mat-icon>\r\n            <span>{{ 'HELP' | translate }}</span> \r\n        </a>-->\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item  (click)=\"logout()\"> \r\n            <mat-icon class=\"mat-icon-sm\">power_settings_new</mat-icon>\r\n            <span>{{ 'LOGOUT' | translate }}</span> \r\n        </a>\r\n    </span>\r\n</mat-menu>  ");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

module.exports = "@media (max-width: 600px) {\n  .md-card {\n    max-width: 300px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0UsMkJBQUE7RUFDSjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1kLWNhcmQge1xyXG4gICAgICBtYXgtd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 36163:
/*!**************************************************************!*\
  !*** ./src/app/pages/lock-screen/lock-screen.component.scss ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".lock-screen {\n  position: relative;\n}\n.lock-screen:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: url('default-bg.png');\n  background-repeat: repeat;\n  background-size: 350px;\n  background-position: center;\n  opacity: 1;\n}\n.lock-screen form {\n  position: relative;\n}\n.lock-screen form .name {\n  position: absolute;\n  top: -2px;\n  right: 0;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.lock-screen form img {\n  border-radius: 50%;\n  width: 90px;\n  height: 90px;\n  border: 8px solid #fff;\n}\n.lock-screen form input {\n  background: #fff;\n  padding: 16px 44px 16px 16px;\n  width: 140px;\n  margin-left: -6px;\n  border: 0;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  text-align: center;\n  outline: none;\n  box-shadow: 4px 0px 4px -2px rgba(0, 0, 0, 0.2), 4px 3px 4px 0px rgba(0, 0, 0, 0.14), 4px 1px 4px 0px rgba(0, 0, 0, 0.12);\n}\n.lock-screen form a {\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  margin: 0;\n  font-size: 13px;\n}\n.lock-screen form button.submit {\n  margin-left: -44px;\n}\n.lock-screen p.time {\n  font-size: 48px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2stc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFHWjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUhBQUE7QUFHWjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ1o7QUFDUTtFQUNJLGtCQUFBO0FBQ1o7QUFFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUFSIiwiZmlsZSI6ImxvY2stc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2stc2NyZWVue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmV7ICAgICAgICBcclxuICAgICAgICBjb250ZW50OiAnJzsgICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4Oi0xO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTsgIFxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcnMvZGVmYXVsdC1iZy5wbmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IFxyXG4gICAgfSBcclxuICAgIGZvcm17XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dHsgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggNDRweCAxNnB4IDE2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDBweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0cHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAtOHB4O1xyXG4gICAgICAgICAgICByaWdodDogLThweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbi5zdWJtaXR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwLnRpbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4OyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4OyAgXHJcbiAgICB9IFxyXG59ICJdfQ== */";

/***/ }),

/***/ 70085:
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".box {\n  border-radius: 0;\n}\n.box .box-header {\n  height: 180px;\n}\n.box .box-header .error {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n.box .box-content {\n  position: relative;\n  height: 180px;\n}\n.box .box-content .box-content-inner {\n  position: absolute;\n  top: -34px;\n  left: 34px;\n  right: 34px;\n  height: 180px;\n}\n.box .box-content .box-content-header {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.box .box-content .box-content-header.server-error {\n  margin-bottom: 36px;\n}\n.box .box-content .box-text {\n  margin-bottom: 10px;\n  text-align: center;\n}\n.box .box-content .box-text::last-child {\n  margin-bottom: 15px;\n}\n.box .box-content .box-footer {\n  position: relative;\n  bottom: 16px;\n}\n.box .box-content .box-footer button {\n  min-width: 70px;\n  margin: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUZZO0VBQ0ksbUJBQUE7QUFJaEI7QUFEUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksbUJBQUE7QUFJaEI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUloQiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC5ib3gtaGVhZGVye1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgLmVycm9ye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJveC1jb250ZW50e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4OyAgICAgXHJcbiAgICAgICAgLmJveC1jb250ZW50LWlubmVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTM0cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDM0cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94LWNvbnRlbnQtaGVhZGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICAgICAgICAgICYuc2VydmVyLWVycm9ye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94LXRleHR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgJjo6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC1mb290ZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 61901:
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/***/ ((module) => {

module.exports = ".sidenav {\n  position: fixed;\n  z-index: 999999;\n  width: 250px;\n  padding: 8px 16px;\n  bottom: 0;\n  top: 0;\n}\n.sidenav .close {\n  margin-left: 178px;\n}\n.sidenav .divider {\n  margin: 8px 0;\n}\n.sidenav .vertical-menu-wrapper {\n  height: calc(100% - 122px);\n}\n.options {\n  position: fixed;\n  width: 270px;\n  z-index: 999999;\n}\n.options .op-header {\n  height: 64px;\n  padding: 0 14px;\n}\n.options .control {\n  padding: 6px 14px;\n}\n.options .control div {\n  padding: 6px 0;\n}\n.options .control h4 {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n.options .control .skin-primary {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n.options .control .skin-primary .skin-secondary {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 24px solid;\n  border-left: 24px solid transparent;\n}\n.options .control .skin-primary.blue {\n  background-color: #1976d2;\n  border: 1px solid #1976d2;\n}\n.options .control .skin-primary.green {\n  background-color: #689f38;\n  border: 1px solid #689f38;\n}\n.options .control .skin-primary.red {\n  background-color: #d32f2f;\n  border: 1px solid #d32f2f;\n}\n.options .control .skin-primary.pink {\n  background-color: #c2185b;\n  border: 1px solid #c2185b;\n}\n.options .control .skin-primary.purple {\n  background-color: #7b1fa2;\n  border: 1px solid #7b1fa2;\n}\n.options .control .skin-primary.grey {\n  background-color: #455a64;\n  border: 1px solid #455a64;\n}\n.options .control .skin-primary.orange-dark {\n  background-color: #f4511e;\n  border: 1px solid #f4511e;\n}\n.options .control .skin-primary.orange-dark .skin-secondary {\n  border-bottom-color: #303030;\n}\n.options .mat-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n.options .mat-radio-group .mat-radio-button {\n  margin: 2px 0;\n}\n.options .mat-slide-toggle {\n  height: auto;\n}\n.options .ps {\n  height: calc(100% - 64px);\n}\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.options-icon {\n  position: fixed;\n  top: 200px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 99999;\n}\n.options-icon .mat-icon {\n  animation: spin 8s linear infinite;\n}\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.back-to-top:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLmNvbXBvbmVudC5zY3NzIiwiLi5cXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUNNaUI7RURMakIsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtBQURKO0FBRUk7RUFDSSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNJLDBCQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURKO0FBRUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSxpQkFBQTtBQUFSO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFDUTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7QUFDWjtBQUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ1o7QUFBWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSw0QkFBQTtBQUdwQjtBQUVJO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBQUFSO0FBQ1E7RUFDSSxhQUFBO0FBQ1o7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUVJO0VBQ0UseUJBQUE7QUFBTjtBQUdBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBR0ksa0NBQUE7QUFFUjtBQVlBO0VBQ0k7SUFDSSx5QkFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxZQUFBO0FBQ1IiLCJmaWxlIjoicGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnNpZGVuYXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICB3aWR0aDogJG1haW4tc2lkZW5hdi13aWR0aDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLmNsb3Nle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNzhweDtcclxuICAgIH1cclxuICAgIC5kaXZpZGVye1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcbiAgICAudmVydGljYWwtbWVudS13cmFwcGVye1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTIycHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3B0aW9uc3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIC5vcC1oZWFkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgIH1cclxuICAgIC5jb250cm9se1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLnNraW4tcHJpbWFyeXtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXHJcbiAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMjRweCBzb2xpZDsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMjRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmJsdWV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE5NzZkMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmdyZWVue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY4OWYzODtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODlmMzg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5yZWR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QzMmYyZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnBpbmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIxODViO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MyMTg1YjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnB1cnBsZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2IxZmEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZ3JleXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTVhNjQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDU1YTY0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYub3JhbmdlLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y0NTExZTtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1yYWRpby1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtc2xpZGUtdG9nZ2xle1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5wc3tcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcclxuICAgIH1cclxufVxyXG4ub3AtaW1hZ2V7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNjY2M7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcbi5vcHRpb25zLWljb257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcclxuICAgIH0gXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxyXG4gICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFjay10by10b3B7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7ICAgIFxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuIiwiJGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiR0aGVtZS1tYXgtd2lkdGg6IDEzMDBweDtcclxuJHRvcC10b29sYmFyLWhlaWdodDogMzZweDtcclxuJG1haW4tdG9vbGJhci1oZWlnaHQ6IDcycHg7XHJcbiR1c2VyLW1lbnUtd2lkdGg6IDIyMHB4O1xyXG4kaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ6IDMyMHB4O1xyXG4kaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLWNhcm91c2VsLWhlaWdodDogNDYwcHg7XHJcbiRoZWFkZXItbWFwLWhlaWdodDogNTUwcHg7XHJcbiRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A6IDgwcHg7XHJcblxyXG4kbWFpbi1zaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNlYXJjaC1zaWRlbmF2LXdpZHRoOiAyODhweDsiXX0= */";

/***/ }),

/***/ 64713:
/*!*****************************************************************!*\
  !*** ./src/app/shared/alert-dialog/alert-dialog.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 21843:
/*!*******************************************************!*\
  !*** ./src/app/shared/clients/clients.component.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".clients-carousel {\n  position: relative;\n  padding: 8px 0;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.clients-carousel .swiper-container {\n  padding: 8px 2px;\n  margin: 0 14px;\n}\n.clients-carousel .swiper-container .client-item {\n  height: 88px;\n  display: flex;\n  align-items: center;\n}\n.clients-carousel .swiper-container .client-item img {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFGWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJaEIiLCJmaWxlIjoiY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnRzLWNhcm91c2Vse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC5zd2lwZXItY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE0cHg7XHJcbiAgICAgICAgLmNsaWVudC1pdGVte1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 99794:
/*!*********************************************************!*\
  !*** ./src/app/shared/comments/comments.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 96066:
/*!*************************************************************************!*\
  !*** ./src/app/shared/compare-overview/compare-overview.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYXJlLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 14534:
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 52687:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/dialog-header-controls/dialog-header-controls.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctaGVhZGVyLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 80568:
/*!*****************************************************************!*\
  !*** ./src/app/shared/get-in-touch/get-in-touch.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".get-in-touch {\n  position: relative;\n  margin-top: 80px;\n}\n.get-in-touch img {\n  max-width: 200px;\n  position: absolute;\n  bottom: 0;\n}\n.get-in-touch .content {\n  padding-left: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1pbi10b3VjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFFUjtBQUFJO0VBQ0ksbUJBQUE7QUFFUiIsImZpbGUiOiJnZXQtaW4tdG91Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2V0LWluLXRvdWNoe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 293:
/*!***********************************************************************!*\
  !*** ./src/app/shared/header-carousel/header-carousel.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".header-carousel {\n  height: 460px;\n}\n.header-carousel .slide-item {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n}\n.header-carousel .swiper-lazy-preloader {\n  top: 15%;\n}\n.header-carousel .slide-info {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  z-index: 2;\n}\n.header-carousel .slide-info .mat-card {\n  text-align: center;\n  min-width: 450px;\n  transition: 0.4s;\n  margin: 0 16px;\n}\n.header-carousel .slide-info .mat-card .slide-title {\n  font-size: 32px;\n  line-height: 32px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n}\n.header-carousel .slide-info .mat-card .location {\n  font-size: 18px;\n  font-style: italic;\n  margin-bottom: 24px;\n  font-weight: 500;\n}\n.header-carousel .slide-info .mat-card .price {\n  font-size: 24px;\n  min-width: 200px;\n  padding: 8px 16px;\n}\n.header-carousel.offset-bottom {\n  height: 540px;\n}\n.header-carousel.offset-bottom .slide-info {\n  padding-bottom: 80px;\n}\n.header-carousel.fullscreen {\n  height: calc(100vh - (36px + 72px)) !important;\n}\n.header-carousel.fullscreen.toolbar-2 {\n  height: calc(100vh - 202px) !important;\n}\n@media screen and (max-width: 599px) {\n  .header-carousel {\n    height: 340px;\n  }\n  .header-carousel.offset-bottom {\n    height: 420px;\n  }\n  .header-carousel .slide-info .mat-card {\n    min-width: 240px;\n  }\n  .header-carousel .slide-info .mat-card .slide-title {\n    font-size: 24px;\n    line-height: 24px;\n    margin-bottom: 16px;\n  }\n  .header-carousel .slide-info .mat-card .location {\n    font-size: 14px;\n    margin-bottom: 19px;\n    align-items: start !important;\n  }\n  .header-carousel .slide-info .mat-card .price {\n    font-size: 14px;\n    min-width: 120px;\n    padding: unset;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-carousel {\n    height: 380px;\n  }\n  .header-carousel.offset-bottom {\n    height: 460px;\n  }\n  .header-carousel .slide-info .mat-card {\n    min-width: 400px;\n  }\n  .header-carousel .slide-info .mat-card .slide-title {\n    font-size: 28px;\n    line-height: 28px;\n    margin-bottom: 16px;\n  }\n  .header-carousel .slide-info .mat-card .location {\n    font-size: 16px;\n    margin-bottom: 24px;\n  }\n  .header-carousel .slide-info .mat-card .price {\n    font-size: 20px;\n    min-width: 160px;\n    padding: 4px 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUNJcUI7QURMekI7QUFFSTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQVI7QUFFSTtFQUNJLFFBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBQVI7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDWjtBQUFZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUVoQjtBQUFZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFaEI7QUFFSTtFQUNJLGFBQUE7QUFBUjtBQUNRO0VBQ0ksb0JDcEN3QjtBRHFDcEM7QUFFSTtFQUNJLDhDQUFBO0FBQVI7QUFDUTtFQUNJLHNDQUFBO0FBQ1o7QUFLQTtFQUNJO0lBRUksYUFBQTtFQUhOO0VBSU07SUFDSSxhQUFBO0VBRlY7RUFLVTtJQUNJLGdCQUFBO0VBSGQ7RUFJYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VBRmxCO0VBSWM7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQUZsQjtFQUljO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQUZsQjtBQUNGO0FBU0E7RUFDSTtJQUVJLGFBQUE7RUFSTjtFQVNNO0lBQ0ksYUFBQTtFQVBWO0VBVVU7SUFDSSxnQkFBQTtFQVJkO0VBU2M7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFQVBsQjtFQVNjO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VBUGxCO0VBU2M7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQVBsQjtBQUNGIiwiZmlsZSI6ImhlYWRlci1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uaGVhZGVyLWNhcm91c2VseyBcclxuICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQ7XHJcbiAgICAuc2xpZGUtaXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgICAgXHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWxhenktcHJlbG9hZGVye1xyXG4gICAgICAgIHRvcDogMTUlO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlLWluZm97XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0b3A6IDA7ICAgIFxyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgLm1hdC1jYXJke1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDUwcHg7ICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDE2cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zbGlkZS10aXRsZXsgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvY2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5vZmZzZXQtYm90dG9te1xyXG4gICAgICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wOyAgICAgICAgXHJcbiAgICAgICAgLnNsaWRlLWluZm97XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuZnVsbHNjcmVlbntcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoI3skdG9wLXRvb2xiYXItaGVpZ2h0fSArICN7JG1haW4tdG9vbGJhci1oZWlnaHR9KSkgIWltcG9ydGFudDtcclxuICAgICAgICAmLnRvb2xiYXItMntcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAycHgpICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8geHNcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5oZWFkZXItY2Fyb3VzZWx7IFxyXG4gICAgICAgIC8vIGhlaWdodDogMzIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVhZGVyLWNhcm91c2VsLWhlaWdodCAtIDEyMHB4O1xyXG4gICAgICAgICYub2Zmc2V0LWJvdHRvbXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkaGVhZGVyLWNhcm91c2VsLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgLSAxMjBweDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5zbGlkZS1pbmZveyBcclxuICAgICAgICAgICAgLm1hdC1jYXJke1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgIC5zbGlkZS10aXRsZXsgICBcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sb2NhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gc21cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgeyAgXHJcbiAgICAuaGVhZGVyLWNhcm91c2VseyBcclxuICAgICAgICAvLyBoZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQgLSA4MHB4O1xyXG4gICAgICAgICYub2Zmc2V0LWJvdHRvbXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkaGVhZGVyLWNhcm91c2VsLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgLSA4MHB4O1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIC5zbGlkZS1pbmZveyBcclxuICAgICAgICAgICAgLm1hdC1jYXJke1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgIC5zbGlkZS10aXRsZXsgICBcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sb2NhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4kdGhlbWUtbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiR0b3AtdG9vbGJhci1oZWlnaHQ6IDM2cHg7XHJcbiRtYWluLXRvb2xiYXItaGVpZ2h0OiA3MnB4O1xyXG4kdXNlci1tZW51LXdpZHRoOiAyMjBweDtcclxuJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0OiAzMjBweDtcclxuJGhlYWRlci12aWRlby1taW4taGVpZ2h0OiAzNjBweDtcclxuJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQ6IDQ2MHB4O1xyXG4kaGVhZGVyLW1hcC1oZWlnaHQ6IDU1MHB4O1xyXG4kbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wOiA4MHB4O1xyXG5cclxuJG1haW4tc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzZWFyY2gtc2lkZW5hdi13aWR0aDogMjg4cHg7Il19 */";

/***/ }),

/***/ 97341:
/*!*****************************************************************!*\
  !*** ./src/app/shared/header-image/header-image.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".header-image-wrapper {\n  position: relative;\n  overflow: hidden;\n  margin-top: -72px;\n  padding-top: 36px;\n}\n.header-image-wrapper .header-image-content {\n  position: relative;\n  min-height: 320px;\n  color: #fff;\n  z-index: 1;\n}\n.header-image-wrapper .header-image-content.offset-bottom {\n  padding-bottom: 80px;\n  min-height: 400px;\n}\n.header-image-wrapper .header-image-content.home-page {\n  min-height: 480px;\n}\n.header-image-wrapper .header-image-content .title {\n  font-size: 48px;\n  text-transform: uppercase;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-image-wrapper .header-image-content .desc {\n  margin: 0;\n  font-size: 24px;\n  font-style: italic;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-image-wrapper .header-image-content .mat-raised-button {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n  text-transform: uppercase;\n  margin: 0 4px;\n}\n.header-image-wrapper .mask {\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.header-image-wrapper .bg {\n  width: 110%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.header-image-wrapper .bg-anime {\n  -webkit-animation-name: MOVE-BG;\n  -webkit-animation-duration: 15s;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  -moz-animation-name: MOVE-BG;\n  -moz-animation-duration: 15s;\n  -moz-animation-timing-function: ease-in-out;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-direction: alternate;\n  -ms-animation-name: MOVE-BG;\n  -ms-animation-duration: 15s;\n  -ms-animation-timing-function: ease-in-out;\n  -ms-animation-iteration-count: infinite;\n  -ms-animation-direction: alternate;\n  animation-name: MOVE-BG;\n  animation-duration: 15s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n.header-image-wrapper.fullscreen {\n  height: calc(100vh - 72px) !important;\n}\n.header-image-wrapper.fullscreen .header-image-content {\n  height: calc(100vh - 72px) !important;\n}\n.header-image-wrapper.fullscreen.toolbar-2 {\n  height: calc(100vh - 166px) !important;\n}\n.header-image-wrapper.fullscreen.toolbar-2 .header-image-content {\n  height: calc(100vh - 166px) !important;\n}\n@keyframes MOVE-BG {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-7%);\n  }\n}\n.header-image-wrapper[dir=rtl] .bg-anime {\n  animation-name: MOVE-BG-RTL;\n}\n@keyframes MOVE-BG-RTL {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(7%);\n  }\n}\n@media screen and (max-width: 599px) {\n  .header-image-wrapper .header-image-content {\n    min-height: 240px;\n  }\n  .header-image-wrapper .header-image-content.offset-bottom {\n    min-height: 320px;\n  }\n  .header-image-wrapper .header-image-content.home-page {\n    min-height: 400px;\n  }\n  .header-image-wrapper .header-image-content .title {\n    font-size: 24px;\n  }\n  .header-image-wrapper .header-image-content .desc {\n    font-size: 16px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-image-wrapper .header-image-content {\n    min-height: 280px;\n  }\n  .header-image-wrapper .header-image-content.offset-bottom {\n    min-height: 360px;\n  }\n  .header-image-wrapper .header-image-content.home-page {\n    min-height: 440px;\n  }\n  .header-image-wrapper .header-image-content .title {\n    font-size: 36px;\n  }\n  .header-image-wrapper .header-image-content .desc {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1pbWFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxpQkNKa0I7RURLbEIsV0FBQTtFQUNBLFVBQUE7QUFBUjtBQUNRO0VBQ0ksb0JDSndCO0VES3hCLGlCQUFBO0FBQ1o7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQ1E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFDUTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFDWjtBQUVJO0VBQ0ksOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFBUjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUFSO0FBRUk7RUFDSSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0FBQVI7QUFFSTtFQUNJLHFDQUFBO0FBQVI7QUFDUTtFQUNJLHFDQUFBO0FBQ1o7QUFDUTtFQUNJLHNDQUFBO0FBQ1o7QUFBWTtFQUNJLHNDQUFBO0FBRWhCO0FBT0E7RUFBcUI7SUFBTyx3QkFBQTtFQXNCMUI7RUF0QnNEO0lBQUssMEJBQUE7RUF5QjNEO0FBQ0Y7QUF2Qkk7RUFJSSwyQkFBQTtBQXlCUjtBQWxCQTtFQUF5QjtJQUFPLHdCQUFBO0VBK0M5QjtFQS9DMEQ7SUFBSyx5QkFBQTtFQWtEL0Q7QUFDRjtBQWhEQTtFQUVRO0lBQ0ksaUJBQUE7RUFpRFY7RUFoRFU7SUFDSSxpQkFBQTtFQWtEZDtFQWhEVTtJQUNJLGlCQUFBO0VBa0RkO0VBaERVO0lBQ0ksZUFBQTtFQWtEZDtFQWhEVTtJQUNJLGVBQUE7RUFrRGQ7QUFDRjtBQTVDQTtFQUVRO0lBQ0ksaUJBQUE7RUE2Q1Y7RUE1Q1U7SUFDSSxpQkFBQTtFQThDZDtFQTVDVTtJQUNJLGlCQUFBO0VBOENkO0VBNUNVO0lBQ0ksZUFBQTtFQThDZDtFQTVDVTtJQUNJLGVBQUE7RUE4Q2Q7QUFDRiIsImZpbGUiOiJoZWFkZXItaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhlYWRlci1pbWFnZS13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IC0kbWFpbi10b29sYmFyLWhlaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKCRtYWluLXRvb2xiYXItaGVpZ2h0LzIpO1xyXG4gICAgLmhlYWRlci1pbWFnZS1jb250ZW50e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMTsgICAgICAgIFxyXG4gICAgICAgICYub2Zmc2V0LWJvdHRvbXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaG9tZS1wYWdle1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wICsgODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7IFxyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNje1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDsgXHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXNreyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmJne1xyXG4gICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICB9XHJcbiAgICAuYmctYW5pbWV7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogTU9WRS1CRztcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTsgICAgICBcclxuICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlOyAgICAgIFxyXG4gICAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogTU9WRS1CRztcclxuICAgICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAtbXMtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlOyAgICAgIFxyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgIH1cclxuICAgICYuZnVsbHNjcmVlbntcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRtYWluLXRvb2xiYXItaGVpZ2h0fSkgIWltcG9ydGFudDtcclxuICAgICAgICAuaGVhZGVyLWltYWdlLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JG1haW4tdG9vbGJhci1oZWlnaHR9KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnRvb2xiYXItMntcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTY2cHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5oZWFkZXItaW1hZ2UtY29udGVudHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2NnB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIE1PVkUtQkcgeyBmcm9tIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpOyB9IH0gIFxyXG5ALW1vei1rZXlmcmFtZXMgTU9WRS1CRyB7IGZyb20geyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03JSk7IH0gfSAgXHJcbkAtbXMta2V5ZnJhbWVzIE1PVkUtQkcgeyBmcm9tIHsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTclKTsgfSB9IFxyXG5Aa2V5ZnJhbWVzIE1PVkUtQkcgeyBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03JSk7IH0gfVxyXG5cclxuLmhlYWRlci1pbWFnZS13cmFwcGVyW2Rpcj1cInJ0bFwiXXtcclxuICAgIC5iZy1hbmltZXtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHLVJUTDsgICAgICBcclxuICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHLVJUTDsgICAgICBcclxuICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkctUlRMOyAgICAgIFxyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHLVJUTDsgXHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7IGZyb20geyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDclKTsgfSB9ICBcclxuQC1tb3ota2V5ZnJhbWVzIE1PVkUtQkctUlRMIHsgZnJvbSB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNyUpOyB9IH0gIFxyXG5ALW1zLWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7IGZyb20geyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7IH0gfSBcclxuQGtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7IGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNyUpOyB9IH1cclxuXHJcbi8vIHhzXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAuaGVhZGVyLWltYWdlLXdyYXBwZXJ7XHJcbiAgICAgICAgLmhlYWRlci1pbWFnZS1jb250ZW50e1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgLSA4MHB4O1xyXG4gICAgICAgICAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmhvbWUtcGFnZXtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3sgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHNtXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5oZWFkZXItaW1hZ2Utd3JhcHBlcntcclxuICAgICAgICAuaGVhZGVyLWltYWdlLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCAtIDQwcHg7XHJcbiAgICAgICAgICAgICYub2Zmc2V0LWJvdHRvbXtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgLSA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuaG9tZS1wYWdle1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCArIDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3sgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7IFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iLCIkZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xyXG4kdG9wLXRvb2xiYXItaGVpZ2h0OiAzNnB4O1xyXG4kbWFpbi10b29sYmFyLWhlaWdodDogNzJweDtcclxuJHVzZXItbWVudS13aWR0aDogMjIwcHg7XHJcbiRoZWFkZXItaW1hZ2UtbWluLWhlaWdodDogMzIwcHg7XHJcbiRoZWFkZXItdmlkZW8tbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0OiA0NjBweDtcclxuJGhlYWRlci1tYXAtaGVpZ2h0OiA1NTBweDtcclxuJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDogODBweDtcclxuXHJcbiRtYWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2VhcmNoLXNpZGVuYXYtd2lkdGg6IDI4OHB4OyJdfQ== */";

/***/ }),

/***/ 88814:
/*!*************************************************************!*\
  !*** ./src/app/shared/header-map/header-map.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".map-wrapper {\n  height: 550px;\n}\n.map-wrapper .sebm-google-map-container {\n  height: 100%;\n}\n.map-wrapper.offset-bottom {\n  height: 630px;\n}\n.map-wrapper.offset-bottom .slide-info {\n  padding-bottom: 80px;\n}\n.map-wrapper.fullscreen {\n  height: calc(100vh - (36px + 72px)) !important;\n}\n.map-wrapper.fullscreen.toolbar-2 {\n  height: calc(100vh - 202px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1tYXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFDS2dCO0FETnBCO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFFSTtFQUNJLGFBQUE7QUFBUjtBQUNRO0VBQ0ksb0JDRHdCO0FERXBDO0FBRUk7RUFDSSw4Q0FBQTtBQUFSO0FBQ1E7RUFDSSxzQ0FBQTtBQUNaIiwiZmlsZSI6ImhlYWRlci1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm1hcC13cmFwcGVye1xyXG4gICAgaGVpZ2h0OiAkaGVhZGVyLW1hcC1oZWlnaHQ7XHJcbiAgICAuc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVhZGVyLW1hcC1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wOyAgICAgICAgXHJcbiAgICAgICAgLnNsaWRlLWluZm97XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuZnVsbHNjcmVlbntcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoI3skdG9wLXRvb2xiYXItaGVpZ2h0fSArICN7JG1haW4tdG9vbGJhci1oZWlnaHR9KSkgIWltcG9ydGFudDtcclxuICAgICAgICAmLnRvb2xiYXItMntcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAycHgpICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiJGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiR0aGVtZS1tYXgtd2lkdGg6IDEzMDBweDtcclxuJHRvcC10b29sYmFyLWhlaWdodDogMzZweDtcclxuJG1haW4tdG9vbGJhci1oZWlnaHQ6IDcycHg7XHJcbiR1c2VyLW1lbnUtd2lkdGg6IDIyMHB4O1xyXG4kaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ6IDMyMHB4O1xyXG4kaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLWNhcm91c2VsLWhlaWdodDogNDYwcHg7XHJcbiRoZWFkZXItbWFwLWhlaWdodDogNTUwcHg7XHJcbiRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A6IDgwcHg7XHJcblxyXG4kbWFpbi1zaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNlYXJjaC1zaWRlbmF2LXdpZHRoOiAyODhweDsiXX0= */";

/***/ }),

/***/ 70081:
/*!*****************************************************************!*\
  !*** ./src/app/shared/header-video/header-video.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".header-video-wrapper {\n  position: relative;\n  overflow: hidden;\n  margin-top: -72px;\n  padding-top: 36px;\n}\n.header-video-wrapper .header-video-content {\n  position: relative;\n  min-height: 360px;\n  color: #fff;\n  z-index: 1;\n}\n.header-video-wrapper .header-video-content.offset-bottom {\n  padding-bottom: 80px;\n  min-height: 440px;\n}\n.header-video-wrapper .header-video-content.home-page {\n  min-height: 520px;\n}\n.header-video-wrapper .header-video-content .title {\n  font-size: 48px;\n  text-transform: uppercase;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-video-wrapper .header-video-content .desc {\n  margin: 0;\n  font-size: 32px;\n  font-style: italic;\n  padding: 0 16px;\n  text-align: center;\n  font-weight: 400;\n}\n.header-video-wrapper .header-video-content .mat-raised-button {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n  text-transform: uppercase;\n  margin: 0 4px;\n}\n.header-video-wrapper .mask {\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.header-video-wrapper video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1;\n  object-position: center;\n  object-fit: cover;\n}\n.header-video-wrapper.fullscreen {\n  height: calc(100vh - 72px) !important;\n}\n.header-video-wrapper.fullscreen .header-video-content {\n  height: calc(100vh - 72px) !important;\n}\n.header-video-wrapper.fullscreen.toolbar-2 {\n  height: calc(100vh - 166px) !important;\n}\n.header-video-wrapper.fullscreen.toolbar-2 .header-video-content {\n  height: calc(100vh - 166px) !important;\n}\n@media screen and (max-width: 599px) {\n  .header-video-wrapper .header-video-content {\n    min-height: 280px;\n  }\n  .header-video-wrapper .header-video-content.offset-bottom {\n    min-height: 360px;\n  }\n  .header-video-wrapper .header-video-content.home-page {\n    min-height: 440px;\n  }\n  .header-video-wrapper .header-video-content .title {\n    font-size: 24px;\n  }\n  .header-video-wrapper .header-video-content .desc {\n    font-size: 16px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-video-wrapper .header-video-content {\n    min-height: 320px;\n  }\n  .header-video-wrapper .header-video-content.offset-bottom {\n    min-height: 400px;\n  }\n  .header-video-wrapper .header-video-content.home-page {\n    min-height: 480px;\n  }\n  .header-video-wrapper .header-video-content .title {\n    font-size: 36px;\n  }\n  .header-video-wrapper .header-video-content .desc {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci12aWRlby5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxpQkNIa0I7RURJbEIsV0FBQTtFQUNBLFVBQUE7QUFBUjtBQUNRO0VBQ0ksb0JDSndCO0VES3hCLGlCQUFBO0FBQ1o7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQ1E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUNRO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNaO0FBRUk7RUFDSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxxQ0FBQTtBQUFSO0FBQ1E7RUFDSSxxQ0FBQTtBQUNaO0FBQ1E7RUFDSSxzQ0FBQTtBQUNaO0FBQVk7RUFDSSxzQ0FBQTtBQUVoQjtBQVFBO0VBRVE7SUFDSSxpQkFBQTtFQU5WO0VBT1U7SUFDSSxpQkFBQTtFQUxkO0VBT1U7SUFDSSxpQkFBQTtFQUxkO0VBT1U7SUFDSSxlQUFBO0VBTGQ7RUFPVTtJQUNJLGVBQUE7RUFMZDtBQUNGO0FBV0E7RUFFUTtJQUNJLGlCQUFBO0VBVlY7RUFXVTtJQUNJLGlCQUFBO0VBVGQ7RUFXVTtJQUNJLGlCQUFBO0VBVGQ7RUFXVTtJQUNJLGVBQUE7RUFUZDtFQVdVO0lBQ0ksZUFBQTtFQVRkO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLXZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5oZWFkZXItdmlkZW8td3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAtJG1haW4tdG9vbGJhci1oZWlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYygkbWFpbi10b29sYmFyLWhlaWdodC8yKTtcclxuICAgIC5oZWFkZXItdmlkZW8tY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci12aWRlby1taW4taGVpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHotaW5kZXg6IDE7ICAgICAgICBcclxuICAgICAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmhvbWUtcGFnZXtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci12aWRlby1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCArIDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4OyBcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3tcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7IFxyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXNreyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfSBcclxuICAgIHZpZGVvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgJi5mdWxsc2NyZWVue1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JG1haW4tdG9vbGJhci1oZWlnaHR9KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5oZWFkZXItdmlkZW8tY29udGVudHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skbWFpbi10b29sYmFyLWhlaWdodH0pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudG9vbGJhci0ye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjZweCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLmhlYWRlci12aWRlby1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTY2cHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4gXHJcbiBcclxuXHJcbi8vIHhzXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAuaGVhZGVyLXZpZGVvLXdyYXBwZXJ7XHJcbiAgICAgICAgLmhlYWRlci12aWRlby1jb250ZW50e1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQgLSA4MHB4O1xyXG4gICAgICAgICAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmhvbWUtcGFnZXtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItdmlkZW8tbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3sgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHNtXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5oZWFkZXItdmlkZW8td3JhcHBlcntcclxuICAgICAgICAuaGVhZGVyLXZpZGVvLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItdmlkZW8tbWluLWhlaWdodCAtIDQwcHg7XHJcbiAgICAgICAgICAgICYub2Zmc2V0LWJvdHRvbXtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItdmlkZW8tbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgLSA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuaG9tZS1wYWdle1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci12aWRlby1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCArIDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3sgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7IFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iLCIkZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xyXG4kdG9wLXRvb2xiYXItaGVpZ2h0OiAzNnB4O1xyXG4kbWFpbi10b29sYmFyLWhlaWdodDogNzJweDtcclxuJHVzZXItbWVudS13aWR0aDogMjIwcHg7XHJcbiRoZWFkZXItaW1hZ2UtbWluLWhlaWdodDogMzIwcHg7XHJcbiRoZWFkZXItdmlkZW8tbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0OiA0NjBweDtcclxuJGhlYWRlci1tYXAtaGVpZ2h0OiA1NTBweDtcclxuJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDogODBweDtcclxuXHJcbiRtYWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2VhcmNoLXNpZGVuYXYtd2lkdGg6IDI4OHB4OyJdfQ== */";

/***/ }),

/***/ 31456:
/*!***********************************************************!*\
  !*** ./src/app/shared/load-more/load-more.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkLW1vcmUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 42820:
/*!*******************************************************!*\
  !*** ./src/app/shared/mission/mission.component.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 95018:
/*!*************************************************************!*\
  !*** ./src/app/shared/our-agents/our-agents.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXItYWdlbnRzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 77393:
/*!*****************************************************************!*\
  !*** ./src/app/shared/our-services/our-services.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".services-wrapper {\n  margin: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJvdXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZXMtd3JhcHBlcntcclxuICAgIG1hcmdpbjogLThweDtcclxufSJdfQ== */";

/***/ }),

/***/ 86191:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/properties-carousel/properties-carousel.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 7720:
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.scss ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLXNlYXJjaC1yZXN1bHRzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 97660:
/*!***************************************************************************!*\
  !*** ./src/app/shared/properties-search/properties-search.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 66464:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/properties-toolbar/properties-toolbar.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLXRvb2xiYXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 86497:
/*!*******************************************************************!*\
  !*** ./src/app/shared/property-item/property-item.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".property-item {\n  height: 100%;\n  overflow: hidden;\n}\n.property-item .thumbnail-section {\n  position: relative;\n}\n.property-item .mat-card-image {\n  position: relative;\n  min-height: 180px;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button {\n  color: #fff;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button.swiper-button-next {\n  right: 4px;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button.swiper-button-prev {\n  left: 4px;\n}\n.property-item .mat-card-image .swiper-slide {\n  text-align: center;\n  padding-bottom: 66.25%;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.04);\n}\n.property-item .mat-card-image img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n.property-item .property-status {\n  position: absolute;\n  z-index: 2;\n}\n.property-item .property-status span {\n  padding: 3px 6px;\n  margin: 4px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  border-radius: 4px;\n}\n.property-item .title {\n  font-size: 18px;\n}\n.property-item .title a {\n  transition: 0.2s;\n  text-decoration: none;\n}\n.property-item .address, .property-item .date {\n  font-style: italic;\n  margin-top: 8px;\n}\n.property-item .address .mat-icon, .property-item .date .mat-icon {\n  margin-left: -4px;\n}\n.property-item .price span {\n  display: block;\n}\n.property-item .features p span:first-child {\n  float: left;\n  padding: 0 0.4em 0 0;\n}\n.property-item .features p span + span {\n  float: right;\n  padding: 0 0 0 0.4em;\n  font-weight: 500;\n}\n.property-item .features p:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n  height: 1em;\n}\n.property-item .control-icons {\n  position: absolute;\n  z-index: 2;\n  right: 2px;\n  margin-top: -30px;\n}\n.property-item .control-icons button.mat-button {\n  min-width: 26px;\n  width: 26px;\n  line-height: 26px;\n  padding: 0;\n  margin: 0 4px;\n  background: rgba(255, 252, 252, 0.6);\n  transition: 0.2s;\n  color: rgba(0, 0, 0, 0.87);\n}\n.property-item .control-icons button.mat-button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.property-item .control-icons button.mat-button:hover:enabled {\n  background: #fffcfc;\n}\n.property-item.grid-item {\n  flex-flow: column !important;\n}\n.property-item.grid-item.column-2 .title {\n  font-size: 22px;\n}\n.property-item.grid-item.column-2 .price {\n  font-size: 18px;\n}\n.property-item.grid-item.column-3 .title {\n  font-size: 18px;\n}\n.property-item.grid-item.column-3 .address, .property-item.grid-item.column-3 .date {\n  font-size: 12px;\n}\n.property-item.grid-item.column-3 .address .mat-icon, .property-item.grid-item.column-3 .date .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.property-item.grid-item.full-width-page.column-2 .title {\n  font-size: 28px;\n}\n.property-item.grid-item.full-width-page.column-2 .price {\n  font-size: 20px;\n}\n.property-item.grid-item.full-width-page.column-3 .title {\n  font-size: 22px;\n}\n.property-item.grid-item.full-width-page.column-3 .address, .property-item.grid-item.full-width-page.column-3 .date {\n  font-size: 14px;\n}\n.property-item.grid-item.full-width-page.column-3 .address .mat-icon, .property-item.grid-item.full-width-page.column-3 .date .mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.property-item.grid-item.full-width-page.column-3 .price {\n  font-size: 18px;\n}\n.property-item.grid-item.full-width-page.column-4 .title {\n  font-size: 18px;\n}\n.property-item.grid-item.full-width-page.column-4 .address, .property-item.grid-item.full-width-page.column-4 .date {\n  font-size: 12px;\n}\n.property-item.grid-item.full-width-page.column-4 .address .mat-icon, .property-item.grid-item.full-width-page.column-4 .date .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.property-item.list-item .title {\n  font-size: 28px;\n  margin-top: -8px;\n}\n.property-item.list-item .price {\n  font-size: 20px;\n}\n.property-item.list-item .features {\n  display: flex;\n  flex-flow: wrap;\n}\n.property-item.list-item .features p {\n  margin-right: 24px;\n  display: flex;\n  white-space: nowrap;\n}\n.property-item.list-item .features p span:first-child:after {\n  content: \":\";\n  margin: 0 1px;\n}\n.property-item.list-item .features p:after {\n  content: none;\n}\n@media screen and (max-width: 959px) {\n  .property-item.grid-item .title {\n    font-size: 22px;\n  }\n  .property-item.grid-item.column-2 .title {\n    font-size: 22px;\n  }\n  .property-item.grid-item.full-width-page.column-2 .title {\n    font-size: 22px;\n  }\n  .property-item.list-item .title {\n    font-size: 22px;\n  }\n  .property-item.list-item .address, .property-item.list-item .date {\n    font-size: 12px;\n  }\n  .property-item.list-item .address .mat-icon, .property-item.list-item .date .mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .property-item.list-item .price {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQVk7RUFDSSxXQUFBO0FBRWhCO0FBRGdCO0VBQ0ksVUFBQTtBQUdwQjtBQURnQjtFQUNJLFNBQUE7QUFHcEI7QUFDUTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFDWjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ1o7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNaO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFDWjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7QUFHUTtFQUNJLGNBQUE7QUFEWjtBQU1ZO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FBSmhCO0FBTVk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQU9RO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFMWjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBTlI7QUFPUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUxaO0FBTVk7RUFDSSwwQkFBQTtBQUpoQjtBQU1ZO0VBQ0ksbUJBQUE7QUFKaEI7QUFRSTtFQUNJLDRCQUFBO0FBTlI7QUFRWTtFQUNJLGVBQUE7QUFOaEI7QUFRWTtFQUNJLGVBQUE7QUFOaEI7QUFVWTtFQUNJLGVBQUE7QUFSaEI7QUFVWTtFQUNJLGVBQUE7QUFSaEI7QUFTZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQcEI7QUFhZ0I7RUFDSSxlQUFBO0FBWHBCO0FBYWdCO0VBQ0ksZUFBQTtBQVhwQjtBQWVnQjtFQUNJLGVBQUE7QUFicEI7QUFlZ0I7RUFDSSxlQUFBO0FBYnBCO0FBY29CO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWnhCO0FBZWdCO0VBQ0ksZUFBQTtBQWJwQjtBQWlCZ0I7RUFDSSxlQUFBO0FBZnBCO0FBaUJnQjtFQUNJLGVBQUE7QUFmcEI7QUFnQm9CO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZHhCO0FBcUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBbkJaO0FBcUJRO0VBQ0ksZUFBQTtBQW5CWjtBQXFCUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBbkJaO0FBb0JZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFsQmhCO0FBbUJnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBakJwQjtBQW1CZ0I7RUFDSSxhQUFBO0FBakJwQjtBQTJCQTtFQUdZO0lBQ0ksZUFBQTtFQTFCZDtFQTZCYztJQUNJLGVBQUE7RUEzQmxCO0VBZ0NrQjtJQUNJLGVBQUE7RUE5QnRCO0VBb0NVO0lBQ0ksZUFBQTtFQWxDZDtFQW9DVTtJQUNJLGVBQUE7RUFsQ2Q7RUFtQ2M7SUFDSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFqQ2xCO0VBb0NVO0lBQ0ksZUFBQTtFQWxDZDtBQUNGIiwiZmlsZSI6InByb3BlcnR5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktaXRlbXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAudGh1bWJuYWlsLXNlY3Rpb257XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJkLWltYWdle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgICAgICAuc3dpcGVyLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgLnN3aXBlLWFycm93Lm1hdC1pY29uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgJi5zd2lwZXItYnV0dG9uLW5leHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuc3dpcGVyLWJ1dHRvbi1wcmV2e1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3dpcGVyLXNsaWRleyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDY2LjI1JTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7ICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICAucHJvcGVydHktc3RhdHVze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxleyBcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7ICAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFkZHJlc3MsIC5kYXRle1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTRweDtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuICAgIC5wcmljZXsgXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbiAgICAuZmVhdHVyZXMgcCB7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgLjRlbSAwIDA7XHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICArIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgLjRlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMWVtOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udHJvbC1pY29uc3sgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7IFxyXG4gICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgYnV0dG9uLm1hdC1idXR0b257XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjUyLCAyNTIsIDAuNik7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7IFxyXG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgICAgICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXI6ZW5hYmxlZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTIsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5ncmlkLWl0ZW17XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgICAmLmNvbHVtbi0ye1xyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY29sdW1uLTN7XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWRkcmVzcywgLmRhdGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmZ1bGwtd2lkdGgtcGFnZXtcclxuICAgICAgICAgICAgJi5jb2x1bW4tMntcclxuICAgICAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY29sdW1uLTN7XHJcbiAgICAgICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFkZHJlc3MsIC5kYXRle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY29sdW1uLTR7XHJcbiAgICAgICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFkZHJlc3MsIC5kYXRle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmxpc3QtaXRlbXsgXHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmljZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZlYXR1cmVze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiOlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcHg7XHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgLnByb3BlcnR5LWl0ZW17XHJcbiAgICAgICAgJi5ncmlkLWl0ZW17XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmNvbHVtbi0ye1xyXG4gICAgICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmZ1bGwtd2lkdGgtcGFnZXtcclxuICAgICAgICAgICAgICAgICYuY29sdW1uLTJ7XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubGlzdC1pdGVte1xyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFkZHJlc3MsIC5kYXRle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG59Il19 */";

/***/ }),

/***/ 31581:
/*!*****************************************************!*\
  !*** ./src/app/shared/rating/rating.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".ratings {\n  color: #fbc02d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nc3tcclxuICAgIGNvbG9yOiNmYmMwMmQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 23138:
/*!*****************************************************************!*\
  !*** ./src/app/shared/testimonials/testimonials.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".testimonials-carousel .swiper-container {\n  padding-bottom: 50px;\n}\n.testimonials-carousel .swiper-container .content {\n  max-width: 650px;\n  margin: 0 auto;\n}\n.testimonials-carousel .swiper-container .content img {\n  border-radius: 50%;\n  width: 140px;\n  height: 140px;\n}\n.testimonials-carousel .swiper-container .content .quote {\n  font-size: 50px;\n  line-height: 14px;\n}\n.testimonials-carousel .swiper-container .content .quote.open {\n  margin-top: 24px;\n}\n.testimonials-carousel .swiper-container .content .quote.close {\n  margin-bottom: 24px;\n}\n.testimonials-carousel .swiper-container .content .text {\n  font-weight: 500;\n}\n.testimonials-carousel .swiper-container .content .author {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9CQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRWhCO0FBQVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSxnQkFBQTtBQUdwQjtBQURnQjtFQUNJLG1CQUFBO0FBR3BCO0FBQVk7RUFDSSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0kseUJBQUE7QUFFaEIiLCJmaWxlIjoidGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFscy1jYXJvdXNlbHsgICAgXHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5xdW90ZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDsgXHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDsgXHJcbiAgICAgICAgICAgICAgICAmLm9wZW57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuY2xvc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0eyBcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdXRob3J7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 90387:
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/contacts/contacts.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 59708:
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/currency/currency.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW5jeS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 12755:
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 2451:
/*!***********************************************************!*\
  !*** ./src/app/theme/components/lang/lang.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5nLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 25950:
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 84757:
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  width: 100%;\n  font-weight: 400;\n  text-transform: uppercase;\n  height: 38px;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 56px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 76px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 96px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 116px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 136px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 156px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 176px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 196px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 216px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 36px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFESjs7QUFLSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQUlZO0VBR0kseUJBQUE7QUFGaEI7O0FBTUk7RUFDSSxrQkFBQTtBQUpSOztBQVFBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBR0EscUNBQUE7QUFOSjs7QUN2QlE7RUFLUSxrQkFBQTtBRHFCaEI7O0FDMUJRO0VBS1Esa0JBQUE7QUR3QmhCOztBQzdCUTtFQUtRLGtCQUFBO0FEMkJoQjs7QUNoQ1E7RUFLUSxtQkFBQTtBRDhCaEI7O0FDbkNRO0VBS1EsbUJBQUE7QURpQ2hCOztBQ3RDUTtFQUtRLG1CQUFBO0FEb0NoQjs7QUN6Q1E7RUFLUSxtQkFBQTtBRHVDaEI7O0FDNUNRO0VBS1EsbUJBQUE7QUQwQ2hCOztBQy9DUTtFQUtRLG1CQUFBO0FENkNoQjs7QUFwQkk7RUFDSSxrQkFBQTtBQXNCUjs7QUFwQkk7RUFDSSxpQkFBQTtFQUdBLG9DQUFBO0FBc0JSIiwiZmlsZSI6InZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGluc1wiO1xyXG5cclxuLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbXtcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgJi5leHBhbmRlZHtcclxuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uc3ViLW1lbnV7XHJcbiAgICBAaW5jbHVkZSBtZW51LWxldmVsLXBhZGRpbmcoJ2x0cicpO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgICAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7ICAgICAgXHJcbiAgICB9IFxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgIH0gICAgXHJcbn0iLCJAbWl4aW4gbWVudS1sZXZlbC1wYWRkaW5nKCRkaXJlY3Rpb24pe1xyXG4gICAgJGVsZW06ICcnO1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XHJcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcclxuICAgICAgICAjeyRlbGVtICsgJyAubWF0LWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweCArICgyMHB4ICogJGkpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBAZWxzZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweCArICgyMHB4ICogJGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 60775:
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/social-icons/social-icons.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtaWNvbnMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 94835:
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map