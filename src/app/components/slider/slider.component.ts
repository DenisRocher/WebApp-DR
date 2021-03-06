import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {
  @Input() anchoFotos: number | undefined;
  @Input('paginas') pager: boolean | undefined;
  @Output() publicAutor = new EventEmitter();

  public autor: any;

  constructor() {
    this.autor = {
      name: 'Denis Rocher',
      website: 'https://github.com/DenisRocher',
      mail: 'denis.rocher@gmail.com'
    }
  }

  ngOnInit(): void {
      $('.galeria').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: this.pager,
        slideWidth: this.anchoFotos
    });
  }

  publishCredit(event: any) {
    this.publicAutor.emit(this.autor);
  }
}
