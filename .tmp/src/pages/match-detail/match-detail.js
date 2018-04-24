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
import { NavController, NavParams } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
var MatchDetailPage = (function () {
    function MatchDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatchDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data && data.matches) {
                for (var _i = 0, _a = data.matches; _i < _a.length; _i++) {
                    var match = _a[_i];
                    if (match && match.id === _this.navParams.data.matchId) {
                        _this.match = match;
                        break;
                    }
                }
            }
        });
    };
    MatchDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
    };
    MatchDetailPage = __decorate([
        Component({
            selector: 'page-match-detail',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-detail/match-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{match?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="match-detail">\n  <div text-center *ngIf="match">\n    <!-- <img [src]="getPicture(match.sport)" [alt]="match.host_id"><br> -->\n\n    <button ion-button icon-only clear small color="twitter">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="github">\n      <ion-icon name="logo-github"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="instagram">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button>\n  </div>\n\n  <p>{{match?.about}}</p>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-detail/match-detail.html"*/
        }),
        __metadata("design:paramtypes", [ConferenceData, NavController, NavParams])
    ], MatchDetailPage);
    return MatchDetailPage;
}());
export { MatchDetailPage };
//# sourceMappingURL=match-detail.js.map