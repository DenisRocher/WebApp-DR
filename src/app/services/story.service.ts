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

  saveStory(story:Story): Observable<any> {
    let params = JSON.stringify(story);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.post(this.url + 'story/save', params, {headers: headers});
  }

  getStories(category:String): Observable<any> {
    let params = category;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.get(this.url + 'story/getStories/'+ params, {headers: headers});
  }

  getStory(id:String): Observable<any> {
    let params = id;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.get(this.url + 'story/getStory/'+ params, {headers: headers});
  }

  deleteStory(id:String): Observable<any> {
    let params = id;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.delete(this.url + 'story/delete/'+ params, {headers: headers});
  }

  removeUpload(image:String): Observable<any> {
    let params = image;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.delete(this.url + 'story/delete-image/'+ params, {headers: headers});
  }
  
  updateStory(story:Story): Observable<any> {
    let params = JSON.stringify(story);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.put(this.url + 'story/update/'+story._id, params, {headers: headers});
  }
}


