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
import { FirebaseDatabase, FirebaseAuth } from '../../providers/firebase/firebase';
import { SessionDetailPage } from '../session-detail/session-detail';
import { CreateMatchPage } from '../create-match/create-match';
var MatchListPage = (function () {
    function MatchListPage(navCtrl, modalCtrl, fbDb, fbAuth, config, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.fbDb = fbDb;
        this.fbAuth = fbAuth;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.currentUser = { displayName: "" };
        this.matches = fbDb.getMatches();
        console.log(this.matches);
        this.currentUser = fbAuth.getCurrentUser();
    }
    MatchListPage.prototype.ionViewDidLoad = function () {
        console.log(this.matches);
    };
    MatchListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
    };
    MatchListPage.prototype.goToMatchDetail = function (match) {
        this.navCtrl.push(MatchDetailPage, { matchId: match.id });
    };
    MatchListPage.prototype.getTime = function (timestamp) {
        var time = new Date(timestamp);
        return (("0" + time.getHours()).slice(-2) + ":" +
            ("0" + time.getMinutes()).slice(-2));
    };
    MatchListPage.prototype.getDate = function (timestamp) {
        return (new Date(timestamp)).toDateString();
    };
    MatchListPage.prototype.getState = function (match) {
        var state;
        if (match.host_id == this.currentUser.displayName) {
            state = "hosted";
        }
        else if (match.participants.length >= match.max_capacity) {
            state = "full";
        }
        else if (match.participants.indexOf(this.currentUser.uid) >= 0) {
            state = "joined";
        }
        else {
            state = "available";
        }
        return state;
    };
    MatchListPage.prototype.openCreateMatchModal = function () {
        var cmModal = this.modalCtrl.create(CreateMatchPage);
        cmModal.present();
    };
    MatchListPage = __decorate([
        Component({
            selector: 'page-match-list',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-list/match-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Matches</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content match-list">\n  <ion-list #scheduleList>\n      <ion-item-sliding *ngFor="let match of matches | async" #slidingItem [attr.state]="getState(match)" >\n        <button ion-item (click)="goToMatchDetail(match)">\n          <h2>{{match.sport}}</h2>\n          <h5>{{getDate(match.start_time)}}</h5>\n          <p>\n            {{getTime(match.start_time)}}-{{getTime(match.end_time)}} \n          </p>\n          \n          <ion-row>\n            <ion-col col-1>\n              <ion-icon name="pin" class="icon" item-left></ion-icon>\n            </ion-col>\n            <ion-col col-11 >\n              <p class="icontext">{{match.location}}</p>\n            </ion-col>\n          </ion-row>\n          \n          <ion-note>Hosted By: {{match.host_id}}</ion-note>\n        </button>\n\n        <ion-item-options>\n          <button ion-button color="favorite"  *ngIf="segment === \'all\'">\n            Favorite\n          </button>\n          <button ion-button color="danger" *ngIf="segment === \'favorites\'">\n            Remove\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n\n  </ion-list>\n  <ion-fab bottom right>\n    <button ion-fab (click)="openCreateMatchModal()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-list/match-list.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            ModalController,
            FirebaseDatabase,
            FirebaseAuth,
            Config,
            InAppBrowser])
    ], MatchListPage);
    return MatchListPage;
}());
export { MatchListPage };
//# sourceMappingURL=match-list.js.map