var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs-page/tabs-page';
var TutorialPage = (function () {
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
    return TutorialPage;
}());
export { TutorialPage };
//# sourceMappingURL=tutorial.js.map