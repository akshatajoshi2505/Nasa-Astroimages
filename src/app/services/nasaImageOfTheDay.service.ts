import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root'
})
export class NasaImageOfTheDayService {
  private apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
