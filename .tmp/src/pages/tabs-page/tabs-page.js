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
    return TabsPage;
}());
export { TabsPage };



