import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  scrWidth: any;
  scrHeight: any;
  isBigScreen: boolean = true;

  constructor() { }

  @HostListener('window:resize', ['$event'])
    getScreenSize() {
      this.scrWidth = window.innerWidth;
      this.scrHeight = window.innerHeight;
      console.log('szerokosc ekranu: ' + this.scrWidth + ' wysokość ekranu: ' + this.scrHeight);


      if(this.scrWidth > 900){
        this.isBigScreen = true;
        console.log('ekran duży: ' + this.isBigScreen);
      }
      else{
        this.isBigScreen = false;
        console.log('ekran duży: ' +  this.isBigScreen);
      }
    }
}
