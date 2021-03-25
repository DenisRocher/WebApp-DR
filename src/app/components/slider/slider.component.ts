import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {
  @Input() anchoFotos: number;
  
  constructor() { }

  ngOnInit(): void {
      $('.galeria').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: this.anchoFotos
    });
  }

}
