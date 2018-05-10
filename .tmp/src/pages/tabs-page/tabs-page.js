import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { MatchListPage } from '../match-list/match-list';
var TabsPage = /*@__PURE__*/ (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = MatchListPage;
        this.tab2Root = MapPage;
        this.tab3Root = AboutPage;
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
<<<<<<< HEAD
    TabsPage = __decorate([
        Component({template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\tabs-page\tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="gotnext">\n\n  <ion-tab [root]="tab1Root" tabTitle="Matches" tabIcon="basketball" tabUrlPath="matches"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="map"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\tabs-page\tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [NavParams])
    ], TabsPage);
=======
>>>>>>> 9b754ae5750101e2430dc8b9a2fb5ac31f8dece2
    return TabsPage;
}());
export { TabsPage };



