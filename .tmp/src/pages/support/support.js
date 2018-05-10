var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { FirebaseAuth } from '../../providers/firebase/firebase';
var SupportPage = (function () {
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
    SupportPage = __decorate([
        Component({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\support\support.html"*/'<ion-header>\n\n\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Support</ion-title>\n\n	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n\n	</div>\n\n\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n\n			</ion-item>\n\n		</ion-list>\n\n\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n\n			Support message is required\n\n		</p>\n\n\n\n		<div padding>\n\n			<button ion-button block type="submit">Submit</button>\n\n		</div>\n\n	</form>\n\n	<button ion-button block (click)="logout()">Log Out</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\support\support.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            AlertController,
            ToastController,
            FirebaseAuth])
    ], SupportPage);
    return SupportPage;
}());
export { SupportPage };
//# sourceMappingURL=support.js.map