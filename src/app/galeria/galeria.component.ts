import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { InstaService } from '../insta.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit, AfterViewChecked {

  title = 'Galeria | INOMHUS Skate School';
  keywords: MetaDefinition = {name: 'keywords', content: 'jakieś keywords'};
  description: MetaDefinition = {name: 'description', content: 'jakiś opis'};
  InstagramToken: string = 'IGQVJYWUpaRHJvV0VpWEJRRFBGNVlOS0Eycm44SXNuXzRLdGVSN1BqcnQwR3cxVktfS29Ra3RpWWlSWmxLMHJpaFdvZAEZApN3hsV1NnZA1pVeWx3RjU3ZAUhvam52ZAFhCMEJUVDExYjJ3';
  script: string ="../../scripts/instafeed.min.js";
  // script: string ="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js";
  tokenUrl: string = "https://ig.instant-tokens.com/users/f86040ae-5a59-4500-bc2e-1a636d0bfebe/instagram/17841408808851188/token.js?userSecret=vmdqrei0g2bwj2gwms1rn";

  constructor(private titleService: Title, private metaService: Meta, private insta: InstaService){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);
    // this.InstagramToken = this.insta.getPosts();
    this.getFeed();


  }

  getToken(){
    let scripts = document.getElementsByTagName('script');
    let script = scripts[0];
    let url_string = "https://ig.instant-tokens.com/users/f86040ae-5a59-4500-bc2e-1a636d0bfebe/instagram/17841408808851188/token.js";
    let userSecret = "vmdqrei0g2bwj2gwms1rn";
    let url_final = url_string+"?userSecret="+userSecret;
    console.log(url_final);
    script.src = url_final;
  }
  getFeed(){
    var Instafeed = require("../../scripts/instafeed.min.js");
    var feed = new Instafeed({
      accessToken: 'IGQVJYWUpaRHJvV0VpWEJRRFBGNVlOS0Eycm44SXNuXzRLdGVSN1BqcnQwR3cxVktfS29Ra3RpWWlSWmxLMHJpaFdvZAEZApN3hsV1NnZA1pVeWx3RjU3ZAUhvam52ZAFhCMEJUVDExYjJ3'
      });
      feed.run();
  }

  ngAfterViewChecked(){
    const a = Array.from(document.getElementById('instafeed')?.getElementsByTagName('a') as HTMLCollectionOf<HTMLElement>);
    const img = Array.from(document.getElementById('instafeed')?.getElementsByTagName('img') as HTMLCollectionOf<HTMLElement>);
    console.log(a);
    let i;
    for (i = 0; i < a.length; i++) {
    a[i].style.width = "300px"
    a[i].style.height = "300px"
    a[i].style.display = "block"
    a[i].style.margin = "1.5%"


    }
    for (i = 0; i < a.length; i++) {
    img[i].style.width = "300px"
    // img[i].style.height = "300px"
    img[i].style.display = "block"


    }
  }

}
