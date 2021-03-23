import { Component, OnInit } from '@angular/core';
import { Story } from "../../models/story";
import { StoryService } from '../../services/story.service';
import { UploadService } from '../../services/upload.service';
import { UrlGlobal } from '../../services/global';

import { Category } from '../../models/category';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
  providers: [StoryService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: String;
  public story: Story;
  public category: Category;
  public ruta: any;
  public clickFile: boolean;
  public status: string;
  public filesToUpload: Array<File>
  public msjError: string;
  public idStory: string;
  public url: string;

  constructor(
    private _storyService: StoryService,
    private _upladService: UploadService
      )
    {
    this.title = 'Crear relato';
    this.story = new Story('', '', '', '', 2010, '','');
    this.category = new Category('', '', -1);
    this.url = '';
    this.ruta = '';
    this.clickFile = false;
    this.status = '';
    this.filesToUpload = [];
    this.msjError = '';
    this.idStory = '';
   }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    //console.log(this.story);
    // Se guardan los datos del relato
    this._storyService.saveStory(this.story).subscribe(
      response => {
        //console.log(response);
        if (response.story) {
          //Subir la Imagen
          this.idStory = response.story._id;
          this._upladService
            .makeFileRequest(
              UrlGlobal.url + 'story/upload-image/' + response.story._id,
              [],
              this.filesToUpload,
              'image'
            )
            .then((result: any) => {
              this.status = 'OK';
              form.reset();
              //console.log(result);
            })
            .catch((error: any) => {
              this.status = 'KO';
              this.msjError = error.message;
              //console.log(this.msjError)
              //console.log(error);
            });

        }
        else
          this.status = 'KO';
      },
      error => {
        console.log(<any>error)
      }
    );
  }

  filePath(fileInput: any) {
    this.clickFile = true;
    this.ruta = fileInput;
  }

  fileUpload(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
