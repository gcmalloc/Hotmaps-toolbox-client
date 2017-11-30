webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lesly on 09.06.17.
 */



var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* routes */])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_vectorgrid__ = __webpack_require__("../../../../leaflet.vectorgrid/dist/Leaflet.VectorGrid.bundled.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_vectorgrid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet_vectorgrid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10____ = __webpack_require__("../../../../../src/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_searchbar_searchbar_component__ = __webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_map__ = __webpack_require__("../../../../../src/app/pages/map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_recaptcha_forms__ = __webpack_require__("../../../../ng-recaptcha/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_recaptcha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng_recaptcha_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__features_layers__ = __webpack_require__("../../../../../src/app/features/layers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__features_population_services_population_service__ = __webpack_require__("../../../../../src/app/features/population/services/population.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__features_side_panel_side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__features_selection_tools__ = __webpack_require__("../../../../../src/app/features/selection-tools/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__features_feedback___ = __webpack_require__("../../../../../src/app/features/feedback/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__features_selection_scale__ = __webpack_require__("../../../../../src/app/features/selection-scale/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__features_summary_result_summary_result_component__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__features_summary_result_summary_result_cell__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result-cell/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__features_side_panel_right_side_panel_right_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__features_side_panel_left_side_panel_left_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_nav_component_navigation_bar_component__ = __webpack_require__("../../../../../src/app/pages/nav/component/navigation-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_nav_service_navigation_bar_service__ = __webpack_require__("../../../../../src/app/pages/nav/service/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__features_data_interaction_data_interaction_cell_data_interaction_cell_component__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__features_summary_result_summary_result_service__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__features_data_interaction_data_interaction_service__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__features_feedback_mail_service__ = __webpack_require__("../../../../../src/app/features/feedback/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_app_features_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10____["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_16_ng_recaptcha_forms__["RecaptchaFormsModule"],
            __WEBPACK_IMPORTED_MODULE_15_ng_recaptcha__["RecaptchaModule"].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10____["b" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10____["b" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_searchbar_searchbar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_map__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_25__features_side_panel_right_side_panel_right_side_panel_component__["a" /* RightSideComponent */],
            __WEBPACK_IMPORTED_MODULE_26__features_side_panel_left_side_panel_left_side_panel_component__["a" /* LeftSideComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pages_nav_component_navigation_bar_component__["a" /* NavigationBarComponent */],
            __WEBPACK_IMPORTED_MODULE_23__features_summary_result_summary_result_component__["a" /* SummaryResultComponent */],
            __WEBPACK_IMPORTED_MODULE_24__features_summary_result_summary_result_cell__["a" /* SummaryResultCellComponent */],
            __WEBPACK_IMPORTED_MODULE_29__features_data_interaction_data_interaction_cell_data_interaction_cell_component__["a" /* DataInteractionCellComponent */],
            __WEBPACK_IMPORTED_MODULE_26__features_side_panel_left_side_panel_left_side_panel_component__["a" /* LeftSideComponent */],
            __WEBPACK_IMPORTED_MODULE_33_app_features_side_panel__["a" /* TopSideComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared__["UppercaseFirstLetterPipe"],
            __WEBPACK_IMPORTED_MODULE_14__shared__["NumberFormatPipe"],
            __WEBPACK_IMPORTED_MODULE_14__shared__["LayerNamePipe"],
            __WEBPACK_IMPORTED_MODULE_14__shared__["BusinessNamePipe"],
            __WEBPACK_IMPORTED_MODULE_21__features_feedback___["FeedbackComponent"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_31__features_data_interaction_data_interaction_service__["a" /* DataInteractionService */],
            __WEBPACK_IMPORTED_MODULE_18__features_population_services_population_service__["a" /* PopulationService */],
            __WEBPACK_IMPORTED_MODULE_14__shared__["GeocodingService"],
            __WEBPACK_IMPORTED_MODULE_13__pages_map__["b" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_14__shared__["Logger"],
            __WEBPACK_IMPORTED_MODULE_14__shared__["LoaderService"],
            __WEBPACK_IMPORTED_MODULE_14__shared__["ToasterService"],
            __WEBPACK_IMPORTED_MODULE_14__shared__["GlobalErrorHandler"],
            __WEBPACK_IMPORTED_MODULE_14__shared__["Helper"],
            __WEBPACK_IMPORTED_MODULE_19__features_side_panel_side_panel_service__["a" /* SidePanelService */],
            __WEBPACK_IMPORTED_MODULE_28__pages_nav_service_navigation_bar_service__["a" /* NavigationBarService */],
            __WEBPACK_IMPORTED_MODULE_17__features_layers__["LayersService"],
            __WEBPACK_IMPORTED_MODULE_20__features_selection_tools__["a" /* SelectionToolService */],
            __WEBPACK_IMPORTED_MODULE_20__features_selection_tools__["b" /* SelectionToolButtonStateService */],
            __WEBPACK_IMPORTED_MODULE_14__shared__["BusinessInterfaceRenderService"],
            __WEBPACK_IMPORTED_MODULE_30__features_summary_result_summary_result_service__["a" /* SummaryResultService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["DecimalPipe"],
            __WEBPACK_IMPORTED_MODULE_32__features_feedback_mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_22__features_selection_scale__["a" /* SelectionScaleService */]
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/component/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n/* Add a black background color to the top navigation */\n.navbar {\n\n  background-color: #333;\n\n  height: 65px;\n  transition: width 0.4s ease-in-out;\n  font-family:Arial;\n  font-size:12px;\n\n\n  padding:10px;\n  background-color: #333333;\n  color:#ffffff;\n  border-radius: 0px;\n\n  border-bottom-color:#000000;\n\n\n}\n\n/* Style the links inside the navigation bar */\n.navbar a {\n  transition: width 0.4s ease-in-out;\n  float: right;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 18px;\n  font-family: Helvetica Neue;\n}\n\n/* Change the color of links on hover */\n.navbar a:hover {\n  background-color: #ddd;\n  color: black;\n}\n.navbar li\n{\n  display:inline;\n}\n/* Add a color to the active/current link */\n.navbar a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n.img {\n  top: 0px;\n}\n\n\n/* handle spinner for the app */\n\n\n.tootlbar-icon {\n  padding: 0 14px;\n}\n\n.tootlbar-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.loader-app{ \n  position: absolute; \n  z-index: 4000; \n  height: 94vh; \n  width: 100%; \n  background-color: rgba(255, 255, 255, 0.2); \n  margin-top: 6vh; \n} \n \n.loader-app > div { \n  position: absolute; \n  left: 50%; \n  top: 50%; \n  margin: -60px 0px 0px -60px; \n  color: black; \n} \n\n/* Absolute Center Spinner */\n/* .loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n} */\n\n/* Transparent Overlay */\n/* .loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n} */\n\n/* :not(:required) hides these rules from IE9 and below */\n/* .loading:not(:required) {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n} */\n\n/* .loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  -moz-animation: spinner 1500ms infinite linear;\n  -ms-animation: spinner 1500ms infinite linear;\n  -o-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n} */\n\n/* Animation */\n\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n\n.title {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #2C3E50;\n  color: #ECF0F1;\n}\n\n.container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 0;\n  min-height: 0;\n  padding: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(loaderService) {
        this.loaderService = loaderService;
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        this.notifyLoaderService();
    };
    AppComponent.prototype.notifyLoaderService = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "<router-outlet><span *ngIf=\"showLoader\" class=\"loader-app\"><div uk-spinner=\"ratio:4\"></div></span></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/component/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/component/app.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-height: 0;\n    min-width: 0;\n    max-height: 48px;\n    padding: 3px;\n    font-family: 'Hind', sans-serif;\n\n}\n.isSelected{\n    color:white;\n    background-color: #2889DF;\n}\n.details {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-left: 2px;\n}\n.notifications {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n}\n\n.icon {\n}\n\n.message {\n\n}\n\n.date {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    font-size: 0.6em;\n    color: #444444;\n}\nbutton{\n    padding: 0 5px;\n    text-align: left;\n    /* font-size: 0.675rem; */\n}\n\ninput:checked{\n    border-color: green !important;\n}\n\ninput{\n    margin: 0px 5px;\n}\n.uk-button-secondary{\n    background-color: #333333;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"expanded\" [@visibleTrigger]=\"'visible'\" class=\"details\">\n    <!--  <form class=\"uk-form\">\n     <label > -->\n       <div>\n        \n        <button type=\"button\" name={{dataInteraction.workspaceName}} class=\"uk-button uk-button-default uk-width-1-1\"\n        (click)=\"showRemoveLayer($event,dataInteraction.workspaceName, dataInteraction.id)\" [class.uk-button-secondary]=\"dataInteraction.isSelected\">\n          <input class=\"uk-checkbox\" type=\"checkbox\" [checked]=\"dataInteraction.isSelected\">\n          {{dataInteraction.name}}\n        </button>\n       </div>\n      <!-- </label>\n    </form>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_interaction_class__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction.class.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataInteractionCellComponent = (function () {
    function DataInteractionCellComponent(mapService) {
        this.mapService = mapService;
    }
    DataInteractionCellComponent.prototype.showRemoveLayer = function (e, action, order) {
        this.dataInteraction.isSelected = !this.dataInteraction.isSelected;
        if (this.dataInteraction.isSelected) {
            console.log(' dataInteraction true');
        }
        else {
            console.log(' dataInteraction false');
        }
        this.mapService.showOrRemoveLayer(action, order);
        if (this.dataInteraction.zoomLevel > 0) {
            this.mapService.checkZoomLevelLayer(action, this.dataInteraction.zoomLevel);
        }
    };
    DataInteractionCellComponent.prototype.ngOnInit = function () {
    };
    return DataInteractionCellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_interaction_class__["a" /* DataInteractionClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_interaction_class__["a" /* DataInteractionClass */]) === "function" && _a || Object)
], DataInteractionCellComponent.prototype, "dataInteraction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DataInteractionCellComponent.prototype, "expanded", void 0);
DataInteractionCellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-interaction-cell',
        template: __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.css")],
        animations: [
            // Define an animation that adjusts the opactiy when a new item is created
            //  in the DOM. We use the 'visible' string as the hard-coded value in the
            //  trigger.
            //
            // When an item is added we wait for 300ms, and then increase the opacity to 1
            //  over a 200ms time interval. When the item is removed we don't delay anything
            //  and use a 200ms interval.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibleTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 300ms')]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__["a" /* MapService */]) === "function" && _b || Object])
], DataInteractionCellComponent);

var _a, _b;
//# sourceMappingURL=data-interaction-cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionClass; });
var DataInteractionClass = (function () {
    function DataInteractionClass() {
    }
    return DataInteractionClass;
}());

//# sourceMappingURL=data-interaction.class.js.map

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionArray; });


var DataInteractionArray = [
    // {id: 11, name: 'Heat map', category: 'Comsumption'},
    { id: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["s" /* idDefaultLayer */], name: 'Heat Map', category: 'Comsumption', isSelected: true, workspaceName: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["r" /* defaultLayer */], zoomLevel: 0 },
    { id: 12, name: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["w" /* business_name_wwtp */], category: 'Ressources', isSelected: false, workspaceName: 'wwtp', zoomLevel: __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["C" /* zoomLevelDetectChange */] },
    { id: 14, name: 'Population', category: 'Comsumption', isSelected: false, workspaceName: __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["t" /* populationLayerName */], zoomLevel: 0 },
];
//# sourceMappingURL=data-interaction.data.js.map

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_interaction_data__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_business_business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataInteractionService = (function (_super) {
    __extends(DataInteractionService, _super);
    function DataInteractionService(http, logger, loaderService, toasterService, helper, business) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        _this.business = business;
        return _this;
    }
    /* getModulesServices(): Promise<ModulesService[]> {
      return this.http.get(this.servicesUrl)
        .toPromise()
        .then(response => response.json().data as ModulesService[])
        .catch(this.handleError);
    }*/
    DataInteractionService.prototype.getDataInteractionServices = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_3__data_interaction_data__["a" /* DataInteractionArray */]);
    };
    DataInteractionService.prototype.getDataArrayServices = function () {
        return __WEBPACK_IMPORTED_MODULE_3__data_interaction_data__["a" /* DataInteractionArray */];
    };
    DataInteractionService.prototype.getReadableName = function (layerName) {
        this.logger.log('DataInteractionService/getReadableName layerName=' + layerName);
        var layer = this.getDataArrayServices().filter(function (x) { return x.workspaceName === layerName; })[0];
        if (this.helper.isNullOrUndefined(layer)) {
            var layer_new = this.business.getReadableName(layerName);
            if (this.helper.isNullOrUndefined(layer_new)) {
                return layerName;
            }
            else {
                return layer_new;
            }
        }
        return layer.name;
    };
    DataInteractionService.prototype.getModulesServicesWithNewService = function (newService) {
        var servicesArray = __WEBPACK_IMPORTED_MODULE_3__data_interaction_data__["a" /* DataInteractionArray */];
        servicesArray.push(newService);
        return Promise.resolve(servicesArray);
    };
    DataInteractionService.prototype.getModulesServicesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getDataInteractionServices()); }, 2000);
        });
    };
    return DataInteractionService;
}(__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* APIService */]));
DataInteractionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_helper__["a" /* Helper */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__shared_business_business_service__["a" /* BusinessInterfaceRenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_business_business_service__["a" /* BusinessInterfaceRenderService */]) === "function" && _f || Object])
], DataInteractionService);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=data-interaction.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/component/feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\n\n}\n\nform > fieldset {\n    padding: 10px;\n}\n\ntextarea {\n    resize: none;\n}\n\ninput.ng-invalid, textarea.ng-invalid{\n    border: 1px solid rgb(226, 7, 7);\n}\n\ninput.ng-valid, textarea.ng-valid{\n    border: 1px solid rgba(78, 78, 78, 0.19);\n}\n.loader-container{\n    z-index: 20000;\n    position: absolute;\n    width: 100%;\n    height: 480px;\n    top: 50px;\n    background-color: rgba(78, 78, 78, 0.19);\n}\n.loader-container .loader {\n    position: absolute;\n    top: 45%;\n    left: 45%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/feedback/component/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@feedbackTrigger]=\"expandedState\">\n    <form *ngIf='!submited' #form='ngForm' (ngSubmit)='submit(form)' novalidate>\n        <fieldset class='uk-fieldset'>\n            <div class='uk-margin'><input name='name' class='uk-input' type='text' placeholder='Firstname / Lastname' ngModel #names='ngModel' required ></div>        \n            <div class='uk-margin'><input name='mail' class='uk-input' type='text' placeholder='Mail' required email ngModel #mail='ngModel'></div>\n            <div class='uk-margin uk-grid-small uk-child-width-auto uk-grid'>\n                <label><input class='uk-radio' type='radio' name='categorie' value='Issue' ngModel #categorie='ngModel' required> Issue</label>\n                <label><input class='uk-radio' type='radio' name='categorie' value='Improvement' ngModel #categorie='ngModel'> Improvement</label>\n            </div>\n            <div class='uk-margin'><textarea name='description' class='uk-textarea' rows='5' placeholder='Description' ngModel #description='ngModel' required></textarea></div>\n            <div class='uk-margin'>\n                <re-captcha siteKey=\"6Ldb7zcUAAAAADpGmUYGHKDq4HnQ-WqzfqissGje\" name=\"captcha\" [(ngModel)]=\"captcha\"  required></re-captcha>   \n            </div>                \n            <div class='uk-margin'>\n                <button class='uk-button uk-button-default uk-width-1-1' type='submit' [disabled]='!form.valid'>\n                    Submit\n                </button>\n                <!-- <button class='uk-button uk-button-default uk-width-1-1' (click)=\"loaderOn()\">loaderOn()</button> -->\n                        \n            </div>\n        </fieldset>\n        \n    </form>\n    <ng-container *ngIf='feedbackLoader'>\n        <div class=\"loader-container\">\n            <div class=\"loader\" uk-spinner></div>\n        </div>\n    </ng-container>\n    <ng-container *ngIf='submited'>\n        <div class='uk-padding-small'>\n            Your request has been succesfull sent to administrators. It will be processed in the shortest time. <br /> \n            Thanks Hotmappers !\n            <div class='uk-margin'><button class='uk-button uk-button-default uk-width-1-1' (click)='makeNewRequest()'>New request</button></div>        \n        </div>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/feedback/component/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackComponent = (function () {
    function FeedbackComponent(toasterService) {
        this.toasterService = toasterService;
        this.submited = false;
        this.feedbackLoader = false;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent.prototype.ngOnDestroy = function () {
    };
    FeedbackComponent.prototype.resetForm = function (f) {
        f.reset();
    };
    FeedbackComponent.prototype.makeNewRequest = function () {
        this.submited = false;
    };
    FeedbackComponent.prototype.submit = function (f) {
        this.feedbackLoader = true;
        if (f.valid) {
            this.sendRequest(f);
        }
        else {
            this.feedbackLoader = false;
            this.submited = false;
        }
    };
    FeedbackComponent.prototype.showError = function () {
        this.toasterService.showToaster('Unable to send the message! Please, try later or send a mail to administrator');
    };
    FeedbackComponent.prototype.sendRequest = function (f) {
        var _this = this;
        jQuery.post(__WEBPACK_IMPORTED_MODULE_2__shared_data_service__["z" /* urlMailServer */], f.value, function (data) {
            if (data === '1') {
                f.reset();
                _this.submited = true;
                _this.feedbackLoader = false;
            }
            else {
                _this.feedbackLoader = false;
                _this.showError();
            }
        }).fail(function () {
            _this.feedbackLoader = false;
            _this.showError();
        });
    };
    return FeedbackComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FeedbackComponent.prototype, "expandedState", void 0);
FeedbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'htm-feedback',
        template: __webpack_require__("../../../../../src/app/features/feedback/component/feedback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/feedback/component/feedback.component.css")],
        animations: [
            // Formulare trigger
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('feedbackTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('200ms 150ms linear')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('100ms linear'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _a || Object])
], FeedbackComponent);

