import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'INOMHUS-SKATESCHOOL';
  constructor(private metaService: Meta){}

ngOnInit(){
  this.metaService.addTags([
    {name: 'robots', content: 'index, follow'}
  ]);
}
}

