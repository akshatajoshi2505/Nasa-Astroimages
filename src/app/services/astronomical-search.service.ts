import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AstronomicalSearchService {
  private baseUrl = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) {}

  searchAstronomicalImages(query: string, yearStart: number, yearEnd: number): Observable<any> {
    let params = new HttpParams()
      .set('q', query)
      .set('media_type', 'image')
      .set('year_start', yearStart.toString())
      .set('year_end', yearEnd.toString());

    return this.http.get(this.baseUrl, { params });
  }
}
