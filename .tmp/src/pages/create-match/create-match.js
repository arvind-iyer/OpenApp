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
/**
 * Generated class for the CreateMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateMatchPage = (function () {
    function CreateMatchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.match = {
            curr_capacity: 0,
            host_id: "",
            location: "",
            max_capacity: 0,
            start_time: 0,
            end_time: 0,
            participants: [],
            skill_level: 0,
            sport: "",
            date: ""
        };
    }
    CreateMatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateMatchPage');
    };
    CreateMatchPage = __decorate([
        Component({
            selector: 'page-create-match',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/create-match/create-match.html"*/'<!--\n  Generated template for the CreateMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CreateMatch</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="createMatch()">\n    <ion-item>\n      <ion-label>Location</ion-label>\n      <ion-input type="text" [(ngModel)]="match.location" name="location"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" name="date" [(ngModel)]="match.date"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Start Time</ion-label>\n      <ion-datetime displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="match.start_time" name="start_time"></ion-datetime>\n    </ion-item>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/create-match/create-match.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], CreateMatchPage);
    return CreateMatchPage;
}());
export { CreateMatchPage };
//# sourceMappingURL=create-match.js.map