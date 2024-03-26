import { Component, OnInit } from '@angular/core';
import { Result } from '../shared/result.model';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: Result[] = [];

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.fetchPastResults()
  }

  fetchPastResults() {
    this.resultsService.fetchResults()
    .subscribe(
      (matches: any[]) => {
        this.results = matches.map(match => {
          return new Result(
            match.homeTeam,
            match.homeTeamScore,
            match.awayTeam,
            match.awayTeamScore
          )
        })
      },
      error => {
        console.log('Error fetching results:', error);
      }
    )
  }

}
