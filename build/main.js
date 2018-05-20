webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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





var LoginPage = (function () {
    function LoginPage(navCtrl, fbAuth, toastCtrl, menu, events) {
        this.navCtrl = navCtrl;
        this.fbAuth = fbAuth;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.events = events;
        this.login = { email: '', password: '' };
        this.submitted = false;
        this.checkLoggedIn();
    }
    LoginPage.prototype.onPageDidEnter = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.onPageDidLeave = function () {
        this.menu.enable(true);
    };
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.fbAuth.login(this.login.email, this.login.password);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.checkLoggedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fbAuth.isLoggedIn()];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            this.toastCtrl.create({
                                message: 'Already Logged In',
                                duration: 1500,
                                position: 'bottom'
                            }).present();
                            this.events.publish('user:login', user, Date.now());
                            // this.navCtrl.push(TabsPage);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.png" alt="Got Next">\n	</div>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Email</ion-label>\n				<ion-input [(ngModel)]="login.email" name="email" type="email" #email="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				Email is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Signup</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match_list_match_list__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MapPage } from '../map/map';

var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__match_list_match_list__["a" /* MatchListPage */];
        // tab2Root: any = MapPage;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/tabs-page/tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="gotnext">\n  <ion-tab [root]="tab1Root" tabTitle="Matches" tabIcon="basketball" tabUrlPath="matches"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { TutorialPage } from './../tutorial/tutorial';



var SignupPage = (function () {
    function SignupPage(navCtrl, fbAuth) {
        this.navCtrl = navCtrl;
        this.fbAuth = fbAuth;
        this.signup = { email: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.fbAuth.signup(this.signup.email, this.signup.password);
            // this.fbAuth.login(this.signup.email, this.signup.password);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__about_about__["a" /* AboutPage */]);
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Signup</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/icon.png" alt="Ionic Logo">\n	</div>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Email</ion-label>\n				<ion-input [(ngModel)]="signup.email" name="email" type="email" #email="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				Email is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseAuth */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 236:
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
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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




var MatchDetailPage = (function () {
    function MatchDetailPage(navCtrl, navParams, toast, db, au) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.db = db;
        this.au = au;
        this.host = { name: "" };
        this.match = navParams.data;
        this.checkLoggedIn();
        console.log(this.match.participants.length);
        this.db.afd.object("users/" + this.match.participants[0] + "/about").valueChanges().subscribe(function (data) {
            _this.host = data;
        });
    }
    MatchDetailPage.prototype.checkLoggedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.au.isLoggedIn()];
                    case 1:
                        user = _a.sent();
                        if (user == null) {
                            this.au.logout();
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchDetailPage.prototype.leaveMatch = function () {
        console.log("TODO: Leave Match");
        var uid = this.au.currentUserId;
        this.match.participants = this.match.participants.filter(function (p) { return p !== uid; });
        this.match.state = "available";
        this.db.updateMatch(this.match);
        console.log(this.match, uid);
        // this.db.updateMatch(this.match);
        this.toast.create({
            message: 'Exited game',
            duration: 1500,
            position: 'bottom'
        }).present();
    };
    MatchDetailPage.prototype.openWhatsapp = function () {
        console.log(this.host.phone);
        window.open("whatsapp://send?text=Hello&phone=" + this.host.phone);
    };
    MatchDetailPage.prototype.deleteMatch = function () {
        console.log("TODO: Delete match");
        this.db.deleteMatch(this.match);
        this.toast.create({
            message: 'Deleted game',
            duration: 1500,
            position: 'bottom'
        }).present();
        this.navCtrl.pop();
    };
    MatchDetailPage.prototype.getTime = function (timestamp) {
        var time = new Date(timestamp);
        return (("0" + time.getHours()).slice(-2) + ":" +
            ("0" + time.getMinutes()).slice(-2));
    };
    MatchDetailPage.prototype.getDate = function (timestamp) {
        var time = new Date(timestamp);
        return time.toDateString();
    };
    MatchDetailPage.prototype.hasSpots = function (match) {
        return match.max_capacity - match.participants.length;
    };
    MatchDetailPage.prototype.canJoin = function () {
        return !(this.match.state == "joined" || this.match.state == "hosted");
    };
    MatchDetailPage.prototype.joinMatch = function () {
        var userid = this.au.currentUserId;
        if (this.match.participants.indexOf(userid) < 0) {
            this.match.participants.push(userid);
            this.db.updateMatch(this.match);
            console.log("joined game");
            this.match.state = "joined";
        }
        else {
            console.log("already joined");
        }
    };
    MatchDetailPage.prototype.skillLevel = function (match) {
        if (match.skill_level == 1) {
            return "Beginner";
        }
        else if (match.skill_level == 2) {
            return "Intermediate";
        }
        else if (match.skill_level == 3) {
            return "Professional";
        }
        else {
            return "Open to All";
        }
    };
    MatchDetailPage.prototype.ionViewWillEnter = function () {
        console.log(this.match.state);
    };
    MatchDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-match-detail',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-detail/match-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-scroll scrollY="true">\n  <ion-card style="height: 100%">\n   <img  style="max-height: 25vh" src="../../assets/img/bg/{{match.sport | lowercase}}.jpg"/>\n   <ion-card-content padding class="match-detail">\n     <ion-card-title>\n       {{match.title}} \n     </ion-card-title>\n    <div text-center *ngIf="match">\n      <!-- <img [src]="getPicture(match.sport)" [alt]="match.host_id"><br> -->\n      <button ion-button block *ngIf="canJoin()" (click)="joinMatch()">Join Game</button>\n      <button ion-button block color="danger" *ngIf="match.state == \'joined\'" (click)="leaveMatch()">Leave Game</button>\n      <button ion-button block color="danger" *ngIf="match.state == \'hosted\'" (click)="deleteMatch()">Delete Game</button>\n\n      <ion-item no-lines>\n          <ion-icon name="person" item-start></ion-icon>\n          <ion-label>Hosted by {{host.name}} </ion-label>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-icon name="pin" item-start></ion-icon>\n        <ion-label>{{match.location}} </ion-label>\n      </ion-item>\n      <ion-item no-lines>\n          <ion-icon name="time" item-start></ion-icon>\n          <ion-label>{{getTime(match.start_time)}}-{{getTime(match.end_time)}}</ion-label>\n        </ion-item>\n        <ion-item no lines>\n          <ion-icon name="calendar" item-start></ion-icon>\n          <ion-label>{{getDate(match.start_time)}}</ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-icon name="medal" item-start></ion-icon>\n            <ion-label>Skill Level: {{skillLevel(match)}} </ion-label>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-icon name="call" item-start></ion-icon>\n          <ion-label>{{host.phone}}</ion-label>\n        </ion-item> \n        <!-- <ion-item> -->\n        <p>{{match.participants.length}} going </p>\n        <p *ngIf="hasSpots(match) == 1">{{hasSpots(match)}} spot left</p>\n        <p *ngIf="hasSpots(match) > 1">{{hasSpots(match)}} spots left</p>\n        <p *ngIf="hasSpots(match) < 1">No spots left</p>\n      <!-- </ion-item> -->\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-scroll>\n</ion-content>'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-detail/match-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["b" /* FirebaseDatabase */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseAuth */]])
    ], MatchDetailPage);
    return MatchDetailPage;
}());

