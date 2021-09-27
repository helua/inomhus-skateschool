import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // @ViewChild('stickyMenu') menuElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      const menu = document.getElementById("nav-main") as HTMLElement;
      const cont = document.getElementById("nav-main-container") as HTMLElement;
      const img = menu.getElementsByTagName('img') as HTMLCollectionOf<HTMLElement>;
      const logo = document.getElementById('logo') as HTMLElement;


      if(windowScroll >= 160){
        cont.style.padding = "0% 0";
        console.log(img);
        for(let i=0; i >= img.length; i++){
          img[i].style.transform = "scale(.5)";
        }
        logo.style.transform = "scale(.8)";
      } else {
        cont.style.padding = "2% 0";
        for(let i=0; i >= img.length; i++){
          img[i].style.transform = "scale(1)";
        }
        logo.style.transform = "scale(1)";


      }
    }

}
