import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links = [];
  label:string = "";
  url:string = "";

  constructor() { }

  ngOnInit() {
  }

  newLink() {
    console.log("Adding Link");

    const linkToAdd = {
      name: this.label,
      url: this.url
    }
    this.links.push(linkToAdd);
    console.log(this.links);
    this.label = "";
    this.url = "";
  }

}