//# sourceMappingURL=match-detail.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FirebaseDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FirebaseMessaging; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_messaging__ = __webpack_require__(617);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Storage } from '@ionic/storage';





// import { AboutSettings } from '../../interfaces/match';





var FirebaseDatabase = (function () {
    function FirebaseDatabase(afd, afs) {
        this.afd = afd;
        this.afs = afs;
        this.storage = afs.ref("users");
    }
    FirebaseDatabase.prototype.getMatches = function () {
        return this.afd.list('/matches/', function (ref) {
            return ref.orderByChild("start_time")
                .startAt(new Date().getTime() + 600000);
        }).valueChanges();
    };
    FirebaseDatabase.prototype.getStates = function () {
        return ["joined", "hosted", "full", "available"];
    };
    FirebaseDatabase.prototype.createMatch = function (match) {
        var promise = this.afd.list('/matches/').push(match);
        match.id = promise.key;
        this.afd.list('/matches/').update(promise.key, match);
    };
    FirebaseDatabase.prototype.deleteMatch = function (match) {
        this.afd.list('/matches/').remove(match.id);
    };
    FirebaseDatabase.prototype.updateMatch = function (match) {
        this.afd.list('/matches/').update(match.id, match);
    };
    FirebaseDatabase.prototype.uploadProfileImage = function (user_id, file) {
        console.log(user_id); // just to suppress the non-usage error
        var task = this.storage.child('${user_id}/profile_picture').put(file);
        return task;
        // Use uploadProfileImage(x,y).downloadURL() to get file URL
    };
    FirebaseDatabase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], FirebaseDatabase);
    return FirebaseDatabase;
}());

