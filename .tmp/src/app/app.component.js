import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { MatchListPage } from '../pages/match-list/match-list';
import { SupportPage } from '../pages/support/support';
import { FirebaseAuth } from '../providers/firebase/firebase';
var GotNextApp = /*@__PURE__*/ (function () {
    function GotNextApp(events, fbAuth, menu, platform, storage, splashScreen) {
        this.events = events;
        this.fbAuth = fbAuth;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Matches', name: 'TabsPage', component: TabsPage, tabComponent: MatchListPage, index: 0, icon: 'basketball' },
            { title: 'Map', name: 'TabsPage', component: TabsPage, tabComponent: MapPage, index: 1, icon: 'map' },
            { title: 'About', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 2, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
            { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
            { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
            { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
        ];
        this.rootPage = LoginPage;
        // // Check if the user has already seen the tutorial
        // this.storage.get('hasSeenTutorial')
        //   .then((hasSeenTutorial) => {
        //     if (hasSeenTutorial) {
        //       this.rootPage = LoginPage;
        //     } else {
        //       this.rootPage = TutorialPage;
        //     }
        //     this.platformReady()
        //   });
        if (fbAuth.authenticated) {
            this.rootPage = TabsPage;
        }
        // load the conference data
        // decide which menu items should be hidden by current login status stored in local storage
        this.enableMenu(this.fbAuth.authenticated);
        this.listenToLoginEvents();
    }
    GotNextApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.fbAuth.logout();
        }
    };
    GotNextApp.prototype.openTutorial = function () {
        this.nav.setRoot(TutorialPage);
    };
    GotNextApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
            _this.nav.setRoot('LoginPage');
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            console.log("User has logged out");
            _this.enableMenu(false);
        });
    };
    GotNextApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    GotNextApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    GotNextApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    return GotNextApp;
}());
export { GotNextApp };



