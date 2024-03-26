import { Component, OnInit } from '@angular/core';
import { FixturesService } from '../fixtures.service';
import { UpcomingMatches } from '../shared/upcoming-match.model';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  upcomingMatches: UpcomingMatches[] = [];

  constructor(private fixturesService: FixturesService) { }

  ngOnInit(): void {
    this.fetchUpcomingMatches();
  }

  fetchUpcomingMatches() {
    this.fixturesService.fetchFixtures()
    .subscribe(
      (matches: any[]) => {
        this.upcomingMatches = matches.map(match => {
          return new UpcomingMatches(
            match.homeTeam,
            match.awayTeam,
            match.league,
            match.homeTeamLogo,
            match.awayTeamLogo
          );
        });
      },
      error => {
        console.error('Error fetching upcoming matches:', error);
      }
    );
  }
}