var _a;
//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_service__ = __webpack_require__("../../../../../src/app/features/feedback/mail.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return __WEBPACK_IMPORTED_MODULE_0__mail_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platforms_utils__ = __webpack_require__("../../../../../src/app/features/feedback/platforms.utils.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__properties_utils__ = __webpack_require__("../../../../../src/app/features/feedback/properties.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__properties_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__properties_utils__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__properties_utils__, "FeedbackComponent")) __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__properties_utils__["FeedbackComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_feedback_component__ = __webpack_require__("../../../../../src/app/features/feedback/component/feedback.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__component_feedback_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platforms_utils__ = __webpack_require__("../../../../../src/app/features/feedback/platforms.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = (function () {
    function MailService(logger) {
        this.logger = logger;
        this.properties = {};
    }
    MailService.prototype.sendEmail = function () {
        this.initService();
        window.open(this.url, 'newwindow', 'width=1070, height=600');
        // event.preventDefault();
    };
    MailService.prototype.initService = function () {
        if (!this.url) {
            this.platform = __WEBPACK_IMPORTED_MODULE_1__platforms_utils__["a" /* platforms */]['mail'];
            this.fetchProperties();
            this.constructUrl();
        }
    };
    MailService.prototype.fetchProperties = function () {
        this.properties.url = this.properties.url || this.getMetaContent('og:url') || window.location.href.toString();
        this.properties.title = this.properties.title || this.getMetaContent('og:title') || document.title;
        this.properties.description = this.properties.description || this.getMetaContent('og:description');
        this.properties.image = this.properties.image || this.getMetaContent('og:image');
        this.properties.via = this.properties.via || this.getMetaContent('n2s:via');
        this.properties.hashtags = this.properties.hashtags || this.getMetaContent('n2s:hashtags');
        for (var p in this.properties) {
            if (this.properties.hasOwnProperty(p)) {
                this.properties[p] = encodeURIComponent(this.properties[p]);
            }
        }
    };
    MailService.prototype.constructUrl = function () {
        this.url = this.platform.url + this.properties.url;
        if (this.platform.properties) {
            for (var key in this.platform.properties) {
                // if the property has been found.
                var val = this.properties[this.platform.properties[key]];
                if (val) {
                    this.url += "&" + key + "=" + val;
                }
            }
        }
    };
    MailService.prototype.getMetaContent = function (property) {
        var elem = document.querySelector("meta[property='" + property + "']");
        if (elem)
            return elem.getAttribute('content');
        return '';
    };
    return MailService;
}());
MailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["Logger"]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/platforms.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return platforms; });
var platforms = {
    twitter: {
        name: 'twitter',
        url: 'https://twitter.com/intent/tweet?url=',
        logoOfficial: 'twitter',
        logo: 'twitter',
        text: 'Tweet',
        properties: {
            text: 'title',
            via: 'via',
            hashtags: 'hashtags'
        }
    },
    googlePlus: {
        name: 'google-plus',
        url: 'https://plus.google.com/share?url=',
        logoOfficial: 'google-plus',
        logo: 'google-plus',
        text: 'Share',
    },
    facebook: {
        name: 'facebook',
        url: 'http://www.facebook.com/sharer/sharer.php?u=',
        logoOfficial: 'facebook',
        logo: 'facebook',
        text: 'Share',
    },
    reddit: {
        name: 'reddit',
        url: 'http://www.reddit.com/submit?url=',
        logoOfficial: 'reddit-alien',
        logo: 'reddit',
        text: 'Submit',
        properties: {
            title: 'title'
        }
    },
    pinterest: {
        name: 'pinterest',
        url: 'https://pinterest.com/pin/create/button/?url=',
        logoOfficial: 'pinterest-p',
        logo: 'pinterest-lean',
        text: 'Pin',
        properties: {
            description: 'title',
            media: 'image'
        }
    },
    linkedin: {
        name: 'linkedin',
        url: 'http://www.linkedin.com/shareArticle?mini=true&url=',
        logoOfficial: 'linkedin',
        logo: 'linkedin2',
        text: 'Share',
        properties: {
            title: 'title'
        }
    },
    stumbleUpon: {
        name: 'stumbleUpon',
        url: 'http://www.stumbleupon.com/submit?url=',
        logoOfficial: 'stumbleupon',
        logo: 'stumbleupon',
        text: 'stumbleupon',
        properties: {
            title: 'title'
        }
    },
    tumblr: {
        name: 'tumblr',
        url: 'http://www.tumblr.com/share/link?url=',
        logoOfficial: 'tumblr',
        logo: 'tumblr2',
        text: 'Share',
        properties: {
            title: 'title',
            caption: 'description'
        }
    },
    mail: {
        name: 'mail',
        url: 'mailto:hotmaps2020@gmail.com?subject=',
        logoOfficial: 'envelope',
        logo: 'mail',
        text: 'Mail',
    }
};
//# sourceMappingURL=platforms.utils.js.map

/***/ }),

/***/ "../../../../../src/app/features/feedback/properties.utils.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=properties.utils.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/class/geojson.class.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=geojson.class.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/class/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geojson_class__ = __webpack_require__("../../../../../src/app/features/layers/class/geojson.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geojson_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__geojson_class__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__geojson_class__, "LayersService")) __webpack_require__.d(__webpack_exports__, "LayersService", function() { return __WEBPACK_IMPORTED_MODULE_0__geojson_class__["LayersService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layer_class__ = __webpack_require__("../../../../../src/app/features/layers/class/layer.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layer_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__layer_class__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__layer_class__, "LayersService")) __webpack_require__.d(__webpack_exports__, "LayersService", function() { return __WEBPACK_IMPORTED_MODULE_1__layer_class__["LayersService"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/class/layer.class.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=layer.class.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class__ = __webpack_require__("../../../../../src/app/features/layers/class/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__class__, "LayersService")) __webpack_require__.d(__webpack_exports__, "LayersService", function() { return __WEBPACK_IMPORTED_MODULE_0__class__["LayersService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/features/layers/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LayersService", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/mock/wwtp.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wwtp_data; });
var wwtp_data = {
    "type": "FeatureCollection",
    "totalFeatures": 40,
    "features": [
        {
            "type": "Feature",
            "id": "wwtp.26580",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3565033.3517,
                    2943442.0108
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 26580,
                "capacity": 8200,
                "power": 528.4444444,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3565033.3517,
                    2943442.0108,
                    3565033.3517,
                    2943442.0108
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27477",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3581357.4351,
                    2942445.5501
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27477,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3581357.4351,
                    2942445.5501,
                    3581357.4351,
                    2942445.5501
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27540",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3648556.8435,
                    2927578.9586
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27540,
                "capacity": 4400,
                "power": 283.5555556,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3648556.8435,
                    2927578.9586,
                    3648556.8435,
                    2927578.9586
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27599",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3582413.0166,
                    2953191.8309
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27599,
                "capacity": 4000,
                "power": 257.7777778,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3582413.0166,
                    2953191.8309,
                    3582413.0166,
                    2953191.8309
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27634",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3646613.8906,
                    2941289.4053
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27634,
                "capacity": 5000,
                "power": 322.2222222,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3646613.8906,
                    2941289.4053,
                    3646613.8906,
                    2941289.4053
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27641",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3577213.2335,
                    2944092.956
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27641,
                "capacity": 4600,
                "power": 296.4444444,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3577213.2335,
                    2944092.956,
                    3577213.2335,
                    2944092.956
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27684",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3637222.3484,
                    2930279.5954
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27684,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3637222.3484,
                    2930279.5954,
                    3637222.3484,
                    2930279.5954
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27753",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3591618.6529,
                    2952432.7355
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27753,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3591618.6529,
                    2952432.7355,
                    3591618.6529,
                    2952432.7355
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.27779",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3571286.4886,
                    2949639.2413
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 27779,
                "capacity": 332000,
                "power": 21395.55556,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3571286.4886,
                    2949639.2413,
                    3571286.4886,
                    2949639.2413
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28028",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3567073.8349,
                    2939586.5685
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28028,
                "capacity": 6500,
                "power": 418.8888889,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3567073.8349,
                    2939586.5685,
                    3567073.8349,
                    2939586.5685
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28248",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3602552.4357,
                    2925885.3523
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28248,
                "capacity": 4000,
                "power": 257.7777778,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3602552.4357,
                    2925885.3523,
                    3602552.4357,
                    2925885.3523
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28370",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3587853.4732,
                    2935699.7798
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28370,
                "capacity": 10000,
                "power": 644.4444444,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3587853.4732,
                    2935699.7798,
                    3587853.4732,
                    2935699.7798
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28386",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3610438.4905,
                    2941921.9251
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28386,
                "capacity": 70000,
                "power": 4511.111111,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3610438.4905,
                    2941921.9251,
                    3610438.4905,
                    2941921.9251
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28677",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3573993.7843,
                    2925026.9267
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28677,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3573993.7843,
                    2925026.9267,
                    3573993.7843,
                    2925026.9267
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28902",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3581521.2134,
                    2948223.5299
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28902,
                "capacity": 6000,
                "power": 386.6666667,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3581521.2134,
                    2948223.5299,
                    3581521.2134,
                    2948223.5299
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28922",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3576103.4993,
                    2954885.5511
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28922,
                "capacity": 9500,
                "power": 612.2222222,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3576103.4993,
                    2954885.5511,
                    3576103.4993,
                    2954885.5511
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.28941",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3620848.9816,
                    2924751.7549
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 28941,
                "capacity": 18000,
                "power": 1160,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3620848.9816,
                    2924751.7549,
                    3620848.9816,
                    2924751.7549
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.29056",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3589247.0947,
                    2929146.9037
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 29056,
                "capacity": 18000,
                "power": 1160,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3589247.0947,
                    2929146.9037,
                    3589247.0947,
                    2929146.9037
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.29260",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3645070.7262,
                    2932014.9209
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 29260,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3645070.7262,
                    2932014.9209,
                    3645070.7262,
                    2932014.9209
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.29489",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3562358.211,
                    2947625.8346
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 29489,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2015-01-01Z",
                "bbox": [
                    3562358.211,
                    2947625.8346,
                    3562358.211,
                    2947625.8346
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.50647",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3565033.3517,
                    2943442.0108
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 50647,
                "capacity": 8200,
                "power": 528.4444444,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3565033.3517,
                    2943442.0108,
                    3565033.3517,
                    2943442.0108
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51544",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3581357.4351,
                    2942445.5501
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51544,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3581357.4351,
                    2942445.5501,
                    3581357.4351,
                    2942445.5501
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51607",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3648556.8435,
                    2927578.9586
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51607,
                "capacity": 4400,
                "power": 283.5555556,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3648556.8435,
                    2927578.9586,
                    3648556.8435,
                    2927578.9586
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51666",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3582413.0166,
                    2953191.8309
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51666,
                "capacity": 4000,
                "power": 257.7777778,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3582413.0166,
                    2953191.8309,
                    3582413.0166,
                    2953191.8309
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51701",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3646613.8906,
                    2941289.4053
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51701,
                "capacity": 5000,
                "power": 322.2222222,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3646613.8906,
                    2941289.4053,
                    3646613.8906,
                    2941289.4053
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51708",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3577213.2335,
                    2944092.956
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51708,
                "capacity": 4600,
                "power": 296.4444444,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3577213.2335,
                    2944092.956,
                    3577213.2335,
                    2944092.956
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51751",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3637222.3484,
                    2930279.5954
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51751,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3637222.3484,
                    2930279.5954,
                    3637222.3484,
                    2930279.5954
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51820",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3591618.6529,
                    2952432.7355
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51820,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3591618.6529,
                    2952432.7355,
                    3591618.6529,
                    2952432.7355
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.51846",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3571286.4886,
                    2949639.2413
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 51846,
                "capacity": 332000,
                "power": 21395.55556,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3571286.4886,
                    2949639.2413,
                    3571286.4886,
                    2949639.2413
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52095",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3567073.8349,
                    2939586.5685
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52095,
                "capacity": 6500,
                "power": 418.8888889,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3567073.8349,
                    2939586.5685,
                    3567073.8349,
                    2939586.5685
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52315",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3602552.4357,
                    2925885.3523
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52315,
                "capacity": 4000,
                "power": 257.7777778,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3602552.4357,
                    2925885.3523,
                    3602552.4357,
                    2925885.3523
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52437",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3587853.4732,
                    2935699.7798
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52437,
                "capacity": 10000,
                "power": 644.4444444,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3587853.4732,
                    2935699.7798,
                    3587853.4732,
                    2935699.7798
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52453",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3610438.4905,
                    2941921.9251
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52453,
                "capacity": 70000,
                "power": 4511.111111,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3610438.4905,
                    2941921.9251,
                    3610438.4905,
                    2941921.9251
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52744",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3573993.7843,
                    2925026.9267
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52744,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3573993.7843,
                    2925026.9267,
                    3573993.7843,
                    2925026.9267
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52969",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3581521.2134,
                    2948223.5299
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52969,
                "capacity": 6000,
                "power": 386.6666667,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3581521.2134,
                    2948223.5299,
                    3581521.2134,
                    2948223.5299
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.52989",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3576103.4993,
                    2954885.5511
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 52989,
                "capacity": 9500,
                "power": 612.2222222,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3576103.4993,
                    2954885.5511,
                    3576103.4993,
                    2954885.5511
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.53008",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3620848.9816,
                    2924751.7549
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 53008,
                "capacity": 18000,
                "power": 1160,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3620848.9816,
                    2924751.7549,
                    3620848.9816,
                    2924751.7549
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.53123",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3589247.0947,
                    2929146.9037
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 53123,
                "capacity": 18000,
                "power": 1160,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3589247.0947,
                    2929146.9037,
                    3589247.0947,
                    2929146.9037
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.53327",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3645070.7262,
                    2932014.9209
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 53327,
                "capacity": 3000,
                "power": 193.3333333,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3645070.7262,
                    2932014.9209,
                    3645070.7262,
                    2932014.9209
                ]
            }
        },
        {
            "type": "Feature",
            "id": "wwtp.53556",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    3562358.211,
                    2947625.8346
                ]
            },
            "geometry_name": "geom",
            "properties": {
                "gid": 53556,
                "capacity": 20000,
                "power": 1288.888889,
                "unit": "kW",
                "date": "2012-01-01Z",
                "bbox": [
                    3562358.211,
                    2947625.8346,
                    3562358.211,
                    2947625.8346
                ]
            }
        }
    ],
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:EPSG::3035"
        }
    },
    "bbox": [
        3562358.211,
        2924751.7549,
        3648556.8435,
        2954885.5511
    ]
};
//# sourceMappingURL=wwtp.data.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layers_service__ = __webpack_require__("../../../../../src/app/features/layers/services/layers.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layers_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/services/layers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock_wwtp_data__ = __webpack_require__("../../../../../src/app/features/layers/mock/wwtp.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_proj4leaflet__ = __webpack_require__("../../../../proj4leaflet/src/proj4leaflet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_proj4leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_proj4leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_class_dictionary_class__ = __webpack_require__("../../../../../src/app/shared/class/dictionary.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_proj4__ = __webpack_require__("../../../../proj4/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__side_panel_side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__population_services_population_service__ = __webpack_require__("../../../../../src/app/features/population/services/population.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_nav_service__ = __webpack_require__("../../../../../src/app/pages/nav/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_business_business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayersService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var proj4 = __WEBPACK_IMPORTED_MODULE_14_proj4__["default"];




