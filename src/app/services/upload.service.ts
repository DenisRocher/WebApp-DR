import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../models/story';
import { UrlGlobal } from './global';

@Injectable()
export class UploadService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = UrlGlobal.url;
  }

  makeFileRequest(
    url: string,
    params: Array<String>,
    files: Array<File>,
    name: string)
  {
    return new Promise(function (resolve, reject) {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      for (let index = 0; index < files.length; index++) {
        formData.append(name, files[index], files[index].name);
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              resolve(JSON.parse(xhr.response));
            }
            else {
              reject(JSON.parse(xhr.response));
            }
          }
        }
        xhr.open('POST', url, true);
        xhr.send(formData);
      }
    });
    
  }
}