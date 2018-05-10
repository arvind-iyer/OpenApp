import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component } from '@angular/core';
import { Config, NavController, ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MatchDetailPage } from '../match-detail/match-detail';
import { FirebaseDatabase, FirebaseAuth, FirebaseMessaging } from '../../providers/firebase/firebase';
import { CreateMatchPage } from '../create-match/create-match';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
// import {LoginPage} from '../login/login';
var MatchListPage = /*@__PURE__*/ (function () {
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
    MatchListPage.prototype.getState = function (match) {
        var state;
        if (this.currentUser == null) {
            return;
        }
        if (match.participants[0] == this.currentUser.uid) {
            state = "hosted";
        }
        else if (match.participants.indexOf(this.currentUser.uid) >= 0) {
            state = "joined";
        }
        else if (match.participants.length >= match.max_capacity) {
            state = "full";
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
    return MatchListPage;
}());
export { MatchListPage };