var LayersService = (function (_super) {
    __extends(LayersService, _super);
    function LayersService(http, logger, loaderService, toasterService, populationService, helper, panelService, navBarService, businessInterfaceRenderService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.populationService = populationService;
        _this.helper = helper;
        _this.panelService = panelService;
        _this.navBarService = navBarService;
        _this.businessInterfaceRenderService = businessInterfaceRenderService;
        _this.layers = new L.FeatureGroup();
        _this.current_nuts_level = '0';
        _this.layersArray = new __WEBPACK_IMPORTED_MODULE_6__shared_class_dictionary_class__["a" /* Dictionary */]([
            {
                key: __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["r" /* defaultLayer */], value: L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_7__shared_data_service__["c" /* geoserverUrl */], {
                    layers: 'hotmaps:' + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["r" /* defaultLayer */] + '_ha' + '_' + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["q" /* constant_year */],
                    format: 'image/png', transparent: true, version: '1.3.0',
                    zIndex: __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["s" /* idDefaultLayer */]
                })
            },
        ]);
        _this.popup = L.popup();
        return _this;
    }
    LayersService.prototype.getLayers = function () {
        return this.layers;
    };
    LayersService.prototype.getLayerArray = function () {
        return this.layersArray;
    };
    LayersService.prototype.setCurrentNutsLevel = function (nutsLevel) {
        this.current_nuts_level = this.businessInterfaceRenderService.convertNutsToApiName(nutsLevel);
    };
    LayersService.prototype.setupDefaultLayer = function () {
        var layer = this.layersArray.value(__WEBPACK_IMPORTED_MODULE_7__shared_data_service__["r" /* defaultLayer */]);
        this.logger.log(layer.toString());
        this.layers.addLayer(layer);
    };
    LayersService.prototype.handleClickHectare = function (data) {
        this.logger.log(JSON.stringify(data));
        this.panelService.setPoiData(data);
        this.panelService.openRightPanel();
        this.navBarService.enableButton('load_result');
        this.loaderService.display(false);
    };
    LayersService.prototype.getIsReadyToShowFeatureInfo = function () {
        var readyToShow = false;
        if (this.layersArray.keys().length > 0) {
            readyToShow = true;
        }
        return readyToShow;
    };
    LayersService.prototype.showOrRemoveLayer = function (action, map, order) {
        this.logger.log('didUptateLayer');
        if (!this.layersArray.containsKey(action)) {
            this.logger.log('this.layersArray doesnt contain ' + action);
            this.addLayerWithAction(action, map, order);
        }
        else {
            this.logger.log('this.layersArray contain ' + action);
            this.removelayer(action, map);
        }
        map.fireEvent('didUpdateLayers', this.layersArray);
    };
    LayersService.prototype.addLayerWithAction = function (action, map, order) {
        var layer;
        if (action === __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["p" /* wwtpLayerName */]) {
            layer = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_7__shared_data_service__["c" /* geoserverUrl */], {
                layers: 'hotmaps:' + action,
                format: 'image/png',
                transparent: true,
                version: '1.3.0',
                // cql_filter : 'stat_levl_ = ' + nuts_level + '',
                srs: 'EPSG:4326',
                zIndex: order
            });
        }
        else {
            // layer in Ha with date
            layer = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_7__shared_data_service__["c" /* geoserverUrl */], {
                layers: 'hotmaps:' + action + '_ha' + '_' + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["q" /* constant_year */],
                format: 'image/png',
                transparent: true,
                version: '1.3.0',
                srs: 'EPSG:4326',
                zIndex: order
            });
        }
        ;
        this.layers.addLayer(layer);
        this.layersArray.add(action, layer);
    };
    LayersService.prototype.removelayer = function (action, map) {
        // we get the layer we want to remove
        var layer = this.layersArray.value(action);
        // we remove this layer from map
        this.layers.removeLayer(layer);
        // we destroy the layer
        this.layersArray.remove(action);
    };
    LayersService.prototype.setupZoomLayerGroup = function (map) {
        this.zoom_layerGroup = new L.LayerGroup();
        this.zoom_layerGroup.addTo(map);
    };
    LayersService.prototype.erroxFix = function (error) {
        this.handleError.bind(this);
        this.loaderService.display(false);
        this.toasterService.showToaster(error);
        console.error('An error occurred', error); // for demo purposes only
    };
    LayersService.prototype.choosePopup = function (map, res, latlng, action) {
        if (this.layersArray.containsKey(__WEBPACK_IMPORTED_MODULE_7__shared_data_service__["r" /* defaultLayer */])) {
            this.addPopupHeatmap(map, res, latlng);
        }
        else if (action === __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["p" /* wwtpLayerName */]) {
            this.addPopupWWTP(map, res, latlng);
        }
        else if (action === __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["t" /* populationLayerName */] + '_' + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["q" /* constant_year */]) {
            this.addPopupHectare(map, res, latlng);
        }
    };
    LayersService.prototype.handlePopulation = function (map, data, latlng) {
        var populationSelected = data;
        this.populationService.showPopulationSelectedLayer(populationSelected, map, latlng, this.popup);
        this.loaderService.display(false);
    };
    LayersService.prototype.selectAreaWithNuts = function (map, data, latlng) {
        var populationSelected = data;
        this.populationService.showPopulationSelectedLayer(populationSelected, map, latlng, this.popup);
        this.loaderService.display(false);
    };
    LayersService.prototype.addPopupHectare = function (map, data, latlng) {
        this.loaderService.display(false);
        var population_density = data.features[0].properties.population_density;
        this.logger.log('LayersService/addPopupHectare/population_density  ' + population_density);
        this.popup.setLatLng(latlng)
            .setContent('<h5>Population</h5> <ul class="uk-list uk-list-divider">' +
            ' <li>Population density: ' + this.helper.round(population_density) + ' ' + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["u" /* unit_population */] + '</li> </ul>')
            .openOn(map);
    };
    LayersService.prototype.addPopupHeatmap = function (map, data, latlng) {
        this.loaderService.display(false);
        var heat_density = data.features[0].properties.heat_density;
        this.popup.setLatLng(latlng)
            .setContent('<h5>Heat map</h5> <ul class="uk-list uk-list-divider">' +
            ' <li>Heat demand: ' + this.helper.round(heat_density) + ' ' + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["v" /* unit_heat_density */] + '</li> </ul>')
            .openOn(map);
    };
    LayersService.prototype.addPopupWWTP = function (map, data, latlng) {
        this.loaderService.display(false);
        var capacity = data.features[0].properties.capacity;
        var power = data.features[0].properties.power;
        var date = data.features[0].properties.date.split('Z')[0];
        var unit = data.features[0].properties.unit;
        this.popup.setLatLng(latlng).setContent('<h5>' + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["w" /* business_name_wwtp */] + '</h5> <ul class="uk-list uk-list-divider">' +
            '<li>Capacity: ' + capacity + ' ' + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["x" /* unit_capacity */] + '</li><li>Power: ' + this.helper.round(power) + ' ' + unit + '</li>' +
            '<li>Reference date: ' + date + '</li></ul>').openOn(map);
    };
    LayersService.prototype.showLayerDependingZoom = function (action, map, zoomLevel) {
        var mapZoomLevel = map.getZoom();
        this.logger.log('mapZoomLevel ' + mapZoomLevel + ', zoomLevel ' + zoomLevel);
        if (this.layersArray.containsKey(action) === true) {
            if (mapZoomLevel >= zoomLevel) {
                var layer = this.layersArray.value(action);
                this.layers.removeLayer(layer);
                this.showWwtpWithMarker(map);
            }
            else if (mapZoomLevel < zoomLevel) {
                if (!this.layersArray.containsKey(action)) {
                    this.addLayerWithAction(action, map, zoomLevel);
                }
                else {
                    var layer = this.layersArray.value(action);
                    this.layers.addLayer(layer);
                }
                this.removeWwtpWithMarker(map);
            }
        }
        else {
            this.removeWwtpWithMarker(map);
        }
    };
    LayersService.prototype.transformLatLngToEpsg = function (latlng, epsgString) {
        return proj4(epsgString).forward([latlng.lng, latlng.lat]);
    };
    LayersService.prototype.getTranformedBoundingBox = function (map, epsgString) {
        var coordinate = [];
        var bound = map.getBounds();
        var northEastTransformed = this.transformLatLngToEpsg(bound.getNorthEast(), epsgString);
        var southWestTransformed = this.transformLatLngToEpsg(bound.getSouthWest(), epsgString);
        coordinate.push(southWestTransformed[1], southWestTransformed[0]);
        coordinate.push(northEastTransformed[1], northEastTransformed[0]);
        return coordinate;
    };
    LayersService.prototype.showWwtpWithMarker = function (map) {
        var _this = this;
        this.logger.log('showWwtpWithMarker');
        var epsg = '3035';
        var coordinate = this.getTranformedBoundingBox(map, __WEBPACK_IMPORTED_MODULE_11__shared_data_service__["y" /* proj3035 */]);
        var url = __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["c" /* geoserverUrl */] + '?service=wfs' +
            '&version=2.0.0' +
            '&request=GetFeature' +
            '&typeNames=hotmaps:' + __WEBPACK_IMPORTED_MODULE_7__shared_data_service__["p" /* wwtpLayerName */] +
            '&srsName=EPSG:' + epsg +
            '&bbox=' + coordinate.toString() +
            '&outputFormat=application/json';
        this.logger.log(coordinate.toString());
        this.logger.log(url);
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_0__mock_wwtp_data__["a" /* wwtp_data */]).then(function (res) {
            _this.addPOIToMapRegular(res, map);
        });
        /* this.http.get(url).map((data: Response) => data.json() as any)
            .subscribe(res => this.addPOIToMap(res, map), err => this.handleError.bind(this)); */
        /* Promise.resolve(wwtp_data).then((data) => { */
    };
    LayersService.prototype.addPOIToMap = function (data, map) {
        var _this = this;
        data.features.forEach(function (element) {
            var point = element.geometry.coordinates;
            var pointProj = proj4(__WEBPACK_IMPORTED_MODULE_11__shared_data_service__["y" /* proj3035 */]).inverse([point[0], point[1]]);
            var marker = L.marker(L.latLng(pointProj[1], pointProj[0]), {
                icon: L.icon({
                    iconUrl: '../../assets/leaflet-images/marker-icon.png',
                    iconSize: [28, 40],
                    iconAnchor: [14, 20]
                })
            });
            _this.zoom_layerGroup.addLayer(marker);
        });
        this.zoom_layerGroup.addTo(map);
    };
    LayersService.prototype.addPOIToMapRegular = function (data, map) {
        proj4.defs('urn:ogc:def:crs:EPSG::3035', __WEBPACK_IMPORTED_MODULE_11__shared_data_service__["y" /* proj3035 */]);
        // this.zoom_layerGroup =  L.Proj.geoJson(data)
        function onEachFeature(feature, layer) {
            if (feature.properties) {
                layer.setIcon(L.icon({
                    iconUrl: '../../assets/leaflet-images/marker-icon.png',
                    iconSize: [28, 40],
                    iconAnchor: [14, 20]
                }));
            }
        }
        this.zoom_layerGroup = L.Proj.geoJson(data, {
            onEachFeature: onEachFeature
        }).addTo(map);
        this.zoom_layerGroup.addTo(map);
    };
    LayersService.prototype.removeWwtpWithMarker = function (map) {
        this.logger.log('removeWwtpWithMarker');
        this.zoom_layerGroup.removeFrom(map);
    };
    return LayersService;
}(__WEBPACK_IMPORTED_MODULE_12__shared_services_api_service__["a" /* APIService */]));
LayersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_16__population_services_population_service__["a" /* PopulationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__population_services_population_service__["a" /* PopulationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_13__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__shared_helper__["a" /* Helper */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_15__side_panel_side_panel_service__["a" /* SidePanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__side_panel_side_panel_service__["a" /* SidePanelService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_17__pages_nav_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__pages_nav_service__["a" /* NavigationBarService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_18__shared_business_business_service__["a" /* BusinessInterfaceRenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__shared_business_business_service__["a" /* BusinessInterfaceRenderService */]) === "function" && _j || Object])
], LayersService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=layers.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/population/services/population.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PopulationService = (function (_super) {
    __extends(PopulationService, _super);
    function PopulationService(http, logger, loaderService, toasterService, helper) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.helper = helper;
        return _this;
    }
    PopulationService.prototype.getPopulationWithPayloads = function (payload) {
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["e" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["F" /* postPopulationDensityInArea */]);
    };
    PopulationService.prototype.showPopulationSelectedLayer = function (populationSelected, map, latlng, popup) {
        this.logger.log('PopulationService/showPopulationSelectedLayer');
        var geometrie = populationSelected.features[0].geometry;
        // remove the layer if there is one
        this.removePopulationSelectedlayer(map);
        // add the selected area to the map
        this.populationSelectedLayer = L.vectorGrid.slicer(geometrie);
        this.populationSelectedLayer.addTo(map);
        this.loaderService.display(false);
        // add the popup area to the map
        // this.addPopupHectare(populationSelected, map, latlng, popup);
    };
    PopulationService.prototype.addPopupNuts = function (data, map, latlng, popup) {
        var stat_levl_ = data.features[0].properties.stat_levl_;
        var nuts_id = data.features[0].properties.nuts_id;
        var name = data.features[0].properties.name;
        var value = data.features[0].properties.value;
        var date = data.features[0].properties.date.split('Z')[0];
        popup.setLatLng(latlng).setContent('<h5>' + __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["G" /* business_name_population */] + '</h5> <ul class="uk-list uk-list-divider">' +
            '<li>nuts id: ' + nuts_id + '</li><li>nuts level: ' + stat_levl_ + '</li><li>name: ' + name + '</li>' +
            '<li>Population: ' + this.helper.round(value) + ' ' + __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["u" /* unit_population */] + '</li><li>Reference date: ' + date + '</li></ul>').openOn(map);
        this.logger.log('PopulationService/addPopup/popup/added');
    };
    PopulationService.prototype.removePopulationSelectedlayer = function (map) {
        if (this.populationSelectedLayer) {
            this.logger.log('MapService/removelayer');
            map.removeLayer(this.populationSelectedLayer);
            delete this.populationSelectedLayer;
        }
    };
    return PopulationService;
}(__WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__["a" /* APIService */]));
PopulationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_helper__["a" /* Helper */]) === "function" && _e || Object])
], PopulationService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=population.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-scale/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_scale_data__ = __webpack_require__("../../../../../src/app/features/selection-scale/selection-scale.data.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_scale_service__ = __webpack_require__("../../../../../src/app/features/selection-scale/selection-scale.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_scale_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-scale/selection-scale.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionScaleClassArray; });
/* unused harmony export hectareLayer */
/* unused harmony export nuts0Layer */
/* unused harmony export nuts1Layer */
/* unused harmony export nuts2Layer */
/* unused harmony export nuts3Layer */
/* unused harmony export lau2Layer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectionScale; });

var SelectionScaleClassArray = [
    { id: 1, name: 'nonuts' },
    { id: 2, name: 'nuts1', },
    { id: 3, name: 'nuts2' },
    { id: 4, name: 'nuts3' },
    { id: 5, name: 'lau1' },
    { id: 6, name: 'lau2' },
    { id: 6, name: 'hectare' },
];
// NUTS geometry is taken from the population layer but we don't use other data
var action = 'population';
var hectareLayer = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["c" /* geoserverUrl */], {
    layers: 'hotmaps:' + action + 0,
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ = ' + 1 + '',
    srs: 'EPSG:4326',
    zIndex: 10
});
var nuts0Layer = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["c" /* geoserverUrl */], {
    layers: 'hotmaps:' + action,
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ = ' + 0 + '',
    srs: 'EPSG:4326',
    zIndex: 10
});
var nuts1Layer = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["c" /* geoserverUrl */], {
    layers: 'hotmaps:' + action,
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ = ' + 1 + '',
    srs: 'EPSG:4326',
    zIndex: 10
});
var nuts2Layer = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["c" /* geoserverUrl */], {
    layers: 'hotmaps:' + action,
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ = ' + 2 + '',
    srs: 'EPSG:4326',
    zIndex: 10
});
var nuts3Layer = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["c" /* geoserverUrl */], {
    layers: 'hotmaps:' + action,
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
    cql_filter: 'stat_levl_ = ' + 3 + '',
    srs: 'EPSG:4326',
    zIndex: 10
});
var lau2Layer = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_0__shared_data_service__["c" /* geoserverUrl */], {
    layers: 'hotmaps:' + __WEBPACK_IMPORTED_MODULE_0__shared_data_service__["d" /* lau2name */],
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
    zIndex: 10
});
var SelectionScale = {
    'NUTS 0': nuts0Layer,
    'NUTS 1': nuts1Layer,
    'NUTS 2': nuts2Layer,
    'NUTS 3': nuts3Layer,
    'Lau 2': lau2Layer,
    'Hectare': hectareLayer,
};
//# sourceMappingURL=selection-scale.data.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-scale/selection-scale.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selection_scale_data__ = __webpack_require__("../../../../../src/app/features/selection-scale/selection-scale.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionScaleService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SelectionScaleService = (function (_super) {
    __extends(SelectionScaleService, _super);
    function SelectionScaleService(http, logger, loaderService, toasterService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.scaleValue = __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* initial_scale_value */];
        return _this;
    }
    SelectionScaleService.prototype.getDataInteractionServices = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["a" /* SelectionScaleClassArray */]);
    };
    SelectionScaleService.prototype.getScaleValue = function () {
        return this.scaleValue;
    };
    SelectionScaleService.prototype.setScaleValue = function (scaleValue) {
        this.scaleValue = scaleValue;
    };
    SelectionScaleService.prototype.getDataArrayServices = function () {
        return __WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["a" /* SelectionScaleClassArray */];
    };
    SelectionScaleService.prototype.getModulesServicesWithNewService = function (newService) {
        var servicesArray = __WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["a" /* SelectionScaleClassArray */];
        servicesArray.push(newService);
        return Promise.resolve(servicesArray);
    };
    SelectionScaleService.prototype.getModulesServicesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getDataInteractionServices()); }, 2000);
        });
    };
    SelectionScaleService.prototype.getSelectionScaleMenu = function (map) {
        var overlayMaps = {};
        var control = L.control.layers(__WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["b" /* SelectionScale */], overlayMaps, { collapsed: false });
        control.addTo(map);
        map.addLayer(this.getInitialLayer()); // # Add this if you want to show, comment this if you want to hide it.-
    };
    SelectionScaleService.prototype.getInitialScale = function () {
        return __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* initial_scale_value */];
    };
    SelectionScaleService.prototype.getInitialLayer = function () {
        return __WEBPACK_IMPORTED_MODULE_3__selection_scale_data__["b" /* SelectionScale */][__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* initial_scale_value */]];
    };
    return SelectionScaleService;
}(__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* APIService */]));
SelectionScaleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object])
], SelectionScaleService);

var _a, _b, _c, _d;
//# sourceMappingURL=selection-scale.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_tool_button_state_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/selection-tool-button-state.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__selection_tool_button_state_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_tool_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/selection-tool.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_tool_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/selection-tool-button-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionToolButtonStateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectionToolButtonStateService = (function () {
    function SelectionToolButtonStateService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    SelectionToolButtonStateService.prototype.enable = function (value) {
        this.status.next(value);
    };
    return SelectionToolButtonStateService;
}());
SelectionToolButtonStateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SelectionToolButtonStateService);

//# sourceMappingURL=selection-tool-button-state.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/selection-tools/selection-tool.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_layers_services_layers_service__ = __webpack_require__("../../../../../src/app/features/layers/services/layers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_side_panel_side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selection_tool_button_state_service__ = __webpack_require__("../../../../../src/app/features/selection-tools/selection-tool-button-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_nav_service_navigation_bar_service__ = __webpack_require__("../../../../../src/app/pages/nav/service/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__summary_result_summary_result_service__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_business_business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionToolService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 27.05.17.
 */











