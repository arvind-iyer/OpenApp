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
    return ScheduleFilterPage;
}());
export { ScheduleFilterPage };



