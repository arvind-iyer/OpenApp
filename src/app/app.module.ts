// import { AngularFireStorage } from 'angularfire2/storage';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { GotNextApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SignupPage } from '../pages/signup/signup';
import { MatchDetailPage } from '../pages/match-detail/match-detail';
import { MatchListPage } from '../pages/match-list/match-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { CreateMatchPage } from '../pages/create-match/create-match';

import { FirebaseDatabase, FirebaseAuth } from '../providers/firebase/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorage} from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';

import { firebaseConfig } from '../providers/firebase/config';


@NgModule({
  declarations: [
    GotNextApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    ScheduleFilterPage,
    CreateMatchPage,
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
    IonicModule.forRoot(GotNextApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
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
    GotNextApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    ScheduleFilterPage,
    SignupPage,
    MatchDetailPage,
    MatchListPage,
    TabsPage,
    CreateMatchPage,
    TutorialPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    SplashScreen,
    FirebaseDatabase,
    FirebaseAuth,
    AngularFireStorage,
    AngularFireAuth    
  ]
})
export class AppModule { }