var SelectionToolService = (function () {
    function SelectionToolService(logger, loaderService, helper, sidePanelService, navigationBarService, selectionToolButtonStateService, summaryResultService, businessInterfaceRenderService, layerService) {
        this.logger = logger;
        this.loaderService = loaderService;
        this.helper = helper;
        this.sidePanelService = sidePanelService;
        this.navigationBarService = navigationBarService;
        this.selectionToolButtonStateService = selectionToolButtonStateService;
        this.summaryResultService = summaryResultService;
        this.businessInterfaceRenderService = businessInterfaceRenderService;
        this.layerService = layerService;
        this.editableLayers = new L.FeatureGroup();
        this.initialStateSelectionTool = false;
        this.isDrawControl = false;
        this.scaleValue = __WEBPACK_IMPORTED_MODULE_9__shared_data_service__["a" /* initial_scale_value */];
    }
    SelectionToolService.prototype.setScaleValue = function (scaleValue) {
        this.scaleValue = scaleValue;
    };
    SelectionToolService.prototype.isLayerInMap = function () {
        var hasLayer = false;
        if (this.editableLayers.getLayers().length > 0) {
            hasLayer = true;
        }
        return hasLayer;
    };
    SelectionToolService.prototype.notifyLoaderService = function (map) {
        var _this = this;
        this.selectionToolButtonStateService.status.subscribe(function (val) {
            if (_this.initialStateSelectionTool) {
                _this.toggleControl(map);
            }
            else {
                _this.initialStateSelectionTool = true;
            }
        });
    };
    SelectionToolService.prototype.setMap = function (map) {
        this.notifyLoaderService(map);
        this.retriveMapEvent(map);
    };
    SelectionToolService.prototype.setHTMLContent = function (el, str) {
        el.innerHTML = str;
    };
    SelectionToolService.prototype.createButtons = function (type) {
        this.logger.log('SelectionToolService/createButtons');
        this.containerPopup = L.DomUtil.create('div');
        this.popupTitle = L.DomUtil.create('h5', '', this.containerPopup);
        this.cancelBtn = L.DomUtil.create('button', 'uk-button uk-button-danger uk-button-small uk-width-2-2', this.containerPopup);
        this.setHTMLContent(this.popupTitle, 'Area Selected');
        this.setHTMLContent(this.cancelBtn, 'Cancel');
        if (type === 'click') {
            this.validationBtnClick = L.DomUtil.create('button', 'uk-button uk-button-primary uk-button-small uk-width-2-2', this.containerPopup);
            this.setHTMLContent(this.validationBtnClick, 'Validation');
        }
        else {
            this.validationBtnSelection =
                L.DomUtil.create('button', 'uk-button uk-button-primary uk-button-small uk-width-2-2', this.containerPopup);
            this.setHTMLContent(this.validationBtnSelection, 'Validation');
        }
    };
    SelectionToolService.prototype.loadPopup = function (map, layer) {
        var _this = this;
        this.logger.log('SelectionToolService/loadPopup');
        // Create elements with leaflet utility - validation & Cancel buttons + title
        this.createButtons('selection');
        this.currentLayer.bindPopup(this.containerPopup, { closeOnClick: false }).openPopup();
        // Set event bind on popup's buttons
        L.DomEvent.on(this.cancelBtn, 'click', function () {
            _this.clearAll(map);
        });
        // Set event bind on popup's buttons
        L.DomEvent.on(this.validationBtnSelection, 'click', function () {
            var layerNameArray = [];
            for (var i = 0; i < _this.layerService.getLayerArray().keys().length; i++) {
                if (_this.layerService.getLayerArray().keys()[i] !== __WEBPACK_IMPORTED_MODULE_9__shared_data_service__["p" /* wwtpLayerName */]) {
                    _this.logger.log('array ' + _this.layerService.getLayerArray().keys()[i]
                        + _this.businessInterfaceRenderService.getNutsTosuffix(_this.scaleValue));
                    _this.logger.log('loadPopup/this.scaleValue' + _this.scaleValue);
                    layerNameArray.push(_this.layerService.getLayerArray().keys()[i] + _this.businessInterfaceRenderService.getNutsTosuffix(_this.scaleValue));
                }
                else {
                    layerNameArray.push(_this.layerService.getLayerArray().keys()[i]);
                }
            }
            if (_this.currentLayer instanceof L.Circle) {
                _this.getStatisticsFromLayer(_this.getLocationsFromCicle(_this.currentLayer), layerNameArray, map);
            }
            else if (_this.currentLayer instanceof L.Polygon) {
                _this.getStatisticsFromLayer(_this.getLocationsFromPolygon(_this.currentLayer), layerNameArray, map);
            }
            else {
                _this.logger.log('unknown form');
                var layerNutsArray = [];
                for (var i = 0; i < _this.layerService.getLayerArray().keys().length; i++) {
                    if (_this.layerService.getLayerArray().keys()[i] !== __WEBPACK_IMPORTED_MODULE_9__shared_data_service__["p" /* wwtpLayerName */]) {
                        _this.logger.log('array ' + _this.layerService.getLayerArray().keys()[i]
                            + _this.businessInterfaceRenderService.getNutsTosuffix(_this.scaleValue));
                        layerNutsArray.push(_this.layerService.getLayerArray().keys()[i] + '_ha');
                    }
                    else {
                        layerNutsArray.push(_this.layerService.getLayerArray().keys()[i]);
                    }
                }
                _this.getStatisticsFromLayer(_this.getLocationsFromGeoJsonLayer(_this.currentLayer), layerNutsArray, map);
            }
        });
    };
    SelectionToolService.prototype.enableNavigationService = function (map) {
        this.navigationBarService.enableButton('selection');
        this.addDrawerControl(map);
    };
    SelectionToolService.prototype.layerCreatedClick = function (layer, map) {
        this.logger.log('SelectionToolService/layerCreatedClick');
        this.currentLayer = layer;
        this.editableLayers.clearLayers();
        this.editableLayers.addLayer(this.currentLayer);
        this.editableLayers.addTo(map);
        this.loadPopup(map, this.currentLayer);
        this.enableNavigationService(map);
    };
    SelectionToolService.prototype.retriveMapEvent = function (map) {
        var self = this;
        map.on(L.Draw.Event.CREATED, function (e) {
            console.log('created', e.type);
            var event = e;
            var type = event.layerType, layer = event.layer;
            self.isActivate = false;
            // Clear the map before to show the new selection
            self.editableLayers.clearLayers();
            self.removeVtlayer(map);
            self.removeAreaNuts(map);
            self.manageEditOrCreateLayer(layer, map);
        });
        map.on(L.Draw.Event.EDITED, function (e) {
            console.log('EDITED', e.type);
            var event = e;
            event.layers.eachLayer(function (layer) {
                var lay = layer;
                //  self.manageEditOrCreateLayer(layer, map);
            });
        });
        map.on(L.Draw.Event.DRAWSTART, function (e) {
            self.isActivate = true;
        });
        map.on(L.Draw.Event.DRAWSTOP, function (e) {
        });
        map.on(L.Draw.Event.EDITSTART, function (e) {
            self.isActivate = true;
        });
        map.on(L.Draw.Event.EDITSTOP, function (e) {
            self.isActivate = false;
        });
        map.on(L.Draw.Event.DELETED, function (e) {
            self.clearAll(map);
        });
    };
    SelectionToolService.prototype.manageEditOrCreateLayer = function (layer, map) {
        this.currentLayer = layer;
        this.isActivate = true;
        // we finich create the layer we go in edition mode
        if (this.helper.isNullOrUndefined(this.currentLayer.editing) === false) {
            this.currentLayer.editing.enable();
        }
        this.editableLayers.addLayer(this.currentLayer);
        this.loadPopup(map, this.currentLayer);
        // then we launch the validate popup
    };
    SelectionToolService.prototype.getLocationsFromPolygon = function (layer) {
        var rectangle = layer;
        var latlng = rectangle.getLatLngs()[0];
        var locations = this.helper.convertLatLongToLocation(latlng);
        this.logger.log('locations [] ' + locations);
        return locations;
    };
    SelectionToolService.prototype.getLocationsFromGeoJsonLayer = function (layer) {
        var geojsonLayer = layer;
        var geoJson = geojsonLayer.toGeoJSON();
        this.logger.log('geoJson latlng ' + geoJson.features[0].geometry.coordinates);
        var latlng = geoJson.features[0].geometry.coordinates;
        var locations = this.helper.convertListLatLongToLocation(latlng);
        this.logger.log('locations [] ' + locations);
        return locations;
    };
    SelectionToolService.prototype.getLocationsFromCicle = function (layer) {
        var circle = layer;
        var origin = circle.getLatLng(); // center of drawn circle
        var radius = circle.getRadius(); // radius of drawn circle
        var polys = this.helper.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
        var locations = [];
        for (var i = 0; i < polys.length; i++) {
            var loc = {
                lat: polys[i].lat,
                lng: polys[i].lng
            };
            locations.push(loc);
        }
        return locations;
    };
    SelectionToolService.prototype.retriveAndAddLayer = function (population, layer, map) {
        this.loaderService.display(false);
        this.navigationBarService.enableButton('load_result');
        if (this.helper.isNullOrUndefined(layer.editing) === false) {
            layer.editing.disable();
        }
        this.sidePanelService.openRightPanel();
    };
    SelectionToolService.prototype.showlayer = function (geometrie, map) {
        this.removeVtlayer(map);
        this.selectionTooLayer = L.vectorGrid.slicer(geometrie);
        this.selectionTooLayer.addTo(map);
        this.loaderService.display(false);
    };
    SelectionToolService.prototype.clearAll = function (map) {
        if (this.currentLayer) {
            this.navigationBarService.disableButton('load_result');
            this.logger.log('layerService/clearAll');
            if (this.helper.isNullOrUndefined(this.currentLayer.editing) === false) {
                this.currentLayer.editing.disable();
            }
            this.editableLayers.clearLayers();
            this.removeVtlayer(map);
            this.removeAreaNuts(map);
            this.sidePanelService.closeRightPanel();
        }
    };
    SelectionToolService.prototype.removeVtlayer = function (map) {
        if (this.selectionTooLayer) {
            this.navigationBarService.disableButton('load_result');
            map.removeLayer(this.selectionTooLayer);
            delete this.selectionTooLayer;
        }
    };
    SelectionToolService.prototype.removeAreaNuts = function (map) {
        if (this.areaNutsSelectedLayer) {
            map.removeLayer(this.areaNutsSelectedLayer);
            delete this.areaNutsSelectedLayer;
        }
    };
    // Summary result show result
    SelectionToolService.prototype.getStatisticsFromLayer = function (locations, layers, map) {
        var _this = this;
        this.logger.log('SelectionToolService/getStatisticsFromLayer');
        // this.sidePanelService.closeRightPanel();
        this.loaderService.display(true);
        var payload = { layers: layers, year: __WEBPACK_IMPORTED_MODULE_9__shared_data_service__["q" /* constant_year */], points: locations };
        this.summaryResultService.getSummaryResultWithPayload(payload).then(function (result) {
            _this.displaySummaryResult(result, map);
        });
    };
    SelectionToolService.prototype.openPopup = function () {
        this.logger.log('SelectionToolService/openPopup');
        this.currentLayer.openPopup();
    };
    SelectionToolService.prototype.displaySummaryResult = function (result, map) {
        this.sidePanelService.openRightPanel();
        this.sidePanelService.setSummaryResultData(result);
        this.logger.log('displaySummaryResult ' + JSON.stringify(result));
        this.navigationBarService.enableButton('load_result');
        if (this.helper.isNullOrUndefined(this.currentLayer.editing) === false) {
            this.currentLayer.editing.disable();
        }
        this.currentLayer.closePopup();
        this.loaderService.display(false);
        this.drawResult(result, map);
    };
    SelectionToolService.prototype.drawResult = function (result, map) {
        this.logger.log('MapService/selectAreaWithNuts()');
        var geoJson = result.feature_collection;
        // remove the layer if there is one
        this.logger.log('MapService/geometrie()' + geoJson);
        this.removeAreaNuts(map);
        // add the selected area to the map
        // this.areaNutsSelectedLayer = L.vectorGrid.slicer(geometrie);
        // this.areaNutsSelectedLayer.setZIndex(11);
        this.areaNutsSelectedLayer = L.geoJson(geoJson);
        this.areaNutsSelectedLayer.addTo(map);
    };
    SelectionToolService.prototype.addDrawerControl = function (map) {
        map.addLayer(this.editableLayers);
        this.options = {
            position: 'topleft',
            draw: {
                polyline: false,
                polygon: {
                    allowIntersection: false,
                    drawError: {
                        color: '#e1e100',
                        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                    },
                    shapeOptions: {
                        color: '#bada55'
                    }
                },
                circle: true,
                rectangle: {
                    tooltip: {
                        start: 'dede',
                    },
                    shapeOptions: {
                        clickable: false
                    }
                },
                marker: false,
            },
            edit: {
                featureGroup: this.editableLayers,
                edit: false,
                remove: false
            },
        };
        if (!this.isDrawControl) {
            this.drawControl = new L.Control.Draw(this.options);
            map.addControl(this.drawControl);
            this.isDrawControl = !this.isDrawControl;
        }
    };
    SelectionToolService.prototype.toggleControl = function (map) {
        if (this.isDrawControl) {
            map.removeControl(this.drawControl);
            this.isDrawControl = false;
        }
        else {
            this.addDrawerControl(map);
            this.isDrawControl = true;
        }
    };
    return SelectionToolService;
}());
SelectionToolService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_logger_service__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_helper__["a" /* Helper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__features_side_panel_side_panel_service__["a" /* SidePanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__features_side_panel_side_panel_service__["a" /* SidePanelService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__pages_nav_service_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__pages_nav_service_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__selection_tool_button_state_service__["a" /* SelectionToolButtonStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__selection_tool_button_state_service__["a" /* SelectionToolButtonStateService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__summary_result_summary_result_service__["a" /* SummaryResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__summary_result_summary_result_service__["a" /* SummaryResultService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__shared_business_business_service__["a" /* BusinessInterfaceRenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_business_business_service__["a" /* BusinessInterfaceRenderService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__features_layers_services_layers_service__["a" /* LayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__features_layers_services_layers_service__["a" /* LayersService */]) === "function" && _j || Object])
], SelectionToolService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=selection-tool.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__left_side_panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__right_side_panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__side_panel_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__top_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__top_side_panel__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__left_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__left_side_panel_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    border-right: 1px solid #000000;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 0;\n    min-height: 0;\n    overflow: hidden;\n}\n\ni {\n    font-size: 1.5em;\n}\n\n.container-panel-left {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 0;\n    min-width: 0;\n}\n\n.title-panel-left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    color: #d3d3d3;\n    padding: 0 8px 0 8px;\n    height: 50px;\n    background-color: #333333;\n}\n\n.title-panel-left span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.5em;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 50px;\n}\n\n.title-panel-left--collapsed {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.notifications {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n    padding: 10px;\n}\n\na {\n    text-decoration: none;\n}\n.title-panel-left>a{\n    line-height: 50px;\n}\na:hover {\n    cursor: pointer;\n}\n\n.uk-accordion-content{\n    margin-top:10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-panel-left\" [@panelWidthTrigger]=\"expandedState\">\n    <div class=\"title-panel-left\" [@titleColorTrigger]=\"expandedState\">\n        <span *ngIf=\"expanded\" [@titleTextTrigger]=\"'in'\">{{title}}</span>\n        <a [@iconTrigger]=\"expandedState\" class=\"link\" (click)=\"toggleExpandedState('left')\">\n          <i class=\"flaticon-cross\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n\n  <div class=\"notifications\">\n    <span *ngIf=\"expanded\" [@titleTextTrigger]=\"'in'\">\n      <ul uk-accordion *ngFor=\"let i of category\">\n        <li class=\"uk-open\">\n          <h3 class=\"uk-accordion-title\">\n            {{i}}\n          </h3>\n          <div class=\"uk-accordion-content\">\n            <ng-container *ngFor=\"let n of layers\" >\n              <span *ngIf=\"i === n.category\">\n                <data-interaction-cell [dataInteraction]=\"n\" [expanded]=\"expanded\"></data-interaction-cell>\n              </span>\n            </ng-container>\n          </div>\n\n        </li>\n      </ul>\n    </span>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_interaction_data_interaction_service__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSideComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftSideComponent = (function (_super) {
    __extends(LeftSideComponent, _super);
    function LeftSideComponent(dataInteractionService) {
        var _this = _super.call(this) || this;
        _this.dataInteractionService = dataInteractionService;
        _this.expanded = false;
        _this.expandedState = 'collapsed';
        return _this;
    }
    LeftSideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataInteractionService.getDataInteractionServices().then(function (layers) { return _this.getLayerAndCategory(layers); });
    };
    LeftSideComponent.prototype.getLayerAndCategory = function (layers) {
        this.layers = layers;
        this.category = layers.map(function (item) { return item.category; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; });
    };
    LeftSideComponent.prototype.ngOnDestroy = function () {
    };
    return LeftSideComponent;
}(__WEBPACK_IMPORTED_MODULE_1__side_panel_component__["a" /* SideComponent */]));
LeftSideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-left-side-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.css")],
        animations: [
            // Define the animation used on the containing dev where the width of the
            //  panel is determined. Here we define the expanded width to be 300px, and
            //  the collapsed width to be 38px.
            //
            // When expanding the panel we transition over a 200ms interval.
            //
            // When collapsing the panel we again use 200ms for the transition, but
            //  we add a delay of 200ms to allow some other animations to complete before
            //  shrinking the panel down.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('panelWidthTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '350px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '0px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            // Define the animation used in the title bar where the colors swap from
            //  a red foreground with white background, to the opposite. In this case
            //  we use the same timings as the width animation above so these two
            //  transitions happen at the same time
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleColorTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#333333', color: '#FFFFFF' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            // The title text trigger is a little different because it's an animation
            //  for an element being added to the DOM. Here we take advantage of the 'void'
            //  transition using a hard-coded state called 'in' (which is also hard coded in
            //  the template).
            //
            // What we do in this animation is say when the element is added to the DOM
            //  it should have an opacity of 0 (i.e., hidden), wait 300ms, and then animate
            //  it's opacity change to 1 over a 100 ms time span. This effectively delays the
            //  appearance of the text until after the panel has slid out to the full size.
            //
            // When the element is removed we take a different approach and animate the
            //  opacity change back to 0 over a short 50ms interval. This ensures it's gone before
            //  the panel starts to slide back in, creating a nice effect.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleTextTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 300ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))
                ])
            ]),
            // Define the animation used in the arrow icon where it rotates to point left
            //  or right based on the state of the panel. In this case we use the same
            //  timings as the width animation above so these two transitions happen at
            //  the same time.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('iconTrigger', [
                // state('collapsed', style({ transform: 'rotate(180deg)' })),
                // state('collapsed', style({ transform: 'rotate(180deg)' })),
                //   state('expanded', style({ transform: 'rotate(0deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out'))
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_interaction_data_interaction_service__["a" /* DataInteractionService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_interaction_data_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_interaction_data_interaction_service__["a" /* DataInteractionService */]) === "function" && _a || Object])
], LeftSideComponent);

var _a;
//# sourceMappingURL=left-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__right_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__right_side_panel_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n  border-right: 1px solid #000000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n\ni {\n    font-size: 1.5em;\n}\n\n.container-panel-right {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 0;\n    min-width: 0;\n}\n\n.title-panel-right  {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    color: #d3d3d3;;\n    padding: 0 8px 0 8px;\n    height: 50px;\n    background-color: #333333;\n}\n\n.title-panel-right  span {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5em;\n    text-align: center;\n    text-transform: uppercase;\n    line-height: 50px;\n}\n\n.title-panel-right \\--collapsed {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.notifications {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n}\n.uk-accordion-content{\n  margin-top:10px;\n}\na {\n    text-decoration: none;\n    \n}\n.title-panel-right>a{\n    line-height: 50px;\n}\n\na:hover {\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-panel-right \" [@panelWidthTrigger]=\"expandedState\">\n\n    <div class=\"title-panel-right \" [@titleColorTrigger]=\"expandedState\">\n      <a [@iconTrigger]=\"expandedState\" class=\"link\" (click)=\"toggleExpandedState('right')\">\n        <i class=\"flaticon-cross\" aria-hidden=\"true\"></i>\n      </a>\n        <span *ngIf=\"expanded\" [@titleTextTrigger]=\"'in'\">{{title}}</span>\n\n    </div>\n\n    <htm-summary-result [summaryResult]=\"summaryResult\" [poiTitle]=\"poiTitle\" [poiData]=\"poiData\" [expanded]=\"expanded\"></htm-summary-result>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSideComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RightSideComponent = (function (_super) {
    __extends(RightSideComponent, _super);
    function RightSideComponent() {
        var _this = _super.call(this) || this;
        _this.summaryResult = null;
        return _this;
    }
    RightSideComponent.prototype.ngOnInit = function () {
    };
    RightSideComponent.prototype.ngOnDestroy = function () {
    };
    RightSideComponent.prototype.setSummaryResult = function (summaryResult) {
        this.summaryResult = summaryResult;
    };
    RightSideComponent.prototype.setPoiData = function (data) {
        this.poiData = data;
        if (data) {
            this.poiTitle = Object.keys(this.poiData.features[0].properties)[0];
        }
    };
    return RightSideComponent;
}(__WEBPACK_IMPORTED_MODULE_1__side_panel_component__["a" /* SideComponent */]));
RightSideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-right-side-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.css")],
        animations: [
            // Define the animation used on the containing dev where the width of the
            //  panel is determined. Here we define the expanded width to be 300px, and
            //  the collapsed width to be 38px.
            //
            // When expanding the panel we transition over a 200ms interval.
            //
            // When collapsing the panel we again use 200ms for the transition, but
            //  we add a delay of 200ms to allow some other animations to complete before
            //  shrinking the panel down.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('panelWidthTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '480px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '0px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            // Define the animation used in the title bar where the colors swap from
            //  a red foreground with white background, to the opposite. In this case
            //  we use the same timings as the width animation above so these two
            //  transitions happen at the same time
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleColorTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#333333', color: '#FFFFFF' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            // The title text trigger is a little different because it's an animation
            //  for an element being added to the DOM. Here we take advantage of the 'void'
            //  transition using a hard-coded state called 'in' (which is also hard coded in
            //  the template).
            //
            // What we do in this animation is say when the element is added to the DOM
            //  it should have an opacity of 0 (i.e., hidden), wait 300ms, and then animate
            //  it's opacity change to 1 over a 100 ms time span. This effectively delays the
            //  appearance of the text until after the panel has slid out to the full size.
            //
            // When the element is removed we take a different approach and animate the
            //  opacity change back to 0 over a short 50ms interval. This ensures it's gone before
            //  the panel starts to slide back in, creating a nice effect.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleTextTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 300ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))
                ])
            ]),
            // Define the animation used in the arrow icon where it rotates to point left
            //  or right based on the state of the panel. In this case we use the same
            //  timings as the width animation above so these two transitions happen at
            //  the same time.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('iconTrigger', [
                // state('collapsed', style({ transform: 'rotate(0deg)' })),
                //  state('expanded', style({ transform: 'rotate(180deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], RightSideComponent);

