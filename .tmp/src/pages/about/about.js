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
    return AboutPage;
}());
export { AboutPage };



