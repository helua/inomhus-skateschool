import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  title = 'Kontakt | INOMHUS Skate School';
  description: MetaDefinition = {name: 'description', content: 'Skontaktuj się z INOMHUS Skate School, aby umówić się na swoje zajęcia nauki jazdy na deskorolce! Spróbuj swoich sił w tym sporcie w Trójmieście i okolicach!'};

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.description);
  }
}
