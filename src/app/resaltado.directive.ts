import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
    console.log(el.nativeElement);

  }

  ngOnInit() {
    var element = this.el.nativeElement;
    element.style.background = 'green';
    element.style.padding = '20px';
    element.style.marginTop = '15px';
    element.style.color = 'white';
    console.log(element.innerHTML);
    element.innerText = element.innerText
      .replace('contacto', '')
      .toUpperCase();
  }
}
