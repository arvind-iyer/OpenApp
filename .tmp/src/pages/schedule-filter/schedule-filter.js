import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FirebaseDatabase } from '../../providers/firebase/firebase';
var ScheduleFilterPage = /*@__PURE__*/ (function () {
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
<<<<<<< HEAD
    ScheduleFilterPage = __decorate([
        Component({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\schedule-filter\schedule-filter.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Cancel</button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>\n\n      Filter Sessions\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n  <ion-list>\n\n    <ion-list-header>Types</ion-list-header>\n\n\n\n    <ion-item *ngFor="let state of states" [attr.state]="state.name | lowercase">\n\n      <span item-start class="dot"></span>\n\n      <ion-label>{{state.name}}</ion-label>\n\n      <ion-toggle [(ngModel)]="state.isChecked" color="secondary"></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n\n      Reset All Filters\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\schedule-filter\schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [FirebaseDatabase,
            NavParams,
            ViewController])
    ], ScheduleFilterPage);
=======
>>>>>>> 9b754ae5750101e2430dc8b9a2fb5ac31f8dece2
    return ScheduleFilterPage;
}());
export { ScheduleFilterPage };



