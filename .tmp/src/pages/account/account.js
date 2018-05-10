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
    return AccountPage;
}());
export { AccountPage };



