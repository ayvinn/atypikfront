"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["common"],{

/***/ 11347:
/*!*******************************!*\
  !*** ./src/app/app.models.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Property": () => (/* binding */ Property),
/* harmony export */   "Area": () => (/* binding */ Area),
/* harmony export */   "AdditionalFeature": () => (/* binding */ AdditionalFeature),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "Gallery": () => (/* binding */ Gallery),
/* harmony export */   "Plan": () => (/* binding */ Plan),
/* harmony export */   "Video": () => (/* binding */ Video),
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
class Property {
    constructor(id, title, desc, propertyType, propertyStatus, city, zipCode, neighborhood, street, location, formattedAddress, features, featured, priceDollar, priceEuro, bedrooms, bathrooms, garages, area, yearBuilt, ratingsCount, ratingsValue, additionalFeatures, gallery, plans, videos, published, lastUpdate, views) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.propertyType = propertyType;
        this.propertyStatus = propertyStatus;
        this.city = city;
        this.zipCode = zipCode;
        this.neighborhood = neighborhood;
        this.street = street;
        this.location = location;
        this.formattedAddress = formattedAddress;
        this.features = features;
        this.featured = featured;
        this.priceDollar = priceDollar;
        this.priceEuro = priceEuro;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.garages = garages;
        this.area = area;
        this.yearBuilt = yearBuilt;
        this.ratingsCount = ratingsCount;
        this.ratingsValue = ratingsValue;
        this.additionalFeatures = additionalFeatures;
        this.gallery = gallery;
        this.plans = plans;
        this.videos = videos;
        this.published = published;
        this.lastUpdate = lastUpdate;
        this.views = views;
    }
}
class Area {
    constructor(id, value, unit) {
        this.id = id;
        this.value = value;
        this.unit = unit;
    }
}
class AdditionalFeature {
    constructor(id, name, value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }
}
class Location {
    constructor(propertyId, lat, lng) {
        this.propertyId = propertyId;
        this.lat = lat;
        this.lng = lng;
    }
}
class Price {
}
class Gallery {
    constructor(id, small, medium, big) {
        this.id = id;
        this.small = small;
        this.medium = medium;
        this.big = big;
    }
}
class Plan {
    constructor(id, name, desc, area, rooms, baths, image) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.area = area;
        this.rooms = rooms;
        this.baths = baths;
        this.image = image;
    }
}
class Video {
    constructor(id, name, link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
}
class Pagination {
    constructor(page, perPage, prePage, nextPage, total, totalPages) {
        this.page = page;
        this.perPage = perPage;
        this.prePage = prePage;
        this.nextPage = nextPage;
        this.total = total;
        this.totalPages = totalPages;
    }
}


/***/ }),

/***/ 57856:
/*!**************************************************************!*\
  !*** ./src/app/models/Accommodation/accommodation-create.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationCreate": () => (/* binding */ AccommodationCreate)
/* harmony export */ });
class AccommodationCreate {
}


/***/ }),

/***/ 23223:
/*!**********************************!*\
  !*** ./src/app/models/adress.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Adress": () => (/* binding */ Adress)
/* harmony export */ });
class Adress {
}


/***/ }),

/***/ 55995:
/*!********************************************!*\
  !*** ./src/app/services/nearby.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NearbyService": () => (/* binding */ NearbyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_constantURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constantURL */ 4274);




let NearbyService = class NearbyService {
    constructor(http) {
        this.http = http;
        this.url = _shared_constantURL__WEBPACK_IMPORTED_MODULE_0__.constantURL.apiEndpoint + '/api/Nearby';
    }
    postNearby(NearbyCreate) {
        return this.http.post(this.url, NearbyCreate);
    }
    getNearbyaccomodations(id) {
        return this.http.get(this.url + "/accomdations/" + id);
    }
    getNearby(id) {
        return this.http.get(this.url + "/" + id);
    }
    putNearby(id, putNearby) {
        return this.http.put(this.url + "/" + id, putNearby);
    }
    deleteNearby(id) {
        return this.http.delete(this.url + "/" + id);
    }
    getNearbyComment(id) {
        return this.http.get(this.url + "/" + id + "/comments/");
    }
    postNearbyComment(commentcreate) {
        return this.http.post(this.url, commentcreate);
    }
};
NearbyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NearbyService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NearbyService);



/***/ }),

