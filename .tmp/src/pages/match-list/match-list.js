var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Config, NavController, ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MatchDetailPage } from '../match-detail/match-detail';
import { FirebaseDatabase, FirebaseAuth, FirebaseMessaging } from '../../providers/firebase/firebase';
import { CreateMatchPage } from '../create-match/create-match';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
// import {LoginPage} from '../login/login';
var MatchListPage = (function () {
    function MatchListPage(navCtrl, modalCtrl, fbDb, fbAuth, fbm, config, inAppBrowser) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.fbDb = fbDb;
        this.fbAuth = fbAuth;
        this.fbm = fbm;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.shownMatches = [];
        this.excludeStates = [];
        this.fbAuth.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.matches = fbDb.getMatches();
                _this.matches.subscribe(function (matches) {
                    _this.shownMatches = matches;
                });
                console.log(_this.matches);
            }
        });
        this.currentUser = fbAuth.currentUser;
    }
    MatchListPage.prototype.ionViewDidLoad = function () {
        console.log(this.matches);
    };
    MatchListPage.prototype.goToMatchDetail = function (match) {
        console.log(match);
        this.navCtrl.push(MatchDetailPage, match);
    };
    MatchListPage.prototype.getTime = function (timestamp) {
        var time = new Date(timestamp);
        return (("0" + time.getHours()).slice(-2) + ":" +
            ("0" + time.getMinutes()).slice(-2));
    };
    MatchListPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeStates);
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
    MatchListPage.prototype.isJoined = function (match) {
        var joined = false;
        console.log(match.participants);
        for (var p in match.participants) {
            if (p == this.currentUser.uid) {
                joined = true;
            }
        }
        return joined;
    };
    MatchListPage.prototype.getState = function (match) {
        var state;
        if (this.currentUser == null) {
            return;
        }
        if (match.participants[0] == this.currentUser.uid) {
            state = "hosted";
        }
        else if (match.participants.length >= match.max_capacity) {
            state = "full";
        }
        else if (this.isJoined(match)) {
            state = "joined";
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
        var cmModal = this.modalCtrl.create(CreateMatchPage);
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
        Component({
            selector: 'page-match-list',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-list/match-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Matches</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content match-list card-background-page" >\n  <ion-item *ngFor="let match of shownMatches" #slidingItem [attr.state]="getState(match)" (click)="goToMatchDetail(match)" >\n    <ion-card>\n      <img src="../../assets/img/bg/{{match.sport | lowercase}}.jpg"/>\n      <div class="card-text">\n        <div class="card-title">{{match.sport}}</div>\n        <div class="card-subtitle">{{match.location}}</div>\n        <div class="card-subtitle2">{{getTime(match.start_time)}}-{{getTime(match.end_time)}} </div>\n      </div>\n    </ion-card>\n  </ion-item>\n  <ion-fab bottom right>\n    <button ion-fab (click)="openCreateMatchModal()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-list/match-list.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            ModalController,
            FirebaseDatabase,
            FirebaseAuth,
            FirebaseMessaging,
            Config,
            InAppBrowser])
    ], MatchListPage);
    return MatchListPage;
}());
export { MatchListPage };
//# sourceMappingURL=match-list.js.map