//# sourceMappingURL=right-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideComponent = (function () {
    function SideComponent() {
        this.expanded = false;
        this.title = 'SideComponent title';
        this.expandedState = 'collapsed';
    }
    SideComponent.prototype.setTitle = function (title) {
        this.title = title;
    };
    SideComponent.prototype.getTitle = function () {
        return this.title;
    };
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent.prototype.ngOnDestroy = function () {
    };
    SideComponent.prototype.toggleExpandedState = function (func) {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        if (!this.expanded) {
            // this.navigationBarService.disableButtonsWithFunction(func);
        }
        else {
            // this.navigationBarService.enableButtonsWithFunction(func);
        }
        this.expanded = !this.expanded;
    };
    SideComponent.prototype.display = function (val) {
        if (val) {
            this.expandedState = 'expanded';
            this.expanded = true;
        }
        else {
            this.expandedState = 'collapsed';
            this.expanded = false;
        }
        console.log('this.expandedState ' + this.expandedState);
    };
    return SideComponent;
}());
SideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({}),
    __metadata("design:paramtypes", [])
], SideComponent);

//# sourceMappingURL=side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/side-panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SidePanelService = (function () {
    function SidePanelService() {
        // status for left panel
        this.leftPanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        // status for right panel
        this.rightPanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.topPanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.rightToggleExpandedStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.summaryResultDataStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.poiData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    SidePanelService.prototype.topPanelexpandedCollapsed = function () {
        this.topPanelStatus.next(true);
    };
    SidePanelService.prototype.rightPanelexpandedCollapsed = function () {
        this.rightToggleExpandedStatus.next(true);
    };
    SidePanelService.prototype.leftPanelexpandedCollapsed = function () {
        this.leftPanelStatus.next(true);
    };
    SidePanelService.prototype.openTopPanel = function () {
        this.topPanelStatus.next(true);
    };
    SidePanelService.prototype.closeTopPanel = function () {
        this.topPanelStatus.next(false);
    };
    SidePanelService.prototype.openRightPanel = function () {
        this.rightPanelStatus.next(true);
    };
    SidePanelService.prototype.closeRightPanel = function () {
        this.rightPanelStatus.next(false);
    };
    SidePanelService.prototype.closeLeftPanel = function () {
        this.leftPanelStatus.next(false);
    };
    SidePanelService.prototype.setSummaryResultData = function (data) {
        this.summaryResultDataStatus.next(data);
    };
    SidePanelService.prototype.setPoiData = function (data) {
        this.poiData.next(data);
    };
    return SidePanelService;
}());
SidePanelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SidePanelService);

//# sourceMappingURL=side-panel.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/top-side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__top_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__top_side_panel_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    border-right: 1px solid #000000;\n    width: 400px;\n    position: absolute;\n    left: 600px;\n    top: 6vh;\n    background: white;\n    z-index: 401;\n}\n\ni {\n    font-size: 1.5em;\n}\n\n.container-panel-top {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 0;\n    min-width: 0;\n}\n\n.title-panel-top {\n    text-align: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    color: #d3d3d3;\n    padding: 0 8px 0 8px;\n    height: 50px;\n    background-color: #333333;\n    z-index: 405;\n}\n\n.title-panel-top span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.5em;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 50px;\n}\n\n.title-panel-top--collapsed {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.notifications {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n    padding: 10px;\n}\n\na {\n    text-decoration: none;\n}\n.title-panel-top>a{\n    line-height: 50px;\n}\na:hover {\n    cursor: pointer;\n}\n\n.uk-accordion-content{\n    margin-top:10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-panel-top ' [@panelHeightTrigger]='expandedState'>\n    <div class='title-panel-top ' [@titleColorTrigger]='expandedState'>\n      <span *ngIf='expanded' [@titleTextTrigger]='in'>{{title}}</span>\n    </div>\n    <htm-feedback [expandedState]='expandedState'></htm-feedback>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopSideComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopSideComponent = (function (_super) {
    __extends(TopSideComponent, _super);
    function TopSideComponent() {
        return _super.call(this) || this;
    }
    TopSideComponent.prototype.ngOnInit = function () {
    };
    TopSideComponent.prototype.ngOnDestroy = function () {
    };
    return TopSideComponent;
}(__WEBPACK_IMPORTED_MODULE_1__side_panel_component__["a" /* SideComponent */]));
TopSideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-top-side-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.css")],
        animations: [
            // Trigger of height
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('panelHeightTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '542px', top: '57px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '0px', display: 'none' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out'))
            ]),
            // trigger of title Color
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleColorTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#333333', color: '#FFFFFF' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out'))
            ]),
            // trigger of title
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleTextTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 200ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))
                ])
            ]),
        ]
    }),
    __metadata("design:paramtypes", [])
], TopSideComponent);

//# sourceMappingURL=top-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-cell/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__summary_result_cell_component__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__summary_result_cell_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-height: 0;\n    min-width: 0;\n    max-height: 48px;\n    padding: 3px;\n    font-family: 'Hind', sans-serif;\n\n}\n.isSelected{\n    color:white;\n    background-color: #2889DF;\n}\n.details {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-left: 8px;\n}\n.notifications {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n}\n\n.icon {\n}\n\n.message {\n\n}\n\n.date {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    font-size: 0.6em;\n    color: #444444;\n}\nbutton{\n    padding: 0 5px;\n    /* font-size: 0.675rem; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"expanded\" [@visibleTrigger]=\"'visible'\" class=\"details\">\n    <!--  <form class=\"uk-form\">\n     <label > -->\n  <span class=\"uk-label\">{{summaryResult.information}}</span>\n  <span class=\"uk-label\">{{summaryResult.value}}</span>\n  <span class=\"uk-label\">{{summaryResult.unit}}</span>\n      <!-- </label>\n    </form>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_result_class__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.class.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResultCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryResultCellComponent = (function () {
    function SummaryResultCellComponent(mapService) {
        this.mapService = mapService;
    }
    SummaryResultCellComponent.prototype.ngOnInit = function () {
    };
    return SummaryResultCellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__summary_result_class__["a" /* SummaryResultClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__summary_result_class__["a" /* SummaryResultClass */]) === "function" && _a || Object)
], SummaryResultCellComponent.prototype, "summaryResult", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SummaryResultCellComponent.prototype, "expanded", void 0);
SummaryResultCellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-summary-result-cell',
        template: __webpack_require__("../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/summary-result/summary-result-cell/summary-result-cell.component.css")],
        animations: [
            // Define an animation that adjusts the opactiy when a new item is created
            //  in the DOM. We use the 'visible' string as the hard-coded value in the
            //  trigger.
            //
            // When an item is added we wait for 300ms, and then increase the opacity to 1
            //  over a 200ms time interval. When the item is removed we don't delay anything
            //  and use a 200ms interval.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibleTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 300ms')]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pages_map_map_service__["a" /* MapService */]) === "function" && _b || Object])
], SummaryResultCellComponent);

var _a, _b;
//# sourceMappingURL=summary-result-cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Layer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResultClass; });
var Layer = (function () {
    function Layer() {
    }
    return Layer;
}());

var SummaryResultClass = (function () {
    function SummaryResultClass() {
    }
    return SummaryResultClass;
}());

//# sourceMappingURL=summary-result.class.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n  border-right: 1px solid #000000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n\ni {\n  font-size: 1.5em;\n}\n\n.container-panel-right {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n\n.title-panel-right  {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  color: #d3d3d3;;\n  padding: 0 8px 0 8px;\n  height: 50px;\n}\n\n.title-panel-right  span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-family: 'Hind', sans-serif;\n  font-size: 1.5em;\n  padding: 0 8px 0 8px;\n}\n\n.title-panel-right \\--collapsed {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.header-summary{\n  color: #d3d3d3;\n  background:#333333;\n\n}\n.header-summary > th{\n  color:white;\n  border-right: 1px solid #f5f5f5;\n}\n.notifications {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n}\n.uk-accordion-content{\n  margin-top:10px;\n}\n\n.uk-card-default{\n\n  margin-top:10px;\n  width: 380px;\n}\na {\n  text-decoration: none;\n  margin-top: 6px;\n}\n\na:hover {\n  cursor: pointer;\n}\n\n.htm-card{\n  padding: 10px;\n}\n\n.table-level-one>th{\n  text-align: center;\n}\n.table-level-one{\n  background-color: #f5f5f5;\n}\n.table-level-two>td{\n  border-right: 1px solid #f5f5f5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.component.html":
/***/ (function(module, exports) {

module.exports = "\n<span *ngIf=\"expanded\" [@tableOpacityTrigger]=\"'in'\">\n\n  <div class=\"uk-card uk-card-body htm-card\">\n      <table class=\"uk-table uk-table-divider uk-table-small\">\n        <thead>\n          <tr class=\"header-summary\">\n            <th class=\"uk-table-shrink\">Information</th>\n            <th class=\"uk-table-shrink\">Value</th>\n          </tr>\n        </thead>\n        <tbody>\n            <ng-container *ngIf=\"summaryResult\">\n              <ng-container *ngFor=\"let i of summaryResult.layers\">\n                <tr class=\"table-level-one\">\n                    <th colspan=\"2\">{{i.name | layername}}</th>\n                </tr>\n                <tr *ngFor=\"let value of i.values\" class=\"table-level-two\">\n                  <td>{{value.name | businessname}}</td>\n                  <td *ngIf=\"value.value\" [@tableOpacityTrigger]=\"'in'\">{{value.value | number: round}} {{ value.unit | businessname}}</td>\n                  <td *ngIf=\"!value.value\" [@tableOpacityTrigger]=\"'in'\">Not available</td>\n                </tr>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"poiData\">\n              <tr class=\"table-level-one\">\n                  <th colspan=\"2\">{{poiTitle}}</th>\n              </tr>\n              <tr class=\"table-level-two\">\n                <td>{{poiTitle | businessname}}</td>\n                <td>{{poiData.features[0].properties.heat_density | number: round}} </td>\n              </tr>\n            </ng-container>\n        </tbody>\n      </table>\n    </div>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__summary_result_service__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_result_class__ = __webpack_require__("../../../../../src/app/features/summary-result/summary-result.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selection_scale_selection_scale_service__ = __webpack_require__("../../../../../src/app/features/selection-scale/selection-scale.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SummaryResultComponent = (function () {
    function SummaryResultComponent(summaryResultService, selectionScaleService, logger) {
        this.summaryResultService = summaryResultService;
        this.selectionScaleService = selectionScaleService;
        this.logger = logger;
        this.expandedState = 'collapsed';
        this.round = __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["g" /* round_value */];
        this.scale = 'Nuts 3';
        this.isDataAgregate = false;
    }
    SummaryResultComponent.prototype.ngOnInit = function () {
    };
    SummaryResultComponent.prototype.ngOnChanges = function () {
        this.logger.log('SummaryResultComponent/ngOnChanges');
        this.scale = this.selectionScaleService.getScaleValue();
        if (this.selectionScaleService.getScaleValue() !== __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["o" /* hectare */]) {
            this.isDataAgregate = true;
        }
        else {
            this.isDataAgregate = false;
        }
        console.log('SummaryResultComponent/ngOnInit ' + this.expanded);
        console.log('SummaryResultComponent/ngOnInit ' + JSON.stringify(this.poiData));
    };
    SummaryResultComponent.prototype.ngOnDestroy = function () {
    };
    SummaryResultComponent.prototype.getData = function (data) {
        console.log('summary result ' + data);
        this.summaryResult = data;
    };
    return SummaryResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SummaryResultComponent.prototype, "expanded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummaryResultComponent.prototype, "poiData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummaryResultComponent.prototype, "poiTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('summaryResult'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__summary_result_class__["a" /* SummaryResultClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__summary_result_class__["a" /* SummaryResultClass */]) === "function" && _a || Object)
], SummaryResultComponent.prototype, "summaryResult", void 0);
SummaryResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-summary-result',
        template: __webpack_require__("../../../../../src/app/features/summary-result/summary-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/summary-result/summary-result.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__summary_result_service__["a" /* SummaryResultService */]],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('tableOpacityTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 300ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))
                ])
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__summary_result_service__["a" /* SummaryResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__summary_result_service__["a" /* SummaryResultService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__selection_scale_selection_scale_service__["a" /* SelectionScaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__selection_scale_selection_scale_service__["a" /* SelectionScaleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_logger_service__["a" /* Logger */]) === "function" && _d || Object])
], SummaryResultComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=summary-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/summary-result/summary-result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResultService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SummaryResultService = (function (_super) {
    __extends(SummaryResultService, _super);
    function SummaryResultService(http, logger, loaderService, toasterService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.summaryResult = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        _this.poiResult = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        return _this;
    }
    SummaryResultService.prototype.getSummaryResultWithPayload = function (payload) {
        console.log('getSummaryResultWithPayload/payload = ', JSON.stringify(payload));
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["e" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_8__shared_data_service__["f" /* postStatsLayersArea */]);
    };
    return SummaryResultService;
}(__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* APIService */]));
SummaryResultService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object])
], SummaryResultService);

var _a, _b, _c, _d;
//# sourceMappingURL=summary-result.service.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__("../../../../../src/app/component/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/basemap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basemap; });
/**
 * Created by lesly on 14.06.17.
 */
