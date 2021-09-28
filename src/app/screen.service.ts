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


      if(this.scrWidth > 900){
        this.isBigScreen = true;
      }
      else{
        this.isBigScreen = false;
      }
    }
}
