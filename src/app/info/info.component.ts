import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  title = 'INOMHUS Skate School';
  description: MetaDefinition = {name: 'description', content: 'INOMHUS Skate School to szkoła nauki jazdy na deskorolce w Trójmieście oraz jego okolicach. Umów się na pierwsze zajęcia na najbliższym skateparku już teraz!'};

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.description);
  }
}
