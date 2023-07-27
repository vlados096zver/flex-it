import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor( private http: HttpClient) { }

  public createUser(data:any):Observable<any>{
    return this.http.post('https://gorest.co.in/public/v2/users',data, {
      headers: {
        "Authorization": "Bearer 8fb49e6bedb88d881f7d7e2db15df40544c741467ff4dd6fd52130efabe6a903"
      }
    })
  }

  public getTodos():Observable<any>{
    return this.http.get('https://gorest.co.in/public/v2/todos');
  }

  public getBlogPost():Observable<any>{
    return this.http.get('https://gorest.co.in/public/v2/posts');
  }


}
