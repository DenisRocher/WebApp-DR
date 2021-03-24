import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("logo").click(function () {
      $("header").css("background", "green")
        .css("heigth", "50px");

    })
  }

}
