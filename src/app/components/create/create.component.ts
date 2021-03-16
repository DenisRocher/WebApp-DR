import { Component, OnInit } from '@angular/core';
import { Story } from "../../models/story";
import { StoryService } from '../../services/story.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
  providers: [StoryService]
})
export class CreateComponent implements OnInit {
  public title: String;
  public story: Story;

  constructor(
    private _storyService: StoryService
      )
    {
    this.title = 'Crear relato';
    this.story = new Story('','', '', '', 2000, '');
   }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.story);
    
  }

}
