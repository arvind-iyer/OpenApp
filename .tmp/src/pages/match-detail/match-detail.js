import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { FirebaseDatabase, FirebaseAuth } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
var MatchDetailPage = /*@__PURE__*/ (function () {
    function MatchDetailPage(navCtrl, navParams, db, au) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.au = au;
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
    MatchDetailPage.prototype.getDate = function (timestamp) {
        var time = new Date(timestamp);
        return time.toDateString();
    };
    MatchDetailPage.prototype.hasSpots = function (match) {
        return match.max_capacity - match.participants.length;
    };
    MatchDetailPage.prototype.canJoin = function () {
        return !(this.match.state == "joined" || this.match.state == "hosted");
    };
    MatchDetailPage.prototype.joinMatch = function () {
        var userid = this.au.currentUserId;
        if (this.match.participants.indexOf(userid) < 0) {
            this.match.participants.push(userid);
            this.db.updateMatch(this.match);
            console.log("joined game");
        }
        else {
            console.log("already joined");
        }
    };
    MatchDetailPage.prototype.skillLevel = function (match) {
        if (match.skill_level == 1) {
            return "Beginner";
        }
        else if (match.skill_level == 2) {
            return "Intermediate";
        }
        else if (match.skill_level == 3) {
            return "Professional";
        }
        else {
            return "Any";
        }
    };
    MatchDetailPage.prototype.ionViewWillEnter = function () {
        console.log(this.match.state);
    };
    return MatchDetailPage;
}());
export { MatchDetailPage };