var FirebaseAuth = (function () {
    function FirebaseAuth(events, afAuth, db) {
        var _this = this;
        this.events = events;
        this.afAuth = afAuth;
        this.db = db;
        this.authState = null;
        afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    FirebaseAuth.prototype.login = function (email, password) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.events.publish('user:login', this.currentUser, Date.now());
    };
    FirebaseAuth.prototype.signup = function (email, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        // this.afAuth.auth.
        this.events.publish('user:signup', this.currentUser, Date.now());
    };
    Object.defineProperty(FirebaseAuth.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAuth.prototype, "currentUser", {
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAuth.prototype, "currentUserObservable", {
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAuth.prototype, "currentUserId", {
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAuth.prototype, "currentUserDisplayName", {
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else {
                return this.authState['displayName'] || 'User has not set name';
            }
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAuth.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    FirebaseAuth.prototype.socialSignIn = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    FirebaseAuth.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        var path = "users/${this.currentUserId}"; // Endpoint on firebase
        var data = {
            email: this.authState.email,
            name: this.authState.displayName
        };
        this.db.afd.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    FirebaseAuth.prototype.isLoggedIn = function () {
        return this.afAuth.authState.pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["first"])()).toPromise();
    };
    FirebaseAuth.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.events.publish('user:logout', this.currentUser, Date.now());
    };
    FirebaseAuth.prototype.loginGoogle = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider());
    };
    FirebaseAuth.prototype.updatePassword = function (newPass) {
        this.afAuth.auth.currentUser.updatePassword(newPass);
    };
    FirebaseAuth.prototype.updateProfile = function (newUserName, photoUrl) {
        if (photoUrl === void 0) { photoUrl = ""; }
        if (newUserName == "") {
            newUserName = this.currentUserDisplayName;
        }
        if (photoUrl == "") {
            photoUrl = this.afAuth.auth.currentUser.photoURL;
        }
        this.afAuth.auth.currentUser.updateProfile({
            displayName: newUserName,
            photoURL: photoUrl
        });
    };
    FirebaseAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], FirebaseDatabase])
    ], FirebaseAuth);
    return FirebaseAuth;
}());

var FirebaseMessaging = (function () {
    function FirebaseMessaging(db, auth) {
        var _this = this;
        this.db = db;
        this.auth = auth;
        this.currentMessage = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.m = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["messaging"]();
        this.receiveMessage();
        this.m.onTokenRefresh(function () {
            _this.m.getToken().then(function (refreshedToken) {
                console.log("Token refreshed");
                _this.updateToken(refreshedToken);
            })
                .catch(function (err) {
                console.error("Unable to retrieve refreshed token", err);
            });
        });
        // navigator.serviceWorker.register('firebase-messaging-sw.js')
        //   .then((registration) => {
        //     this.m.useServiceWorker(registration);
        //   })
        // console.log("Token: ", this.m.getToken());
    }
    FirebaseMessaging.prototype.updateToken = function (token) {
        var user = this.auth.currentUserId;
        var data = { "notifTokens": token };
        this.db.object('users/' + user).update(data);
    };
    FirebaseMessaging.prototype.getPermission = function () {
        var _this = this;
        this.m.requestPermission()
            .then(function () {
            console.log('Notification permission granted');
            return _this.m.getToken();
        })
            .then(function (token) {
            console.log(token);
            _this.updateToken(token);
        })
            .catch(function (err) {
            console.log("Unable to get permission to notify", err);
        });
    };
    FirebaseMessaging.prototype.receiveMessage = function () {
        var _this = this;
        this.m.onMessage(function (payload) {
            console.log("Message received: ", payload);
            _this.currentMessage.next(payload);
        });
        // this.m.setBackgroundMessageHandler((payload) => {
        //   console.log('[firebase-messaging] Received background message ', payload);
        //   var notificationTitle = "Background Message Title";
        //   var notificationOptions  = {
        //     body: "Background Message Body",
        //     icon: "assets/icon.png"
        //   };
        //   return this.m.showNotification(notificationTitle, notificationOptions);
        // })
    };
    FirebaseMessaging = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], FirebaseAuth])
    ], FirebaseMessaging);
    return FirebaseMessaging;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Match } from '../../interfaces/match';

