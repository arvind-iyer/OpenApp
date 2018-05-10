var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
// declare var google: any;
var MapPage = (function () {
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
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.js.map