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
    return SignupPage;
}());
export { SignupPage };



