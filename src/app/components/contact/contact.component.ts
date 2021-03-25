import { Component, OnInit } from '@angular/core';
import { GlobalfunctionService } from '../../services/globalfunction.service'

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  providers: [GlobalfunctionService]
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public widthToSlider: number;

  constructor(
    private _globalFunctionService: GlobalfunctionService
  )
  {
    this.widthSlider = 0;
    this.widthToSlider = this.widthSlider;
  }

  ngOnInit(): void {
    this._globalFunctionService.scrollTop();
  }

  reDimensionarSlider(): void{
    this.widthToSlider = this.widthSlider;
  }
}
