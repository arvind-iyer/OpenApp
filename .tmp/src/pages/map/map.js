import { __decorate } from "tslib";
import { __metadata } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
// declare var google: any;
var MapPage = /*@__PURE__*/ (function () {
    function MapPage(platform) {
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        // this.confData.getMap().subscribe((mapData: any) => {
        //   let mapEle = this.mapElement.nativeElement;
        //   let map = new google.maps.Map(mapEle, {
        //     center: mapData.find((d: any) => d.center),
        //     zoom: 16
        //   });
        //   mapData.forEach((markerData: any) => {
        //     let infoWindow = new google.maps.InfoWindow({
        //       content: `<h5>${markerData.name}</h5>`
        //     });
        //     let marker = new google.maps.Marker({
        //       position: markerData,
        //       map: map,
        //       title: markerData.name
        //     });
        //     marker.addListener('click', () => {
        //       infoWindow.open(map, marker);
        //     });
        //   });
        //   google.maps.event.addListenerOnce(map, 'idle', () => {
        //     mapEle.classList.add('show-map');
        //   });
        // });
    };
<<<<<<< HEAD
    __decorate([
        ViewChild('mapCanvas'),
        __metadata("design:type", ElementRef)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Component({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\map\map.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Map</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="map-page">\n\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pranay Sood\Desktop\OpenApp-hybrid\OpenApp\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [Platform])
    ], MapPage);
=======
>>>>>>> 9b754ae5750101e2430dc8b9a2fb5ac31f8dece2
    return MapPage;
}());
export { MapPage };



