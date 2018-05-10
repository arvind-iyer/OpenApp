import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FirebaseAuth } from '../../providers/firebase/firebase';
import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
var LoginPage = /*@__PURE__*/ (function () {
    function LoginPage(navCtrl, fbAuth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.fbAuth = fbAuth;
        this.toastCtrl = toastCtrl;
        this.login = { email: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.fbAuth.login(this.login.email, this.login.password);
            this.navCtrl.push(TabsPage);
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        if (this.fbAuth.authenticated) {
            this.toastCtrl.create({
                message: 'Already Logged In',
                duration: 1500,
                position: 'bottom'
            }).present();
            this.navCtrl.push(TabsPage);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(SignupPage);
    };
<<<<<<< HEAD
    LoginPage = __decorate([
        Component({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Login</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic logo">\n\n	</div>\n\n\n\n	<form #loginForm="ngForm" novalidate>\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Email</ion-label>\n\n				<ion-input [(ngModel)]="login.email" name="email" type="email" #email="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n\n				Email is required\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Password</ion-label>\n\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n				Password is required\n\n			</p>\n\n		</ion-list>\n\n\n\n		<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n\n			</ion-col>\n\n			<ion-col>\n\n				<button ion-button (click)="onSignup()" color="light" block>Signup</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [NavController, FirebaseAuth, ToastController])
    ], LoginPage);
=======
>>>>>>> 9b754ae5750101e2430dc8b9a2fb5ac31f8dece2
    return LoginPage;
}());
export { LoginPage };



