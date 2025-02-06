import { Component, OnInit } from '@angular/core';
import { Result } from '../shared/result.model';
import { ResultsService } from '../results.service';
import { Fixture } from '../shared/fixture.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results!: Fixture[];

  constructor(private resultsService: ResultsService) {}

  getFixtures(){
    this.resultsService.fetchResults().subscribe((fixture) => {
      this.results = fixture;
    })
  }

  ngOnInit(): void {
    this.getFixtures()
  }

  // fetchPastResults() {
  //   this.resultsService.fetchResults()
  //   .subscribe(
  //     (matches: any[]) => {
  //       this.results = matches.map(match => {
  //         return new Result(
  //           match.homeTeam,
  //           match.homeTeamScore,
  //           match.awayTeam,
  //           match.awayTeamScore,
  //           match.league
  //         )
  //       })
  //       console.log(this.results)
  //     },
  //     error => {
  //       console.log('Error fetching results:', error);
  //     }
  //   )
  // }

}
