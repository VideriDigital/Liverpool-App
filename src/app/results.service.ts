import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Fixture } from './shared/fixture.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private apiUrl = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?team=40&last=5';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'faccfe2ccfmshc38e5dc8fe4e094p12d633jsn6193e9f92eff',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  fetchResults(): Observable<Fixture[]> {
   return this.http.get<any>(this.apiUrl, {headers: this.headers}).pipe(
    map((response) => response['response'] as Fixture[])
   )
  }
  
}
