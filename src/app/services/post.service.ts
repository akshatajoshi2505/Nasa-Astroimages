import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments';
import { Observable } from 'rxjs';

export interface IPost {
  title: string;
  body: string;
  id: number;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url: string = 'https://epic.gsfc.nasa.gov/api/natural/date/';

  constructor(private http: HttpClient) {}

  getPost(date: string): Observable<any> {
    console.log("print date in service");
    console.log(date);
    const imageurl = `${this.url}${date}?api_key=${environment.apiKey}`;
    return this.http.get<any>(imageurl);
  }
}
