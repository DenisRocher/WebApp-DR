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
  public widthToSlider: any;
  public paginas: boolean;

  constructor(
    private _globalFunctionService: GlobalfunctionService
  )
  {
    this.widthSlider = 800;
    this.paginas = true;
    this.widthToSlider = this.widthSlider;
  }

  ngOnInit(): void {
    this._globalFunctionService.scrollTop();
  }

  reDimensionarSlider(): void{
    this.vaciarSlider();
    this.cargarSlider();
  }

  cargarSlider(): void{
    this.paginas = false;
    this.widthToSlider = this.widthSlider;
  }

  vaciarSlider(): void{
    this.widthSlider = 0;
    this.widthToSlider = null;
  }

  getAutor(event:any): void{
    console.log(event);
  }
}
