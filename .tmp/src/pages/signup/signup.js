import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseAuth } from '../../providers/firebase/firebase';
import { TabsPage } from '../tabs-page/tabs-page';
var SignupPage = /*@__PURE__*/ (function () {
    function SignupPage(navCtrl, fbAuth) {
        this.navCtrl = navCtrl;
        this.fbAuth = fbAuth;
        this.signup = { email: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.fbAuth.signup(this.signup.email, this.signup.password);
            // this.fbAuth.login(this.signup.email, this.signup.password);
            this.navCtrl.push(TabsPage);
        }
    };
<<<<<<< HEAD
    SignupPage = __decorate([
        Component({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\signup\signup.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Signup</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-page">\n\n\n\n	<div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n\n	</div>\n\n\n\n	<form #signupForm="ngForm" novalidate>\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Email</ion-label>\n\n				<ion-input [(ngModel)]="signup.email" name="email" type="email" #email="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n\n				Email is required\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Password</ion-label>\n\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n				Password is required\n\n			</p>\n\n		</ion-list>\n\n\n\n		<div padding>\n\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n\n		</div>\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [NavController, FirebaseAuth])
    ], SignupPage);
=======
>>>>>>> 9b754ae5750101e2430dc8b9a2fb5ac31f8dece2
    return SignupPage;
}());
export { SignupPage };



