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
      const logo = document.getElementById('logo') as HTMLElement;


      if(windowScroll >= 160){
        menu.style.top = "0";
        cont.style.height = "100px";
        logo.style.transform = "scale(.8)";
      } else {
        menu.style.top = "2%";
        cont.style.height = "calc(4% + 100px)";
        logo.style.transform = "scale(1)";


      }
    }

}
