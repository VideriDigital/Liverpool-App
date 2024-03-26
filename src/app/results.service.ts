import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { 
    
  }

  fetchResults(): Observable<any> {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?team=40&last=5';
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'faccfe2ccfmshc38e5dc8fe4e094p12d633jsn6193e9f92eff',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  }

  return this.http.get(url,options).pipe(
    map((response: any) => {
      return response.response.map((fixture: any) => {
        return {
          id: fixture.fixture.id,
          homeTeam: fixture.teams.home.name,
          awayTeam: fixture.teams.away.name,
          homeTeamScore: fixture.goals.home,
          awayTeamScore: fixture.goals.away
        }
      })
    })
  )
}
  
}
