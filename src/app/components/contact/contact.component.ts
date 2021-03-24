import { Component, OnInit } from '@angular/core';
//declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#logo").click(function (e: any) {
      e.preventDefault();
      $("header").css("background", "green")
        .css("height", "150px");

    });
    $("#logo").dblclick(function (e: any) {
      e.preventDefault();
      $("header").css("background", "rgba(53, 103, 164, 0.8)")
        .css("height", "98px");

    });
  }

}
