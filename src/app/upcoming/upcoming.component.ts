import { Component, OnInit } from '@angular/core';
import { FixturesService } from '../fixtures.service';
import { Fixture } from '../shared/fixture.model';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  upcomingMatches: Fixture[] = [];

  constructor(private fixturesService: FixturesService) { }

  ngOnInit(): void {
    this.fetchUpcomingMatches();
  }

  fetchUpcomingMatches() {
    this.fixturesService.fetchUpcoming().subscribe(
      (response) => {
        this.upcomingMatches = response;
      }
    )
  }
}
