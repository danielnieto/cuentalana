webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-success\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-item\">\n        <h1 class=\"title is-4 has-text-weight-light has-text-white\">Cuentalana</h1>\n    </div>\n</nav>\n<section class=\"section\">\n    <div class=\"container-fluid\">\n        <div class=\"columns\">\n            <div class=\"column\">\n                <div class=\"card\">\n                    <header class=\"card-header\">\n                        <p class=\"card-header-title is-size-5\">\n                            Billetes\n                        </p>\n                    </header>\n                    <div class=\"card-content\">\n                        <div class=\"content\">\n                            <div class=\"field\" *ngFor=\"let denomination of bills\">\n                                <label class=\"label has-text-weight-light\">{{denomination.value | currency:'USD':true:'1.0-2'}}</label>\n                                <div class=\"control\">\n                                    <input appOnlyNumber class=\"input has-text-weight-light\" min=\"0\" type=\"number\" [(ngModel)]=\"denomination.quantity\" placeholder=\"0\" #inputElement (focus)=\"inputElement.select()\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"column\">\n                <div class=\"card\">\n                    <header class=\"card-header\">\n                        <p class=\"card-header-title is-size-5\">\n                            Monedas\n                        </p>\n                    </header>\n                    <div class=\"card-content\">\n                        <div class=\"content\">\n                            <div class=\"field\" *ngFor=\"let denomination of coins\">\n                                <label class=\"label has-text-weight-light\">{{denomination.value | currency:'USD':true:'1.0-2'}}</label>\n                                <div class=\"control\">\n                                    <input appOnlyNumber class=\"input has-text-weight-light\" min=\"0\" type=\"number\" [(ngModel)]=\"denomination.quantity\" placeholder=\"0\" #inputElement (focus)=\"inputElement.select()\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"column is-half\">\n                <div class=\"box is-radiusless\">\n                    <div class=\"content has-text-success is-size-2\">\n                        Total:\n                        <span class=\"has-text-weight-bold\">{{sum() | currency:'USD':true:'1.2-2'}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__denomination__ = __webpack_require__("../../../../../src/app/denomination.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.bills = [
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](1000, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](500, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](200, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](100, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](50, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](20, null)
        ];
        this.coins = [
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](50, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](20, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](10, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](5, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](2, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](1, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](0.5, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](0.2, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](0.1, null),
            new __WEBPACK_IMPORTED_MODULE_1__denomination__["a" /* Denomination */](0.05, null)
        ];
    }
    AppComponent.prototype.sum = function () {
        var billsSum = 0;
        this.bills.forEach(function (denomination) {
            billsSum += denomination.value * denomination.quantity;
        });
        var coinsSum = 0;
        this.coins.forEach(function (denomination) {
            coinsSum += denomination.value * denomination.quantity;
        });
        return billsSum + coinsSum;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__only_number_directive__ = __webpack_require__("../../../../../src/app/only-number.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__only_number_directive__["a" /* OnlyNumberDirective */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/denomination.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Denomination; });
var Denomination = (function () {
    function Denomination(value, quantity) {
        this.value = value;
        this.quantity = quantity;
    }
    return Denomination;
}());



/***/ }),

/***/ "../../../../../src/app/only-number.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyNumberDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyNumberDirective = (function () {
    function OnlyNumberDirective(el) {
        this.el = el;
    }
    OnlyNumberDirective.prototype.onKeyDown = function (event) {
        var e = event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, up and down
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyNumberDirective.prototype, "onKeyDown", null);
    OnlyNumberDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appOnlyNumber]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], OnlyNumberDirective);
    return OnlyNumberDirective;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map