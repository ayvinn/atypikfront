"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 52577:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.component.html */ 2888);
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss */ 19963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 49224);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 77524);









let RegisterComponent = class RegisterComponent {
    constructor(fb, router, snackBar, user) {
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.user = user;
        this.hide = true;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            receiveNewsletter: false
        }, { validator: (0,src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.matchingPasswords)('password', 'confirmPassword') });
    }
    onRegisterFormSubmit(values) {
        if (this.registerForm.valid) {
            const values = {
                email: this.registerForm.value.email, password: this.registerForm.value.password,
                passwordConfirm: this.registerForm.value.confirmPassword, lastname: this.registerForm.value.lastname, firstname: this.registerForm.value.firstname,
            };
            console.log(values);
            this.user.register(values).subscribe(data => {
                if (data) {
                    this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
                    window.location.href = '/';
                }
                else
                    this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            }, (error) => {
                this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 69751:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "RegisterModule": () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ 52577);






const routes = [
    { path: '', component: _register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, pathMatch: 'full' }
];
let RegisterModule = class RegisterModule {
};
RegisterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], RegisterModule);



/***/ }),

/***/ 2888:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/register/register.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n  \r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\r\n          <mat-card [style.max-width.px]=\"500\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n              <h1 class=\"uppercase\">S'inscrire</h1>  \r\n              <a mat-button routerLink=\"/login\" color=\"accent\" class=\"w-100\">Vous avez déjà un compte? S'identifier!</a>  \r\n            </div>\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit(registerForm.value)\"> \r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n                    <mat-label>Prénom</mat-label>\r\n                    <input matInput placeholder=\"Nom\" formControlName=\"lastname\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.lastname.errors?.required\">Nom Obligatoire</mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n                    <mat-label>Nom</mat-label>\r\n                    <input matInput placeholder=\"Prénom\" formControlName=\"firstname\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.firstname.errors?.required\">Prénom Obligatoire</mat-error>               \r\n                </mat-form-field>\r\n\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">email</mat-icon>\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.errors?.required\">Email est obligatoire</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.hasError('invalidEmail')\">L'Email est invalide</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Mot de passe</mat-label>\r\n                  <input matInput placeholder=\"Mot de passe\" formControlName=\"password\" type=\"password\" minlength=\"6\" required [type]=\"hide ? 'password' : 'text'\">\r\n                  <mat-error *ngIf=\"registerForm.controls.password.errors?.required\">Le mot de passe est obligatoire</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.password.hasError('minlength')\">Le mot de passe n'est pas assez long, minimum 6 caractères</mat-error>\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n                </mat-form-field> \r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Confirmer le mot de passe</mat-label>\r\n                  <input matInput placeholder=\"Confirmer le mot de passe\" formControlName=\"confirmPassword\" type=\"password\" required [type]=\"hide ? 'password' : 'text'\">\r\n                  <mat-error *ngIf=\"registerForm.controls.confirmPassword.errors?.required\">La confirmation du mot de passe est obligatoire</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.confirmPassword.hasError('mismatchedPasswords')\">Les mots de passe ne sont pas identiques</mat-error>\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n                </mat-form-field> \r\n                <!--<mat-slide-toggle formControlName=\"receiveNewsletter\" class=\"my-2\">Recevoir les Newsletter</mat-slide-toggle>-->\r\n                <div class=\"text-center mt-2\"> \r\n                    <button mat-raised-button color=\"accent\" class=\"uppercase\" type=\"submit\">\r\n                        Créer un compte\r\n                    </button>\r\n                </div> \r\n            </form>\r\n            <div class=\"divider mt-4\"></div> \r\n            <mat-card-actions fxLayoutAlign=\"center center\" class=\"text-center\">\r\n               <small class=\"my-3\">En cliquant sur le bouton \"Créer un compte\", vous acceptez nos :<a mat-button routerLink=\"/terms-conditions\" color=\"primary\" class=\"mx-2\">Termes and conditions</a> </small>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n      </div> \r\n  \r\n    </div>\r\n  </div>");

/***/ }),

/***/ 19963:
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map