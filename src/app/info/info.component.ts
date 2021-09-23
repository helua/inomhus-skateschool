import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  title = 'INOMHUS Skate School';
  keywords: MetaDefinition = {name: 'keywords', content: 'skate, deskorolka'};
  description: MetaDefinition = {name: 'description', content: 'Strona szkoły jazdy na deskorolce dla skateów'};

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);
  }
}