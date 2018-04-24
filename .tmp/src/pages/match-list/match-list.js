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
import { Config, NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MatchDetailPage } from '../match-detail/match-detail';
import { FirebaseDatabase } from '../../providers/firebase/firebase';
import { SessionDetailPage } from '../session-detail/session-detail';
var MatchListPage = (function () {
    function MatchListPage(navCtrl, fbDb, config, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.fbDb = fbDb;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.matches = fbDb.getMatches();
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
    MatchListPage.prototype.goToMatchTwitter = function (match) {
        this.inAppBrowser.create("https://twitter.com/" + match.host_id, '_blank');
    };
    MatchListPage.prototype.openmatchShare = function () {
    };
    MatchListPage.prototype.openContact = function () {
    };
    MatchListPage = __decorate([
        Component({
            selector: 'page-match-list',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-list/match-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Matches</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content match-list">\n  <ion-list>\n    <ion-grid fixed *ngFor="let match of matches | async">\n          <ion-card class="match-card">\n            <ion-card-header>\n              <button ion-item detail-none (click)="goToMatchDetail(match)">\n                {{match.sport}}\n              </button>\n            </ion-card-header>\n\n            <ion-card-content class="outer-content">\n              <h3>{{ match | json }}</h3>\n            </ion-card-content>\n          </ion-card>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-list/match-list.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            FirebaseDatabase,
            Config,
            InAppBrowser])
    ], MatchListPage);
    return MatchListPage;
}());
export { MatchListPage };
//# sourceMappingURL=match-list.js.map