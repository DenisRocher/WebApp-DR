import { Component, OnInit } from '@angular/core';
import { Story } from "../../models/story";
import { StoryService } from '../../services/story.service';
import { GlobalfunctionService } from '../../services/globalfunction.service'
import { UrlGlobal } from '../../services/global';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.sass'],
  providers: [StoryService, GlobalfunctionService]
})
export class StoriesComponent implements OnInit {
  public stories: Story[];
  public filterCategory: String;
  public url: String;

  constructor(
    private _storyService: StoryService,
    private _globalFunctionService: GlobalfunctionService
  ) {
    this.filterCategory = '';
    this.stories = [new Story('', '', '', '', 2010, '','')];
    this.url = UrlGlobal.url;
  }

  ngOnInit(): void {
    this.gestStories('');
    this._globalFunctionService.scrollTop();
  }

  gestStories(filterCategory: String) {
    console.log(filterCategory);
    // Se guardan los datos del relato
    this._storyService.getStories(filterCategory).subscribe(
      response => {
        if (response.stories) {
          //console.log(response);
          this.stories = response.stories;
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

}
