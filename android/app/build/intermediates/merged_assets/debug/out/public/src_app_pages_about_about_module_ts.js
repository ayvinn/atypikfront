"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 80738:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.component.html */ 19191);
/* harmony import */ var _about_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.scss */ 41940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutComponent);



/***/ }),

/***/ 20654:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 80738);






const routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, pathMatch: 'full' }
];
let AboutModule = class AboutModule {
};
AboutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], AboutModule);



/***/ }),

/***/ 19191:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/about/about.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-image [backgroundImage]=\"'assets/images/others/about.jpg'\" \r\n                  [bgImageAnimate]=\"false\" \r\n                  [contentOffsetToTop]=\"true\"                \r\n                  [title]=\"'À propos'\"\r\n                  [desc]=\"'Nous vous aidons à trouver la clé de votre maison'\">\r\n</app-header-image>\r\n\r\n\r\n<div class=\"theme-container\">\r\n    <mat-card class=\"main-content-header\">\r\n        \r\n        <div class=\"section pt-2\">\r\n            <div class=\"px-3\">\r\n                <div class=\"theme-container\">\r\n                    <h1 class=\"section-title\">À  PROPOS</h1>\r\n\r\n                    <p class=\"px-3\">Nous sommes 3 associés Gabriel Lucas et Sarah, passionnés par les voyages, l’habitat alternatif et la vie en harmonie avec la nature.<br>Après avoir collaboré sur divers événements ensemble, et effectué de nombreux voyages, nous avons décidé de nous associer pour créer notre société : AtypikHouse.<br>Notre spécialité ? La location d’hébergements alternatifs comme les cabanes dans les arbres, les bulles, les yourtes, les tipis en France et en Europe.<br>Nous (Gabriel et Lucas) sommes originaires de Pierrefonds et meilleurs amis depuis l’enfance.<br>Nous avons passé notre enfance à jouer dans la forêt de Compiègne, où nous avions une cabane dans un arbre. C’était notre repaire secret et nous rêvions de vivre de notre passion à l’âge adulte.<br>Quant à moi, Sarah, j’ai beaucoup voyagé pendant mes études. A 20 ans, je me suis installée à Paris, où je suis devenue chargée de projet événementiel. Mais la vie citadine m’étouffait et je trouvais souvent refuge à Pierrefonds où j’ai fait la connaissance de Gabriel et Lucas.<br>Le courant est tout de suite passé entre nous : un vrai coup de foudre 🤩 Ensemble nous avons beaucoup voyagé, surtout en Europe, et testé toutes sortes d’expériences. Au cours de nos voyages nous avons fait de très belles rencontres et noués de nombreuses relations durables grâce auxquelles nous avons pu nous lancer et créer en 2022 notre société AtypikHouse. </p>\r\n\r\n                    <div fxLayout=\"row wrap\">\r\n\r\n                        <!--<div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\"> \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">business</mat-icon>\r\n                                <h2 class=\"capitalize fw-600 mx-2\">À propos</h2>\r\n                            </div>                            \r\n                            <p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper lobortis quam, id imperdiet mi feugiat quis. Cras a odio posuere, rhoncus quam vitae, commodo neque. Nunc mollis velit vulputate, volutpat diam vitae, egestas turpis. In posuere tempor lorem, sit amet pulvinar nunc accumsan a. Quisque sem tellus, congue at eleifend sit amet, consectetur sit amet est. Integer sodales quam quis elit commodo consequat. Aenean posuere augue a justo gravida elementum laoreet tincidunt enim. Nullam sagittis mauris id dui scelerisque, eget dignissim est hendrerit. Praesent fringilla commodo egestas. Suspendisse bibendum purus vitae mi mattis laoreet.</p>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\"> \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">list_alt</mat-icon>\r\n                                <h2 class=\"capitalize fw-600 mx-2\">Notre vision</h2>\r\n                            </div> \r\n                            <p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper lobortis quam, id imperdiet mi feugiat quis. Cras a odio posuere, rhoncus quam vitae, commodo neque. Nunc mollis velit vulputate, volutpat diam vitae, egestas turpis. In posuere tempor lorem, sit amet pulvinar nunc accumsan a. Quisque sem tellus, congue at eleifend sit amet, consectetur sit amet est. Integer sodales quam quis elit commodo consequat. Aenean posuere augue a justo gravida elementum laoreet tincidunt enim. Nullam sagittis mauris id dui scelerisque, eget dignissim est hendrerit. Praesent fringilla commodo egestas. Suspendisse bibendum purus vitae mi mattis laoreet.</p>\r\n                        </div>-->\r\n\r\n                    </div>\r\n            \r\n                    \r\n                </div>\r\n            </div>   \r\n        </div> \r\n\r\n    </mat-card> \r\n \r\n</div>\r\n\r\n<app-mission></app-mission>\r\n\r\n<app-our-services></app-our-services>\r\n\r\n<app-testimonials></app-testimonials>  \r\n\r\n<app-our-agents></app-our-agents>\r\n      \r\n<app-clients></app-clients>\r\n\r\n<app-get-in-touch></app-get-in-touch>");

/***/ }),

/***/ 41940:
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map