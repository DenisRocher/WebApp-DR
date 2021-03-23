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
  public submitButtonName: String;
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
    private _uploadService: UploadService
      )
    {
    this.title = 'Crear relato';
    this.submitButtonName = 'Crear';
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
          this._uploadService
            .makeFileRequest(
              UrlGlobal.url + 'story/upload-image/' + response.story._id,
              [],
              this.filesToUpload,
              'image'
            )
            .then((result: any) => {
              this.status = 'OK';
              this.url = '';
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
    this.scrollTop();
  }

  fileUpload(fileInput: any) {
    //console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);
    this.clickFile = true;
    this.ruta = this.filesToUpload[0].name;
  }

  scrollTop(){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
