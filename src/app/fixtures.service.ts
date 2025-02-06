import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fixture } from './shared/fixture.model';

@Injectable({
  providedIn: 'root',
})
export class FixturesService {
  constructor(private http: HttpClient) {}

  private apiUrl =
    'https://api-football-v1.p.rapidapi.com/v3/fixtures?team=40&next=5';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'faccfe2ccfmshc38e5dc8fe4e094p12d633jsn6193e9f92eff',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  });

  fetchUpcoming(): Observable<Fixture[]> {
    return this.http
      .get<any>(this.apiUrl, { headers: this.headers })
      .pipe(map((response) => response['response'] as Fixture[]));
  }
}
