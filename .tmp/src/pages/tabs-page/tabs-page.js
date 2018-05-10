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
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { MatchListPage } from '../match-list/match-list';
var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = MatchListPage;
        this.tab2Root = MapPage;
        this.tab3Root = AboutPage;
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Component({template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\tabs-page\tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="gotnext">\n\n  <ion-tab [root]="tab1Root" tabTitle="Matches" tabIcon="basketball" tabUrlPath="matches"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="map"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\tabs-page\tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [NavParams])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs-page.js.map