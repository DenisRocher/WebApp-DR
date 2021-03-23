import { Component, OnInit } from '@angular/core';
import { Story } from "../../models/story";
import { StoryService } from '../../services/story.service';
import { GlobalfunctionService } from '../../services/globalfunction.service'

import { UrlGlobal } from '../../services/global';
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-stories',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: [StoryService, GlobalfunctionService]
})
export class DetailComponent implements OnInit {
  public story: Story;
  public url: String;
  public id: String;
  public confirm: boolean;

  constructor(
    private _storyService: StoryService,
    private _globalFunctionService: GlobalfunctionService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.id = '';
    this.story = new Story('', '', '', '', 2010, '','');
    this.url = UrlGlobal.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getStory(this.id);
    this._globalFunctionService.scrollTop();
  }

  getStory(id: String) {
    //console.log(id);
    // Se guardan los datos del relato
    this._storyService.getStory(id).subscribe(
      response => {
        if (response.story) {
          //console.log(response);
          this.story = response.story;
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

  setConfirm(confirm: any) {
    this.confirm = confirm;
    console.log(this.story.image);
  }

  deleteStory(id: String) {
    //console.log(id);
    // Se guardan los datos del relato
    this._storyService.deleteStory(id).subscribe(
      response => {
        if (response.story) {
          //Si existe se borra la imagen
          if (this.story.image != '') {
            this._storyService.removeUpload(this.story.image).subscribe(
            )
          }
          //console.log(response);
          this._router.navigate(['/relatos']);
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }
}

