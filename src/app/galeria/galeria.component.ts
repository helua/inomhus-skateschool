import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { InstaService } from '../insta.service';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit, AfterViewChecked {

  title = 'Galeria | INOMHUS Skate School';
  keywords: MetaDefinition = {name: 'keywords', content: 'jakieś keywords'};
  description: MetaDefinition = {name: 'description', content: 'jakiś opis'};

  instagramToken: any;
  instagramString: string ='IGQVJYWUpaRHJvV0VpWEJRRFBGNVlOS0Eycm44SXNuXzRLdGVSN1BqcnQwR3cxVktfS29Ra3RpWWlSWmxLMHJpaFdvZAEZApN3hsV1NnZA1pVeWx3RjU3ZAUhvam52ZAFhCMEJUVDExYjJ3';
  constructor(private titleService: Title, private metaService: Meta, private insta: InstaService, private screen: ScreenService){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);
    this.getToken();
    this.getFeed();
    this.screen.getScreenSize();


  }

  getToken(){
    this.insta.refreshToken().subscribe(t => {
      this.instagramToken = t;
      this.instagramString = this.instagramToken.Token;
    });


  }
  getFeed(){
    var Instafeed = require("../../scripts/instafeed.min.js");
    var feed = new Instafeed({
      accessToken: this.instagramString
      });
      feed.run();
  }


  ngAfterViewChecked(){
    const a = Array.from(document.getElementById('instafeed')?.getElementsByTagName('a') as HTMLCollectionOf<HTMLElement>);
    const img = Array.from(document.getElementById('instafeed')?.getElementsByTagName('img') as HTMLCollectionOf<HTMLElement>);
    if(this.screen.isBigScreen){
      let i;
      for (i = 0; i < a.length; i++) {
      a[i].style.width = "300px"
      a[i].style.height = "300px"
      a[i].style.display = "block"
      a[i].style.margin = "1.5%"
      }
      for (i = 0; i < a.length; i++) {
      img[i].style.width = "300px"
      img[i].style.display = "block"
      }
    }else{
      let i;
      for (i = 0; i < a.length; i++) {
      a[i].style.width = "230px"
      a[i].style.height = "230px"
      a[i].style.display = "block"
      a[i].style.margin = "1%"
      }
      for (i = 0; i < a.length; i++) {
      img[i].style.width = "230px"
      img[i].style.display = "block"
      }

    }

  }

}
