import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { FirebaseAuth } from '../../providers/firebase/firebase';
var SupportPage = /*@__PURE__*/ (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl, fbAuth) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.fbAuth = fbAuth;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    SupportPage.prototype.logout = function () {
        console.log("Trying to logout");
        this.fbAuth.logout();
        this.navCtrl.push(LoginPage);
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    return SupportPage;
}());
export { SupportPage };



