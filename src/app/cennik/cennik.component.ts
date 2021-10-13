import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-cennik',
  templateUrl: './cennik.component.html',
  styleUrls: ['./cennik.component.scss']
})
export class CennikComponent implements OnInit {


  title = 'Cennik | INOMHUS Skate School';
  description: MetaDefinition = {name: 'description', content: 'Sprawdź aktualny cennik zajęć w INOMHUS Skate School i umów się na swoje pierwsze zajęcia już dziś. Prowadzimy zajęcia w Trójmieście oraz jego okolicach.'};

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.description);
  }

}
