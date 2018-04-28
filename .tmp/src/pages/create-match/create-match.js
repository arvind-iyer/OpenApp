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
import { FirebaseDatabase, FirebaseAuth } from '../../providers/firebase/firebase';
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
            sport: ""
        };
        this.start_time = "";
        this.end_time = "";
        this.date = "";
        this.currentUser = this.fbAuth.getCurrentUser();
        console.log(this.currentUser);
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
        this.match.host_id = this.currentUser.displayName;
        this.match.participants.push(this.currentUser.uid);
        console.log(this.match);
        if (this.validateMatch()) {
            console.log("Pushing to firebase");
            this.fbDb.createMatch(this.match);
        }
        this.navCtrl.pop();
    };
    CreateMatchPage = __decorate([
        Component({
            selector: 'page-create-match',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/create-match/create-match.html"*/'<!--\n  Generated template for the CreateMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CreateMatch</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="createMatch()">\n    <ion-item>\n      <ion-label>Location</ion-label>\n      <ion-input type="text" [(ngModel)]="match.location" name="location"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" name="date" [(ngModel)]="date"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Start Time</ion-label>\n      <ion-datetime displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="start_time" name="start_time"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>End Time</ion-label>\n      <ion-datetime displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="end_time" name="end_time"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Max Capacity</ion-label>\n      <ion-input type="number" name="max_cap" [(ngModel)]="match.max_capacity" min="1"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sport</ion-label>\n      <ion-select [(ngModel)]="match.sport" name="sport" >\n        <ion-option value="Basketball">Basketball</ion-option>\n        <ion-option value="Tennis" >Tennis</ion-option>\n        <ion-option value="Table-tennis" >Table-tennis</ion-option>\n        <ion-option value="Squash" >Squash</ion-option>\n        <ion-option value="Football" >Football</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <button ion-button submit>Submit</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/create-match/create-match.html"*/,
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FirebaseAuth,
            FirebaseDatabase])
    ], CreateMatchPage);
    return CreateMatchPage;
}());
export { CreateMatchPage };
//# sourceMappingURL=create-match.js.map