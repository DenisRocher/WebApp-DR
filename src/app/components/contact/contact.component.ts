import { Component, OnInit, ViewChild } from '@angular/core';
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
  public autor: any;
  public objectKeys = Object.keys;

  @ViewChild('textosContacto', {static:true}) textos: any;


  constructor(
    private _globalFunctionService: GlobalfunctionService
  )
  {
    this.widthSlider = 800;
    this.paginas = true;
    this.widthToSlider = this.widthSlider;
    this.autor = [];
  }

  ngOnInit(): void {
    var opcion_clasica = document.querySelector('#textoContacto')!.innerHTML;
    //console.log(this.textos);
    //console.log(this.textos.nativeElement.textContent);
    //this.textos.nativeElement.textContent = 'Nuevo texto de la consulta';
    this._globalFunctionService.scrollTop();
  }

  cargarSlider(): void{
    this.paginas = false;
    this.widthToSlider = this.widthSlider;
  }

  resetSlider(event:any){
    if(event.keyCode !== 13 ){
      this.widthToSlider = null;
    }
  }

  getAutor(event: any): void{
    this.autor = event;
  }
}
