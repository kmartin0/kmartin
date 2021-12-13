import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  selectedIndex = 2;

  imageUrls = [
    'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/parcel_organizer_web_login.png',
    'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/parcel_organizer_web_register.png',
    'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/parcel_organizer_android_login.png',
    'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/parcel_organizer_android_register.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.selectedIndex++;
  }

  prev() {
    this.selectedIndex--;
  }



}
