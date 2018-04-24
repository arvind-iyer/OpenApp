var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { ConferenceApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { MatchDetailPage } from '../pages/match-detail/match-detail';
import { MatchListPage } from '../pages/match-list/match-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { FirebaseDatabase, FirebaseAuth } from '../providers/firebase/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../providers/firebase/config';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                ConferenceApp,
                AboutPage,
                AccountPage,
                LoginPage,
                MapPage,
                PopoverPage,
                SchedulePage,
                ScheduleFilterPage,
                SessionDetailPage,
                SignupPage,
                MatchDetailPage,
                MatchListPage,
                TabsPage,
                TutorialPage,
                SupportPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                AngularFireDatabaseModule,
                AngularFireModule.initializeApp(firebaseConfig),
                IonicModule.forRoot(ConferenceApp, {}, {
                    links: [
                        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
                        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
                        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        { component: MatchListPage, name: 'MatchList', segment: 'matchList' },
                        { component: MatchDetailPage, name: 'MatchDetail', segment: 'matchDetail/:matchId' },
                        { component: MapPage, name: 'Map', segment: 'map' },
                        { component: AboutPage, name: 'About', segment: 'about' },
                        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
                        { component: SupportPage, name: 'SupportPage', segment: 'support' },
                        { component: LoginPage, name: 'LoginPage', segment: 'login' },
                        { component: AccountPage, name: 'AccountPage', segment: 'account' },
                        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
                    ]
                }),
                IonicStorageModule.forRoot()
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                ConferenceApp,
                AboutPage,
                AccountPage,
                LoginPage,
                MapPage,
                PopoverPage,
                SchedulePage,
                ScheduleFilterPage,
                SessionDetailPage,
                SignupPage,
                MatchDetailPage,
                MatchListPage,
                TabsPage,
                TutorialPage,
                SupportPage
            ],
            providers: [
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                ConferenceData,
                UserData,
                InAppBrowser,
                SplashScreen,
                FirebaseDatabase,
                FirebaseAuth,
                AngularFireAuth
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map