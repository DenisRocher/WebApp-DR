import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../models/story';
import { UrlGlobal } from './global';

@Injectable()
export class StoryService{
  public url: string;
  constructor(
    private _http: HttpClient

  ) {
    this.url = UrlGlobal.url;
  }

  testService() {
    return 'Test Servicio Relato OK'
  }
}