/**
 * Created by lesly on 14.06.17.
 */ var basemap = {
    OpenStreetMap: L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
            ' Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    }),
    Esri: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC,' +
            ' USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,'
    }),
    Hybrid: L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC,' +
            ' USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,'
    }),
    CartoDB: L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy;' +
            ' <a href="http://cartodb.com/attributions">CartoDB</a>'
    }),
};
//# sourceMappingURL=basemap.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_component__ = __webpack_require__("../../../../../src/app/pages/map/component/map.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__map_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/component/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title-map\">\n  <hmt-search-bar></hmt-search-bar>\n  <htm-nav-bar [leftPanel]=\"leftPanelComponent\" [rightPanel]=\"rightPanelComponent\"></htm-nav-bar>\n  <!-- <i  (click)=\"toggleLeftExpandedState('Layers')\"></i>\n  <i class=\"icon-nav flaticon-vector\"></i>\n  <i class=\"icon-nav flaticon-folder-2\"></i>\n  <i class=\"icon-nav flaticon-pie-chart-1\" (click)=\"toggleRightExpandedState('Load result')\"></i>\n  <i class=\"icon-nav flaticon-cloud-computing\"></i>\n  <i class=\"icon-nav flaticon-interface-1\" (click)=\"toggleLeftExpandedState('Calculation modules')\"></i>\n  <i class=\"icon-nav flaticon-technology-2\"></i>\n  <i class=\"icon-nav flaticon-comparison-1\"></i>\n  <i class=\"icon-nav flaticon-database-7\"></i> -->\n</div>\n<div class=\"container-map\">\n  <htm-top-side-panel></htm-top-side-panel>\n  <htm-left-side-panel></htm-left-side-panel>\n  <div id=\"map\">\n    <!--<hmt-toolbar></hmt-toolbar> -->\n  </div>\n\n  <htm-right-side-panel></htm-right-side-panel>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/map/component/map.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n.button-navbar {\n  height: 30px;\n  width: 30px;\n  margin: 10px;\n  border-bottom-color: #000000;\n}\n.title-map {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 1000;\n  min-height: 6vh;\n  height: 6vh;\n  transition: width 0.4s ease-in-out;\n  font-family: Arial;\n  font-size: 12px;\n  padding: 10px;\n  background-color: #333333;\n  color: #ffffff;\n  border-radius: 0px;\n  border-bottom: solid 1px white;\n}\n#map {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 0;\n  min-height: 0;\n  top: 0px;\n  left: 0%;\n  bottom: 0;\n  width: 100%;\n}\n.container-map {\n  min-height: 94vh;\n  height: 94vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/map/component/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__features_side_panel_top_side_panel_top_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/top-side-panel/top-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_draw__ = __webpack_require__("../../../../leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet_draw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basemap__ = __webpack_require__("../../../../../src/app/pages/map/basemap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__searchbar__ = __webpack_require__("../../../../../src/app/pages/searchbar/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MapComponent = (function () {
    function MapComponent(mapService, logger, panelService) {
        this.mapService = mapService;
        this.logger = logger;
        this.panelService = panelService;
        // management of initial status of sidebar
        this.openRightSidebar = false;
        this.openRightToggleExpanded = false;
        this.openLeftSidebar = false;
        this.openTopSidebar = false;
    }
    MapComponent.prototype.ngAfterContentInit = function () {
        this.notifySidePanelComponent();
        this.leftPanelComponent.setTitle('Layers');
        this.rightPanelComponent.setTitle('Load Result');
        this.topSideComponent.setTitle('Feedback');
        // this.mapService.getGridTest();
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.map.remove();
    };
    MapComponent.prototype.notifySidePanelComponent = function () {
        var _this = this;
        this.panelService.summaryResultDataStatus.subscribe(function (data) {
            _this.rightPanelComponent.setSummaryResult(data);
        });
        this.panelService.poiData.subscribe(function (data) {
            _this.rightPanelComponent.setPoiData(data);
        });
        this.panelService.rightPanelStatus.subscribe(function (val) {
            if (_this.openRightSidebar === false) {
                _this.openRightSidebar = true;
            }
            else {
                _this.rightPanelComponent.display(val);
                // this.openRightSidebar = val;
            }
        });
        this.panelService.rightToggleExpandedStatus.subscribe(function (val) {
            if (_this.openRightToggleExpanded === false) {
                _this.openRightToggleExpanded = true;
            }
            else {
                _this.rightPanelComponent.toggleExpandedState('right');
                _this.openRightSidebar = val;
            }
        });
        this.panelService.topPanelStatus.subscribe(function (val) {
            if (_this.openTopSidebar === false) {
                _this.openTopSidebar = true;
            }
            else {
                _this.topSideComponent.toggleExpandedState('top');
                _this.openTopSidebar = val;
            }
        });
        this.panelService.leftPanelStatus.subscribe(function (val) {
            if (_this.openLeftSidebar === false) {
                _this.openLeftSidebar = true;
            }
            else {
                _this.leftPanelComponent.toggleExpandedState('left');
                _this.openLeftSidebar = val;
            }
        });
    };
    MapComponent.prototype.ngOnInit = function () {
        // mapService get an instance of the maps and ca work on it
        this.mapService.setupMapservice(this.createMap(__WEBPACK_IMPORTED_MODULE_4__basemap__["a" /* basemap */]));
        this.initializeNavigator();
        this.map.invalidateSize();
    };
    MapComponent.prototype.initializeNavigator = function () {
        this.searchBarComponent.Initialize();
    };
    // main method create and display map (main purpose of this component)
    MapComponent.prototype.createMap = function (basemap) {
        // setup  the map from leaflet
        var self = this;
        this.map = L.map('map', __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["E" /* map_options */]);
        L.control.zoom({ position: 'topright' }).addTo(this.map);
        var measureOption = { localization: 'en', position: 'topleft', primaryLengthUnit: 'kilometers', secondaryLengthUnit: 'miles',
            activeColor: '#ABE67E', primaryAreaUnit: 'hectares', completedColor: '#C8F2BE',
            popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] } };
        // L.control.layers(this.mapService.baseMaps).addTo(this.map);
        L.Map = L.Map.extend({
            openPopup: function (popup) {
                this.closePopup();
                this._popup = popup;
                self.logger.log('MapComponent/popup ' + popup);
                return this.addLayer(popup).fire('popupopen', {
                    popup: this._popup
                });
            }
        });
        L.Control = L.Control.extend({
            delete: function (popup) {
                this._popup = popup;
                return this.addLayer(popup).fire('popupDelete', {
                    popup: this._popup
                });
            }
        });
        L.control.scale().addTo(this.map);
        this.mapService.getSelectionScaleMenu(this.map);
        // L.control.measure(measureOption).addTo(this.map);
        // this.mapService.addDrawerControl(this.map);
        return this.map;
    };
    MapComponent.prototype.showControls = function () {
        this.mapService.addDrawerControl(this.map);
    };
    MapComponent.prototype.getMap = function () {
        return this.map;
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__searchbar__["a" /* SearchBarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__searchbar__["a" /* SearchBarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__searchbar__["a" /* SearchBarComponent */]) === "function" && _a || Object)
], MapComponent.prototype, "searchBarComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__features_side_panel__["c" /* RightSideComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["c" /* RightSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["c" /* RightSideComponent */]) === "function" && _b || Object)
], MapComponent.prototype, "rightPanelComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__features_side_panel__["d" /* LeftSideComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["d" /* LeftSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["d" /* LeftSideComponent */]) === "function" && _c || Object)
], MapComponent.prototype, "leftPanelComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__features_side_panel_top_side_panel_top_side_panel_component__["a" /* TopSideComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__features_side_panel_top_side_panel_top_side_panel_component__["a" /* TopSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__features_side_panel_top_side_panel_top_side_panel_component__["a" /* TopSideComponent */]) === "function" && _d || Object)
], MapComponent.prototype, "topSideComponent", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'htm-map',
        template: __webpack_require__("../../../../../src/app/pages/map/component/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/map/component/map.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__map_service__["a" /* MapService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["Logger"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["b" /* SidePanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__features_side_panel__["b" /* SidePanelService */]) === "function" && _g || Object])
], MapComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__("../../../../../src/app/pages/map/component/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__map_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basemap__ = __webpack_require__("../../../../../src/app/pages/map/basemap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_selection_tools__ = __webpack_require__("../../../../../src/app/features/selection-tools/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_selection_scale__ = __webpack_require__("../../../../../src/app/features/selection-scale/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_layers__ = __webpack_require__("../../../../../src/app/features/layers/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 27.05.17.
 */








var MapService = (function (_super) {
    __extends(MapService, _super);
    function MapService(http, logger, loaderService, toasterService, selectionToolService, layersService, helper, selectionScaleService, businessInterfaceRenderService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.selectionToolService = selectionToolService;
        _this.layersService = layersService;
        _this.helper = helper;
        _this.selectionScaleService = selectionScaleService;
        _this.businessInterfaceRenderService = businessInterfaceRenderService;
        _this.baseMaps = __WEBPACK_IMPORTED_MODULE_2__basemap__["a" /* basemap */];
        return _this;
    }
    MapService.prototype.getNutsGeometryFromNuts = function (latlng, nuts_level) {
        var _this = this;
        this.logger.log('MapService/getNutsGeometryFromNuts()');
        var current_nuts_level = this.businessInterfaceRenderService.convertNutsToApiName(nuts_level);
        var bbox = latlng.toBounds(__WEBPACK_IMPORTED_MODULE_6__shared_data_service__["A" /* clickAccuracy */]).toBBoxString();
        // to test
        //
        bbox = bbox + '&CQL_FILTER=' + 'stat_levl_=' + current_nuts_level + 'AND ' + 'date=' + '2015' + '-01-01Z';
        var action = 'population';
        var url = __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["B" /* geoserverGetFeatureInfoUrl */]
            + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
            '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
        this.logger.log('url' + url);
        return this.http.get(url).map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.selectAreaWithNuts(res); }, function (err) { return _this.handleError.bind(_this); });
    };
    MapService.prototype.getNutsGeometryFromLau2 = function (latlng, nuts_level) {
        var _this = this;
        var bbox = latlng.toBounds(__WEBPACK_IMPORTED_MODULE_6__shared_data_service__["A" /* clickAccuracy */]).toBBoxString();
        // to test
        //
        var action = __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["d" /* lau2name */];
        var url = __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["B" /* geoserverGetFeatureInfoUrl */]
            + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
            '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
        this.logger.log('lau2name url' + url);
        return this.http.get(url).map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.selectAreaWithNuts(res); }, function (err) { return _this.handleError.bind(_this); });
    };
    MapService.prototype.selectAreaWithNuts = function (areaSelected) {
        this.logger.log('MapService/selectAreaWithNuts()');
        // remove the layer if there is one
        this.removeAreaSelectedlayer(this.map);
        this.areaNutsSelectedLayer = L.geoJson(areaSelected);
        this.areaNutsSelectedLayer.addTo(this.map);
        // this.layersService.getLayers().addLayer(this.areaNutsSelectedLayer, true);
        this.loaderService.display(false);
        this.createSelection();
        this.map.fitBounds(this.areaNutsSelectedLayer.getBounds());
    };
    MapService.prototype.createSelection = function () {
        this.selectionToolService.manageEditOrCreateLayer(this.areaNutsSelectedLayer, this.map);
    };
    MapService.prototype.removeAreaSelectedlayer = function (map) {
        if (this.areaNutsSelectedLayer) {
            this.logger.log('MapService/removeAreaSelectedlayer');
            map.removeLayer(this.areaNutsSelectedLayer);
            delete this.areaNutsSelectedLayer;
        }
    };
    MapService.prototype.addDrawerControl = function (map) {
        this.selectionToolService.addDrawerControl(map);
    };
    MapService.prototype.disableMouseEvent = function (elementId) {
    };
    MapService.prototype.ngOnInit = function () {
        this.logger.log('MapService/ngOnInit()');
    };
    MapService.prototype.ngOnDestroy = function () {
        this.logger.log('MapService/ngOnDestroy()');
    };
    MapService.prototype.getMap = function () {
        return this.map;
    };
    MapService.prototype.getSelectionScaleMenu = function (map) {
        this.selectionScaleService.getSelectionScaleMenu(map);
    };
    MapService.prototype.showLayerDependingZoom = function () {
        if (this.layersService.getLayerArray().containsKey(__WEBPACK_IMPORTED_MODULE_6__shared_data_service__["p" /* wwtpLayerName */])) {
            this.layersService.showLayerDependingZoom(__WEBPACK_IMPORTED_MODULE_6__shared_data_service__["p" /* wwtpLayerName */], this.map, __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["C" /* zoomLevelDetectChange */]);
        }
    };
    MapService.prototype.retriveMapEvent = function (map) {
        this.logger.log('MapService/retriveMapEvent');
        var self = this;
        this.map.on('click', function (e) {
            self.logger.log('MapService/click');
            // check if the selection tool is activate
            self.logger.log('MapService/Scale' + self.selectionScaleService.getScaleValue());
            if (self.selectionScaleService.getScaleValue() === __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["o" /* hectare */]) {
                if (self.layersService.getIsReadyToShowFeatureInfo() === true) {
                    var layer = new L.Rectangle(e.latlng.toBounds(100));
                    self.selectionToolService.layerCreatedClick(layer, self.map);
                }
            }
            else if (self.selectionScaleService.getScaleValue() === __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["D" /* lau2 */]) {
                self.selectionToolService.enableNavigationService(self.map);
                self.getNutsGeometryFromLau2(e.latlng, self.selectionScaleService.getScaleValue());
            }
            else {
                self.selectionToolService.enableNavigationService(self.map);
                self.getNutsGeometryFromNuts(e.latlng, self.selectionScaleService.getScaleValue());
            }
        });
        map.on('baselayerchange', onBaselayerChange);
        function onBaselayerChange(e) {
            self.logger.log('baselayerchange');
            // in this part we manage the selection scale then we refresh the layers
            var scaleLevel = e.name;
            self.selectionToolService.clearAll(self.map);
            self.selectionScaleService.setScaleValue(scaleLevel);
            self.selectionToolService.setScaleValue(scaleLevel);
            self.layersService.setCurrentNutsLevel(scaleLevel);
            if (self.selectionToolService.isLayerInMap() === true) {
                self.selectionToolService.openPopup();
                self.logger.log('MapService/didUpdateLayers-----' + e);
            }
        }
        map.on('zoomend', function (e) {
            self.logger.log('MapService/zoomend');
            self.showLayerDependingZoom();
        });
        map.on('zoomstart', function (e) {
            // self.logger.log('MapService/zoomstart');
        });
        map.on('measurestart', function () {
        });
        map.on('measurefinish', function (evt) {
        });
        map.on('LayersControlEvent', function () {
            self.logger.log('LayersControlEvent');
        });
        map.on('layeradd', function (e) {
            // self.logger.log('MapService/layeradd-----' + e);
        });
        map.on('moveend', function (e) {
            // self.logger.log('MapService/layeradd-----' + e);
            self.showLayerDependingZoom();
        });
        map.on('didUpdateLayers', function (e) {
            if (self.selectionToolService.isLayerInMap() === true) {
                self.selectionToolService.openPopup();
                self.logger.log('MapService/didUpdateLayers-----' + e);
            }
        });
        map.on('overlayadd', onOverlayAdd);
        function onOverlayAdd(e) {
            self.logger.log('overlayadd');
        }
    };
    MapService.prototype.showOrRemoveLayer = function (action, order) {
        this.layersService.showOrRemoveLayer(action, this.map, order);
    };
    MapService.prototype.setupMapservice = function (map) {
        // set the map to the services that needs to get an instance
        this.logger.log('MapService/setupMapservice');
        // set the map to the services that needs to get an instance
        this.map = map;
        this.selectionToolService.setMap(map);
        this.retriveMapEvent(this.map);
        this.layersService.getLayers().addTo(map);
        this.layersService.setupDefaultLayer();
        this.layersService.setupZoomLayerGroup(map);
    };
    MapService.prototype.checkZoomLevelLayer = function (action, zoomLevel) {
        this.layersService.showLayerDependingZoom(action, this.map, zoomLevel);
    };
    MapService.prototype.getLayerArray = function () {
        return this.layersService.getLayerArray();
    };
    return MapService;
}(__WEBPACK_IMPORTED_MODULE_3__shared__["APIService"]));
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["Logger"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["LoaderService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["LoaderService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["ToasterService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__features_selection_tools__["a" /* SelectionToolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__features_selection_tools__["a" /* SelectionToolService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__features_layers__["LayersService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__features_layers__["LayersService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["Helper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["Helper"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__features_selection_scale__["a" /* SelectionScaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__features_selection_scale__["a" /* SelectionScaleService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["BusinessInterfaceRenderService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["BusinessInterfaceRenderService"]) === "function" && _j || Object])
], MapService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/component/navigation-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disabledButton{\ncolor:grey;\ncursor: initial;\n}\n\n.icon-nav>i:before {\nfont-size: 30px;\nmargin: 10px;\n}\n\n.icon-nav>i:hover{\ncolor:#2889DF;\ncursor: pointer;\n}\n\n.disabledButton:hover{\ncolor:grey !important;\ncursor: initial !important;\n}\n\n.clickedButton{\ncolor:#2889DF !important;\n}\n\n.icon-nav{\n    float: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/nav/component/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let button of navButtons\" class=\"icon-nav\">\n        <i *ngIf=\"button.buttonFunction=='left'\" class=\"{{button.iconClass}}\" title=\"{{button.title}}\" uk-tooltip=\"pos: bottom\"\n        [class.disabledButton]=\"!button.enable\"\n        [class.clickedButton]=\"leftPanel.expanded && button.enable\"\n        (click)=\"button.enable ? toggleExpandedState(button) : null\"></i>\n\n        <i *ngIf=\"button.buttonFunction == 'right'\" class=\"icon-nav {{button.iconClass}}\" title=\"{{button.title}}\" uk-tooltip=\"pos: bottom\"\n        [class.disabledButton]=\"!button.enable\"\n        [class.clickedButton]=\"rightPanel.expanded && button.enable\"\n        (click)=\"button.enable ? toggleExpandedState(button) : null\"></i>\n\n        <i *ngIf=\"button.buttonFunction != 'right' && button.buttonFunction != 'left'\" class=\"{{button.iconClass}}\" title=\"{{button.title}}\" uk-tooltip=\"pos: bottom\"\n        [class.disabledButton]=\"!button.enable\"\n        [class.clickedButton]=\"button.stateOpen && button.enable\"\n        (click)=\"button.enable ? toggleExpandedState(button) : null\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/nav/component/navigation-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service__ = __webpack_require__("../../../../../src/app/pages/nav/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationBarComponent = (function () {
    function NavigationBarComponent(navService) {
        this.navService = navService;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        this.navButtons = this.navService.getButtons();
    };
    NavigationBarComponent.prototype.toggleExpandedState = function (button) {
        this.navService.toggleBar(button);
    };
    return NavigationBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__features_side_panel__["d" /* LeftSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__features_side_panel__["d" /* LeftSideComponent */]) === "function" && _a || Object)
], NavigationBarComponent.prototype, "leftPanel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__features_side_panel__["c" /* RightSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__features_side_panel__["c" /* RightSideComponent */]) === "function" && _b || Object)
], NavigationBarComponent.prototype, "rightPanel", void 0);
NavigationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'htm-nav-bar',
        template: __webpack_require__("../../../../../src/app/pages/nav/component/navigation-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/nav/component/navigation-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service__["a" /* NavigationBarService */]) === "function" && _c || Object])
], NavigationBarComponent);

