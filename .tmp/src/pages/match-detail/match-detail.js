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
import { LoginPage } from '../login/login';
var MatchDetailPage = (function () {
    function MatchDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.match = navParams.data;
        if (!this.match.start_time) {
            navCtrl.push(LoginPage);
        }
        console.log(this.match.participants.length);
    }
    MatchDetailPage.prototype.getTime = function (timestamp) {
        var time = new Date(timestamp);
        return (("0" + time.getHours()).slice(-2) + ":" +
            ("0" + time.getMinutes()).slice(-2));
    };
    MatchDetailPage.prototype.ionViewWillEnter = function () {
    };
    MatchDetailPage = __decorate([
        Component({
            selector: 'page-match-detail',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-detail/match-detail.html"*/'<ion-header>\n  <ion-card>\n   <img src="../../assets/img/bg/{{match.sport | lowercase}}.jpg"/>\n   <ion-card-content padding class="match-detail">\n     <ion-card-title>\n       {{match.sport}} \n     </ion-card-title>\n    <div text-center *ngIf="match">\n      <!-- <img [src]="getPicture(match.sport)" [alt]="match.host_id"><br> -->\n      <ion-item no-lines>\n          <ion-label>Host: {{match.host_id}} </ion-label>\n        </ion-item>\n      <ion-item no-lines>\n        <ion-label stacked color>Location: {{match.location}} </ion-label>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label stacked color>No. of Players: {{match.participants}}/{{match.max_capacity}} </ion-label>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label stacked color>Time: {{getTime(match.start_time)}}-{{getTime(match.end_time)}} </ion-label>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label stacked color>Skill Level Required: {{match.skill_level}} </ion-label>\n      </ion-item>\n  </div>\n  </ion-card-content>\n  </ion-card>\n  </ion-header>'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/match-detail/match-detail.html"*/
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MatchDetailPage);
    return MatchDetailPage;
}());
export { MatchDetailPage };
//# sourceMappingURL=match-detail.js.map