/***/ 79719:
/*!**************************************************!*\
  !*** ./src/app/services/reservations.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationsService": () => (/* binding */ ReservationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_constantURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constantURL */ 4274);




let ReservationsService = class ReservationsService {
    constructor(http) {
        this.http = http;
        this.url = _shared_constantURL__WEBPACK_IMPORTED_MODULE_0__.constantURL.apiEndpoint + '/api/Reservations';
    }
    getReservationUserForthcoming() {
        return this.http.get(this.url + "/ReservationUserForthcoming");
    }
    getReservationUserHistory() {
        return this.http.get(this.url + "/ReservationUserHistory");
    }
    getReservationAccommodation(id) {
        return this.http.get(this.url + "/ReservationAccommodationForthcoming" + id);
    }
    getReservationAccommodationHistory(id) {
        return this.http.get(this.url + "/ReservationAccommodationHistory" + id);
    }
    putReservations(id, putReservations) {
        return this.http.put(this.url + "/" + id, putReservations);
    }
    postReservations(ReservationsCreate) {
        return this.http.post(this.url, ReservationsCreate);
    }
};
ReservationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ReservationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ReservationsService);



/***/ }),

/***/ 13205:
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadService": () => (/* binding */ UploadService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let UploadService = class UploadService {
    constructor() {
        this.myGlobalVar = [];
        this.myGlobalVar = [];
    }
    setMyGV(val, val2) {
        const b = { name: val, displayName: val2 };
        this.myGlobalVar.push(b);
    }
    getMyGV() {
        return this.myGlobalVar;
    }
    clear() {
        this.myGlobalVar = [];
    }
};
UploadService.ctorParameters = () => [];
UploadService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], UploadService);



/***/ }),

/***/ 77524:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_constantURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constantURL */ 4274);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);




/*
 "@capacitor/android": "^3.5.1",
    "@capacitor/cli": "^3.5.1",
    "@capacitor/core": "^3.5.1",
*/
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.url = src_app_shared_constantURL__WEBPACK_IMPORTED_MODULE_0__.constantURL.apiEndpoint + '/api/authenticate';
    }
    authLogin(model) {
        return this.http.post(`${this.url}/login`, model, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    register(model) {
        return this.http.post(`${this.url}/register`, model, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    logout() {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('jwt');
    }
    getAllUsers() {
        return this.http.get(this.url);
    }
    getAllUsers2() {
        this.http.get(this.url).toPromise().then(res => {
            this.users = res;
        });
    }
    postUser(formData) {
        return this.http.post(`${this.url}`, formData);
    }
    put(id, data) {
        return this.http.put(`${this.url}/${id}`, data);
    }
    deleteUsers(id) {
        return this.http.delete(this.url + "/" + id);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 58446:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/upload-manager/upload-manager/upload-manager.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadManagerComponent": () => (/* binding */ UploadManagerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_upload_manager_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./upload-manager.component.html */ 27102);
/* harmony import */ var _upload_manager_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-manager.component.scss */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let UploadManagerComponent = class UploadManagerComponent {
    constructor() {
        this.files = [];
    }
    ngOnInit() {
    }
    toggleHover(event) {
        this.isHovering = event;
    }
    onDrop(files) {
        for (let i = 0; i < files.length; i++) {
            console.log('uploadManager adding file: ', files.item(i));
            this.files.push(files.item(i));
        }
    }
};
UploadManagerComponent.ctorParameters = () => [];
UploadManagerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-upload-manager',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_upload_manager_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_upload_manager_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UploadManagerComponent);



/***/ }),

/***/ 25643:
/*!****************************************************************************!*\
  !*** ./src/app/shared/upload-manager/upload-task/upload-task.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadTaskComponent": () => (/* binding */ UploadTaskComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_upload_task_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./upload-task.component.html */ 56165);
/* harmony import */ var _upload_task_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-task.component.scss */ 61927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 45309);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53951);
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/upload.service */ 13205);