var _a, _b, _c;
//# sourceMappingURL=navigation-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_bar_service__ = __webpack_require__("../../../../../src/app/pages/nav/service/navigation-bar.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navigation_bar_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_buttons_data__ = __webpack_require__("../../../../../src/app/pages/nav/service/navigation-buttons.data.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__navigation_buttons_data__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/service/navigation-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("../../../../../src/app/pages/nav/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_selection_tools__ = __webpack_require__("../../../../../src/app/features/selection-tools/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_side_panel__ = __webpack_require__("../../../../../src/app/features/side-panel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_feedback__ = __webpack_require__("../../../../../src/app/features/feedback/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigationBarService = (function () {
    function NavigationBarService(panelService, selectionToolButtonStateService, mailService, logger) {
        this.panelService = panelService;
        this.selectionToolButtonStateService = selectionToolButtonStateService;
        this.mailService = mailService;
        this.logger = logger;
        this.properties = {};
    }
    NavigationBarService.prototype.toggleBar = function (button) {
        this.logger.log('button: ' + button);
        button.stateOpen = !button.stateOpen;
        if (button.enable) {
            if (button.buttonFunction === 'left') {
                this.panelService.leftPanelexpandedCollapsed();
            }
            else if (button.buttonFunction === 'right') {
                this.panelService.rightPanelexpandedCollapsed();
            }
            else if (button.buttonFunction === 'selection') {
                this.selectionToolButtonStateService.enable(true);
            }
            else if (button.buttonFunction === 'send_mail') {
                this.panelService.topPanelexpandedCollapsed();
                // button.stateOpen = !button.stateOpen;
            }
        }
    };
    NavigationBarService.prototype.enableButton = function (id) {
        var button = this.getButtons().filter(function (x) { return x.id === id; })[0];
        button.enable = true;
        button.stateOpen = true;
    };
    NavigationBarService.prototype.disableButton = function (id) {
        var button = this.getButtons().filter(function (x) { return x.id === id; })[0];
        button.enable = false;
        button.stateOpen = false;
    };
    NavigationBarService.prototype.disableButtonsWithFunction = function (func) {
        var buttons = this.getButtons().filter(function (x) { return x.buttonFunction === func; });
        buttons.forEach(function (button) {
            button.enable = false;
            button.stateOpen = false;
        });
    };
    NavigationBarService.prototype.enableButtonsWithFunction = function (func) {
        var buttons = this.getButtons().filter(function (x) { return x.buttonFunction === func; });
        buttons.forEach(function (button) {
            button.enable = true;
            button.stateOpen = true;
        });
    };
    NavigationBarService.prototype.getButtons = function () {
        return __WEBPACK_IMPORTED_MODULE_1____["b" /* navigationButtons */];
    };
    NavigationBarService.prototype.sendEmail = function () {
        this.mailService.sendEmail();
    };
    return NavigationBarService;
}());
NavigationBarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__features_side_panel__["b" /* SidePanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__features_side_panel__["b" /* SidePanelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__features_selection_tools__["b" /* SelectionToolButtonStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__features_selection_tools__["b" /* SelectionToolButtonStateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__features_feedback__["MailService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__features_feedback__["MailService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["Logger"]) === "function" && _d || Object])
], NavigationBarService);

var _a, _b, _c, _d;
//# sourceMappingURL=navigation-bar.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/service/navigation-buttons.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigationButtons; });
var navigationButtons = [
    { id: 'layers', title: 'Folder', buttonFunction: 'left', iconClass: 'flaticon-layers-1', enable: true, stateOpen: false },
    { id: 'selection', title: 'Selection', buttonFunction: 'selection', iconClass: 'flaticon-vector', enable: true, stateOpen: false },
    { id: 'folder', title: 'Folder', buttonFunction: '', iconClass: 'flaticon-folder-2', enable: false, stateOpen: false },
    { id: 'load_result', title: 'Load result', buttonFunction: 'right', iconClass: 'flaticon-pie-chart-1', enable: false, stateOpen: false },
    { id: 'import_data', title: 'Import data', buttonFunction: '', iconClass: 'flaticon-cloud-computing', enable: false, stateOpen: false },
    { id: 'calculation_modules', title: 'Calculation modules', buttonFunction: 'left', iconClass: 'flaticon-interface-1',
        enable: false, stateOpen: false },
    { id: 'save_as', title: 'Save as', buttonFunction: '', iconClass: 'flaticon-technology-2', enable: false, stateOpen: false },
    { id: 'comparison', title: 'Comparison', buttonFunction: '', iconClass: 'flaticon-comparison-1', enable: false, stateOpen: false },
    { id: 'data_info', title: 'Dataset informations', buttonFunction: '', iconClass: 'flaticon-database-7', enable: false, stateOpen: false },
    { id: 'feedback', title: 'Feedback', buttonFunction: 'send_mail', iconClass: 'flaticon-send', enable: true, stateOpen: false },
];
//# sourceMappingURL=navigation-buttons.data.js.map

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchbar_component__ = __webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__searchbar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/searchbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"search-bar\">\n    <i class=\"icon-search fa fa-search\"></i>\n    <input id=\"place-input\" class=\"on-map\" type=\"text\" placeholder=\"Go to place...\"\n        [(ngModel)]=\"address\" (keyup.enter)=\"goto()\" />\n</div>\n\n<!--<button id=\"goto\" class=\"btn btn-primary on-map\" href=\"#\" title=\"Goto Place\" (click)=\"goto()\"></button>-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/searchbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  width: 130px;\n  height: 30px;\n  z-index: 1;\n  font-size: 16px;\n  vertical-align: middle;\n  padding: 5px 16px;\n  color: white;\n  margin: 10px;\n  background: none;\n  border: none;\n  border-bottom: white 1px solid;\n  transition: 1s; }\n\ninput:focus {\n  width: 245px;\n  transition: 1s; }\n\n#goto {\n  margin: 0px 0 0 7px;\n  width: 30px;\n  height: 30px;\n  outline: none;\n  opacity: 1;\n  background: white; }\n\n.icon-search {\n  position: absolute;\n  top: 33%;\n  left: 12px; }\n\n.search-bar {\n  position: relative; }\n\n.fa-search::before {\n  font-size: x-small; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/searchbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_geocoding_service__ = __webpack_require__("../../../../../src/app/shared/services/geocoding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 31.05.17.
 */





var SearchBarComponent = (function () {
    function SearchBarComponent(geocoder, mapService, logger, loaderService) {
        this.geocoder = geocoder;
        this.mapService = mapService;
        this.logger = logger;
        this.loaderService = loaderService;
        this.address = '';
    }
    SearchBarComponent.prototype.Initialize = function () {
    };
    SearchBarComponent.prototype.ngOnInit = function () {
        this.map = this.mapService.getMap();
    };
    SearchBarComponent.prototype.goto = function () {
        var _this = this;
        this.logger.log('NavigatorComponent/goto()');
        if (!this.address) {
            return;
        }
        this.loaderService.display(true);
        this.logger.log('NavigatorComponent/goto()/this.address!=null' + this.address);
        this.geocoder.geocode(this.address)
            .subscribe(function (location) {
            _this.map.fitBounds(location.viewBounds, {});
            _this.address = location.address;
            _this.loaderService.display(false);
        }, function (error) { return _this.loaderService.display(false); });
    };
    SearchBarComponent.prototype.searchDestinationFrom = function (address) {
        var _this = this;
        this.logger.log('NavigatorComponent/goto()');
        if (!address) {
            return;
        }
        this.loaderService.display(true);
        this.logger.log('NavigatorComponent/goto()/this.address!=null' + this.address);
        this.geocoder.geocode(address)
            .subscribe(function (location) {
            _this.map.fitBounds(location.viewBounds, {});
            _this.address = location.address;
            _this.loaderService.display(false);
        }, function (error) { return _this.loaderService.display(false); });
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hmt-search-bar',
        template: __webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_geocoding_service__["a" /* GeocodingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_geocoding_service__["a" /* GeocodingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__map_map_service__["a" /* MapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _d || Object])
], SearchBarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=searchbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<button id=\"add-marker\" class=\"btn btn-default on-map\" [class.btn-primary]=\"editing\"\n        title=\"Add markers by clicking on the map\" (click)=\"toggleEditing()\" btnCheckbox>\n  <i class=\"fa fa-map-marker\"></i>\n</button>\n\n<button id=\"remove-marker\" class=\"btn btn-default on-map\" [class.btn-primary]=\"removing\"\n        title=\"Remove markers by clicking on them\" (click)=\"toggleRemoving()\" btnCheckbox>\n  <i class=\"fa fa-trash\"></i>\n</button>\n\n<button id=\"toggle-layer\" class=\"btn btn-default on-map\" [class.btn-primary]=\"airportLayerAdded\"\n        title=\"Toggle the airport layer\" (click)=\"toggleAirPortLayer()\" btnCheckbox>\n  <i class=\"fa fa-plane\"></i>\n</button>\n\n-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css"), "");

// module
exports.push([module.i, "#add-marker {\n  margin: 20px 0 0 370px; }\n\n#remove-marker {\n  margin: 20px 0 0 410px; }\n\n#toggle-layer {\n  margin: 20px 0 0 450px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map_service__ = __webpack_require__("../../../../../src/app/pages/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 27.05.17.
 */



var ToolbarComponent = (function () {
    function ToolbarComponent(mapService, logger) {
        this.mapService = mapService;
        this.logger = logger;
        this.editing = false;
        this.logger = logger;
        this.removing = false;
        this.markerCount = 0;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.logger.log('ToolbarComponent/ngOnInit');
        this.mapService.disableMouseEvent('add-marker');
        this.mapService.disableMouseEvent('remove-marker');
        this.mapService.disableMouseEvent('toggle-layer');
    };
    ToolbarComponent.prototype.Initialize = function () {
        this.logger.log('ToolbarComponent/Initialize');
        /*  this.mapService.map.on('click', (e: MouseEvent) => {
      
            if (this.editing) {
              this.logger.log('ToolbarComponent/click');
              let marker = L.marker(e.latlng, {
                icon: L.icon({
                  iconUrl: '../../../node_modules/leaflet/dist/images/marker-icon.png',
                  shadowUrl: '../../../node_modules/leaflet/dist/images/marker-shadow.png'
                }),
                draggable: true
              })
                .bindPopup('Marker #' + (this.markerCount + 1).toString(), {
                  offset: L.point(12, 6)
                })
                .addTo(this.mapService.map)
                .openPopup();
      
              this.markerCount += 1;
      
              marker.on('click', (event: MouseEvent) => {
                if (this.removing) {
                  this.mapService.map.removeLayer(marker);
                  this.markerCount -= 1;
                }
              });
            }
          });*/
    };
    ToolbarComponent.prototype.toggleEditing = function () {
        this.editing = !this.editing;
        if (this.editing && this.removing) {
            this.removing = false;
        }
    };
    ToolbarComponent.prototype.toggleRemoving = function () {
        this.removing = !this.removing;
        if (this.editing && this.removing) {
            this.editing = false;
        }
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hmt-toolbar',
        template: __webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__map_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_map_service__["a" /* MapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], ToolbarComponent);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_map_component_map_component__ = __webpack_require__("../../../../../src/app/pages/map/component/map.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/**
 * Created by lesly on 14.06.17.
 */

var routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_0__pages_map_component_map_component__["a" /* MapComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/NutsRenderClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_class__ = __webpack_require__("../../../../../src/app/shared/business/business.class.ts");
/* unused harmony export NutsRenderClass */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NutsRenderClass = (function (_super) {
    __extends(NutsRenderClass, _super);
    function NutsRenderClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NutsRenderClass;
}(__WEBPACK_IMPORTED_MODULE_0__business_class__["a" /* BusinessInterfaceRenderClass */]));

//# sourceMappingURL=NutsRenderClass.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/business.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessInterfaceRenderClass; });
/**
 * Created by lesly on 11.07.17.
 */
var BusinessInterfaceRenderClass = (function () {
    function BusinessInterfaceRenderClass() {
    }
    return BusinessInterfaceRenderClass;
}());

//# sourceMappingURL=business.class.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/business.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessInterfaceRenderArray; });
var BusinessInterfaceRenderArray = [
    { id: 17, api_name: 'heat_density', business_name: 'Average heat density' },
    { id: 172, api_name: 'heat_density_nuts3', business_name: 'Heat map / aggregrated from Hectares to NUTS3' },
    { id: 174, api_name: 'heat_density_nuts2', business_name: 'Heat map  / aggregrated from Hectares to NUTS2' },
    { id: 175, api_name: 'heat_density_nuts1', business_name: 'Heat map / aggregrated from Hectares to NUTS1' },
    { id: 176, api_name: 'heat_density_nuts0', business_name: 'Heat map  / aggregrated from Hectares to NUTS0' },
    { id: 177, api_name: 'heat_density_ha', business_name: 'Heat map' },
    { id: 178, api_name: 'population_density_nuts3', business_name: 'population' },
    { id: 179, api_name: 'population_density_nuts2', business_name: 'population' },
    { id: 147, api_name: 'population_density_nuts1', business_name: 'population' },
    { id: 157, api_name: 'population_density_nuts0', business_name: 'population' },
    { id: 157, api_name: 'population_density', business_name: 'Average population density' },
    { id: 167, api_name: 'population_density_ha', business_name: 'population density' },
    { id: 12, api_name: 'heat_consumption', business_name: 'Heat consumption' },
    { id: 13, api_name: 'density', business_name: 'Total population' },
    { id: 16, api_name: 'consumption_per_citizen', business_name: 'Heat consumption per person' },
    { id: 25, api_name: 'population_density_sum', business_name: 'Population' },
    { id: 19, api_name: 'population_density_avg', business_name: 'Average population density' },
    { id: 179, api_name: 'Inhabitants', business_name: 'person' },
    { id: 1543, api_name: 'MWh/ha', business_name: 'MWh/ha' },
    { id: 1545, api_name: 'MWh/Inhabitants', business_name: 'MWh/person' },
    { id: 152, api_name: 'Inhabitants/ha', business_name: 'person/ha' },
];
//# sourceMappingURL=business.data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/business.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_data__ = __webpack_require__("../../../../../src/app/shared/business/business.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuts_data__ = __webpack_require__("../../../../../src/app/shared/business/nuts.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessInterfaceRenderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessInterfaceRenderService = (function () {
    function BusinessInterfaceRenderService(helper) {
        this.helper = helper;
    }
    BusinessInterfaceRenderService.prototype.getReadableName = function (name) {
        var business = this.getBusiness().filter(function (x) { return x.api_name === name; })[0];
        if (this.helper.isNullOrUndefined(business)) {
            return name;
        }
        return business.business_name;
    };
    // transform Nuts Value to readable name for the API
    BusinessInterfaceRenderService.prototype.convertNutsToApiName = function (name) {
        var business = this.getNuts().filter(function (x) { return x.business_name === name; })[0];
        if (this.helper.isNullOrUndefined(business)) {
            return name;
        }
        return business.api_name;
    };
    BusinessInterfaceRenderService.prototype.getNutsTosuffix = function (name) {
        var business = this.getNuts().filter(function (x) { return x.business_name === name; })[0];
        if (this.helper.isNullOrUndefined(business)) {
            return name;
        }
        return business.suffix;
    };
    BusinessInterfaceRenderService.prototype.getBusiness = function () {
        return __WEBPACK_IMPORTED_MODULE_1__business_data__["a" /* BusinessInterfaceRenderArray */];
    };
    BusinessInterfaceRenderService.prototype.getNuts = function () {
        return __WEBPACK_IMPORTED_MODULE_2__nuts_data__["a" /* NutsRenderArray */];
    };
    return BusinessInterfaceRenderService;
}());
BusinessInterfaceRenderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helper__["a" /* Helper */]) === "function" && _a || Object])
], BusinessInterfaceRenderService);

var _a;
//# sourceMappingURL=business.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_class__ = __webpack_require__("../../../../../src/app/shared/business/business.class.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_data__ = __webpack_require__("../../../../../src/app/shared/business/business.data.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__business_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuts_data__ = __webpack_require__("../../../../../src/app/shared/business/nuts.data.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NutsRenderClass__ = __webpack_require__("../../../../../src/app/shared/business/NutsRenderClass.ts");
/* unused harmony namespace reexport */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/business/nuts.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutsRenderArray; });

var NutsRenderArray = [
    { id: 0, api_name: '0', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["k" /* nuts0 */], suffix: '_nuts0' },
    { id: 1, api_name: '1', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["l" /* nuts1 */], suffix: '_nuts1' },
    { id: 2, api_name: '2', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["m" /* nuts2 */], suffix: '_nuts2' },
    { id: 3, api_name: '3', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["n" /* nuts3 */], suffix: '_nuts3' },
    { id: 4, api_name: '-1', business_name: __WEBPACK_IMPORTED_MODULE_0__data_service__["o" /* hectare */], suffix: '_ha' },
];
//# sourceMappingURL=nuts.data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/dictionary.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dictionary; });
var Dictionary = (function () {
    function Dictionary(init) {
        this._keys = [];
        this._values = [];
        for (var x = 0; x < init.length; x++) {
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }
    Dictionary.prototype.add = function (key, value) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    };
    Dictionary.prototype.value = function (key) {
        var index = this._keys.indexOf(key, 0);
        return this._values[index];
    };
    Dictionary.prototype.remove = function (key) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this[key];
    };
    Dictionary.prototype.keys = function () {
        return this._keys;
    };
    Dictionary.prototype.containsKey = function (key) {
        if (typeof this[key] === 'undefined') {
            return false;
        }
        return true;
    };
    return Dictionary;
}());

//# sourceMappingURL=dictionary.class.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location__ = __webpack_require__("../../../../../src/app/shared/class/location/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "UppercaseFirstLetterPipe")) __webpack_require__.d(__webpack_exports__, "UppercaseFirstLetterPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["UppercaseFirstLetterPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "NumberFormatPipe")) __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["NumberFormatPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "LayerNamePipe")) __webpack_require__.d(__webpack_exports__, "LayerNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["LayerNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "BusinessNamePipe")) __webpack_require__.d(__webpack_exports__, "BusinessNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["BusinessNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "GeocodingService")) __webpack_require__.d(__webpack_exports__, "GeocodingService", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["GeocodingService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "Logger")) __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["Logger"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "LoaderService")) __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["LoaderService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "ToasterService")) __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["ToasterService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "GlobalErrorHandler")) __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["GlobalErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "Helper")) __webpack_require__.d(__webpack_exports__, "Helper", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["Helper"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__location__, "APIService")) __webpack_require__.d(__webpack_exports__, "APIService", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["APIService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dictionary_class__ = __webpack_require__("../../../../../src/app/shared/class/dictionary.class.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/location/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latLng_interface__ = __webpack_require__("../../../../../src/app/shared/class/location/latLng.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latLng_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "UppercaseFirstLetterPipe")) __webpack_require__.d(__webpack_exports__, "UppercaseFirstLetterPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["UppercaseFirstLetterPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "NumberFormatPipe")) __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["NumberFormatPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "LayerNamePipe")) __webpack_require__.d(__webpack_exports__, "LayerNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["LayerNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "BusinessNamePipe")) __webpack_require__.d(__webpack_exports__, "BusinessNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["BusinessNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "GeocodingService")) __webpack_require__.d(__webpack_exports__, "GeocodingService", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["GeocodingService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "Logger")) __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["Logger"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "LoaderService")) __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["LoaderService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "ToasterService")) __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["ToasterService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "GlobalErrorHandler")) __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["GlobalErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "Helper")) __webpack_require__.d(__webpack_exports__, "Helper", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["Helper"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__latLng_interface__, "APIService")) __webpack_require__.d(__webpack_exports__, "APIService", function() { return __WEBPACK_IMPORTED_MODULE_0__latLng_interface__["APIService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location__ = __webpack_require__("../../../../../src/app/shared/class/location/location.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_class__ = __webpack_require__("../../../../../src/app/shared/class/location/location.class.ts");
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/location/latLng.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=latLng.interface.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/location/location.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationClass; });
var LocationClass = (function () {
    function LocationClass() {
    }
    return LocationClass;
}());

//# sourceMappingURL=location.class.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/location/location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Location */
/**
 * Created by lesly on 11.07.17.
 */
var Location = (function () {
    function Location() {
    }
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_map_basemap__ = __webpack_require__("../../../../../src/app/pages/map/basemap.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return geocodeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return geoserverUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getIpUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getLocationFromIp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return defaultLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return idDefaultLayer; });
/* unused harmony export idWwtpLayer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return wwtpLayerName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return urlMailServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return geoserverGetFeatureInfoUrl; });
/* unused harmony export nuts_level */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return populationLayerName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return postPopulationDensityInArea; });
/* unused harmony export getGrid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return postStatsLayersArea; });
/* unused harmony export set404url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return proj3035; });
/* unused harmony export proj4326 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return timeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return clickAccuracy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return zoomLevelDetectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return constant_year; });
/* unused harmony export constant_year_sp_wwtp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return business_name_wwtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return business_name_population; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return unit_capacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return unit_heat_density; });
/* unused harmony export unit_shape_area */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return unit_population; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return round_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return map_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lau2name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return nuts0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return nuts1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return nuts2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return nuts3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return lau2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return hectare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initial_scale_value; });

/**
 * Created by lesly on 07.07.17.
 */
var prodUrl = 'http://hotmaps.hevs.ch:9005/api';
var devUrl = 'http://hotmaps.hevs.ch:9005/api';
var geocodeUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address='; // prefer
// prefer
var geoserverUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms';
var getIpUrl = 'http://ipv4.myexternalip.com/json'; // prefer
// prefer
var getLocationFromIp = 'http://hotmaps.hevs.ch:9005/api/';
var apiUrl = devUrl;
var defaultLayer = 'heat_density';
var idDefaultLayer = 17;
var idWwtpLayer = 12;
var wwtpLayerName = 'wwtp';
var urlMailServer = 'http://hotmaps.hevs.ch:8585/sendEmail/sendmail.php';
// layer_name
var geoserverGetFeatureInfoUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms?' +
    'SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:';
