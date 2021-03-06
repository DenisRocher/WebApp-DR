import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalfunctionService {

  constructor() { }

  scrollTop() {
  let scrollToTop = window.setInterval(() => {
    let pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 20); // how far to scroll on each step
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 16);
  }
}
