import { Component, OnInit } from '@angular/core';
import { Story } from "../../models/story";
import { StoryService } from '../../services/story.service';
import { UploadService } from '../../services/upload.service';

import { UrlGlobal } from '../../services/global';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Category } from '../../models/category';

@Component({
  selector: 'app-stories',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.sass'],
  providers: [StoryService, UploadService]
})
export class EditComponent implements OnInit {

  public title: String;
  public story: Story;
  public category: Category;
  public ruta: any;
  public clickFile: boolean;
  public status: string;
  public filesToUpload: Array<File>
  public msjError: string;
  public idStory: string;
  public url: String;

  constructor(
    private _storyService: StoryService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
      this.title = 'Editar relato';
      this.url = UrlGlobal.url;
      this.story = new Story('', '', '', '', 2010, '','');
      this.category = new Category('','',-1);
      this.ruta = '';
      this.clickFile = false;
      this.status = '';
      this.filesToUpload = [];
      this.msjError = '';
      this.idStory = '';
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.idStory = params.id;
    });
    this.getStory(this.idStory);
    this.ruta = this.url+'story/getimage/'+this.story.image;
  }

  getStory(id: String) {
    // Se guardan los datos del relato
    this._storyService.getStory(id).subscribe(
      response => {
        if (response.story) {
          this.story = response.story;
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

  onSubmit(form: any) {
  }

  filePath(fileInput: any) {
    console.log(fileInput);
    console.log(typeof (fileInput));

    this.clickFile = true;
    this.ruta = fileInput;
    console.log(this.ruta);
  }

  fileUpload(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
    console.log(this.story.image);
  }
}