var nuts_level = '3';
var populationLayerName = 'population_density';
var postPopulationDensityInArea = '/population/density/area/';
var getGrid = '/grids/1km/area/';
var postStatsLayersArea = '/stats/layers/area/';
var set404url = 'set404url';
// Projection data string
var proj3035 = '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs';
var proj4326 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
// layers constant
var timeOut = 200000;
// layers constant
var clickAccuracy = 100;
var zoomLevelDetectChange = 10;
var constant_year = 2012;
var constant_year_sp_wwtp = 2015;
var business_name_wwtp = 'Waste Water treatment plants';
var business_name_population = 'Population';
var unit_capacity = 'population equivalent';
var unit_heat_density = 'MWh/ha';
var unit_shape_area = 'm2';
var unit_population = 'person/ha';
var round_value = '1.2-2';
var map_options = {
    zoomControl: false,
    center: L.latLng(47.1, 7.0833),
    zoom: 5,
    minZoom: 4,
    maxZoom: 17,
    zoomAnimationThreshold: 3,
    layers: [__WEBPACK_IMPORTED_MODULE_0__pages_map_basemap__["a" /* basemap */].Esri, __WEBPACK_IMPORTED_MODULE_0__pages_map_basemap__["a" /* basemap */].Hybrid]
};
var lau2name = 'COMM_RG_01M_2013';
// Scale Value
var nuts0 = 'NUTS 0';
var nuts1 = 'NUTS 1';
var nuts2 = 'NUTS 2';
var nuts3 = 'NUTS 3';
var lau2 = 'Lau 2';
var hectare = 'Hectare';
var initial_scale_value = nuts3;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Helper = (function () {
    function Helper(logger, decimalPipe) {
        this.logger = logger;
        this.decimalPipe = decimalPipe;
    }
    // check if unfined or not
    Helper.prototype.isNullOrUndefined = function (x) {
        var result = false;
        if (x == null) {
            result = true;
        }
        if (x === null) {
            result = true;
        }
        if (typeof x === 'undefined') {
            result = true;
        }
        return result;
    };
    // convert getlatLong() form path leaflet to array of location[]
    Helper.prototype.convertLatLongToLocation = function (latlng) {
        var n = 0;
        var locations = [];
        do {
            var loc = {
                lat: latlng[n].lat,
                lng: latlng[n].lng
            };
            locations.push(loc);
            n++;
        } while (!this.isNullOrUndefined(latlng[n]));
        return locations;
    };
    Helper.prototype.convertListLatLongToLocation = function (latlngArray) {
        var locations = [];
        console.log(latlngArray[0][0]);
        var latlng = latlngArray[0][0];
        for (var i = 0; i < latlng.length; i++) {
            var loc = {
                lat: latlng[i][1],
                lng: latlng[i][0]
            };
            locations.push(loc);
        }
        return locations;
    };
    Helper.prototype.createGeodesicPolygon = function (origin, radius, sides, rotation) {
        var latlon = origin; //leaflet equivalent
        var angle;
        var new_lonlat, geom_point;
        var points = [];
        for (var i = 0; i < sides; i++) {
            angle = (i * 360 / sides) + rotation;
            new_lonlat = this.destinationVincenty(latlon, angle, radius);
            geom_point = L.latLng(new_lonlat.lng, new_lonlat.lat);
            points.push(geom_point);
        }
        return points;
    };
    Helper.prototype.destinationVincenty = function (lonlat, brng, dist) {
        var VincentyConstants = {
            a: 6378137,
            b: 6356752.3142,
            f: 1 / 298.257223563
        };
        var u = L.Util;
        var ct = VincentyConstants;
        var a = ct.a, b = ct.b, f = ct.f;
        var lon1 = lonlat.lng;
        var lat1 = lonlat.lat;
        var s = dist;
        var pi = Math.PI;
        var alpha1 = brng * pi / 180; //converts brng degrees to radius
        var sinAlpha1 = Math.sin(alpha1);
        var cosAlpha1 = Math.cos(alpha1);
        var tanU1 = (1 - f) * Math.tan(lat1 * pi / 180 /* converts lat1 degrees to radius */);
        var cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1)), sinU1 = tanU1 * cosU1;
        var sigma1 = Math.atan2(tanU1, cosAlpha1);
        var sinAlpha = cosU1 * sinAlpha1;
        var cosSqAlpha = 1 - sinAlpha * sinAlpha;
        var uSq = cosSqAlpha * (a * a - b * b) / (b * b);
        var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
        var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
        var sigma = s / (b * A), sigmaP = 2 * Math.PI;
        while (Math.abs(sigma - sigmaP) > 1e-12) {
            var cos2SigmaM = Math.cos(2 * sigma1 + sigma);
            var sinSigma = Math.sin(sigma);
            var cosSigma = Math.cos(sigma);
            var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
                B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
            sigmaP = sigma;
            sigma = s / (b * A) + deltaSigma;
        }
        var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
        var lat2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1, (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp));
        var lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1);
        var C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
        var lam = lambda - (1 - C) * f * sinAlpha *
            (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
        var revAz = Math.atan2(sinAlpha, -tmp); // final bearing
        var lamFunc = lon1 + (lam * 180 / pi); //converts lam radius to degrees
        var lat2a = lat2 * 180 / pi; //converts lat2a radius to degrees
        return L.latLng(lamFunc, lat2a);
    };
    Helper.prototype.latLngsToCoords = function (arrLatlng) {
        var self = this;
        var coords = [];
        arrLatlng.forEach(function (latlng) {
            coords.push([latlng.lng, latlng.lat]);
        }, this);
        return coords;
    };
    Helper.prototype.round = function (num) {
        if (this.isNullOrUndefined(num) === true) {
            return num;
        }
        ;
        return this.decimalPipe.transform(num, __WEBPACK_IMPORTED_MODULE_3__data_service__["g" /* round_value */]);
    };
    return Helper;
}());
Helper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["DecimalPipe"]) === "function" && _b || Object])
], Helper);

var _a, _b;
//# sourceMappingURL=helper.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business__ = __webpack_require__("../../../../../src/app/shared/business/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BusinessInterfaceRenderService", function() { return __WEBPACK_IMPORTED_MODULE_0__business__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class__ = __webpack_require__("../../../../../src/app/shared/class/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "UppercaseFirstLetterPipe")) __webpack_require__.d(__webpack_exports__, "UppercaseFirstLetterPipe", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["UppercaseFirstLetterPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "NumberFormatPipe")) __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["NumberFormatPipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "LayerNamePipe")) __webpack_require__.d(__webpack_exports__, "LayerNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["LayerNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "BusinessNamePipe")) __webpack_require__.d(__webpack_exports__, "BusinessNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["BusinessNamePipe"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "GeocodingService")) __webpack_require__.d(__webpack_exports__, "GeocodingService", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["GeocodingService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "Logger")) __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["Logger"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "LoaderService")) __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["LoaderService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "ToasterService")) __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["ToasterService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "GlobalErrorHandler")) __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["GlobalErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "Helper")) __webpack_require__.d(__webpack_exports__, "Helper", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["Helper"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__class__, "APIService")) __webpack_require__.d(__webpack_exports__, "APIService", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["APIService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes__ = __webpack_require__("../../../../../src/app/shared/pipes/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "UppercaseFirstLetterPipe", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LayerNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BusinessNamePipe", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "GeocodingService", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return __WEBPACK_IMPORTED_MODULE_5__helper__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/business-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_business_service__ = __webpack_require__("../../../../../src/app/shared/business/business.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusinessNamePipe = (function () {
    function BusinessNamePipe(businessService) {
        this.businessService = businessService;
    }
    BusinessNamePipe.prototype.transform = function (value, args) {
        if (value === null) {
            return 'Nothing to transform';
        }
        value = this.businessService.getReadableName(value);
        return value;
    };
    return BusinessNamePipe;
}());
BusinessNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'businessname'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__business_business_service__["a" /* BusinessInterfaceRenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__business_business_service__["a" /* BusinessInterfaceRenderService */]) === "function" && _a || Object])
], BusinessNamePipe);

var _a;
//# sourceMappingURL=business-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/date-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export DateFormatPipe */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateFormatPipe = (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (date) {
    };
    return DateFormatPipe;
}());
DateFormatPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'date-format'
    })
], DateFormatPipe);

//# sourceMappingURL=date-format.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_name_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/business-name.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__business_name_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_format_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/date-format.pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_name_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/layer-name.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__layer_name_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__number_format_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/number-format.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__number_format_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uppercase_first_letter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/uppercase-first-letter.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__uppercase_first_letter_pipe__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/layer-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_data_interaction_data_interaction_service__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayerNamePipe = (function () {
    function LayerNamePipe(dataInteractionService) {
        this.dataInteractionService = dataInteractionService;
    }
    LayerNamePipe.prototype.transform = function (value, args) {
        if (value === null) {
            return 'Nothing to transform';
        }
        return this.dataInteractionService.getReadableName(value);
    };
    return LayerNamePipe;
}());
LayerNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'layername'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__features_data_interaction_data_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__features_data_interaction_data_interaction_service__["a" /* DataInteractionService */]) === "function" && _a || Object])
], LayerNamePipe);

var _a;
//# sourceMappingURL=layer-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/number-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberFormatPipe; });
/*
Author: Albain Dufils
Date: 28.09.2017
Description:
This pipe is used to format number with the correct format

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberFormatPipe = (function () {
    function NumberFormatPipe() {
    }
    NumberFormatPipe.prototype.transform = function (value, args) {
        // return value.toString().replace(',', "'");
        return value.toLocaleString();
    };
    return NumberFormatPipe;
}());
NumberFormatPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'numberformat'
    })
], NumberFormatPipe);

//# sourceMappingURL=number-format.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/uppercase-first-letter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UppercaseFirstLetterPipe; });
/*
        Author: Albain Dufils
        Date: 28.09.2017
        Description:
            This pipe is used to format string to:
                the first letter in uppercase
                the rest in lowercase

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UppercaseFirstLetterPipe = (function () {
    function UppercaseFirstLetterPipe() {
    }
    UppercaseFirstLetterPipe.prototype.transform = function (value, args) {
        if (value === null) {
            return 'Nothing to transform';
        }
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    };
    return UppercaseFirstLetterPipe;
}());
UppercaseFirstLetterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'uppercaseFirstLetter'
    })
], UppercaseFirstLetterPipe);

//# sourceMappingURL=uppercase-first-letter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__("../../../../rxjs/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by lesly on 19.07.17.
 */







var APIService = (function () {
    function APIService(http, logger, loaderService, toasterService) {
        this.http = http;
        this.logger = logger;
        this.loaderService = loaderService;
        this.toasterService = toasterService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.http = http;
        this.logger = logger;
        this.loaderService = loaderService;
        this.toasterService = toasterService;
    }
    APIService.prototype.handleError = function (error) {
        this.loaderService.display(false);
        var message = error.message;
        if (error.name === 'TimeoutError') {
            message = 'Timeout has occurred';
        }
        // this.toasterService.showToaster(message + ', please try again later');
        this.logger.log('APIService/handleError');
        console.log('An error occurred', error.message); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    APIService.prototype.POST = function (payload, url) {
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .timeout(__WEBPACK_IMPORTED_MODULE_5__data_service__["b" /* timeOut */])
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError.bind(this));
    };
    APIService.prototype.GET = function (url) {
        return this.http.get(url, this.headers)
            .map(function (res) { return res.json().data; });
    };
    APIService.prototype.getJSONFromFille = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(url)
                        .toPromise()
                        .then(function (response) { return response.json(); })];
            });
        });
    };
    return APIService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/**
 * Created by lesly on 13.07.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalErrorHandler = (function () {
    function GlobalErrorHandler(injector) {
        this.injector = injector;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        var loaderService = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__loader_service__["a" /* LoaderService */]);
        loaderService.display(false);
        var message = error.message ? error.message : error.toString();
        var toasterService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__toaster_service__["a" /* ToasterService */]);
        toasterService.showToaster(message);
        console.log('flerwajgoerjgpergperwjgpoerjgerpogjerpgjererierjeworqj2pr');
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    };
    return GlobalErrorHandler;
}());
GlobalErrorHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], GlobalErrorHandler);

var _a;
//# sourceMappingURL=error-handler.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/geocoding.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_location_location_class__ = __webpack_require__("../../../../../src/app/shared/class/location/location.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 27.05.17.
 */










var GeocodingService = (function () {
    function GeocodingService(http, logger, loaderService) {
        this.logger = logger;
        this.loaderService = loaderService;
        this.http = http;
        this.logger = logger;
    }
    GeocodingService.prototype.geocode = function (address) {
        var _this = this;
        this.logger.log('GeocodingService/geocode()');
        this.loaderService.display(true);
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_7__data_service__["h" /* geocodeUrl */] + encodeURIComponent(address))
            .map(function (res) { return res.json(); })
            .map(function (result) {
            _this.logger.log('GeocodingService/geocode()/result' + result);
            if (result.status !== 'OK') {
                throw new Error('unable to geocode address');
            }
            var location = new __WEBPACK_IMPORTED_MODULE_1__class_location_location_class__["a" /* LocationClass */]();
            location.address = result.results[0].formatted_address;
            location.latitude = result.results[0].geometry.location.lat;
            location.longitude = result.results[0].geometry.location.lng;
            var viewPort = result.results[0].geometry.viewport;
            location.viewBounds = L.latLngBounds({
                lat: viewPort.southwest.lat,
                lng: viewPort.southwest.lng
            }, {
                lat: viewPort.northeast.lat,
                lng: viewPort.northeast.lng
            });
            _this.loaderService.display(false);
            return location;
        });
    };
    GeocodingService.prototype.getCurrentLocation = function () {
        var _this = this;
        this.logger.log('GeocodingService/getCurrentLocation()');
        // this.loaderService.display(true);
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_7__data_service__["i" /* getIpUrl */])
            .map(function (res) { return res.json().ip; })
            .flatMap(function (ip) { return _this.http.get(__WEBPACK_IMPORTED_MODULE_7__data_service__["j" /* getLocationFromIp */] + ip); })
            .map(function (res) { return res.json(); })
            .map(function (result) {
            var location = new __WEBPACK_IMPORTED_MODULE_1__class_location_location_class__["a" /* LocationClass */]();
            location.address = result.city + ', ' + result.region_code + ' ' + result.zip_code + ', ' + result.country_code;
            location.latitude = result.latitude;
            location.longitude = result.longitude;
            //   this.loaderService.display(false);
            return location;
        });
    };
    GeocodingService.prototype.handleError = function (error) {
        this.logger.log('GeocodingService/handleError() err : ' + error);
        this.loaderService.display(false);
        return Promise.reject(error.message || error);
    };
    return GeocodingService;
}());
GeocodingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], GeocodingService);

var _a, _b, _c;
//# sourceMappingURL=geocoding.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geocoding_service__ = __webpack_require__("../../../../../src/app/shared/services/geocoding.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__geocoding_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__loader_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__toaster_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler__ = __webpack_require__("../../../../../src/app/shared/services/error-handler.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__error_handler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__logger_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lesly on 19.06.17.
 */


var LoaderService = (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    return LoaderService;
}());
LoaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LoaderService);

//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lesly on 09.06.17.
 */


var Logger = (function () {
    function Logger() {
        this.logs = []; // capture logs for testing
        this.str = '';
    }
    Logger.prototype.log = function (message) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() === true) {
            this.logs.push(message);
            console.log(message);
        }
    };
    Logger.prototype.logObj = function (obj) {
        var output = '';
        console.log(output);
        for (var property in obj) {
            console.log(output);
            output += property + ': ' + obj[property] + '; ';
        }
        this.logs.push(output);
        console.log(output);
    };
    Logger.prototype.logJson = function (obj) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() === true) {
            this.logs.push('JSON representation: ' + JSON.stringify(obj));
            console.log('JSON representation: ' + JSON.stringify(obj));
        }
    };
    return Logger;
}());
Logger = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Logger);

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/toaster.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uikit__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 14.07.17.
 */


/* import { MdSnackBar } from '@angular/material';
 */
var ToasterService = (function () {
    function ToasterService() {
    }
    ToasterService.prototype.showToaster = function (msg) {
        __WEBPACK_IMPORTED_MODULE_1_uikit__["notification"].closeAll();
        __WEBPACK_IMPORTED_MODULE_1_uikit__["notification"]({ message: msg, pos: 'bottom-center', timeout: 2000 });
    };
    return ToasterService;
}());
ToasterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ToasterService);

//# sourceMappingURL=toaster.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/// <reference path="typings.d.ts"/>




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\n\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n*{\n  box-sizing: border-box;\n}\n.on-map {\n\n\n}\n\n.leaflet-clickable {\n  cursor: crosshair !important;\n}\n.leaflet-container {\n  cursor: default;\n}\n\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n\nbody, input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n/* . . . */\n/* everywhere else */\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\n\n/* preloader*/\n\n\n\n@-webkit-keyframes sk-rotateplane {\n  0% { -webkit-transform: perspective(120px) }\n  50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n  } 50% {\n      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n    } 100% {\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n      }\n}\n.loading{\n  background-color: #d35400;\n}\n\n/* preloader 2*/\n\n/* ==========================================================================\n   Chrome Frame prompt\n   ========================================================================== */\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\np {\n  line-height: 1.33em;\n  color: #7E7E7E;\n}\nh1 {\n  color: #EEEEEE;\n}\n\n#loader-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n#loader {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n\n  -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n\n  z-index: 1001;\n}\n\n#loader:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #e74c3c;\n\n  -webkit-animation: spin 1s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n#loader:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #f9c922;\n\n  -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n@-webkit-keyframes spin {\n  0%   {\n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n}\n@keyframes spin {\n  0%   {\n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n}\n\n#loader-wrapper .loader-section {\n  position: fixed;\n  top: 0;\n  width: 51%;\n  height: 100%;\n  background: #222222;\n  z-index: 1000;\n  -webkit-transform: translateX(0);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(0);  /* Firefox 16+, IE 10+, Opera */\n}\n\n#loader-wrapper .loader-section.section-left {\n  left: 0;\n}\n\n#loader-wrapper .loader-section.section-right {\n  right: 0;\n}\n\n/* Loaded */\n.loaded #loader-wrapper .loader-section.section-left {\n  -webkit-transform: translateX(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(-100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n.loaded #loader-wrapper .loader-section.section-right {\n  -webkit-transform: translateX(100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n.loaded #loader {\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n.loaded #loader-wrapper {\n  visibility: hidden;\n\n  -webkit-transform: translateY(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateY(-100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.3s 1s ease-out;\n}\n\n/* JavaScript Turned Off */\n.no-js #loader-wrapper {\n  display: none;\n}\n.no-js h1 {\n  color: #222222;\n}\n\n#content {\n  margin: 0 auto;\n  padding-bottom: 50px;\n  width: 80%;\n  max-width: 978px;\n}\n\n\n\n\n\n\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n\n/*\n * Image replacement\n */\n\n.ir {\n  background-color: transparent;\n  border: 0;\n  overflow: hidden;\n  /* IE 6/7 fallback */\n  *text-indent: -9999px;\n}\n\n.ir:before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 150%;\n}\n\n/*\n * Hide from both screenreaders and browsers: h5bp.com/u\n */\n\n.hidden {\n  display: none !important;\n  visibility: hidden;\n}\n\n/*\n * Hide only visually, but have it available for screenreaders: h5bp.com/v\n */\n\n.visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n/*\n * Extends the .visuallyhidden class to allow the element to be focusable\n * when navigated to via the keyboard: h5bp.com/p\n */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n/*\n * Hide visually and from screenreaders, but maintain layout\n */\n\n.invisible {\n  visibility: hidden;\n}\n\n/*\n * Clearfix: contain floats\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    `contenteditable` attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that receive the `clearfix` class.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n */\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \"; /* 1 */\n  display: table; /* 2 */\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n/*\n * For IE 6/7 only\n * Include this rule to trigger hasLayout and contain floats.\n */\n\n.clearfix {\n  *zoom: 1;\n}\n\n/* ==========================================================================\n   EXAMPLE Media Queries for Responsive Design.\n   These examples override the primary ('mobile first') styles.\n   Modify as content requires.\n   ========================================================================== */\n\n@media only screen and (min-width: 35em) {\n  /* Style adjustments for viewports that meet the condition */\n}\n\n@media print,\n(-webkit-min-device-pixel-ratio: 1.25),\n(min-resolution: 120dpi) {\n  /* Style adjustments for high resolution devices */\n}\n\n/* ==========================================================================\n   Print styles.\n   Inlined to avoid required HTTP connection: h5bp.com/r\n   ========================================================================== */\n\n@media print {\n  * {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: h5bp.com/s */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links for images, or javascript/internal links\n   */\n\n  .ir a:after,\n  a[href^=\"javascript:\"]:after,\n  a[href^=\"#\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group; /* h5bp.com/t */\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  @page {\n    margin: 0.5cm;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n/*\n\tOk so you have made it this far, that means you are very keen to on my code.\n\tAnyway I don't really mind it. This is a great way to learn so you actually doing the right thing:)\n\tFollow me @ihatetomatoes\n*/\n", ""]);

// exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map