/**
 * Generated class for the CreateMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateMatchPage = (function () {
    function CreateMatchPage(navCtrl, navParams, fbAuth, fbDb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbAuth = fbAuth;
        this.fbDb = fbDb;
        this.match = {
            host_id: "",
            location: "",
            max_capacity: 0,
            start_time: 0,
            end_time: 0,
            participants: [],
            skill_level: 0,
            sport: "",
            state: "",
            title: ""
        };
        this.end_time = "";
        this.date = "";
        this.currentUser = this.fbAuth.currentUser;
        console.log(this.currentUser);
        var start_date = new Date();
        this.match.start_time = start_date.getTime();
        start_date.setHours(start_date.getHours() + 1);
        this.match.end_time = start_date.getTime();
    }
    CreateMatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateMatchPage');
    };
    CreateMatchPage.prototype.setDate = function () {
        var mDate = new Date(this.date);
        var f = this.start_time.indexOf(":");
        var hh = parseInt(this.start_time.substr(0, f));
        var mm = parseInt(this.start_time.substr(f + 1));
        mDate.setHours(hh);
        mDate.setMinutes(mm);
        this.match.start_time = mDate.getTime();
        console.log(this.date, mDate, this.match.start_time, hh, mm);
        f = this.end_time.indexOf(":");
        hh = parseInt(this.end_time.substr(0, f));
        mm = parseInt(this.end_time.substr(f + 1));
        mDate.setHours(hh);
        mDate.setMinutes(mm);
        this.match.end_time = mDate.getTime();
    };
    CreateMatchPage.prototype.validateMatch = function () {
        return (this.match.start_time > 0 &&
            this.match.end_time > this.match.start_time &&
            this.match.location != "" &&
            this.match.max_capacity > 0);
    };
    CreateMatchPage.prototype.createMatch = function () {
        this.setDate();
        this.match.host_id = this.currentUser.uid;
        this.match.participants.push(this.currentUser.uid);
        console.log(this.match);
        if (this.validateMatch()) {
            console.log("Pushing to firebase");
            this.fbDb.createMatch(this.match);
        }
        this.navCtrl.pop();
    };
    CreateMatchPage.prototype.typeSport = function () {
        if (this.match.sport == "Basketball") {
            return 1;
        }
        else if (this.match.sport == "Football") {
            return 2;
        }
        else if (this.match.sport == "Squash") {
            return 3;
        }
        else if (this.match.sport == "Table-Tennis") {
            return 4;
        }
        else if (this.match.sport == "Tennis") {
            return 5;
        }
    };
    CreateMatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-match',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/create-match/create-match.html"*/'<!--\n  Generated template for the CreateMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CreateMatch</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="navCtrl.pop()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="createMatch()">\n    <ion-item>\n      <ion-label>Title</ion-label>\n      <ion-input placeholder="{{match.sport}} match" name="title" [(ngModel)]="match.title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sport</ion-label>\n        <ion-select [(ngModel)]="match.sport" name="sport" >\n          <ion-option value="Basketball">Basketball</ion-option>\n          <ion-option value="Football">Football</ion-option>\n          <ion-option value="Squash">Squash</ion-option>\n          <ion-option value="Table-Tennis">Table-Tennis</ion-option>\n          <ion-option value="Tennis">Tennis</ion-option>\n        </ion-select>\n      </ion-item>\n    \n    <ion-item>\n      <ion-label>Location</ion-label>\n      <ion-select [(ngModel)]="match.location" name="location">\n        <ion-option *ngIf="typeSport() == 1" value="LG1 - Indoor Full Court">LG1 - Indoor Full Court</ion-option>\n        <ion-option *ngIf="typeSport() == 1" value="LG1 - Court A (half court)">LG1 - Court A (half court)</ion-option>\n        <ion-option *ngIf="typeSport() == 1" value="LG1 - Court B (half court">LG1 - Court B (half court)</ion-option>\n        <ion-option *ngIf="typeSport() == 1" value="Seafront - Outdoor Full Court">Seafront - Outdoor Full Court</ion-option>\n        <ion-option *ngIf="typeSport() == 2" value="Seafront - Artificial-turf Football Pitch">Seafront - Artificial-turf Football Pitch</ion-option>\n        <ion-option *ngIf="typeSport() == 2" value="Seafront - Mini-football Pitch">Seafront - Mini-football Pitch</ion-option>\n        <ion-option *ngIf="typeSport() == 3" value="LG4 - Court 3">LG4 - Court 3</ion-option>\n        <ion-option *ngIf="typeSport() == 3" value="LG4 - Court 4">LG4 - Court 4</ion-option>\n        <ion-option *ngIf="typeSport() == 3" value="LG4 - Court 5">LG4 - Court 5</ion-option>\n        <ion-option *ngIf="typeSport() == 4" value="LG1 - Table-Tennis 1">LG1 - Table-Tennis 1</ion-option>\n        <ion-option *ngIf="typeSport() == 4" value="LG1 - Table-Tennis 2">LG1 - Table-Tennis 2</ion-option>\n        <ion-option *ngIf="typeSport() == 4" value="LG1 - Table-Tennis 3">LG1 - Table-Tennis 3</ion-option>\n        <ion-option *ngIf="typeSport() == 4" value="LG1 - Table-Tennis 4">LG1 - Table-Tennis 4</ion-option>\n        <ion-option *ngIf="typeSport() == 4" value="LG1 - Table-Tennis 5">LG1 - Table-Tennis 5</ion-option>\n        <ion-option *ngIf="typeSport() == 4" value="LG1 - Table-Tennis 6">LG1 - Table-Tennis 6</ion-option>\n        <ion-option *ngIf="typeSport() == 5" value="Seafront - Court 1">Seafront - Court 1</ion-option>\n        <ion-option *ngIf="typeSport() == 5" value="Seafront - Court 2">Seafront - Court 2</ion-option>\n        <ion-option *ngIf="typeSport() == 5" value="LG7 - Court 3">LG7 - Court 3</ion-option>\n        <ion-option *ngIf="typeSport() == 5" value="SSQ - Court 4">SSQ - Court 4</ion-option>\n        <ion-option *ngIf="typeSport() == 5" value="Shaw Site - Court 7">Shaw Site - Court 7</ion-option>\n        <ion-option *ngIf="typeSport() == 5" value="Shaw Site - Court 8">Shaw Site - Court 8</ion-option>\n        <ion-option *ngIf="typeSport() == 5" value="Phase III - Court A">Phase III - Court A</ion-option>\n        <ion-option *ngIf="typeSport() == 5" value="Phase III - Court B">Phase III - Court B</ion-option>\n        <ion-option *ngIf="typeSport() == 5" value="Phase III - Court C">Phase III - Court C</ion-option>\n    </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" name="date" [(ngModel)]="date"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Start Time</ion-label>\n      <ion-datetime displayFormat="hh:mm A" pickerFormat="hh:mm A" minuteValues="0,15,30,45" [(ngModel)]="start_time" name="start_time"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>End Time</ion-label>\n      <ion-datetime displayFormat="hh:mm A" pickerFormat="hh:mm A" minuteValues="0,15,30,45" [(ngModel)]="end_time" name="end_time"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Max Capacity</ion-label>\n      <ion-input type="number" name="max_cap" [(ngModel)]="match.max_capacity" min="1"></ion-input>\n    </ion-item>\n    <ion-item>\n    <ion-label>Skill Level</ion-label>\n    <ion-select [(ngModel)]="match.skill_level" name="skill level">\n    <ion-option value="1">Beginner</ion-option>\n    <ion-option value="2">Intermediate</ion-option>\n    <ion-option value="3">Professional</ion-option>\n    <ion-option value="0">Open to All</ion-option>\n  </ion-select>\n</ion-item>\n  <button ion-button block>Submit</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/create-match/create-match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseAuth */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["b" /* FirebaseDatabase */]])
    ], CreateMatchPage);
    return CreateMatchPage;
}());

