"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 54126:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.component.html */ 19777);
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ 14754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 77524);







let LoginComponent = class LoginComponent {
    constructor(fb, router, user) {
        this.fb = fb;
        this.router = router;
        this.user = user;
        this.etat = false;
        this.hide = true;
    }
    delay(ms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)])],
            rememberMe: false
        });
    }
    onLoginFormSubmit(values) {
        if (this.loginForm.valid) {
            this.verify();
            console.log(this.etat);
            this.delay(500).then(any => {
                if (this.etat == true) {
                    localStorage.setItem('isLoggedIn', "true");
                    window.location.href = '/';
                }
                else {
                    this.message = "Login ou Mot de passe incorrect !";
                }
            });
        }
    }
    verify() {
        const values = { username: this.loginForm.value.username, password: this.loginForm.value.password };
        console.log(values);
        this.user.authLogin(values).subscribe(data => {
            if (data) {
                const token = data.token;
                this.etat = true; //Categorie Admin
                localStorage.setItem('isadmin', data.isAdmin);
                this.invalidlogin = false;
                localStorage.setItem('jwt', token);
                localStorage.setItem('nom', this.loginForm.value.username);
            }
            else
                this.etat = false;
        }, (error) => {
            this.invalidlogin = true;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 82371:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 54126);






const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, pathMatch: 'full' }
];
let LoginModule = class LoginModule {
};
LoginModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], LoginModule);



/***/ }),

/***/ 19777:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"p-3\">\r\n  <div class=\"theme-container\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\r\n        <mat-card [style.max-width.px]=\"340\" class=\"md-card\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n            <h1 class=\"uppercase\">S'identifier</h1>  \r\n            <a mat-button routerLink=\"/register\" color=\"accent\" class=\"w-100\">Pas de compte ? Inscivez-vous maintenant</a>    \r\n          </div>\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginFormSubmit(loginForm.value)\">\r\n              <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n                  <mat-label>Nom d'utilisateur</mat-label>\r\n                  <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n                  <mat-error *ngIf=\"loginForm.controls.username.errors?.required\">Nom d'utilisateur obligatoire</mat-error>\r\n                  <mat-error *ngIf=\"loginForm.controls.username.hasError('minlength')\">Nom d'utilisateur doit contenir 6 caractères minimum</mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Mot de passe</mat-label>\r\n                  <input matInput placeholder=\"Password\" formControlName=\"password\" required [type]=\"hide ? 'password' : 'text'\">\r\n                  <mat-error *ngIf=\"loginForm.controls.password.errors?.required\">Mot de passe obligatoire</mat-error>\r\n                  <mat-error *ngIf=\"loginForm.controls.password.hasError('minlength')\">Le mot de passe doit contenir 6 caractères minimum</mat-error>\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n              </mat-form-field> \r\n              <mat-slide-toggle formControlName=\"rememberMe\" class=\"my-2\">Garder ma session ouverte</mat-slide-toggle>\r\n              <div class=\"text-center mt-2\"> \r\n                  <button mat-raised-button color=\"accent\" class=\"uppercase\" type=\"submit\">\r\n                      Se Connecter\r\n                  </button>\r\n              </div>     \r\n              <span style=\"margin: 1%;color: red;margin-top: 2%;\">{{message}}</span> \r\n              <!--<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-3\">\r\n                  <div class=\"divider w-100\"></div>\r\n                  <h3 class=\"text-muted ws-nowrap fw-500 p-2\">ou Connectez-vous en un clic</h3>                       \r\n                  <div class=\"divider w-100\"></div>\r\n              </div>  \r\n              <div class=\"text-center py-3\">\r\n                  <button mat-mini-fab color=\"primary\" matTooltip=\"Facebook\" type=\"button\">\r\n                    <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                        <path d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\r\n                    </svg>\r\n                  </button>                        \r\n                  <button mat-mini-fab color=\"primary\" matTooltip=\"Twitter\" type=\"button\" class=\"mx-3\">\r\n                    <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                        <path d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\r\n                    </svg>\r\n                  </button>\r\n                  <button mat-mini-fab color=\"primary\" matTooltip=\"Google\" type=\"button\">\r\n                    <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                        <path d=\"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z\" />\r\n                    </svg>\r\n                  </button> \r\n              </div>  -->   \r\n          </form>\r\n          <!--<mat-card-actions fxLayoutAlign=\"end center\">\r\n            <button mat-button>\r\n              <mat-icon class=\"text-muted\">vpn_key</mat-icon>\r\n              <span class=\"mx-1\">Mot de passe oublié ?</span>\r\n            </button> \r\n          </mat-card-actions>-->\r\n        </mat-card>\r\n    </div> \r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ 14754:
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiA3cHggMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7ICAgIFxyXG59XHJcblxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map