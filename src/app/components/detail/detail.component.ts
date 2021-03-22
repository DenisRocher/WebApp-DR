import { Component, OnInit } from '@angular/core';
import { Story } from "../../models/story";
import { StoryService } from '../../services/story.service';
import { UrlGlobal } from '../../services/global';

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
    private _storyService: StoryService
  ) {
    this.id = '';
    this.story = new Story('', '', '', '', 2010, '','');
    this.url = UrlGlobal.url;
  }

  ngOnInit(): void {
  }

  gestStory(id: String) {
    console.log(id);
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
}

