import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  constructor(private http: HttpClient) { }

  fetchFixtures(): Observable<any> {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?team=40&next=5';
    const options = {
      headers: {
        'X-RapidAPI-Key': 'faccfe2ccfmshc38e5dc8fe4e094p12d633jsn6193e9f92eff',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };

    return this.http.get(url, options).pipe(
      map((response: any) => {
        return response.response.map((fixture: any) => {
          return {
            id: fixture.fixture.id,
            league: fixture.league.name,
            homeTeam: fixture.teams.home.name,
            awayTeam: fixture.teams.away.name,
            homeTeamLogo: fixture.teams.home.logo,
            awayTeamLogo: fixture.teams.away.logo
          };
        });
      })
    );
  }
}
