import { Component, OnInit } from '@angular/core';
import { Story } from "../../models/story";
import { StoryService } from '../../services/story.service';
import { UploadService } from '../../services/upload.service';
import { GlobalfunctionService } from '../../services/globalfunction.service'

import { UrlGlobal } from '../../services/global';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Category } from '../../models/category';

@Component({
  selector: 'app-stories',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.sass'],
  providers: [StoryService, UploadService, GlobalfunctionService]
})
export class EditComponent implements OnInit {

  public title: String;
  public submitButtonName: String;
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
    private _globalFunctionService: GlobalfunctionService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = 'Editar relato';
    this.submitButtonName = 'Guardar'
    this.url = UrlGlobal.url;
    this.story = new Story('', '', '', '', 2010, '', '');
    this.category = new Category('', '', -1);
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
    this._globalFunctionService.scrollTop();
  }

  getStory(id: String) {
    // Se guardan los datos del relato
    this._storyService.getStory(id).subscribe(
      response => {
        if (response.story) {
          this.story = response.story;
          this.ruta = this.story.image;
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

  onSubmit(form: any) {
    this._storyService.updateStory(this.story).subscribe(
      response => {
        //console.log(response);
        if (response.story) {
          //Subir la Imagen
          this.idStory = response.story._id;
          if (this.filesToUpload.length >= 1) {
            this._uploadService
              .makeFileRequest(
                UrlGlobal.url + 'story/upload-image/' + response.story._id,
                [],
                this.filesToUpload,
                'image'
              )
              .then((result: any) => {
                this.status = 'OK';
                //console.log(result);
              })
              .catch((error: any) => {
                this.status = 'KO';
                this.msjError = error.message;
                //console.log(this.msjError)
                //console.log(error);
              });
          }
          else {
            this.status = 'OK';
          }
        }
        else
          this.status = 'KO';
      },
      error => {
        console.log(<any>error)
      }
    );
    this._globalFunctionService.scrollTop();
  }

  fileUpload(fileInput: any) {
    //console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);
    this.clickFile = true;
    this.ruta = this.filesToUpload[0].name;
  }
}