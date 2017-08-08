import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links = [
    {
      name: "Youtube",
      url: "https://www.youtube.com"
    },
    {
      name: "Google",
      url: "https://www.google.com"
    },
    {
      name: "Facebook",
      url: "https://www.youtube.com"
    }
  ];
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
