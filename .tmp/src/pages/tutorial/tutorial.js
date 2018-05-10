import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs-page/tabs-page';
var TutorialPage = /*@__PURE__*/ (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(TabsPage).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
<<<<<<< HEAD
    __decorate([
        ViewChild('slides'),
        __metadata("design:type", Slides)
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Component({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\tutorial\tutorial.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/icon_add_event.png" class="slide-image"/>\n\n      <h2 class="slide-title">\n\n        Welcome to <b>GotNext</b>\n\n      </h2>\n\n      <h2>\n\n        CREATE YOUR OWN SPORTING EVENTS\n\n      </h2>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/tutorial/event-icon.png" class="slide-image"/>\n\n      <h2>JOIN ANY EVENTS AROUND YOU</h2>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/tutorial/smile.png" class="slide-image"/>\n\n      <h2>HAVE FUN</h2>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/tutorial/start.png" class="slide-image"/>\n\n      <h2 class="slide-title">Ready to Start?</h2>\n\n      <button ion-button icon-end large clear (click)="startApp()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            MenuController,
            Storage])
    ], TutorialPage);
=======
>>>>>>> 9b754ae5750101e2430dc8b9a2fb5ac31f8dece2
    return TutorialPage;
}());
export { TutorialPage };



