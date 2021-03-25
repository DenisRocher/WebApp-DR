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

  constructor(
    private _globalFunctionService: GlobalfunctionService
  )
  {}

  ngOnInit(): void {
    this._globalFunctionService.scrollTop();
  }
}
