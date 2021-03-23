import { Component, OnInit } from '@angular/core';
import { Story } from "../../models/story";
import { StoryService } from '../../services/story.service';
import { UrlGlobal } from '../../services/global';
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-stories',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: [StoryService]
})
export class DetailComponent implements OnInit {
  public story: Story;
  public url: String;
  public id: String;

  constructor(
    private _storyService: StoryService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.id = '';
    this.story = new Story('', '', '', '', 2010, '','');
    this.url = UrlGlobal.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getStory(this.id);
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

  deleteStory(id: String) {
    //console.log(id);
    // Se guardan los datos del relato
    this._storyService.deleteStory(id).subscribe(
      response => {
        if (response.story) {
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

