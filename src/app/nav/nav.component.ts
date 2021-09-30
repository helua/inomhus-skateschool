import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // @ViewChild('stickyMenu') menuElement: ElementRef;

  constructor(private screen: ScreenService) { }

  ngOnInit(): void {
    this.screen.getScreenSize();
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      const menu = document.getElementById("nav-main") as HTMLElement;
      const cont = document.getElementById("nav-main-container") as HTMLElement;
      const img = menu.getElementsByTagName('img') as HTMLCollectionOf<HTMLElement>;
      const text = menu.getElementsByTagName('span') as HTMLCollectionOf<HTMLElement>;

      if(this.screen.scrWidth > 900){
        if(windowScroll >= 160){
          cont.style.padding = "0% 0";
          for(let i = 0; i < img.length; i++){
            img[i].style.height = "100px";
            img[i].style.padding = "10px 7.5px";
          }
          for(let i=0; i < text.length; i++){
            text[i].style.fontSize = "1.13rem";

          }
        } else {
          cont.style.padding = "2% 0";
          for(let i=0; i < img.length; i++){
            img[i].style.height = "120px";
            img[i].style.padding = "0px";
          }
          for(let i=0; i < text.length; i++){
            text[i].style.fontSize = "1.3rem";

          }
        }
      }

    }

}
