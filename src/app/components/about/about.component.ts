import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  public title: String;
  public subtitle: String;
  public email: String;
  public web: String;

  constructor() {
    this.title = 'Denis Rocher';
    this.subtitle = 'Fotógrafo callejero';
    this.email = 'denis.rocher@gmail.com';
    this.web = 'https://github.com/DenisRocher';


  }

  ngOnInit(): void {
  }

}
