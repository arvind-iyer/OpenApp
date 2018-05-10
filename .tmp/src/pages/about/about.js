import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { FirebaseAuth } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';
var AboutPage = /*@__PURE__*/ (function () {
    function AboutPage(popoverCtrl, fbAuth) {
        this.popoverCtrl = popoverCtrl;
        this.fbAuth = fbAuth;
        this.data = {};
        this.data.name = this.fbAuth.currentUserDisplayName;
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(PopoverPage);
        popover.present({ ev: event });
    };
    AboutPage.prototype.updateInfo = function () {
        console.log(this.data);
    };
<<<<<<< HEAD
    AboutPage = __decorate([
        Component({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>About</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <form (ngSubmit)="updateInfo()">\n\n      <ion-item>\n\n        <ion-icon name="person" item-start></ion-icon>\n\n        <ion-label >Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="data.name" name="name" value=""></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="calendar" item-start></ion-icon>\n\n        <ion-label >Age</ion-label>\n\n        <ion-input type="number" value="" [(ngModel)]="data.age" name="age"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-icon name="body" item-start></ion-icon>\n\n          <ion-label >Gender</ion-label>\n\n          <ion-select [(ngModel)]="data.gender" name="gender">\n\n            <ion-option value="male" >Male</ion-option>\n\n            <ion-option value="female" >Female</ion-option>\n\n            <ion-option value="other" >Other</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="basketball" item-start></ion-icon>\n\n        <ion-label>Favorite Sport</ion-label>\n\n        <ion-select multiple="true" [(ngModel)]="data.sport" name="sport">\n\n          <ion-option value="tennis">Tennis</ion-option>\n\n          <ion-option value="squash">Squash</ion-option>\n\n          <ion-option value="basketball">Basketball</ion-option>\n\n          <ion-option value="table_tennis">Table Tennis</ion-option>\n\n          <ion-option value="football">Football</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="phone" item-start></ion-icon>\n\n        <ion-label >Phone</ion-label>\n\n        <ion-input type="phone" name="phone" [(ngModel)]="data.phone" name="phone"></ion-input>\n\n      </ion-item>\n\n      <button ion-button submit>Confirm</button>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [PopoverController, FirebaseAuth])
    ], AboutPage);
=======
>>>>>>> 9b754ae5750101e2430dc8b9a2fb5ac31f8dece2
    return AboutPage;
}());
export { AboutPage };



