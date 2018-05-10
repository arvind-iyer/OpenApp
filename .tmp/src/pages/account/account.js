import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { FirebaseAuth } from '../../providers/firebase/firebase';
var AccountPage = /*@__PURE__*/ (function () {
    function AccountPage(alertCtrl, nav, fbAuth) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.fbAuth = fbAuth;
        this.user = fbAuth.currentUser;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.fbAuth.updateProfile(data.username, "");
            }
        });
        alert.present();
    };
    Object.defineProperty(AccountPage.prototype, "username", {
        get: function () {
            return this.fbAuth.currentUserDisplayName;
        },
        enumerable: true,
        configurable: true
    });
    AccountPage.prototype.changePassword = function () {
    };
    AccountPage.prototype.logout = function () {
        this.fbAuth.logout();
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
<<<<<<< HEAD
    AccountPage = __decorate([
        Component({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\account\account.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Account</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <div padding-top text-center *ngIf="username">\n\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n\n    <h2>{{user.username}}</h2>\n\n\n\n    <ion-list inset>\n\n      <button ion-item (click)="updatePicture()">Update Picture</button>\n\n      <button ion-item (click)="changeUsername()">Change Username</button>\n\n      <button ion-item (click)="changePassword()">Change Password</button>\n\n      <button ion-item (click)="support()">Support</button>\n\n      <button ion-item (click)="logout()">Logout</button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [AlertController, NavController, FirebaseAuth])
    ], AccountPage);
=======
>>>>>>> 9b754ae5750101e2430dc8b9a2fb5ac31f8dece2
    return AccountPage;
}());
export { AccountPage };



