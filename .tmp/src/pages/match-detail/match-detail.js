var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { FirebaseDatabase, FirebaseAuth } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
var MatchDetailPage = (function () {
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
    MatchDetailPage = __decorate([
        Component({
            selector: 'page-match-detail',template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\match-detail\match-detail.html"*/'  <ion-scroll scrollY="true">\n\n  <ion-card style="height: 100%">\n\n   <img  style="max-height: 25vh" src="../../assets/img/bg/{{match.sport | lowercase}}.jpg"/>\n\n   <ion-card-content padding class="match-detail">\n\n     <ion-card-title>\n\n       {{match.sport}} \n\n     </ion-card-title>\n\n    <div text-center *ngIf="match">\n\n      <!-- <img [src]="getPicture(match.sport)" [alt]="match.host_id"><br> -->\n\n      <button ion-button block *ngIf="canJoin()" (click)="joinMatch()">Join Game</button>\n\n      <ion-item no-lines>\n\n          <ion-icon name="person" item-start></ion-icon>\n\n          <ion-label>Hosted by {{match.host_id}} </ion-label>\n\n      </ion-item>\n\n      <ion-item no-lines>\n\n        <ion-icon name="pin" item-start></ion-icon>\n\n        <ion-label>{{match.location}} </ion-label>\n\n      </ion-item>\n\n      <ion-item no-lines>\n\n          <ion-icon name="time" item-start></ion-icon>\n\n          <ion-label>{{getTime(match.start_time)}}-{{getTime(match.end_time)}}</ion-label>\n\n        </ion-item>\n\n        <ion-item no lines>\n\n          <ion-icon name="calendar" item-start></ion-icon>\n\n          <ion-label>{{getDate(match.start_time)}}</ion-label>\n\n        </ion-item>\n\n        <ion-item no-lines>\n\n            <ion-icon name="medal" item-start></ion-icon>\n\n            <ion-label >Skill Level: {{skillLevel(match)}} </ion-label>\n\n        </ion-item>\n\n        <!-- <ion-item> -->\n\n        <p>{{match.participants.length}} going </p>\n\n        <p *ngIf="hasSpots(match) == 1">{{hasSpots(match)}} spot left</p>\n\n        <p *ngIf="hasSpots(match) > 1">{{hasSpots(match)}} spots left</p>\n\n        <p *ngIf="hasSpots(match) < 1">No spots left</p>\n\n      <!-- </ion-item> -->\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-scroll>'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\match-detail\match-detail.html"*/
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            FirebaseDatabase,
            FirebaseAuth])
    ], MatchDetailPage);
    return MatchDetailPage;
}());
export { MatchDetailPage };
//# sourceMappingURL=match-detail.js.map