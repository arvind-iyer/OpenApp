import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseDatabase, FirebaseAuth } from '../../providers/firebase/firebase';
/**
 * Generated class for the CreateMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateMatchPage = /*@__PURE__*/ (function () {
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
            sport: "",
            state: ""
        };
        this.start_time = "";
        this.end_time = "";
        this.date = "";
        this.currentUser = this.fbAuth.currentUser;
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
    return CreateMatchPage;
}());
export { CreateMatchPage };



