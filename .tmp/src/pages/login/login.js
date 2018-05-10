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
    return LoginPage;
}());
export { LoginPage };



