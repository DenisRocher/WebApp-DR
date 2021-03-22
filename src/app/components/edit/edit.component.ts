import { Component, OnInit } from '@angular/core';
import { Story } from "../../models/story";
import { StoryService } from '../../services/story.service';
import { UploadService } from '../../services/upload.service';

import { UrlGlobal } from '../../services/global';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Category } from '../../models/category';

@Component({
  selector: 'app-stories',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass'],
  providers: [StoryService, UploadService]
})
export class EditComponent implements OnInit {

  constructor(
    private _storyService: StoryService,
    
    private _router: Router,
    private _route: ActivatedRoute
  ) { 


  }

  ngOnInit(): void {
  }

}
