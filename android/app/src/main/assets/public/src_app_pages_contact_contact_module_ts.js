"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_contact_contact_module_ts"],{

/***/ 50135:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact.component.html */ 14978);
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.scss */ 50911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 49224);






let ContactComponent = class ContactComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.lat = 48.844101;
        this.lng = 2.431290;
        this.zoom = 12;
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactComponent);



/***/ }),

/***/ 73603:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component */ 50135);







const routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, pathMatch: 'full' }
];
let ContactModule = class ContactModule {
};
ContactModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_6__.AgmCoreModule
        ]
    })
], ContactModule);



/***/ }),

/***/ 14978:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/contact/contact.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-image [backgroundImage]=\"'assets/images/others/contact.jpg'\" \r\n                  [bgImageAnimate]=\"false\" \r\n                  [contentOffsetToTop]=\"true\"                \r\n                  [title]=\"'NOUS CONTACTER'\"\r\n                  [desc]=\"'tu as une question? Nous vous donnerons une réponse directe'\">\r\n</app-header-image>\r\n\r\n<div class=\"px-3\">\r\n\r\n    <div class=\"theme-container\">\r\n        <mat-card class=\"main-content-header mb-5\">\r\n            \r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around\">\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\r\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">home</mat-icon>\r\n                        <h3 class=\"primary-color py-1\">ADDRESSE :</h3>\r\n                        <span>22 rue des Vignerons 94300 Vincennes</span>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">Appelez nous</mat-icon>\r\n                        <h3 class=\"primary-color py-1\">TÉLÉPHONE :</h3>\r\n                        <span>(+33)1 55 66 32 56</span>\r\n                        <span>(+33)1 55 66 32 56</span>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">mail_outline</mat-icon>\r\n                        <h3 class=\"primary-color py-1\">E-MAIL :</h3>\r\n                        <span>contact@atypikhouse.com</span>\r\n                        <span>info@atypikhouse.com</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"divider w-100 mt-3\"></div>\r\n                <h3 class=\"w-100 text-center py-3\">NOUS CONTACTER\r\n                </h3>\r\n                \r\n                <form action=\"https://api.sheetmonkey.io/form/bQQGWAtk6gsPUiTNxht8NX\" method=\"POST\" fxLayout=\"row wrap\">\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Nom</mat-label>\r\n                            <input matInput placeholder=\"Name\" formControlName=\"name\" name=\"name\" required>\r\n                            <mat-error *ngIf=\"contactForm.controls.name.errors?.required\">Le nom est requis</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Email</mat-label>\r\n                            <input matInput placeholder=\"Email\" formControlName=\"email\" name=\"email\" required>\r\n                            <mat-error *ngIf=\"contactForm.controls.email.errors?.required\">L'adresse e-mail est requise</mat-error>\r\n                            <mat-error *ngIf=\"contactForm.controls.email.hasError('invalidEmail')\">L'adresse e-mail invalide</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Téléphone</mat-label>\r\n                            <input matInput placeholder=\"Phone\" formControlName=\"phone\" name=\"phone\" required>\r\n                            <mat-error *ngIf=\"contactForm.controls.phone.errors?.required\">Le téléphone est requis</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Message</mat-label> \r\n                            <textarea matInput placeholder=\"Message\" formControlName=\"message\"  name=\"message\"  required rows=\"7\"></textarea> \r\n                            <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Un message est requis</mat-error>\r\n                        </mat-form-field>\r\n                    </div> \r\n                    <div class=\"w-100 py-2 text-center\">\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Envoyer</button>\r\n                    </div> \r\n                </form> \r\n            \r\n            </div> \r\n            \r\n            <div class=\"mt-5 contact-map\">\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\">\r\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"false\" ></agm-marker>\r\n                </agm-map>\r\n            </div>\r\n\r\n        </mat-card>  \r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ 50911:
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".contact-map .sebm-google-map-container {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LW1hcCAuc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_module_ts.js.map