let UploadTaskComponent = class UploadTaskComponent {
    constructor(storage, db, globalservice) {
        this.storage = storage;
        this.db = db;
        this.globalservice = globalservice;
        this.table = [];
    }
    ngOnInit() {
        this.startUpload();
    }
    startUpload() {
        console.log('uploading file', this.file);
        let safeName = this.file.name.replace(/([^a-z0-9.]+)/gi, ''); // file name stripped of spaces and special chars
        let timestamp = Date.now(); // ex: '1598066351161'
        const uniqueSafeName = timestamp + '_' + safeName;
        const path = 'uploads/' + uniqueSafeName; // Firebase storage path
        const ref = this.storage.ref(path); // reference to storage bucket
        this.task = this.storage.upload(path, this.file);
        this.percentage = this.task.percentageChanges(); // progress monitoring
        this.snapshot = this.task.snapshotChanges().pipe(// emits a snapshot of the transfer progress every few hundred milliseconds
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(console.log), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.downloadURL = yield ref.getDownloadURL().toPromise();
            this.globalservice.setMyGV(this.downloadURL, this.file.name);
            console.error('here here :', this.table);
            this.db.collection('files').doc(uniqueSafeName).set({
                storagePath: path,
                downloadURL: this.downloadURL,
                originalName: this.file.name,
                timestamp: timestamp
            })
                .then(function () {
                console.log('document written!');
            })
                .catch(function (error) {
                console.error('Error writing document:', error);
            });
        })));
        console.log('!!!!!!!!!!!!!!!!!!', this.globalservice.getMyGV());
    }
    isActive(snapshot) {
        return (snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes);
    }
};
UploadTaskComponent.ctorParameters = () => [
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService }
];
UploadTaskComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
UploadTaskComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'upload-task',
        template: _C_Users_EC_source_repos_AtypikHouseApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_upload_task_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_upload_task_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UploadTaskComponent);



/***/ }),

/***/ 27102:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/upload-manager/upload-manager/upload-manager.component.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"dropzone\" dropzone (hovered)=\"toggleHover($event)\" (dropped)=\"onDrop($event)\" [class.hovering]=\"isHovering\">\r\n\r\n    <h3>Glisser et déposez les fichiers ici</h3>\r\n\r\n    <div>\r\n        <label>\r\n            <input type=\"file\" (change)=\"onDrop($event.target.files)\"  accept=\".jpeg,.jpg,.png,.svg\">\r\n        </label>\r\n    </div>\r\n    \r\n</div>\r\n\r\n<div *ngIf=\"files.length > 0\">\r\n    Fichiers parcourru\r\n    <hr>\r\n</div>\r\n\r\n<div *ngFor=\"let file of files\">\r\n    <upload-task [file]=\"file\"></upload-task>\r\n</div>\r\n");

/***/ }),

/***/ 56165:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/upload-manager/upload-task/upload-task.component.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"percentage | async as pct\">\n    <progress [value]=\"pct\" max=\"100\"></progress>\n    {{ pct | number }}%\n</div>\n\n<div *ngIf=\"(snapshot | async) as snap\">\n    <div>\n        {{ snap.bytesTransferred / 1024 | number:'1.0-1' }} of {{ snap.totalBytes / 1024 | number:'1.0-1' }} KB, {{ file.name }}\n    </div>\n    <button mat-raised-button (click)=\"task.pause()\" [disabled]=\"!isActive(snap)\" [hidden]=\"!isActive(snap)\">Pause</button>\n    <button mat-raised-button (click)=\"task.cancel()\" [disabled]=\"!isActive(snap)\" [hidden]=\"!isActive(snap)\">Cancel</button>\n    <button mat-raised-button (click)=\"task.resume()\" [disabled]=\"!(snap?.state === 'paused')\" [hidden]=\"!isActive(snap)\">Resume</button>\n</div>\n");

/***/ }),

/***/ 6078:
/*!************************************************************************************!*\
  !*** ./src/app/shared/upload-manager/upload-manager/upload-manager.component.scss ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: 200;\n  height: 300px;\n  border: 10px solid #f4511e;\n  border-radius: 5px;\n  background: #424242;\n  color: #fff;\n}\n\n.dropzone.hovering {\n  border: 10px dashed #2465f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0oiLCJmaWxlIjoidXBsb2FkLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcHpvbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZjQ1MTFlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZHJvcHpvbmUuaG92ZXJpbmcge1xyXG4gICAgYm9yZGVyOiAxMHB4IGRhc2hlZCAjMjQ2NWYxO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 61927:
/*!******************************************************************************!*\
  !*** ./src/app/shared/upload-manager/upload-task/upload-task.component.scss ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtdGFzay5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=common.js.map