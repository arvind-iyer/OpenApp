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
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';
var AboutPage = (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(PopoverPage);
        popover.present({ ev: event });
    };
    AboutPage.prototype.updateInfo = function () {
        console.log(this.data);
    };
    AboutPage = __decorate([
        Component({
            selector: 'page-about',template:/*ion-inline-start:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <form (ngSubmit)="updateInfo()">\n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <ion-label >Name</ion-label>\n        <ion-input type="text" [(ngModel)]="data.name" value=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label >Age</ion-label>\n        <ion-input type="number" value="" [(ngModel)]="data.age"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-icon name="body" item-start></ion-icon>\n          <ion-label >Gender</ion-label>\n          <ion-select [(ngModel)]="data.gender">\n            <ion-option value="male" >Male</ion-option>\n            <ion-option value="female" >Female</ion-option>\n            <ion-option value="other" >Other</ion-option>\n          </ion-select>\n        </ion-item>\n\n      <ion-item>\n        <ion-icon name="basketball" item-start></ion-icon>\n        <ion-label>Favorite Sport</ion-label>\n        <ion-select multiple="true" [(ngModel)]="data.sport">\n          <ion-option value="tennis">Tennis</ion-option>\n          <ion-option value="squash">Squash</ion-option>\n          <ion-option value="basketball">Basketball</ion-option>\n          <ion-option value="table_tennis">Table Tennis</ion-option>\n          <ion-option value="football">Football</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="phone" item-start></ion-icon>\n        <ion-label >Phone</ion-label>\n        <ion-input type="phone" name="phone" [(ngModel)]="data.phone"></ion-input>\n      </ion-item>\n      <button ion-button submit>Confirm</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/arvind/coding/entr/hybrid/gotnext/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [PopoverController])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map