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
import { ActionSheetController, Config, NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ConferenceData } from '../../providers/conference-data';
import { SessionDetailPage } from '../session-detail/session-detail';
import { MatchDetailPage } from '../match-detail/match-detail';
;
var MatchListPage = (function () {
    function MatchListPage(actionSheetCtrl, navCtrl, confData, config, inAppBrowser) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.matches = [];
    }
    MatchListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getmatches().subscribe(function (matches) {
            _this.matches = matches;
        });
    };
    MatchListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
    };
    MatchListPage.prototype.goTomatchDetail = function (match) {
        this.navCtrl.push(MatchDetailPage, { matchId: match.id });
    };
    MatchListPage.prototype.goTomatchTwitter = function (match) {
        this.inAppBrowser.create("https://twitter.com/" + match.twitter, '_blank');
    };
    MatchListPage.prototype.openmatchShare = function (match) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share ' + match.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: function () {
                        console.log('Copy link clicked on https://twitter.com/' + match.twitter);
                        if (window['cordova'] && window['cordova'].plugins.clipboard) {
                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + match.twitter);
                        }
                    }
                },
                {
                    text: 'Share via ...'
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    MatchListPage.prototype.openContact = function (match) {
        var mode = this.config.get('mode');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact ' + match.name,
            buttons: [
                {
                    text: "Email ( " + match.email + " )",
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: function () {
                        window.open('mailto:' + match.email);
                    }
                },
                {
                    text: "Call ( " + match.phone + " )",
                    icon: mode !== 'ios' ? 'call' : null,
                    handler: function () {
                        window.open('tel:' + match.phone);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MatchListPage = __decorate([
        Component({
            selector: 'page-match-list',
            templateUrl: 'match-list.html'
        }),
        __metadata("design:paramtypes", [ActionSheetController,
            NavController,
            ConferenceData,
            Config,
            InAppBrowser])
    ], MatchListPage);
    return MatchListPage;
}());
export { MatchListPage };
//# sourceMappingURL=speaker-list.js.map