//# sourceMappingURL=create-match.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(fbd, navParams, viewCtrl) {
        var _this = this;
        this.fbd = fbd;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.states = [];
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.data;
        console.log(excludedTrackNames);
        this.fbd.getStates().forEach(function (stateName) {
            _this.states.push({
                name: stateName.charAt(0).toUpperCase() + stateName.slice(1),
                isChecked: (excludedTrackNames.indexOf(_this.capitalize(stateName)) === -1)
            });
        });
    }
    ScheduleFilterPage.prototype.capitalize = function (s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.states.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.states.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.viewCtrl.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    ScheduleFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancel</button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Sessions\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Types</ion-list-header>\n\n    <ion-item *ngFor="let state of states" [attr.state]="state.name | lowercase">\n      <span item-start class="dot"></span>\n      <ion-label>{{state.name}}</ion-label>\n      <ion-toggle [(ngModel)]="state.isChecked" color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Reset All Filters\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/schedule-filter/schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["b" /* FirebaseDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Camera } from '@ionic-native/camera';
var AccountPage = (function () {
    // private imageSrc: string;
    function AccountPage(alertCtrl, nav, fbAuth) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.fbAuth = fbAuth;
        this.user = fbAuth.currentUser;
    }
    // updatePicture() {
    //   console.log('Clicked to update picture');
    // }
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.fbAuth.updateProfile(data.username, "");
            }
        });
        alert.present();
    };
    Object.defineProperty(AccountPage.prototype, "username", {
        get: function () {
            return this.fbAuth.currentUserDisplayName;
        },
        enumerable: true,
        configurable: true
    });
    AccountPage.prototype.changePassword = function () {
    };
    AccountPage.prototype.logout = function () {
        this.fbAuth.logout();
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    AccountPage.prototype.openGallery = function () {
        // console.log('Clicked to update picture');
        // let cameraOptions = {
        //   sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        //   destinationType: Camera.DestinationType.FILE_URI,      
        //   quality: 100,
        //   targetWidth: 1000,
        //   targetHeight: 1000,
        //   encodingType: Camera.EncodingType.JPEG,      
        //   correctOrientation: true
        // }
        // Camera.getPicture(cameraOptions)
        //   .then(file_uri => this.imageSrc = file_uri, 
        //   err => console.log(err));   
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="username">\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h2>{{user.username}}</h2>\n\n    <ion-list inset>\n      <button ion-item (click)="openGallery()">Update Picture</button>\n      <button ion-item (click)="changeUsername()">Change Username</button>\n      <button ion-item (click)="changePassword()">Change Password</button>\n      <button ion-item (click)="support()">Support</button>\n      <button ion-item (click)="logout()">Logout</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseAuth */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/tutorial/icon_add_event.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Welcome to <b>GotNext</b>\n      </h2>\n      <h2>\n        Create and host your own sporting event\n      </h2>\n    </ion-slide>\n\n    <ion-slide>\n      <!-- <img src="assets/img/tutorial/event-icon.png" class="slide-image"/> -->\n      <h2>Join any sporting events near you</h2>\n    </ion-slide>\n\n  <ion-slide>\n    <h2>Find out which events are full, available, hosted and joined</h2>\n  </ion-slide>\n\n    <ion-slide>\n      <!-- <img src="assets/img/tutorial/smile.png" class="slide-image"/> -->\n      <h2>Have fun and make new friends</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/tutorial/start.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Start?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl, fbAuth) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.fbAuth = fbAuth;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    SupportPage.prototype.logout = function () {
        console.log("Trying to logout");
        this.fbAuth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Support</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.png" alt="GotNext Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Support message is required\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Submit</button>\n		</div>\n	</form>\n	<button ion-button block (click)="logout()">Log Out</button>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseAuth */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_popover_about_popover__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_account__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_schedule_filter_schedule_filter__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_match_detail_match_detail__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_match_list_match_list__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_page_tabs_page__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tutorial_tutorial__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_support_support__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_create_match_create_match__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_storage__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_firebase_config__ = __webpack_require__(626);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { AngularFireStorage } from 'angularfire2/storage';












// import { MapPage } from '../pages/map/map';














// import { File } from '@ionic-native/file';
// import { Transfer } from '@ionic-native/transfer';
// import { FilePath } from '@ionic-native/file-path';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* GotNextApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                // MapPage,
                __WEBPACK_IMPORTED_MODULE_9__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_create_match_create_match__["a" /* CreateMatchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_match_detail_match_detail__["a" /* MatchDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_match_list_match_list__["a" /* MatchListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_support_support__["a" /* SupportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_25__providers_firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* GotNextApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_match_list_match_list__["a" /* MatchListPage */], name: 'MatchList', segment: 'matchList' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_match_detail_match_detail__["a" /* MatchDetailPage */], name: 'MatchDetail', segment: 'matchDetail/:matchId' },
                        // { component: MapPage, name: 'Map', segment: 'map' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* GotNextApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                // MapPage,
                __WEBPACK_IMPORTED_MODULE_9__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_match_detail_match_detail__["a" /* MatchDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_match_list_match_list__["a" /* MatchListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_create_match_create_match__["a" /* CreateMatchPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_support_support__["a" /* SupportPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__["b" /* FirebaseDatabase */],
                __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__["a" /* FirebaseAuth */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_storage__["a" /* AngularFireStorage */],
                __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__["c" /* FirebaseMessaging */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GotNextApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_match_list_match_list__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_support_support__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_firebase_firebase__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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







// import { MapPage } from '../pages/map/map';






var GotNextApp = (function () {
    function GotNextApp(events, fbAuth, fcm, menu, platform, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.fbAuth = fbAuth;
        this.fcm = fcm;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Matches', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_10__pages_match_list_match_list__["a" /* MatchListPage */], index: 0, icon: 'basketball' },
            // { title: 'Map', name: 'TabsPage', component: TabsPage, tabComponent: MapPage, index: 1, icon: 'map' },
            { title: 'About', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], index: 1, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Logout', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        fcm.getPermission();
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        if (this.checkLoggedIn()) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */];
            this.enableMenu(this.fbAuth.authenticated);
        }
        // load the conference data
        // decide which menu items should be hidden by current login status stored in local storage
        this.listenToLoginEvents();
    }
    GotNextApp.prototype.checkLoggedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fbAuth.isLoggedIn()];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            this.events.publish('user:login', user, Date.now());
                            // this.navCtrl.push(TabsPage);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GotNextApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.fbAuth.logout();
        }
    };
    GotNextApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    GotNextApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */]);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            console.log("User has logged out");
            _this.enableMenu(false);
            _this.nav.setRoot('LoginPage');
        });
    };
    GotNextApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    GotNextApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    GotNextApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], GotNextApp.prototype, "nav", void 0);
    GotNextApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/app/app.template.html"*/'<ion-split-pane>\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Show Tutorial\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Show Tutorial\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_12__providers_firebase_firebase__["a" /* FirebaseAuth */],
            __WEBPACK_IMPORTED_MODULE_12__providers_firebase_firebase__["c" /* FirebaseMessaging */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], GotNextApp);
    return GotNextApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2')\">Documentation</button>\n      <button ion-item (click)=\"close('http://showcase.ionicframework.com')\">Showcase</button>\n      <button ion-item (click)=\"close('https://github.com/ionic-team/ionic')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyBjVDCO75CQBPuGDmlDapBIK-g1BAJL0Ew",
    authDomain: "sportbuddy-dc1d6.firebaseapp.com",
    databaseURL: "https://sportbuddy-dc1d6.firebaseio.com",
    projectId: "sportbuddy-dc1d6",
    storageBucket: "sportbuddy-dc1d6.appspot.com",
    messagingSenderId: "853900390131"
};

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__match_list_match_list__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(fbAuth, navCtrl) {
        var _this = this;
        this.fbAuth = fbAuth;
        this.navCtrl = navCtrl;
        this.data = {};
        var uid = this.fbAuth.currentUserId;
        this.fbAuth.db.afd.object("users/" + uid + "/about").valueChanges().subscribe(function (d) {
            _this.data = d;
            // console.log(d);
        });
    }
    AboutPage.prototype.updateInfo = function () {
        console.log(this.data);
        var uid = this.fbAuth.currentUserId;
        this.fbAuth.db.afd.object("users/" + uid).set({ about: this.data });
        this.fbAuth.updateProfile(this.data.name);
    };
    AboutPage.prototype.goNextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__match_list_match_list__["a" /* MatchListPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/about/about.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>About</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n<ion-content>\n    <form (ngSubmit)="updateInfo()">\n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <ion-label >Full Name</ion-label>\n        <ion-input type="text" [(ngModel)]="data.name" name="name" value=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label >Age</ion-label>\n        <ion-input type="number" value="" [(ngModel)]="data.age" name="age"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-icon name="body" item-start></ion-icon>\n          <ion-label >Gender</ion-label>\n          <ion-select [(ngModel)]="data.gender" name="gender">\n            <ion-option value="male" >Male</ion-option>\n            <ion-option value="female" >Female</ion-option>\n            <ion-option value="other" >Other</ion-option>\n          </ion-select>\n        </ion-item>\n\n      <ion-item>\n        <ion-icon name="basketball" item-start></ion-icon>\n        <ion-label>Favorite Sport(s)</ion-label>\n        <ion-select multiple="true" [(ngModel)]="data.sport" name="sport">\n          <ion-option value="tennis">Tennis</ion-option>\n          <ion-option value="squash">Squash</ion-option>\n          <ion-option value="basketball">Basketball</ion-option>\n          <ion-option value="table_tennis">Table Tennis</ion-option>\n          <ion-option value="football">Football</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n        <ion-label >Phone</ion-label>\n        <ion-input type="phone" name="phone" [(ngModel)]="data.phone" name="phone"></ion-input>\n      </ion-item>\n      <button ion-button block (click)="goNextPage()">Confirm </button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__["a" /* FirebaseAuth */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match_detail_match_detail__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_match_create_match__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_filter_schedule_filter__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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







// import {LoginPage} from '../login/login';
var MatchListPage = (function () {
    function MatchListPage(navCtrl, modalCtrl, fbDb, fbAuth, fbm, config, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.fbDb = fbDb;
        this.fbAuth = fbAuth;
        this.fbm = fbm;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.shownMatches = [];
        this.excludeStates = [];
        this.loadMatches();
    }
    MatchListPage.prototype.loadMatches = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.fbAuth.isLoggedIn()];
                    case 1:
                        _a.currentUser = _b.sent();
                        if (this.currentUser) {
                            this.matches = this.fbDb.getMatches();
                            this.matches.subscribe(function (matches) {
                                _this.shownMatches = matches;
                            });
                        }
                        else {
                            console.log("Leaving from here");
                            this.fbAuth.logout();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchListPage.prototype.ionViewDidLoad = function () {
        console.log(this.matches);
    };
    MatchListPage.prototype.goToMatchDetail = function (match) {
        console.log(match);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__match_detail_match_detail__["a" /* MatchDetailPage */], match);
    };
    MatchListPage.prototype.getTime = function (timestamp) {
        var time = new Date(timestamp);
        return (("0" + time.getHours()).slice(-2) + ":" +
            ("0" + time.getMinutes()).slice(-2));
    };
    MatchListPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeStates);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeStates = data;
                console.log(_this.excludeStates);
                _this.updateMatchList();
            }
        });
    };
    MatchListPage.prototype.updateMatchList = function () {
        var _this = this;
        this.shownMatches = [];
        this.matches.subscribe(function (matches) {
            matches.forEach(function (m) {
                var s = _this.getState(m);
                if (_this.excludeStates.indexOf(_this.capitalize(s)) === -1) {
                    _this.shownMatches.push(m);
                }
            });
        });
    };
    MatchListPage.prototype.capitalize = function (s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
    MatchListPage.prototype.getDate = function (timestamp) {
        return (new Date(timestamp)).toDateString();
    };
    MatchListPage.prototype.getState = function (match) {
        var state;
        if (this.currentUser == null) {
            return;
        }
        if (match.participants[0] == this.currentUser.uid) {
            state = "hosted";
        }
        else if (match.participants.indexOf(this.currentUser.uid) >= 0) {
            state = "joined";
        }
        else if (match.participants.length >= match.max_capacity) {
            state = "full";
        }
        else {
            state = "available";
        }
        if (match) {
            match.state = state;
        }
        return state;
    };
    MatchListPage.prototype.openCreateMatchModal = function () {
        var cmModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__create_match_create_match__["a" /* CreateMatchPage */]);
        cmModal.present();
    };
    MatchListPage.prototype.deleteMatch = function (match) {
        var ms = [];
        this.matches.subscribe(function (data) {
            ms = data;
            var x = ms.filter(function (x) {
                return x.start_time == match.start_time && x.end_time == match.end_time;
            });
            console.log(x.length > 0 && x.keys().next().value);
        });
    };
    MatchListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match-list',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-list/match-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Matches</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content match-list card-background-page" >\n  <ion-item *ngFor="let match of shownMatches" #slidingItem [attr.state]="getState(match)" (click)="goToMatchDetail(match)" >\n    <ion-card>\n      <img src="assets/img/bg/{{match.sport | lowercase}}.jpg"/>\n      <div class="card-text">\n        <div class="card-title">{{match.title}}</div>\n        <div class="card-subtitle sport"><ion-icon name="basketball"></ion-icon>{{match.sport}}</div>\n        <div class="card-subtitle location"><ion-icon name="pin"></ion-icon> {{match.location}}</div>\n        <div class="card-subtitle date"><ion-icon name="calendar"></ion-icon>{{getDate(match.start_time)}}</div>\n        <div class="card-subtitle time"><ion-icon name=time></ion-icon>{{getTime(match.start_time)}}-{{getTime(match.end_time)}} </div>\n      </div>\n    </ion-card>\n  </ion-item>\n  <ion-fab bottom right>\n    <button ion-fab (click)="openCreateMatchModal()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-list/match-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["b" /* FirebaseDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseAuth */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["c" /* FirebaseMessaging */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MatchListPage);
    return MatchListPage;
}());

//# sourceMappingURL=match-list.js.map

/***/ })

},[370]);
//# sourceMappingURL=main.js.map