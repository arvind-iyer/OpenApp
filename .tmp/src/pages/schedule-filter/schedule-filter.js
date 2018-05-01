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
import { NavParams, ViewController } from 'ionic-angular';
import { FirebaseDatabase } from '../../providers/firebase/firebase';
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
        Component({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancel</button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Sessions\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Types</ion-list-header>\n\n    <ion-item *ngFor="let state of states" [attr.state]="state.name | lowercase">\n      <span item-start class="dot"></span>\n      <ion-label>{{state.name}}</ion-label>\n      <ion-toggle [(ngModel)]="state.isChecked" color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Reset All Filters\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/schedule-filter/schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [FirebaseDatabase,
            NavParams,
            ViewController])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());
export { ScheduleFilterPage };
//# sourceMappingURL=schedule-filter.js.map